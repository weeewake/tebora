//
//  CCViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "CCAlertDetailsViewController.h"

@interface CCViewController : UIViewController
    <UITableViewDataSource,
    UITableViewDelegate>


// Alert Model
@property (strong, nonatomic) NSMutableArray *alertList;

// User Model
@property (strong, nonatomic) NSMutableDictionary *user;

// Application State Model
@property (strong, nonatomic) NSMutableString *currentTypeFilter;
@property (strong, nonatomic) NSString *currentStatusFilter;
@property (strong, nonatomic) NSIndexSet *indexesOfCurrentlyDisplayedAlerts;

// Views
@property (strong, nonatomic) IBOutlet UITableView *tableView;
@property (strong, nonatomic) IBOutlet UIBarButtonItem *backButton;
@property (strong, nonatomic) IBOutlet UIView *emptyTableView;
@property (strong, nonatomic) UISegmentedControl *segmentedControl;

// Actions
- (IBAction)backButtonPressed:(UIBarButtonItem *)sender;
- (void)segmentedControlValueChanged:(UISegmentedControl *)sender;
- (void)alertImageClicked :(id) sender;

@end
