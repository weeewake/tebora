//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCProvider.h"

#import <Firebase/Firebase.h>

#import "CCSettings.h"

@implementation CCProvider

- (id)initWithUserId:(NSString *)uid {
  self = [super init];
  if (self) {
    self.uid = uid;
  }
  return self;
}

- (void)updateDetailsWithBlock:(void (^)(void))block {
  Firebase* userRef = [CCSettings firebaseForPathComponents:@[@"user", self.uid, @"details"]];
  [userRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot){
    NSDictionary *value = snapshot.value;
    if (![value isKindOfClass:[NSNull class]]) {
      NSString *name = value[@"name"];
      if (![name isEqualToString:self.name]) {
        self.name = name;
      }
      NSString *phone = value[@"phone"];
      if (![phone isEqualToString:self.phone]) {
        self.phone = phone;
      }
      CCProviderType type = [[self class] providerTypeFromString:value[@"providerType"]];
      if (type != self.type) {
        self.type = type;
      }
    }
    block();
  }];
}

+ (CCProviderType)providerTypeFromString:(NSString *)type {
  type = [type uppercaseString];
  if ([type isEqualToString:@"RN"]) {
    return CCProviderType_RN;
  } else if ([type isEqualToString:@"MD"]) {
      return CCProviderType_MD;
  }
  return CCProviderType_UNKNOWN;
}

@end
