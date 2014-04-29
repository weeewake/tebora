//
//  CCAlert.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/14/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CCAlert : NSObject

@property (strong, nonatomic) NSString *patientName;
@property (strong, nonatomic) NSString *patientMRN;
@property (strong, nonatomic) NSString *patientBed;
@property (strong, nonatomic) NSString *alertType;
@property (strong, nonatomic) NSString *alertDescription;
@property (strong, nonatomic) NSString *alertTimeAgo;
@property (strong, nonatomic) NSString *nursePhone;
@property (strong, nonatomic) NSString *isComplete;
@property (strong, nonatomic) NSMutableArray *messages;

-(id)initWithData:(NSDictionary *)data;

@end
