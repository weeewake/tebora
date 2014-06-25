//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCProvider.h"

#import <Firebase/Firebase.h>

#import "CCAlert.h"
#import "CCUtils.h"

static CCProvider *g_loggedInProvider = nil;
static NSMutableDictionary *g_userId2ProviderMap = nil;

@interface CCProvider () <CCAlertDelegate>

@property (strong, nonatomic) NSMutableArray *firebaseRefs;
@property (strong, nonatomic) NSMutableDictionary *allAlertsDict;
@property (strong, nonatomic) NSMutableDictionary *queuesAlertsDict;

@property (strong, nonatomic) NSDate *statusExpirationDate;

- (CCProvider *)initWithUserId:(NSString *)uid;

@end

@implementation CCProvider

- (id)initWithUserId:(NSString *)uid {
  self = [super init];
  if (self) {
    self.uid = uid;
    self.allAlertsDict = [@{} mutableCopy];
    self.queuesAlertsDict = [@{} mutableCopy];
    self.firebaseRefs = [@[] mutableCopy];
    [self updateProviderInfo];
  }
  return self;
}

- (void)updateProviderInfo {
  Firebase *providerRef = [CCUtils firebaseForPathComponents:@[@"user", self.uid]];
  [self.firebaseRefs addObject:providerRef];
  [providerRef observeSingleEventOfType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
    NSDictionary *value = snapshot.value;
    if (![value isKindOfClass:[NSNull class]]) {
      [self updateDetails:value[@"details"]];
      [self addAlerts:value[@"channels"]];
    }
    Firebase *detailsRef = [providerRef childByAppendingPath:@"details"];
    [self.firebaseRefs insertObject:detailsRef atIndex:0];
    [detailsRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
      [self updateDetails:snapshot.value];
    }];

    Firebase *channelsRef = [providerRef childByAppendingPath:@"channels"];
    [self.firebaseRefs insertObject:channelsRef atIndex:0];
    [channelsRef observeEventType:FEventTypeChildAdded withBlock:^(FDataSnapshot *snapshot) {
      [self addSingleAlert:snapshot.value];
    }];
    [channelsRef observeEventType:FEventTypeChildRemoved withBlock:^(FDataSnapshot *snapshot) {
      [self removeSingleAlert:snapshot.value];
    }];
  }];
}

- (void)updateDetails:(NSDictionary *)details {
  if ([details isKindOfClass:[NSNull class]]) {
    return;
  }

  BOOL detailsChanged = NO;
  NSString *name = details[@"name"];
  if (![name isEqualToString:self.fullName]) {
    self.fullName = name;
    detailsChanged = YES;
  }
  NSString *shortName = details[@"shortName"];
  if (shortName == nil || [shortName isEqualToString:@""]) {
    shortName = [[self.fullName componentsSeparatedByString:@" "] lastObject];
  }
  if (![shortName isEqualToString:self.shortName]) {
    self.shortName = shortName;
    detailsChanged = YES;
  }
  NSString *phone = details[@"phone"];
  if (![phone isEqualToString:self.phone]) {
    self.phone = phone;
    detailsChanged = YES;
  }
  CCProviderType type = [[self class] providerTypeFromString:details[@"providerType"]];
  if (type != self.type) {
    self.type = type;
    detailsChanged = YES;
  }
  self.displayName =
      [self.shortName stringByAppendingString:(type == CCProviderTypeMD ? @" - MD" : @" - RN")];
  bool isOncall = [details[@"oncall"] boolValue];
  if (isOncall != self.isOnCall) {
    self.oncall = isOncall;
    detailsChanged = YES;
  }
  if ([self updateStatus:details[@"status"]]) {
    detailsChanged = YES;
  }
  if (detailsChanged && [self.delegate respondsToSelector:@selector(providerDetailsChanged:)]) {
    [self.delegate providerDetailsChanged:self];
  }
}

- (BOOL)updateStatus:(NSDictionary *)details {
  BOOL statusChanged = NO;
  if ([details isKindOfClass:[NSNull class]]) {
    return statusChanged;
  }
  CCProviderStatus status = CCProviderStatusUnknown;
  NSString *statusText = [details[@"text"] lowercaseString];
  if ([statusText isEqualToString:@"available"]) {
    status = CCProviderStatusAvailable;
    statusChanged = (self.status != status);
    self.status = status;
    self.statusExpirationDate = nil;
  } else if ([statusText isEqualToString:@"busy"]) {
    NSDate *statusExpirationDate =
        [[NSDate dateWithTimeIntervalSince1970:[details[@"creation_timestamp"] doubleValue]]
            dateByAddingTimeInterval:[details[@"duration"] doubleValue]];
    if ([statusExpirationDate timeIntervalSinceNow] > 0) {
      status = CCProviderStatusBusy;
      statusChanged = ((self.status != status) ||
                       (![self.statusExpirationDate isEqualToDate:statusExpirationDate]));
      self.status = status;
      self.statusExpirationDate = statusExpirationDate;
    } else {
      status = CCProviderStatusAvailable;
      statusChanged = (self.status != status);
      self.status = status;
      self.statusExpirationDate = nil;
    }
  }
  return statusChanged;
}

- (void) addAlerts:(NSDictionary *)channels {
  if ([channels isKindOfClass:[NSNull class]]) {
    return;
  }
  for (NSDictionary *alert in [channels allValues]) {
    [self addSingleAlert:alert];
  }
}

- (void) addSingleAlert:(NSDictionary *)alertDict {
  if ([alertDict isKindOfClass:[NSNull class]]) {
    return;
  }
  NSString *alertId = alertDict[@"id"];
  if ([self.allAlertsDict objectForKey:alertId] ||
      [self.queuesAlertsDict objectForKey:alertId]) {
    return;
  }
  CCAlert *alert = [CCAlert alertWithId:alertId];
  [self.queuesAlertsDict setObject:alert forKey:alertId];
  [alert addDelegate:self];
}

- (void)alertDetailsChanged:(CCAlert *)alert {
  if ([self.queuesAlertsDict objectForKey:alert.alertId]) {
    [self.queuesAlertsDict removeObjectForKey:alert.alertId];
    [self.allAlertsDict setObject:alert forKey:alert.alertId];
    if ([self.delegate respondsToSelector:@selector(provider:alertsAdded:)]) {
      [self.delegate provider:self alertsAdded:@[alert.alertId]];
    }
  } else if ([self.allAlertsDict objectForKey:alert.alertId]) {
    if ([self.delegate respondsToSelector:@selector(provider:alertsChanged:)]) {
      [self.delegate provider:self alertsChanged:@[alert.alertId]];
    }
  }
}

- (void)alertMessagesChanged:(CCAlert *)alert {
  if ([self.allAlertsDict objectForKey:alert.alertId]) {
    if ([self.delegate respondsToSelector:@selector(provider:alertsChanged:)]) {
      [self.delegate provider:self alertsChanged:@[alert.alertId]];
    }
  }
}

- (void) removeSingleAlert:(NSDictionary *)alertDict {
  if ([alertDict isKindOfClass:[NSNull class]]) {
    return;
  }
  NSString *alertId = alertDict[@"id"];
  CCAlert *alert = [self.allAlertsDict objectForKey:alertId];
  if (alert) {
    [alert removeDelegate:self];
    [self.allAlertsDict removeObjectForKey:alertId];
    if ([self.delegate respondsToSelector:@selector(provider:alertsRemoved:)]) {
      [self.delegate provider:self alertsRemoved:@[alertId]];
    }
  } else {
    alert = [self.queuesAlertsDict objectForKey:alertId];
    if (alert) {
      [alert removeDelegate:self];
      [self.queuesAlertsDict removeObjectForKey:alertId];
    }
  }
}

- (NSArray *)alerts {
  return [self.allAlertsDict allValues];
}

- (NSString *)statusTimeRemaining {
  if (self.status == CCProviderStatusBusy) {
    NSTimeInterval timeRemaining = [self.statusExpirationDate timeIntervalSinceNow];
    if (timeRemaining > 0) {
      if (timeRemaining < 3600) {
        int mins = (int)(timeRemaining / 60);
        int secs = (int)(timeRemaining - mins * 60);
        return [NSString stringWithFormat:@"%02d:%02d", mins, secs];
      } else {
        int hrs = (int)(timeRemaining / 3600);
        int mins = (int)((timeRemaining - hrs * 3600) / 60);
        int secs = (int)(timeRemaining - mins * 60 - hrs * 3600);
        return [NSString stringWithFormat:@"%02d:%02d:%02d", hrs, mins, secs];
      }
    }
  }
  return @"";
}

- (void)dealloc {
  for (Firebase *fbRef in self.firebaseRefs) {
    [fbRef removeAllObservers];
  }
  [self.firebaseRefs removeAllObjects];
  [self.queuesAlertsDict removeAllObjects];
  [self.allAlertsDict removeAllObjects];
}

+ (CCProviderType)providerTypeFromString:(NSString *)type {
  type = [type lowercaseString];
  if ([type isEqualToString:@"rn"]) {
    return CCProviderTypeRN;
  } else if ([type isEqualToString:@"md"]) {
      return CCProviderTypeMD;
  }
  return CCProviderTypeUnknown;
}

+ (CCProvider *)providerWithUserId:(NSString *)uid {
  if (g_userId2ProviderMap == nil) {
    g_userId2ProviderMap = [[NSMutableDictionary alloc] init];
  }

  CCProvider *provider = [g_userId2ProviderMap objectForKey:uid];
  if (provider == nil) {
    provider = [[CCProvider alloc] initWithUserId:uid];
    [g_userId2ProviderMap setObject:provider forKey:uid];
  }
  return provider;
}

+ (CCProvider *)loggedInProvider {
  return g_loggedInProvider;
}

+ (void)setLoggedInProvider:(CCProvider *)provider {
  g_loggedInProvider = provider;
}

+ (void)clearAllCachedProviders {
  g_loggedInProvider = nil;
  g_userId2ProviderMap = nil;
  [CCAlert clearAllCachedAlerts];
}

@end
