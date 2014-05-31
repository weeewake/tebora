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

@interface CCProvider () <CCAlertDelegate>

@property (strong, nonatomic) NSMutableArray *firebaseRefs;
@property (strong, nonatomic) NSMutableDictionary *allAlertsDict;
@property (strong, nonatomic) NSMutableDictionary *queuesAlertsDict;

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

  bool detailsChanged = false;
  NSString *name = details[@"name"];
  if (![name isEqualToString:self.fullName]) {
    self.fullName = name;
    detailsChanged = true;
  }
  NSString *shortName = details[@"shortName"];
  if (![shortName isEqualToString:self.shortName]) {
    self.shortName = shortName;
    detailsChanged = true;
  }
  if (self.shortName == nil || [self.shortName isEqualToString:@""]) {
    self.shortName = [[self.fullName componentsSeparatedByString:@" "] lastObject];
    detailsChanged = true;
  }

  NSString *phone = details[@"phone"];
  if (![phone isEqualToString:self.phone]) {
    self.phone = phone;
    detailsChanged = true;
  }
  CCProviderType type = [[self class] providerTypeFromString:details[@"providerType"]];
  if (type != self.type) {
    self.type = type;
    detailsChanged = true;
  }
  self.displayName =
      [self.shortName stringByAppendingString:(type == CCProviderTypeMD ? @" - MD" : @" - RN")];
  if (detailsChanged && [self.delegate respondsToSelector:@selector(providerDetailsChanged:)]) {
    [self.delegate providerDetailsChanged:self];
  }
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
  alert.delegate = self;
}

- (void)alertDetailsChanged:(CCAlert *)alert {
  if ([self.queuesAlertsDict objectForKey:alert.alertId]) {
    [self.queuesAlertsDict removeObjectForKey:alert.alertId];
    [self.allAlertsDict setObject:alert forKey:alert.alertId];
    if ([self.delegate respondsToSelector:@selector(provider:alertsAdded:)]) {
      [self.delegate provider:self alertsAdded:@[alert.alertId]];
    }
  } else {
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
    alert.delegate = nil;
    [self.allAlertsDict removeObjectForKey:alertId];
    if ([self.delegate respondsToSelector:@selector(provider:alertsRemoved:)]) {
      [self.delegate provider:self alertsRemoved:@[alertId]];
    }
  } else {
    alert = [self.queuesAlertsDict objectForKey:alertId];
    if (alert) {
      alert.delegate = nil;
      [self.queuesAlertsDict removeObjectForKey:alertId];
    }
  }
}

- (NSArray *)alerts {
  return [self.allAlertsDict allValues];
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
  static NSMutableDictionary *userId2ProviderMap = nil;
  if (userId2ProviderMap == nil) {
    userId2ProviderMap = [[NSMutableDictionary alloc] init];
  }

  CCProvider *provider = [userId2ProviderMap objectForKey:uid];
  if (provider == nil) {
    provider = [[CCProvider alloc] initWithUserId:uid];
    [userId2ProviderMap setObject:provider forKey:uid];
  }
  return provider;
}

@end
