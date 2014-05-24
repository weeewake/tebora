//
//  CCSettings.h
//  PageMD
//
//  Created by Srinath on 5/14/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Firebase/Firebase.h>

@interface CCSettings : NSObject

+ (UIColor *)alertTextColor;
+ (UIColor *)lightTintColor;
+ (UIColor *)tintColor;
+ (Firebase *)firebaseForPathComponents:(NSArray *)pathComponents;

@end
