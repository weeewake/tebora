//
//  CCViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

#import <UIKit/UIKit.h>

#import "CCAlert.h"
#import "CCProvider.h"

@interface CCOncallViewController : UIViewController<UITableViewDataSource,
                                                     UITableViewDelegate>
// Alert Model
@property (strong, nonatomic) NSArray *alertList;

// User Model
@property (strong, nonatomic) CCProvider *thisUser;

// Application State Model
@property (assign, nonatomic) CCAlertType currentTypeFilter;
@property (assign, nonatomic) CCAlertStatus currentStatusFilter;
@property (strong, nonatomic) NSIndexSet *indexesOfCurrentlyDisplayedAlerts;

// Views
@property (strong, nonatomic) IBOutlet UITableView *tableView;
@property (strong, nonatomic) IBOutlet UIButton *statusButton;

// Actions
- (IBAction)statusButtonClicked:(UIButton *)sender;
- (void)alertImageClicked:(id)sender;

@end
