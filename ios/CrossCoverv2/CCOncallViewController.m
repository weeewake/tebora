//
//  CCViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

#import "CCAlert.h"
#import "CCSettings.h"
#import "CCOncallViewController.h"
#import "CCUtils.h"

@interface CCOncallViewController () <CCProviderDelegate>
@end

@implementation CCOncallViewController

#pragma mark - Initialization

- (void)viewDidLoad {
  [super viewDidLoad];
  self.navigationController.navigationBar.barTintColor = [CCSettings tintColor];

  // Initialize View
  self.currentTypeFilter = CCAlertTypeUnknown;
  self.currentStatusFilter = CCAlertStatusUnknown;

  self.alertList = [[NSMutableArray alloc] init];
  [self loadAlertData];

  self.tableView.dataSource = self;
  self.tableView.delegate = self;

  self.segmentedControl = [[UISegmentedControl alloc] initWithItems:
                               [NSArray arrayWithObjects:@"Open", @"Resolved", nil]];
  [self.segmentedControl setSelectedSegmentIndex:0];
  [self.segmentedControl addTarget:self
                            action:@selector(segmentedControlValueChanged:)
                  forControlEvents: UIControlEventValueChanged];
  [self.segmentedControl setTintColor:[UIColor whiteColor]];
  self.navigationItem.titleView = self.segmentedControl;
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  [self loadAlertData];
  self.thisUser.delegate = self;
  [self updateView];
}

- (void)viewDidDisappear:(BOOL)animated {
  [super viewDidDisappear:animated];
  if (self.thisUser.delegate == self) {
    self.thisUser.delegate = nil;
  }
}

- (void)loadAlertData {
  NSString *userId = self.thisUser.uid;
  if (userId != nil && ![userId isEqualToString:@""]) {
    [self alertListChangedTo:self.thisUser.alerts];
  }
}

- (void)alertListChangedTo:(NSArray *)newAlertList {
  NSComparator sortALertList = ^(CCAlert *alert1, CCAlert *alert2) {
    return [alert2.lastUpdatedDate compare:alert1.lastUpdatedDate];
  };
  self.alertList = [newAlertList sortedArrayUsingComparator:sortALertList];
}

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(NSString *)alertId {
  if ([segue.destinationViewController isKindOfClass:[CCAlertDetailsViewController class]]) {
    self.thisUser.delegate = nil;
    CCAlertDetailsViewController *alertDetailsVC = segue.destinationViewController;
    alertDetailsVC.alertId = alertId;
    alertDetailsVC.thisUser = self.thisUser;
  }
}

- (void)updateView {
  if(self.currentTypeFilter == CCAlertTypeUnknown) {
    [self setTitle:@"HOME"];
    [self.navigationItem setLeftBarButtonItems:nil];
  } else {
    [self setTitle:[[CCAlert alertTypeStringForType:self.currentTypeFilter] uppercaseString]];
    [self.navigationItem setLeftBarButtonItem:self.backButton];
  }

  __block int openAlertCount = 0, resolvedAlertCount = 0;
  self.indexesOfCurrentlyDisplayedAlerts =
      [self.alertList indexesOfObjectsPassingTest:^BOOL(CCAlert *thisAlert,
                                                        NSUInteger idx,
                                                        BOOL *stop) {
          if ((self.currentTypeFilter == CCAlertTypeUnknown) ||
              (thisAlert.type == self.currentTypeFilter)) {
            if (thisAlert.status == CCAlertStatusOpen) {
              openAlertCount++;
            } else {
              resolvedAlertCount++;
            }
            return (thisAlert.status == self.currentStatusFilter);
          }
          return NO;
      }];

  [self.segmentedControl setTitle:[NSString stringWithFormat:@"%d Open", openAlertCount]
                forSegmentAtIndex:0];
  [self.segmentedControl setTitle:[NSString stringWithFormat:@"%d Resolved", resolvedAlertCount]
                forSegmentAtIndex:1];

  [self.tableView reloadData];
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:tableView {
  return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return [self.indexesOfCurrentlyDisplayedAlerts count];
}

- (NSInteger)indexInAlertListForTableViewIndexPath:(NSIndexPath *)indexPath {
  NSUInteger thisIndex = [self.indexesOfCurrentlyDisplayedAlerts firstIndex];
  for (NSUInteger i = 0; i < indexPath.row; i++) {
    thisIndex = [self.indexesOfCurrentlyDisplayedAlerts indexGreaterThanIndex:thisIndex];
  }
  return thisIndex;
}

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  static NSString *CellIdentifier = @"AlertCell";

  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier
                                                          forIndexPath:indexPath];

  NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:indexPath];
  CCAlert *thisAlert = self.alertList[thisIndex];

  cell.textLabel.text = [NSString stringWithFormat:@"%@ - %@",
                         thisAlert.patient.bed,
                         thisAlert.patient.shortName];
  cell.detailTextLabel.text = thisAlert.alertDescription;

  NSString *imageName = [[CCAlert alertTypeStringForType:thisAlert.type] capitalizedString];
  cell.imageView.image = [UIImage imageNamed:imageName];
  cell.imageView.userInteractionEnabled = YES;
  cell.imageView.tag = thisIndex;
  UITapGestureRecognizer *tapped =
      [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(alertImageClicked:)];
  tapped.numberOfTapsRequired = 1;
  [cell.imageView addGestureRecognizer:tapped];

  UILabel *timestampLabel;
  if ([[cell.contentView subviews] count] < 4) {
    timestampLabel = [[UILabel alloc] initWithFrame:CGRectMake(250, 20, 50, 20)];
    [cell.contentView addSubview:timestampLabel];

    timestampLabel.font = [UIFont systemFontOfSize:12.0];
    timestampLabel.textAlignment = NSTextAlignmentRight;
    timestampLabel.textColor = [UIColor lightGrayColor];
  } else {
    timestampLabel = [cell.contentView subviews][3];
  }
  timestampLabel.text =  [CCUtils userVisibleDateStringFromDate:thisAlert.lastUpdatedDate];
  return cell;
}

#pragma mark - UITableViewDelegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
  NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:indexPath];
  CCAlert *alert = self.alertList[thisIndex];
  [self performSegueWithIdentifier:@"HomeToAlertDetails" sender:alert.alertId];
  [tableView deselectRowAtIndexPath:indexPath animated:YES];
}

#pragma mark - Action Handlers

- (void)alertImageClicked:(id)sender {
  UITapGestureRecognizer *gesture = (UITapGestureRecognizer *)sender;
  CCAlert *alert = self.alertList[gesture.view.tag];
  self.currentTypeFilter = alert.type;
  [self updateView];
}

- (IBAction)backButtonPressed:(UIBarButtonItem *)sender {
  self.currentTypeFilter = CCAlertTypeUnknown;
  [self updateView];
}

- (void)segmentedControlValueChanged:(UISegmentedControl *)sender {
  if ([self.segmentedControl selectedSegmentIndex] == 0) {
    self.currentStatusFilter = CCAlertStatusOpen;
  } else {
    self.currentStatusFilter = CCAlertStatusResolved;
  }
  [self updateView];
}

#pragma mark - CCProviderDelegate

- (void)providerDetailsChanged:(CCProvider *)provider {
  [self updateView];
}

- (void)provider:(CCProvider *)provider alertsAdded:(NSArray *)addedAlertIdList {
  [self alertListChangedTo:self.thisUser.alerts];
  [self updateView];
}

- (void)provider:(CCProvider *)provider alertsChanged:(NSArray *)changedAlertIdList {
  [self alertListChangedTo:self.thisUser.alerts];
  [self updateView];
}

- (void)provider:(CCProvider *)provider alertsRemoved:(NSArray *)removedAlertIdList {
  [self alertListChangedTo:self.thisUser.alerts];
  [self updateView];
}

@end

