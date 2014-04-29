//
//  CCAlertData.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/14/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertData.h"

@implementation CCAlertData

+(NSArray *) allAlerts
{
    NSString *path = [[NSBundle mainBundle] pathForResource:@"alertData"
                                                     ofType:@"json"];
    NSString *jsonString = [NSString stringWithContentsOfFile:path usedEncoding:nil error:nil];
    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSError* jsonError = nil;
    NSDictionary* jsonDictionary = [NSJSONSerialization JSONObjectWithData:jsonData
                                                                   options:kNilOptions
                                                                     error:&jsonError];
    NSArray* alertsArray = jsonDictionary[@"alerts"];
	return alertsArray;
}

@end
