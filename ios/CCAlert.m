//
//  CCAlert.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/14/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlert.h"

@implementation CCAlert

-(id)init
{
	self = [self initWithData: nil];
	return self;
}

-(id)initWithData:(NSDictionary *)data
{
	self = [super init];

    if(self) {
        self.patientName = data[PATIENT_NAME];
        self.patientMRN = data[PATIENT_MRN];
        self.patientBed = data[PATIENT_BED];
        self.alertType = data[ALERT_TYPE];
        self.alertDescription = data[ALERT_DESCRIPTION];
        self.alertTimeAgo = data[ALERT_TIME_AGO];
        self.nursePhone = data[NURSE_PHONE];
        self.isComplete = data[ALERT_COMPLETE];
        self.messages = data[MESSAGES];
    }
	return self;
}

@end
