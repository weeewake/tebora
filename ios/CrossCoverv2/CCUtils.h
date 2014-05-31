//
//  CCUtils.h
//  PageMD
//
//  Created by Srinath on 5/31/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Firebase/Firebase.h>
#import <Foundation/Foundation.h>

@interface CCUtils : NSObject

+ (Firebase *)firebaseForPathComponents:(NSArray *)pathComponents;
+ (NSString *)userVisibleDateStringFromTimestamp:(NSString *)timestampString;
+ (NSString *)userVisibleDateStringFromDate:(NSDate *)date;

@end
