//
//  Holds all the information about the current user.
//
//  Created by Srinath on 5/23/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CCUser : NSObject

@property (strong, nonatomic) NSString *userId;
@property (strong, nonatomic) NSString *userName;
@property (strong, nonatomic) NSString *userPhone;

- (id)initWithUserId:(NSString *)userId;
- (void)updateNameAndPhoneWithBlock:(void (^)(void))block;

@end
