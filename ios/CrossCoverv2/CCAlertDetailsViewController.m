//
//  CCAlertDetailsViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"
#import "CCAlertDetailsTableCells.h"

@interface CCAlertDetailsViewController ()

@property (strong, nonatomic) NSArray *messageList;

@end

@implementation CCAlertDetailsViewController

- (void)viewDidLoad
{
  [super viewDidLoad];
  [self.alertDetailsTableView registerClass:[CCTableViewPatientCell class]
                     forCellReuseIdentifier:@"PatientCell"];
  [self.alertDetailsTableView registerClass:[CCTableViewNurseCell class]
                     forCellReuseIdentifier:@"NurseCell"];
  [self.alertDetailsTableView registerClass:[CCTableViewConversationCell class]
                     forCellReuseIdentifier:@"ConversationCell"];

  [self registerForKeyboardNotifications];
  self.title = self.alert[@"details"][@"type"];
  self.enterMessageTextField.delegate = self;
  self.alertDetailsTableView.delegate = self;
  self.alertDetailsTableView.dataSource = self;
  self.alertDetailsTableView.sectionHeaderHeight = 30;
  self.alertDetailsTableView.estimatedRowHeight = self.alertDetailsTableView.rowHeight;
  [self updateData];
}

- (void)registerForKeyboardNotifications
{
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWasShown:)
                                               name:UIKeyboardDidShowNotification object:nil];
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWillBeHidden:)
                                               name:UIKeyboardWillHideNotification object:nil];
}

- (void)updateData
{
  Firebase* alertDetailsRef = [[Firebase alloc] initWithUrl:[NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@", self.alert[@"id"]]];

  [alertDetailsRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot){
      [self.alert addEntriesFromDictionary: snapshot.value];
      NSArray *messages = [snapshot.value[@"messages"] allValues];
      NSComparator sortMessageList = ^(NSMutableDictionary *msg1, NSMutableDictionary *msg2) {
          return [msg1[@"timestamp"] compare:msg2[@"timestamp"]];
      };
      self.messageList = [[messages sortedArrayUsingComparator:sortMessageList] mutableCopy];
      [self updateView];
  }];
}

- (void)updateView
{
  NSString *title = @"Reopen";
  if ([self.alert[@"details"][@"status"] isEqualToString:@"OPEN"]) {
    title = @"Resolve";
  }
  [self.toggleStatusButton setTitle:title
                           forState:UIControlStateNormal];
  [self.alertDetailsTableView reloadData];
}

- (void)callNursePressed:(UIGestureRecognizer *)gestureRecognizer
{
  NSString *phoneCallURL = [NSString stringWithFormat:@"tel:%@", self.alert[@"creator"][@"phone"]];
  [[UIApplication sharedApplication] openURL:[NSURL URLWithString: phoneCallURL]];
}

- (void)mrnPressed:(UIGestureRecognizer *)gestureRecognizer
{
  UIAlertView *alert =
      [[UIAlertView alloc] initWithTitle:self.alert[@"patient"][@"mrn"]
                                 message:@"In the future, this will take you to your EHR system"
                                delegate:self
                       cancelButtonTitle:@"OK"
                       otherButtonTitles:nil];
  [alert show];
}

#pragma mark - UITableViewDelegate

- (void)tableView:(UITableView *)tableView
    willDisplayHeaderView:(UIView *)view
               forSection:(NSInteger)section
{
  view.tintColor = [UIColor colorWithRed:(239.f/255.)
                                   green:(239.f/255.)
                                    blue:(244.f/255.)
                                   alpha:1.0];
  UITableViewHeaderFooterView *headerView = (UITableViewHeaderFooterView *)view;
  headerView.textLabel.textColor = [UIColor colorWithRed:(120.f/255.)
                                                   green:(120.f/255.)
                                                    blue:(125.f/255.)
                                                   alpha:1.0];
  headerView.textLabel.font = [UIFont systemFontOfSize:14.0f];
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
  CGSize cellSize = CGSizeMake(tableView.bounds.size.width, tableView.rowHeight);
  CGSize constraintSize = CGSizeMake(tableView.bounds.size.width, FLT_MAX);
  if (indexPath.section == 0) {
    cellSize = [CCTableViewPatientCell sizeThatFits:constraintSize
                                           withName:self.alert[@"patient"][@"name"]
                                                mrn:self.alert[@"patient"][@"mrn"]
                                                bed:self.alert[@"patient"][@"bed"]];
  } else if (indexPath.section == 1) {
    cellSize = [CCTableViewNurseCell sizeThatFits:constraintSize
                                         withName:self.alert[@"creator"][@"name"]
                                            phone:self.alert[@"creator"][@"phone"]];
  } else if (indexPath.section == 2) {
    NSInteger row = indexPath.row;
    NSString *message = nil, *timestamp = nil, *name = nil;
    if (row == 0) {
      message = self.alert[@"details"][@"description"];
      timestamp = [self userVisibleDateStringFromTimestamp:
                      self.alert[@"details"][@"creation_timestamp"]];
      name = self.alert[@"creator"][@"name"];
    } else {
      message = self.messageList[row-1][@"message"];
      timestamp = [self userVisibleDateStringFromTimestamp:self.messageList[row-1][@"timestamp"]];
      NSString *creatorName = self.alert[@"creator"][@"name"];
      if ([self.messageList[row-1][@"sender"][@"name"] isEqualToString:creatorName]) {
        name = self.messageList[row-1][@"sender"][@"name"];
      }
    }

    cellSize = [CCTableViewConversationCell sizeThatFits:constraintSize
                                                withName:name
                                                 message:message
                                               timestamp:timestamp];
  }
  NSLog(@"heightForRowAtIndexPath:%@, height:%lf", indexPath, cellSize.height);
  return cellSize.height;
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
  return 3;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
  // The header for the section is the region name -- get this from the region at the section index.
  switch(section) {
    case 0: return @"PATIENT";
    case 1: return @"NURSE";
    case 2: return @"CONVERSATION";
  }
  return @"UNKNOWN";
}

//Add subviews to a cell’s content view.

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
  switch(indexPath.section) {
    case 0: {
      CCTableViewPatientCell *cell = [tableView dequeueReusableCellWithIdentifier:@"PatientCell"];
      cell.nameLabel.text = self.alert[@"patient"][@"name"];
      cell.mrnLabel.text = self.alert[@"patient"][@"mrn"];
      cell.bedLabel.text = self.alert[@"patient"][@"bed"];
      UITapGestureRecognizer *tapped =
          [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(mrnPressed:)];
      tapped.numberOfTapsRequired = 1;
      [cell.mrnLabel addGestureRecognizer:tapped];
      return cell;
    }

    case 1: {
      CCTableViewNurseCell *cell = [tableView dequeueReusableCellWithIdentifier:@"NurseCell"];
      cell.nameLabel.text = self.alert[@"creator"][@"name"];
      cell.phoneLabel.text = self.alert[@"creator"][@"phone"];
      UITapGestureRecognizer *tapped =
          [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(callNursePressed:)];
      tapped.numberOfTapsRequired = 1;
      [cell.phoneLabel addGestureRecognizer:tapped];
      return cell;
    }

    case 2: {
      CCTableViewConversationCell *cell =
          [tableView dequeueReusableCellWithIdentifier:@"ConversationCell"];
      NSString *creatorName = self.alert[@"creator"][@"name"];
      NSInteger row = indexPath.row;
      if (row == 0) {
        cell.nameLabel.text = self.alert[@"creator"][@"name"];
        cell.messageLabel.text = self.alert[@"details"][@"description"];
        cell.timestampLabel.text = [self userVisibleDateStringFromTimestamp:
                                        self.alert[@"details"][@"creation_timestamp"]];
      } else {
        if ([self.messageList[row-1][@"sender"][@"name"] isEqualToString:creatorName]) {
          cell.nameLabel.text = self.messageList[row-1][@"sender"][@"name"];
          cell.isMyMessage = NO;
        } else {
          cell.nameLabel.text = @"";
          cell.isMyMessage = YES;
        }
        cell.messageLabel.text = self.messageList[row-1][@"message"];
        cell.timestampLabel.text = [self userVisibleDateStringFromTimestamp:
                                        self.messageList[row-1][@"timestamp"]];
      }
      return cell;
    }
  }
  return nil;
}

- (NSString *)userVisibleDateStringFromTimestamp:(NSString *)timestampString
{
  NSDate *date = [NSDate dateWithTimeIntervalSince1970:[timestampString longLongValue]];
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

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
  switch(section) {
    case 0: return 1;
    case 1: return 1;
    case 2: return 1 + [self.messageList count];
  }
  return 0;
}

#pragma mark - Actions

- (IBAction)toggleStatusButtonPressed:(UIButton *)sender
{
  NSString *fbDetailsUrl =
      [NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@/details",
                                 self.alert[@"id"]];
  Firebase* alertDetailsRef = [[Firebase alloc] initWithUrl:fbDetailsUrl];

  if ([self.alert[@"details"][@"status"] isEqualToString:@"OPEN"]) {
    [alertDetailsRef updateChildValues:@{ @"status" : @"RESOLVED" }];
  } else {
    [alertDetailsRef updateChildValues:@{ @"status" : @"OPEN" }];
  }
  [self.navigationController popViewControllerAnimated:YES];
}

- (IBAction)sendMessageButtonPressed:(UIButton *)sender
{
  if (![self.enterMessageTextField.text isEqualToString:@""])
  {
    NSString *fbMessagesUrl =
        [NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@/messages/",
                                   self.alert[@"id"]];
    Firebase* messagesRef = [[Firebase alloc] initWithUrl:fbMessagesUrl];
    Firebase* newMessageRef = [messagesRef childByAutoId];
    NSTimeInterval interval = [[NSDate date] timeIntervalSince1970];
    NSString *timestamp = [NSString stringWithFormat:@"%lld", (long long)interval];
    NSDictionary *newMessage = @{ @"message" : self.enterMessageTextField.text,
                                  @"sender": @{ @"name": @"Bob" },
                                  @"timestamp": timestamp,
                                };
    [newMessageRef setValue:newMessage];
  }
  [self.enterMessageTextField resignFirstResponder];
  self.enterMessageTextField.text = @"";
  [self updateView];
}

- (void)keyboardWasShown:(NSNotification*)aNotification
{
  NSDictionary* info = [aNotification userInfo];
  CGSize kbSize = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size;
  CGRect bgRect = self.enterMessageTextField.superview.frame;
  bgRect.origin.y -= kbSize.height;

  [self.enterMessageTextField.superview setFrame:bgRect];
}

- (void)keyboardWillBeHidden:(NSNotification*)aNotification
{
  NSDictionary* info = [aNotification userInfo];
  CGSize kbSize = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size;
  CGRect bgRect = self.enterMessageTextField.superview.frame;
  bgRect.origin.y += kbSize.height;
  [self.enterMessageTextField.superview setFrame:bgRect];
}

@end