//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum {
  CCProviderType_UNKNOWN = 0,
  CCProviderType_RN,
  CCProviderType_MD
} CCProviderType;

@interface CCProvider : NSObject

@property (strong, nonatomic) NSString *uid;
@property (strong, nonatomic) NSString *name;
@property (strong, nonatomic) NSString *phone;
@property (assign, nonatomic) CCProviderType type;

- (void)updateDetailsWithBlock:(void (^)(void))block;

+ (CCProvider *)providerWithUserId:(NSString *)uid;

@end
