//
//  CCViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCSettings.h"
#import "CCViewController.h"
#import "CCAlertDetailsViewController.h"

@interface CCViewController ()

@end

@implementation CCViewController

#pragma mark - Initialization

- (void)viewDidLoad
{
  [super viewDidLoad];

  // Load Data from Firebase
  [self loadAlertData];

  self.navigationController.navigationBar.barTintColor = [CCSettings tintColor];

  // Initialize View
  self.currentTypeFilter = @"HOME";
  self.currentStatusFilter = @"OPEN";

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

  [self updateView];
}

- (void)loadAlertData
{
  self.alertList = [[NSMutableArray alloc] init];

  NSString *userId = self.thisUser.userId ? self.thisUser.userId : @"4";
  Firebase *alertsListRef =
      [[Firebase alloc] initWithUrl:[NSString stringWithFormat:
                                        @"https://tebora.firebaseio.com/user/%@/channels", userId]];

  [alertsListRef observeEventType:FEventTypeValue
                        withBlock:^(FDataSnapshot *snapshot) {
                            [self alertListChangedTo:snapshot.value];
                        }];
}

- (void)alertListChangedTo:(NSDictionary *)newAlertList
{
  self.alertList = [[newAlertList allValues] mutableCopy];

  for (NSDictionary *alert in self.alertList) {
    Firebase *alertRef = [[Firebase alloc] initWithUrl:[NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@", alert[@"id"]]];

    [alertRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
        NSMutableDictionary *changedAlert = [snapshot.value mutableCopy];
        [changedAlert setValue:snapshot.name forKey:@"id"];

        NSInteger index = [self.alertList indexOfObjectPassingTest:^BOOL(NSDictionary *alert,
                                                                         NSUInteger idx,
                                                                         BOOL *stop) {
                              return [alert[@"id"] isEqualToString:changedAlert[@"id"]];
                          }];

        if (index == NSNotFound) {
          [self.alertList addObject:changedAlert];
        } else {
          self.alertList[index] = changedAlert;
        }

        NSComparator sortALertList = ^(NSMutableDictionary *alert1, NSMutableDictionary *alert2) {
            return [alert2[@"details"][@"timestamp"] compare:alert1[@"details"][@"timestamp"]];
        };
        self.alertList = [[self.alertList sortedArrayUsingComparator:sortALertList] mutableCopy];
        [self updateView];
    }];
  }
}

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
  if ([segue.destinationViewController isKindOfClass:[CCAlertDetailsViewController class]]) {
    CCAlertDetailsViewController *alertDetailsVC = segue.destinationViewController;
    NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:sender];
    NSMutableDictionary *thisAlert = self.alertList[thisIndex];
    alertDetailsVC.alert = thisAlert;
  }
}

- (void)updateView
{
  [self setTitle:[self.currentTypeFilter capitalizedString]];
  if([self.currentTypeFilter isEqualToString:@"HOME"]) {
    [self.navigationItem setLeftBarButtonItems:nil];
  } else {
    [self.navigationItem setLeftBarButtonItem:self.backButton];
  }

  __block int openAlertCount = 0, resolvedAlertCount = 0;
  self.indexesOfCurrentlyDisplayedAlerts =
      [self.alertList indexesOfObjectsPassingTest:^BOOL(NSDictionary *thisAlert,
                                                        NSUInteger idx,
                                                        BOOL *stop) {
          NSString *status = thisAlert[@"details"][@"status"];
          if ([self.currentTypeFilter isEqualToString:@"HOME"] ||
              [thisAlert[@"details"][@"type"] isEqualToString:self.currentTypeFilter]) {
            if ([status isEqualToString:@"OPEN"]) {
              openAlertCount++;
            } else {
              resolvedAlertCount++;
            }
            return [status isEqualToString:self.currentStatusFilter];
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

- (NSInteger)numberOfSectionsInTableView:tableView
{
  return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
  return [self.indexesOfCurrentlyDisplayedAlerts count];
}

- (NSInteger)indexInAlertListForTableViewIndexPath:(NSIndexPath *)indexPath
{
  NSUInteger thisIndex = [self.indexesOfCurrentlyDisplayedAlerts firstIndex];
  for (NSUInteger i = 0; i < indexPath.row; i++) {
    thisIndex = [self.indexesOfCurrentlyDisplayedAlerts indexGreaterThanIndex:thisIndex];
  }
  return thisIndex;
}

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
  static NSString *CellIdentifier = @"AlertCell";

  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier
                                                          forIndexPath:indexPath];

  NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath: indexPath];
  NSDictionary *thisAlert = self.alertList[thisIndex];

  cell.textLabel.text = [NSString stringWithFormat:@"%@ - %@",
                         thisAlert[@"patient"][@"bed"],
                         thisAlert[@"patient"][@"name"]];
  cell.detailTextLabel.text = thisAlert[@"details"][@"description"];

  cell.imageView.image = [UIImage imageNamed: thisAlert[@"details"][@"type"]];
  cell.imageView.userInteractionEnabled = YES;
  cell.imageView.tag = thisIndex;
  UITapGestureRecognizer *tapped =
  [[UITapGestureRecognizer alloc] initWithTarget:self
                                          action:@selector(alertImageClicked:)];
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

  timestampLabel.text =
  [self userVisibleDateStringFromTimestamp:thisAlert[@"details"][@"timestamp"]];
  return cell;
}

- (NSString *)userVisibleDateStringFromTimestamp:(NSString *)timestampString
{
  long long timestamp = [timestampString longLongValue];
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  [dateFormatter setDateStyle:NSDateFormatterNoStyle];
  [dateFormatter setTimeStyle:NSDateFormatterShortStyle];

  // If timeago is
  // 0-24 hours show 3:45 am
  // 24-120 hours show Day of Week
  // else show Date

  NSDate *date = [NSDate dateWithTimeIntervalSince1970:timestamp];

  NSString *formattedDateString = [dateFormatter stringFromDate:date];

  return formattedDateString;
}


#pragma mark - UITableViewDelegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
  //    NSLog(@"%@", indexPath);
  [self performSegueWithIdentifier:@"HomeToAlertDetails" sender:indexPath];
  [tableView deselectRowAtIndexPath:indexPath animated:YES];
}

#pragma mark - Action Handlers

- (void)alertImageClicked:(id)sender
{
  UITapGestureRecognizer *gesture = (UITapGestureRecognizer *)sender;
  self.currentTypeFilter = self.alertList[gesture.view.tag][@"details"][@"type"];
  [self updateView];
}

- (IBAction)backButtonPressed:(UIBarButtonItem *)sender
{
  self.currentTypeFilter = @"HOME";
  [self updateView];
}

- (void)segmentedControlValueChanged:(UISegmentedControl *)sender
{
  if ([self.segmentedControl selectedSegmentIndex] == 0) {
    self.currentStatusFilter = @"OPEN";
  } else {
    self.currentStatusFilter = @"RESOLVED";
  }
  [self updateView];
}

@end

