//
//  CCViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

#import <FirebaseSimpleLogin/FirebaseSimpleLogin.h>

#import "CCAlert.h"
#import "CCAlertTableCells.h"
#import "CCSettings.h"
#import "CCOncallViewController.h"
#import "CCUtils.h"

@interface CCOncallViewController () <CCProviderDelegate, UIActionSheetDelegate>

@property (strong, nonatomic) UIView *headerView;
@property (strong, nonatomic) UIView *headerViewBorder;
@property (strong, nonatomic) UISegmentedControl *segmentedControl;

@property (strong, nonatomic) NSArray *statusBusyDurationsInSecs;
@property (strong, nonatomic) NSTimer *statusTimer;

- (void)segmentedControlValueChanged:(UISegmentedControl *)sender;

@end

@implementation CCOncallViewController

#pragma mark - Initialization

- (void)viewDidLoad {
  [super viewDidLoad];
  self.statusBusyDurationsInSecs = @[@10, @900, @1800, @2700];
  self.navigationController.navigationBar.barTintColor = [CCSettings tintColor];
  self.title = nil;

  // Initialize View
  self.currentStatusFilter = CCAlertStatusOpen;
  self.alertList = @[];

  [self.tableView registerClass:[CCAlertCell class] forCellReuseIdentifier:@"AlertCell"];
  self.tableView.dataSource = self;
  self.tableView.delegate = self;
  self.tableView.estimatedRowHeight = 65;
  self.tableView.separatorStyle = UITableViewCellSeparatorStyleNone;

  // Remove extra separators at the end of the table view.
  self.tableView.tableFooterView = [[UIView alloc] initWithFrame:CGRectZero];
  [self alertListChangedTo:self.thisUser.alerts];
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  [self alertListChangedTo:self.thisUser.alerts];
  self.thisUser.delegate = self;
  [self updateStatus];
}

- (void)viewDidDisappear:(BOOL)animated {
  [super viewDidDisappear:animated];
  if (self.thisUser.delegate == self) {
    self.thisUser.delegate = nil;
  }
  [self clearStatusTimer];
}

- (void)alertListChangedTo:(NSArray *)newAlertList {
  if (newAlertList == nil) {
    self.alertList = @[];
    return;
  }
  NSComparator sortALertList = ^(CCAlert *alert1, CCAlert *alert2) {
    return [alert2.lastUpdatedDate compare:alert1.lastUpdatedDate];
  };
  self.alertList = [newAlertList sortedArrayUsingComparator:sortALertList];
  [self updateView];
}

- (void)clearStatusTimer {
  if (self.statusTimer) {
    [self.statusTimer invalidate];
    self.statusTimer = nil;
  }
}

- (void)updateStatus {
  if (self.thisUser != nil &&
      self.thisUser.status == CCProviderStatusBusy) {
    NSString *statusTimeRemaining = [self.thisUser statusTimeRemaining];
    if ([statusTimeRemaining isEqualToString:@""]) {
      [self.thisUser setStatus:CCProviderStatusAvailable forDuration:0];
    } else {
      if (self.statusTimer == nil) {
        self.statusTimer = [NSTimer scheduledTimerWithTimeInterval:1
                                                            target:self
                                                          selector:@selector(updateStatus)
                                                          userInfo:nil
                                                           repeats:YES];
      }
      NSString *statusText = [NSString stringWithFormat:@"Busy %@  \u25be", statusTimeRemaining];
      [self.statusButton setImage:[UIImage imageNamed:@"StatusBusy"] forState:UIControlStateNormal];
      [self.statusButton setTitle:statusText forState:UIControlStateNormal];
      return;
    }
  }
  [self clearStatusTimer];
  [self.statusButton setImage:[UIImage imageNamed:@"StatusAvailable"] forState:UIControlStateNormal];
  [self.statusButton setTitle:@"Available  \u25be" forState:UIControlStateNormal];
}

- (void)updateView {
  self.indexesOfCurrentlyDisplayedAlerts =
      [self.alertList indexesOfObjectsPassingTest:^BOOL(CCAlert *thisAlert,
                                                        NSUInteger idx,
                                                        BOOL *stop) {
          if ((self.currentTypeFilter == CCAlertTypeUnknown) ||
              (thisAlert.type == self.currentTypeFilter)) {
            return (thisAlert.status == self.currentStatusFilter);
          }
          return NO;
      }];
  [self updateSegmentedControl];
  [self updateStatus];
  [self.tableView reloadData];
}

- (void)updateSegmentedControl {
  int openAlertCount = 0, resolvedAlertCount = 0;
  for (CCAlert *thisAlert in self.alertList) {
    if ((self.currentTypeFilter == CCAlertTypeUnknown) ||
        (thisAlert.type == self.currentTypeFilter)) {
      if (thisAlert.status == CCAlertStatusOpen) {
        openAlertCount++;
      } else {
        resolvedAlertCount++;
      }
    }
  }
  [self.segmentedControl setTitle:[NSString stringWithFormat:@"%d Open", openAlertCount]
                forSegmentAtIndex:0];
  [self.segmentedControl setTitle:[NSString stringWithFormat:@"%d Resolved    ", resolvedAlertCount]
                forSegmentAtIndex:1];
  CGRect bounds = self.headerView.bounds;
  self.segmentedControl.center = CGPointMake(CGRectGetMidX(bounds), CGRectGetMidY(bounds));
  self.headerViewBorder.frame = CGRectMake(0, bounds.size.height - 1, bounds.size.width, 1);
  [self.segmentedControl setNeedsLayout];
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

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
  CGSize constraintSize = CGSizeMake(tableView.bounds.size.width, FLT_MAX);
  NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:indexPath];
  CCAlert *thisAlert = self.alertList[thisIndex];
  NSString *title = [NSString stringWithFormat:@"%@ - %@", thisAlert.patient.bed, thisAlert.patient.shortName];
  NSString *timestamp = [CCUtils userVisibleDateStringFromDate:thisAlert.lastUpdatedDate];
  CGSize cellSize = [CCAlertCell sizeThatFits:constraintSize
                                    withTitle:title
                                  description:thisAlert.alertDescription
                                    timestamp:timestamp];
  return cellSize.height;
}

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  CCAlertCell *cell = [tableView dequeueReusableCellWithIdentifier:@"AlertCell"
                                                      forIndexPath:indexPath];

  NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:indexPath];
  CCAlert *thisAlert = self.alertList[thisIndex];

  cell.titleLabel.text = [NSString stringWithFormat:@"%@ - %@",
                          thisAlert.patient.bed,
                          thisAlert.patient.shortName];
  cell.descriptionLabel.text = thisAlert.alertDescription;

  NSString *imageName = [CCAlert alertTypeStringForType:thisAlert.type];
  cell.imageView.image = [UIImage imageNamed:imageName];
  cell.imageView.userInteractionEnabled = YES;
  cell.imageView.tag = thisIndex;
  UITapGestureRecognizer *tapped =
      [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(alertImageClicked:)];
  tapped.numberOfTapsRequired = 1;
  [cell.imageView addGestureRecognizer:tapped];

  cell.timestampLabel.text =  [CCUtils userVisibleDateStringFromDate:thisAlert.lastUpdatedDate];

  UISwipeGestureRecognizer *swipeGr =
      [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(cellSwiped:)];
  swipeGr.direction = UISwipeGestureRecognizerDirectionLeft;
  [cell addGestureRecognizer:swipeGr];
  return cell;
}

#pragma mark - UITableViewDelegate

- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section {
  return 50;
}

- (UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section {
  if (self.headerView) {
    return self.headerView;
  }
  CGRect frame = CGRectMake(0, 0, tableView.bounds.size.width, 50);
  self.headerView = [[UIView alloc] initWithFrame:frame];
  self.headerView.backgroundColor = [UIColor whiteColor];

  self.headerViewBorder = [[UIView alloc] initWithFrame:CGRectZero];
  self.headerViewBorder.backgroundColor = [UIColor colorWithWhite:(214./255.) alpha:1.];
  [self.headerView addSubview:self.headerViewBorder];

  self.segmentedControl = [[UISegmentedControl alloc] initWithItems:@[@"Open", @"Resolved"]];
  self.segmentedControl.selectedSegmentIndex = 0;
  self.segmentedControl.backgroundColor = [UIColor whiteColor];
  self.segmentedControl.tintColor = [CCSettings tintColor];
  [self.segmentedControl addTarget:self
                            action:@selector(segmentedControlValueChanged:)
                  forControlEvents:UIControlEventValueChanged];
  [self.headerView addSubview:self.segmentedControl];
  [self updateSegmentedControl];
  return self.headerView;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
  [tableView deselectRowAtIndexPath:indexPath animated:YES];
  self.title = nil;
  CCAlertDetailsViewController *alertDetailsVC =
      [self.storyboard instantiateViewControllerWithIdentifier:@"alertdetailsvc"];
  NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:indexPath];
  alertDetailsVC.alertId = ((CCAlert *)self.alertList[thisIndex]).alertId;
  alertDetailsVC.thisUser = self.thisUser;
  [self.navigationController pushViewController:alertDetailsVC animated:YES];
}

#pragma mark - Action Handlers

- (void)alertImageClicked:(id)sender {
  if (self.currentTypeFilter != CCAlertTypeUnknown) {
    // We're already in the filter view, nothing to filter again.
    return;
  }
  self.title = @"All";
  self.thisUser.delegate = nil;
  CCOncallViewController *alertTypeVC =
      [self.storyboard instantiateViewControllerWithIdentifier:@"oncallvc"];
  CCAlert *alert = self.alertList[((UITapGestureRecognizer *)sender).view.tag];
  alertTypeVC.currentTypeFilter = alert.type;
  alertTypeVC.thisUser = self.thisUser;
  [self.navigationController pushViewController:alertTypeVC animated:YES];
}

- (void)segmentedControlValueChanged:(UISegmentedControl *)sender {
  self.currentStatusFilter = CCAlertStatusOpen;
  if (sender.selectedSegmentIndex != 0) {
    self.currentStatusFilter = CCAlertStatusResolved;
  }
  [self updateView];
}

- (void)cellSwiped:(UISwipeGestureRecognizer *)gr {
  if (gr.state == UIGestureRecognizerStateEnded) {
    [UIView animateWithDuration:0.5
                     animations:^{
                     }];
  }
}

- (void)statusButtonClicked:(UIButton *)sender {
  UIActionSheet *actionSheet = [[UIActionSheet alloc] initWithTitle:nil
                                                           delegate:self
                                                  cancelButtonTitle:nil
                                             destructiveButtonTitle:nil
                                                  otherButtonTitles:nil];
  [actionSheet addButtonWithTitle:@"Available"];
  for (NSNumber *durationNumber in self.statusBusyDurationsInSecs) {
    int duration = [durationNumber intValue];
    NSString *statusText = nil;
    int hrs = (int)(duration / 3600);
    int mins = (int)((duration - hrs * 3600) / 60);
    int secs = (int)(duration - mins * 60 - hrs * 3600);
    if (duration > 3600) {
      statusText = [NSString stringWithFormat:@"Busy for %d hours, %d minutes", hrs, mins];
    } else if (duration > 60) {
      if (duration == 3600) {
        hrs = 0;
        mins = 60;
      }
      statusText = [NSString stringWithFormat:@"Busy for %d minutes", mins];
    } else {
      if (duration == 60) {
        mins = 0;
        secs = 60;
      }
      statusText = [NSString stringWithFormat:@"Busy for %d seconds", secs];
    }
    [actionSheet addButtonWithTitle:statusText];
  }
  [actionSheet addButtonWithTitle:@"Sign Out"];
  actionSheet.destructiveButtonIndex = [self.statusBusyDurationsInSecs count] + 1;
  [actionSheet addButtonWithTitle:@"Cancel"];
  actionSheet.cancelButtonIndex = actionSheet.destructiveButtonIndex + 1;
  [actionSheet showInView:self.view];
}

# pragma mark - UIActionSheetDelegate

- (void)actionSheet:(UIActionSheet *)actionSheet clickedButtonAtIndex:(NSInteger)buttonIndex {
  if (buttonIndex == actionSheet.destructiveButtonIndex) {
    Firebase* ref = [CCUtils firebaseForPathComponents:@[]];
    FirebaseSimpleLogin* authClient = [[FirebaseSimpleLogin alloc] initWithRef:ref];
    [authClient logout];
    [ref unauth];
    [ref removeAllObservers];
    self.thisUser.delegate = nil;
    self.thisUser = nil;
    [CCProvider clearAllCachedProviders];
    [self performSegueWithIdentifier:@"UnwindToLogin" sender:nil];
  } else if (buttonIndex != actionSheet.cancelButtonIndex) {
    [self clearStatusTimer];
    if (buttonIndex == 0) {
      [self.thisUser setStatus:CCProviderStatusAvailable forDuration:0];
    } else {
      NSTimeInterval duration = [self.statusBusyDurationsInSecs[buttonIndex - 1] intValue];
      [self.thisUser setStatus:CCProviderStatusBusy forDuration:duration];
    }
    [self updateStatus];
  }
}

#pragma mark - CCProviderDelegate

- (void)providerDetailsChanged:(CCProvider *)provider {
  [self updateView];
}

- (void)provider:(CCProvider *)provider alertsAdded:(NSArray *)addedAlertIdList {
  [self alertListChangedTo:self.thisUser.alerts];
}

- (void)provider:(CCProvider *)provider alertsChanged:(NSArray *)changedAlertIdList {
  [self alertListChangedTo:self.thisUser.alerts];
}

- (void)provider:(CCProvider *)provider alertsRemoved:(NSArray *)removedAlertIdList {
  [self alertListChangedTo:self.thisUser.alerts];
}

@end

