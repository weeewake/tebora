//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCUser.h"

#import <Firebase/Firebase.h>

#import "CCSettings.h"

@implementation CCUser

- (id)initWithUserId:(NSString *)userId {
  self = [super init];
  if (self) {
    self.userId = userId;
  }
  return self;
}

- (void)updateNameAndPhoneWithBlock:(void (^)(void))block {
  Firebase* userRef = [CCSettings firebaseForPathComponents:@[@"user", self.userId]];
  [userRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot){
    NSDictionary *value = snapshot.value;
    if (![value isKindOfClass:[NSNull class]]) {
      NSString *name = value[@"name"];
      if (![name isEqualToString:self.userName]) {
        self.userName = name;
      }
      NSString *phone = value[@"phone"];
      if (![phone isEqualToString:self.userPhone]) {
        self.userPhone = phone;
      }
    }
    block();
  }];
}

@end
