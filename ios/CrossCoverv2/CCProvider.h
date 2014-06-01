//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum {
  CCProviderTypeUnknown = 0,
  CCProviderTypeRN,
  CCProviderTypeMD
} CCProviderType;

@class CCProvider;
@protocol CCProviderDelegate <NSObject>

@optional

- (void)providerDetailsChanged:(CCProvider *)provider;

- (void)provider:(CCProvider *)provider
     alertsAdded:(NSArray *)addedAlertIdList;

- (void)provider:(CCProvider *)provider
   alertsChanged:(NSArray *)changedAlertIdList;

- (void)provider:(CCProvider *)provider
   alertsRemoved:(NSArray *)removedAlertIdList;

@end

@interface CCProvider : NSObject

@property (strong, nonatomic) NSString *uid;
@property (strong, nonatomic) NSString *fullName;
@property (strong, nonatomic) NSString *shortName;
@property (strong, nonatomic) NSString *displayName;
@property (strong, nonatomic) NSString *phone;
@property (assign, nonatomic) CCProviderType type;
@property (strong, nonatomic) NSArray *alerts;  // array of CCAlert
@property (assign, nonatomic, getter = isOnCall) BOOL oncall;

@property (weak, nonatomic) id<CCProviderDelegate> delegate;

+ (CCProvider *)providerWithUserId:(NSString *)uid;
+ (CCProvider *)loggedInProvider;
+ (void)setLoggedInProvider:(CCProvider *)provider;

@end
