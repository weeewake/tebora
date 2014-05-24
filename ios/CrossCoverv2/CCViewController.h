//
//  CCViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

#import <UIKit/UIKit.h>

#import "CCUser.h"

@interface CCViewController : UIViewController<UITableViewDataSource,
                                               UITableViewDelegate>
// Alert Model
@property (strong, nonatomic) NSMutableArray *alertList;

// User Model
@property (strong, nonatomic) CCUser *thisUser;

// Application State Model
@property (copy, nonatomic) NSString *currentTypeFilter;
@property (copy, nonatomic) NSString *currentStatusFilter;
@property (strong, nonatomic) NSIndexSet *indexesOfCurrentlyDisplayedAlerts;

// Views
@property (strong, nonatomic) IBOutlet UITableView *tableView;
@property (strong, nonatomic) IBOutlet UIBarButtonItem *backButton;
@property (strong, nonatomic) UISegmentedControl *segmentedControl;

// Actions
- (IBAction)backButtonPressed:(UIBarButtonItem *)sender;
- (void)segmentedControlValueChanged:(UISegmentedControl *)sender;
- (void)alertImageClicked:(id)sender;

@end
