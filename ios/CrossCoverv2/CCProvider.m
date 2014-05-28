//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCProvider.h"

#import <Firebase/Firebase.h>

#import "CCSettings.h"

@interface CCProvider ()

@property (strong, nonatomic) Firebase *providerRef;

- (CCProvider *)initWithUserId:(NSString *)uid;

@end

@implementation CCProvider

- (id)initWithUserId:(NSString *)uid {
  self = [super init];
  if (self) {
    self.uid = uid;
  }
  return self;
}

- (void)updateDetailsWithBlock:(void (^)(void))block {
  if (self.providerRef) {
    // We already are watching the details, just run the block
    block();
    return;
  }

  Firebase *providerRef = [CCSettings firebaseForPathComponents:@[@"user", self.uid, @"details"]];
  [providerRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot){
      self.providerRef = providerRef;
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
