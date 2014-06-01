//
//  CCAlert.h
//  PageMD
//
//  Created by Srinath on 5/31/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "CCProvider.h"

typedef enum {
  CCAlertTypeUnknown = 0,
  CCAlertTypeCritical,
  CCAlertTypeConsult,
  CCAlertTypeRadiology,
  CCAlertTypeRx,
  CCAlertTypeIo,
  CCAlertTypeVital,
  CCAlertTypeLab,
  CCAlertTypeOther,
} CCAlertType;

typedef enum {
  CCAlertStatusUnknown = 0,
  CCAlertStatusOpen,
  CCAlertStatusResolved,
} CCAlertStatus;

@class CCAlert;

@protocol CCAlertDelegate <NSObject>

@optional
- (void)alertDetailsChanged:(CCAlert *)alert;
- (void)alertMessagesChanged:(CCAlert *)alert;

@end

@interface CCPatient : NSObject

@property (strong, nonatomic) NSString *patientId;
@property (strong, nonatomic) NSString *mrn;
@property (strong, nonatomic) NSString *bed;
@property (strong, nonatomic) NSString *fullName;
@property (strong, nonatomic) NSString *shortName;

@end

@interface CCAlertMessage : NSObject

@property (weak, nonatomic) CCAlert *alert;
@property (strong, nonatomic) NSString *message;
@property (strong, nonatomic) NSDate *date;
@property (strong, nonatomic) CCProvider *sender;

@end

@interface CCAlert : NSObject

@property (strong, nonatomic) NSString *alertId;
@property (assign, nonatomic) CCAlertType type;
@property (assign, nonatomic) CCAlertStatus status;

@property (strong, nonatomic) NSDate *creationDate;
@property (strong, nonatomic) NSDate *lastUpdatedDate;
@property (strong, nonatomic) NSString *alertDescription;
@property (strong, nonatomic) CCProvider *creator;
@property (strong, nonatomic) CCPatient *patient;

@property (strong, nonatomic, readonly) NSArray *participants;  // array of CCProvider
@property (strong, nonatomic, readonly) NSArray *messages;

- (void)addDelegate:(__weak id<CCAlertDelegate>)delegate;
- (void)removeDelegate:(__weak id<CCAlertDelegate>)delegate;

- (void)toggleAlertStatus;
- (void)sendMessage:(NSString *)message fromProvider:(CCProvider *)provider;

+ (CCAlert *)alertWithId:(NSString *)alertId;
+ (NSString *)alertTypeStringForType:(CCAlertType)type;

@end
