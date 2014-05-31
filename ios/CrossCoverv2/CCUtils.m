//
//  CCUtils.m
//  PageMD
//
//  Created by Srinath on 5/31/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCUtils.h"

@implementation CCUtils

+ (NSString *)userVisibleDateStringFromTimestamp:(NSString *)timestampString {
  NSDate *date = [NSDate dateWithTimeIntervalSince1970:[timestampString doubleValue]];
  return [self userVisibleDateStringFromDate:date];
}

+ (NSString *)userVisibleDateStringFromDate:(NSDate *)date {
  NSTimeInterval interval = -[date timeIntervalSinceNow];
  if (interval < 45) {  // show "%d mins ago" upto 1 hr.
    return @"a moment ago";
  } else if (interval < 3600) {  // show "%d mins ago" upto 1 hr.
    int mins = 1;
    if (interval > 60) mins = (int)(interval / 60.);
    return [NSString stringWithFormat:@"%d min ago", mins];
  } else if (interval < (24 * 60 * 60)) {
    int hrs = (int)(interval / 3600);
    return [NSString stringWithFormat:@"%d hr ago", hrs];
  } else {
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    NSString *formatString = [NSDateFormatter dateFormatFromTemplate:@"dMMM"
                                                             options:0
                                                              locale:[NSLocale currentLocale]];
    [dateFormatter setDateFormat:formatString];
    return [dateFormatter stringFromDate:date];
  }
}

+ (Firebase *)firebaseForPathComponents:(NSArray *)pathComponents {
  NSURL *pathUrl = [NSURL URLWithString:@"https://tebora.firebaseio.com"];
  for (NSString *pathComponent in pathComponents) {
    pathUrl = [pathUrl URLByAppendingPathComponent:pathComponent];
  }
  return [[Firebase alloc] initWithUrl:[pathUrl absoluteString]];
}

@end
