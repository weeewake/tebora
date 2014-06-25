//
//  CCAlert.m
//  PageMD
//
//  Created by Srinath on 5/31/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlert.h"

#import <Firebase/Firebase.h>

#import "CCUtils.h"

static NSMutableDictionary *g_id2AlertMap = nil;

@implementation CCPatient
@end

@implementation CCAlertMessage
@end

@interface WeakRefHolder : NSObject
@property (weak, nonatomic) id ref;
- (WeakRefHolder *)initWithObject:(id)object;
@end

@implementation WeakRefHolder

- (WeakRefHolder *)initWithObject:(id)object {
  self = [super init];
  if (self) {
    self.ref = object;
  }
  return self;
}

- (BOOL)isEqual:(id)object {
  if ([object isMemberOfClass:[self class]]) {
    WeakRefHolder *holder = (WeakRefHolder *)object;
    return [self.ref isEqual:holder.ref];
  }
  return NO;
}

- (NSUInteger)hash {
  return [self.ref hash];
}

@end

@interface CCAlert ()

@property (strong, nonatomic) Firebase *alertRef;
@property (strong, nonatomic) NSMutableDictionary *messagesDict;
@property (strong, nonatomic) NSMutableSet *delegates;
@property (strong, nonatomic) NSMutableSet *participantsSet;

- (CCAlert *)initWithAlertId:(NSString *)alertId;

@end

@implementation CCAlert

- (CCAlert *)initWithAlertId:(NSString *)alertId {
  self = [super init];
  if (self) {
    self.alertId = alertId;
    self.messagesDict = [[NSMutableDictionary alloc] init];
    self.delegates = [[NSMutableSet alloc] init];
    self.participantsSet = [[NSMutableSet alloc] init];
    [self subscribeToAlertUpdates];
  }
  return self;
}

- (void)subscribeToAlertUpdates {
  self.alertRef = [CCUtils firebaseForPathComponents:@[@"channel", self.alertId]];
  [self.alertRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
      NSDictionary *value = snapshot.value;
      if (![value isKindOfClass:[NSNull class]]) {
        BOOL detailsChanged = [self updateAlertDetailsFromDictionary:value[@"details"]];
        NSString *creatorId = value[@"creator"][@"id"];
        if (![creatorId isEqualToString:self.creator.uid]) {
          self.creator = [CCProvider providerWithUserId:creatorId];
          [self addDelegate:(id<CCAlertDelegate>)self.creator];
          detailsChanged = YES;
        }
        if ([self updatePatientFromDictionary:value[@"patient"]]) {
          detailsChanged = YES;
        }
        if ([self updateParticipantsFromDictionary:value[@"participants"]]) {
          detailsChanged = YES;
        }
        BOOL messagesChanged = [self updateMessagesFromDictionary:value[@"messages"]];

        // Inform the delegates
        for (WeakRefHolder *holder in self.delegates) {
          id delegate = holder.ref;
          if (detailsChanged &&
              [delegate respondsToSelector:@selector(alertDetailsChanged:)]) {
            [delegate alertDetailsChanged:self];
          }
          if (messagesChanged &&
              [delegate respondsToSelector:@selector(alertMessagesChanged:)]) {
            [delegate alertMessagesChanged:self];
          }
        }
      }
  }];
}

- (BOOL)updateAlertDetailsFromDictionary:(NSDictionary *)details {
  BOOL detailsChanged = NO;
  CCAlertType newType = [[self class] alertTypeFromString:details[@"type"]];
  if (newType != self.type) {
    self.type = newType;
    detailsChanged = YES;
  }
  CCAlertStatus newStatus = [[self class] alertStatusFromString:details[@"status"]];
  if (newStatus != self.status) {
    self.status = newStatus;
    detailsChanged = YES;
  }
  NSDate *newCreationDate =
    [NSDate dateWithTimeIntervalSince1970:[details[@"creation_timestamp"] doubleValue]];
  if (![newCreationDate isEqualToDate:self.creationDate]) {
    self.creationDate = newCreationDate;
    detailsChanged = YES;
  }
  NSDate *newLastUpdatedDate =
    [NSDate dateWithTimeIntervalSince1970:[details[@"timestamp"] doubleValue]];
  if (![newLastUpdatedDate isEqualToDate:self.lastUpdatedDate]) {
    self.lastUpdatedDate = newLastUpdatedDate;
    detailsChanged = YES;
  }
  NSString *newDescription = details[@"description"];
  if (![newDescription isEqualToString:self.alertDescription]) {
    self.alertDescription = newDescription;
    detailsChanged = YES;
  }
  return detailsChanged;
}

- (BOOL)updatePatientFromDictionary:(NSDictionary *)patient {
  BOOL detailsChanged = NO;
  NSString *newPatientId = patient[@"id"];
  if (![newPatientId isEqualToString:self.patient.patientId]) {
    self.patient = [[CCPatient alloc] init];
    self.patient.patientId = newPatientId;
    detailsChanged = YES;
  }
  NSString *newMrn = patient[@"mrn"];
  if (![newMrn isEqualToString:self.patient.mrn]) {
    self.patient.mrn = newMrn;
    detailsChanged = YES;
  }
  NSString *newBed = patient[@"bed"];
  if (![newBed isEqualToString:self.patient.bed]) {
    self.patient.bed = newBed;
    detailsChanged = YES;
  }
  NSString *newFullName = patient[@"name"];
  if (![newFullName isEqualToString:self.patient.fullName]) {
    self.patient.fullName = newFullName;
    detailsChanged = YES;
  }
  NSString *newShortName = patient[@"shortName"];
  if (newShortName == nil || [newShortName isEqualToString:@""]) {
    newShortName = [[self.patient.fullName componentsSeparatedByString:@" "] lastObject];
  }
  if (![newShortName isEqualToString:self.patient.shortName]) {
    self.patient.shortName = newShortName;
    detailsChanged = YES;
  }
  return detailsChanged;
}

- (BOOL)updateMessagesFromDictionary:(NSDictionary *)messages {
  BOOL messagesChanged = NO;
  NSMutableDictionary *tempDict = [[NSMutableDictionary alloc] initWithCapacity:[messages count]];
  for (NSString *key in messages) {
    CCAlertMessage *message = [self.messagesDict objectForKey:key];
    if (message == nil) {
      message = [[CCAlertMessage alloc] init];
      message.alert = self;
      NSDictionary *messageDict = [messages objectForKey:key];
      message.message = messageDict[@"message"];
      message.date = [NSDate dateWithTimeIntervalSince1970:[messageDict[@"timestamp"] doubleValue]];
      message.sender = [CCProvider providerWithUserId:messageDict[@"sender"][@"id"]];
      messagesChanged = YES;
    }
    [tempDict setObject:message forKey:key];
    [self.messagesDict removeObjectForKey:key];
  }
  if ([self.messagesDict count] > 0) {
    messagesChanged = YES;
  }
  self.messagesDict = tempDict;
  return messagesChanged;
}

- (BOOL)updateParticipantsFromDictionary:(NSDictionary *)participants {
  BOOL participantsChanged = NO;
  for (NSString *uid in participants) {
    CCProvider *provider = [CCProvider providerWithUserId:uid];
    if (![self.participantsSet member:provider]) {
      [self.participantsSet addObject:provider];
      [self addDelegate:(id<CCAlertDelegate>)provider];
      participantsChanged = YES;
    }
  }
  return participantsChanged;
}

- (void)toggleAlertStatus {
  [[self.alertRef childByAppendingPath:@"details"] updateChildValues:
      @{ @"status" : ((self.status == CCAlertStatusOpen) ? @"RESOLVED" : @"OPEN") }];
  self.status = ((self.status == CCAlertStatusOpen) ? CCAlertStatusResolved : CCAlertStatusOpen);
}

- (void)sendMessage:(NSString *)message fromProvider:(CCProvider *)provider {
  if ((message == nil) || [message isEqualToString:@""] || (provider == nil)) {
    return;
  }
  NSString *timestamp =
      [NSString stringWithFormat:@"%lld", (long long)[[NSDate date] timeIntervalSince1970]];
  NSDictionary *newMessage =
      @{ @"message"  : message,
         @"sender"   : @{ @"id"   : provider.uid,
                          @"name" : provider.fullName,
                          @"phone": provider.phone },
         @"timestamp": timestamp };
  [[[self.alertRef childByAppendingPath:@"messages"] childByAutoId] setValue:newMessage];
}

- (NSArray *)messages {
  return [self.messagesDict allValues];
}

- (NSArray *)participants {
  return [self.participantsSet allObjects];
}

- (void)dealloc {
  [self.alertRef removeAllObservers];
  [self.delegates removeAllObjects];
}

- (void)addDelegate:(__weak id<CCAlertDelegate>)delegate {
  [self.delegates addObject:[[WeakRefHolder alloc] initWithObject:delegate]];
}

- (void)removeDelegate:(__weak id<CCAlertDelegate>)delegate {
  [self.delegates removeObject:[[WeakRefHolder alloc] initWithObject:delegate]];
}

+ (CCAlertType)alertTypeFromString:(NSString *)typeStr {
  typeStr = [typeStr lowercaseString];
  if ([typeStr isEqualToString:@"consult"]) {
    return CCAlertTypeConsult;
  } else if ([typeStr isEqualToString:@"critical"]) {
    return CCAlertTypeCritical;
  } else if ([typeStr isEqualToString:@"io"]) {
    return CCAlertTypeIo;
  } else if ([typeStr isEqualToString:@"lab"]) {
    return CCAlertTypeLab;
  } else if ([typeStr isEqualToString:@"prescription"]) {
    return CCAlertTypeRx;
  } else if ([typeStr isEqualToString:@"radiology"]) {
    return CCAlertTypeRadiology;
  } else if ([typeStr isEqualToString:@"vital"]) {
    return CCAlertTypeVital;
  } else if ([typeStr isEqualToString:@"other"]) {
    return CCAlertTypeOther;
  }
  return CCAlertTypeUnknown;
}

+ (CCAlertStatus)alertStatusFromString:(NSString *)statusStr {
  statusStr = [statusStr lowercaseString];
  if ([statusStr isEqualToString:@"open"]) {
    return CCAlertStatusOpen;
  } else if ([statusStr isEqualToString:@"resolved"]) {
    return CCAlertStatusResolved;
  }
  return CCAlertStatusUnknown;
}

+ (NSString *)alertTypeStringForType:(CCAlertType)type {
  switch (type) {
    case CCAlertTypeCritical:
      return @"Critical";
    case CCAlertTypeConsult:
      return @"Consult";
    case CCAlertTypeIo:
      return @"IO";
    case CCAlertTypeLab:
      return @"Lab";
    case CCAlertTypeRadiology:
      return @"Radiology";
    case CCAlertTypeRx:
      return @"Prescription";
    case CCAlertTypeVital:
      return @"Vital";
    case CCAlertTypeOther:
      return @"Other";
    default:
      break;
  }
  return @"Unknown";
}

+ (CCAlert *)alertWithId:(NSString *)alertId {
  if (g_id2AlertMap == nil) {
    g_id2AlertMap = [[NSMutableDictionary alloc] init];
  }

  CCAlert *alert = [g_id2AlertMap objectForKey:alertId];
  if (alert == nil) {
    alert = [[CCAlert alloc] initWithAlertId:alertId];
    [g_id2AlertMap setObject:alert forKey:alertId];
  }
  return alert;
}

+ (void)clearAllCachedAlerts {
  g_id2AlertMap = nil;
}

@end
