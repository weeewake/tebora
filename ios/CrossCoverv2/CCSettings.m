//
//  CCSettings.m
//  PageMD
//
//  Created by Srinath on 5/14/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCSettings.h"

static UIColor *alertTextColor;
static UIColor *lightTintColor;
static UIColor *tintColor;

@implementation CCSettings

+ (UIColor *)alertTextColor
{
    if (alertTextColor == nil) {
        alertTextColor = [UIColor colorWithRed:205.0/255 green:94.0/255 blue:43.0/255 alpha:1.0];
    }
    return alertTextColor;
}

+ (UIColor *)tintColor
{
    if (tintColor == nil) {
        tintColor = [UIColor colorWithRed:74.0/255 green:144.0/255 blue:226.0/255 alpha:1.0];
    }
    return tintColor;
}

+ (UIColor *)lightTintColor
{
    if (lightTintColor == nil) {
        lightTintColor = [UIColor colorWithRed:74.0/255 green:144.0/255 blue:226.0/255 alpha:0.1];
    }
    return lightTintColor;
}

@end
