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
    UITableViewDelegate,
    CCAlertDetailsViewControllerDelegate>

// Alert Data Model
@property (strong, nonatomic) NSMutableArray *allAlerts;

// Application State Model
@property (strong, nonatomic) NSMutableString *currentAlertTypeFilter;
@property (strong, nonatomic) NSString *currentCompletionStatusFilter;
@property (strong, nonatomic) NSArray *currentlyVisibleAlerts;

// Views
@property (strong, nonatomic) IBOutlet UITableView *tableView;
@property (strong, nonatomic) IBOutlet UIBarButtonItem *backButton;
@property (strong, nonatomic) IBOutlet UISegmentedControl *segmentedControl;
@property (strong, nonatomic) IBOutlet UIView *emptyTableView;

// Actions
- (IBAction)backButtonPressed:(UIBarButtonItem *)sender;
- (IBAction)segmentedControlValueChanged:(UISegmentedControl *)sender;
- (void)alertImageClicked :(id) sender;

@end
