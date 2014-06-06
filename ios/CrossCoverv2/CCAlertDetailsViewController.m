//
//  CCAlertDetailsViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

#import "CCAlert.h"
#import "CCAlertDetailsTableCells.h"
#import "CCProvider.h"
#import "CCUtils.h"

@interface CCAlertDetailsViewController () <CCProviderDelegate>

@property (strong, nonatomic) CCAlert *alert;
@property (strong, nonatomic) NSArray *collatedMessageList;
@property (strong, nonatomic) UITapGestureRecognizer *dismissKeyboardRecognizer;

@end

@implementation CCAlertDetailsViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.messageTextField.delegate = self;

  UITableView *tableView = self.alertDetailsTableView;
  [tableView registerClass:[CCAlertDetailsPatientCell class] forCellReuseIdentifier:@"PatientCell"];
  [tableView registerClass:[CCAlertDetailsNurseCell class] forCellReuseIdentifier:@"NurseCell"];
  [tableView registerClass:[CCAlertDetailsConversationCell class]
    forCellReuseIdentifier:@"ConversationCell"];
  [tableView registerClass:[CCAlertDetailsAlertHeader class]
    forHeaderFooterViewReuseIdentifier:@"AlertMessageHeader"];
  [tableView registerClass:[UITableViewHeaderFooterView class]
    forHeaderFooterViewReuseIdentifier:@"HeaderView"];
  tableView.delegate = self;
  tableView.dataSource = self;
  tableView.sectionHeaderHeight = 30;
  // Warning: Don't set the estimatedRowHeight. The perf improvement is negligible for us
  // but it messes with scrollToRowAtIndexPath:atScrollPosition:animated:
  // so we can't automatically scroll the last message!
  //     tableView.estimatedRowHeight = tableView.rowHeight;

  self.dismissKeyboardRecognizer =
    [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(dismissKeyboard:)];
  self.dismissKeyboardRecognizer.cancelsTouchesInView = NO;
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  [self registerForKeyboardNotifications];
  [self updateData];
  self.thisUser.delegate = self;
  [self updateView];
}

- (void)viewWillDisappear:(BOOL)animated {
  [super viewWillDisappear:animated];
  if (self.thisUser.delegate == self) {
    self.thisUser.delegate = nil;
  }
  [[NSNotificationCenter defaultCenter] removeObserver:self];
  [self.navigationController.view removeGestureRecognizer:self.dismissKeyboardRecognizer];
}

- (void)registerForKeyboardNotifications {
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWillShow:)
                                               name:UIKeyboardWillShowNotification object:nil];
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWillHide:)
                                               name:UIKeyboardWillHideNotification object:nil];
}

- (void)updateData {
  self.alert = [CCAlert alertWithId:self.alertId];
  NSComparator sortMessageList = ^(CCAlertMessage *msg1, CCAlertMessage *msg2) {
    return [msg1.date compare:msg2.date];
  };
  NSArray *sortedMessageList = [self.alert.messages sortedArrayUsingComparator:sortMessageList];
  NSMutableArray *collatedMessageList =
      [[NSMutableArray alloc] initWithCapacity:[sortedMessageList count]];
  for (CCAlertMessage *alertMsg in sortedMessageList) {
    NSMutableArray *lastMessageArray = [collatedMessageList lastObject];
    CCAlertMessage *lastAlertMsg = [lastMessageArray lastObject];
    if (lastAlertMsg.sender.uid == alertMsg.sender.uid) {
      // Two adjacent messages from the same uid, put them into a single array
      [lastMessageArray addObject:alertMsg];
    } else {
      [collatedMessageList addObject:[@[alertMsg] mutableCopy]];
    }
  }
  self.collatedMessageList = [collatedMessageList copy];
}

- (void)updateView {
  self.title = [CCAlert alertTypeStringForType:self.alert.type];
  NSString *title = @"Reopen";
  if (self.alert.status == CCAlertStatusOpen) {
    title = @"Resolve";
  }
  [self.toggleStatusButton setTitle:title
                           forState:UIControlStateNormal];

  BOOL isUserAtBottom = [self hasUserScrolledToBottomOfTableView:self.alertDetailsTableView];
  [self.alertDetailsTableView reloadData];
  if (isUserAtBottom) {
    // Automatically scroll to the bottom
    [self scrollToBottomOfTableView:self.alertDetailsTableView animated:YES];
  }
}

- (void)callNursePressed:(UIGestureRecognizer *)gestureRecognizer {
  NSString *phoneCallURL =
      [NSString stringWithFormat:@"tel:%@", self.alert.creator.phone];
  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:phoneCallURL]];
}

- (void)mrnPressed:(UIGestureRecognizer *)gestureRecognizer {
  UIAlertView *alert =
      [[UIAlertView alloc] initWithTitle:self.alert.patient.mrn
                                 message:@"In the future, this will take you to your EHR system"
                                delegate:self
                       cancelButtonTitle:@"OK"
                       otherButtonTitles:nil];
  [alert show];
}

- (void)dismissKeyboard:(UITapGestureRecognizer *)gestureRecognizer {
  // Dismiss the keyboard only if the touch is not on the enterMessageView.
  CGPoint touchPoint = [gestureRecognizer locationInView:nil];
  CGRect enterMessageViewFrame = [self.enterMessageView convertRect:self.enterMessageView.bounds
                                                             toView:nil];
  if (!CGRectContainsPoint(enterMessageViewFrame, touchPoint)) {
    [self.messageTextField resignFirstResponder];
  }
}

#pragma mark - CCProviderDelegate

- (void) provider:(CCProvider *)provider alertsChanged:(NSArray *)changedAlertIdList {
  for (NSString *alertId in changedAlertIdList) {
    if (alertId == self.alertId) {
      [self updateData];
      [self updateView];
      return;
    }
  }
}

#pragma mark - UITableViewDelegate

- (CGFloat)tableView:(UITableView *)tableView
    heightForHeaderInSection:(NSInteger)section {
  NSLog(@"heightForHeader called for section %d", section);
  CGFloat headerHeight = 35;
  CGSize constraintSize = CGSizeMake(tableView.bounds.size.width, FLT_MAX);

  if (section == 2) {
    NSString *timestamp = [CCUtils userVisibleDateStringFromDate:self.alert.creationDate];
    headerHeight = [CCAlertDetailsAlertHeader sizeThatFits:constraintSize
                                               withMessage:self.alert.alertDescription
                                                 timestamp:timestamp].height;
  }
  return headerHeight;
}

- (UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section {
  if (section == 2) {
    CCAlertDetailsAlertHeader *headerView =
        [tableView dequeueReusableHeaderFooterViewWithIdentifier:@"AlertMessageHeader"];
    headerView.messageLabel.text = self.alert.alertDescription;
    headerView.timestampLabel.text = [CCUtils userVisibleDateStringFromDate:self.alert.creationDate];
//    if (![self.alert.creator.uid isEqualToString:self.thisUser.uid]) {
//      name = self.alert.creator.displayName;
//    }
    return headerView;
  } else {
    UITableViewHeaderFooterView *headerView =
        [tableView dequeueReusableHeaderFooterViewWithIdentifier:@"HeaderView"];
    headerView.tintColor = [UIColor colorWithRed:(239.f/255.)
                                           green:(239.f/255.)
                                            blue:(244.f/255.)
                                           alpha:1.0];
    headerView.textLabel.textColor = [UIColor colorWithRed:(120.f/255.)
                                                     green:(120.f/255.)
                                                      blue:(125.f/255.)
                                                     alpha:1.0];
    headerView.textLabel.font = [UIFont systemFontOfSize:14.0f];
    return headerView;
  }
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
  CGSize cellSize = CGSizeMake(tableView.bounds.size.width, tableView.rowHeight);
  CGSize constraintSize = CGSizeMake(tableView.bounds.size.width, FLT_MAX);
  if (indexPath.section == 0) {
    CCPatient *patient = self.alert.patient;
    cellSize = [CCAlertDetailsPatientCell sizeThatFits:constraintSize
                                           withName:patient.fullName
                                                mrn:patient.mrn
                                                bed:patient.bed];
  } else if (indexPath.section == 1) {
    CCProvider *creator = self.alert.creator;
    cellSize = [CCAlertDetailsNurseCell sizeThatFits:constraintSize
                                         withName:creator.fullName
                                            phone:creator.phone];
  } else if (indexPath.section == 2) {
    NSInteger row = indexPath.row;
    NSString *name = nil;
    NSMutableArray *messages = [[NSMutableArray alloc] init];
    NSMutableArray *timestamps = [[NSMutableArray alloc] init];
    BOOL isAlertMessage = (row == 0);
    if (row == 0) {
      messages = [@[self.alert.alertDescription] mutableCopy];
      timestamps = [@[[CCUtils userVisibleDateStringFromDate:self.alert.creationDate]] mutableCopy];
      if (![self.alert.creator.uid isEqualToString:self.thisUser.uid]) {
        name = self.alert.creator.displayName;
      }
    } else {
      NSMutableArray *alertMessages = self.collatedMessageList[row-1];
      for (CCAlertMessage *alertMessage in alertMessages) {
        [messages addObject:alertMessage.message];
        [timestamps addObject:[CCUtils userVisibleDateStringFromDate:alertMessage.date]];
        if (name == nil && ![alertMessage.sender.uid isEqualToString:self.thisUser.uid]) {
          name = alertMessage.sender.displayName;
        }
      }
    }

    cellSize = [CCAlertDetailsConversationCell sizeThatFits:constraintSize
                                                   withName:name
                                                   messages:messages
                                                 timestamps:timestamps
                                             isAlertMessage:isAlertMessage];
  }
  return cellSize.height;
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
  return 3;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
  switch(section) {
    case 0: return @"PATIENT";
    case 1: return @"NURSE";
    case 2: return @"CONVERSATION";
  }
  return @"UNKNOWN";
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  switch(section) {
    case 0: return 1;
    case 1: return 1;
    case 2: return 1 + [self.collatedMessageList count];
  }
  return 0;
}

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  UITableViewCell *tableViewCell = nil;
  switch(indexPath.section) {
    case 0: {
      CCAlertDetailsPatientCell *cell = [tableView dequeueReusableCellWithIdentifier:@"PatientCell"];
      CCPatient *patient = self.alert.patient;
      cell.nameLabel.text = patient.fullName;
      cell.mrnLabel.text = patient.mrn;
      cell.bedLabel.text = patient.bed;
      UITapGestureRecognizer *tapped =
          [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(mrnPressed:)];
      tapped.numberOfTapsRequired = 1;
      [cell.mrnLabel addGestureRecognizer:tapped];
      tableViewCell = cell;
      break;
    }

    case 1: {
      CCAlertDetailsNurseCell *cell = [tableView dequeueReusableCellWithIdentifier:@"NurseCell"];
      CCProvider *creator = self.alert.creator;
      cell.nameLabel.text = creator.fullName;
      cell.phoneLabel.text = creator.phone;
      UITapGestureRecognizer *tapped =
          [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(callNursePressed:)];
      tapped.numberOfTapsRequired = 1;
      [cell.phoneLabel addGestureRecognizer:tapped];
      tableViewCell = cell;
      break;
    }

    case 2: {
      NSInteger row = indexPath.row;
      NSString *name = nil;
      NSMutableArray *messages = [[NSMutableArray alloc] init];
      NSMutableArray *timestamps = [[NSMutableArray alloc] init];
      if (row == 0) {
        messages = [@[self.alert.alertDescription] mutableCopy];
        timestamps = [@[[CCUtils userVisibleDateStringFromDate:self.alert.creationDate]] mutableCopy];
        if (![self.alert.creator.uid isEqualToString:self.thisUser.uid]) {
          name = self.alert.creator.displayName;
        }
      } else {
        NSMutableArray *alertMessages = self.collatedMessageList[row-1];
        for (CCAlertMessage *alertMessage in alertMessages) {
          [messages addObject:alertMessage.message];
          [timestamps addObject:[CCUtils userVisibleDateStringFromDate:alertMessage.date]];
          if (name == nil && ![alertMessage.sender.uid isEqualToString:self.thisUser.uid]) {
            name = alertMessage.sender.displayName;
          }
        }
      }

      CCAlertDetailsConversationCell *cell =
          [tableView dequeueReusableCellWithIdentifier:@"ConversationCell"];
      cell.isAlertMessage = (row == 0);
      cell.messages = messages;
      cell.timestamps = timestamps;
      if (name == nil || [name isEqualToString:@""]) {
        cell.nameLabel.text = @"";
        cell.isMyMessage = YES;
      } else {
        cell.nameLabel.text = name;
        cell.isMyMessage = NO;
      }

      tableViewCell = cell;
      break;
    }
  }
  return tableViewCell;
}

#pragma mark - Actions

- (IBAction)toggleStatusButtonPressed:(UIButton *)sender {
  [self.alert toggleAlertStatus];
  [self.navigationController popViewControllerAnimated:YES];
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField {
  [self.alert sendMessage:self.messageTextField.text fromProvider:self.thisUser];
  self.messageTextField.text = @"";
  return NO;
}

- (void)keyboardWillShow:(NSNotification*)aNotification {
  [self.navigationController.view addGestureRecognizer:self.dismissKeyboardRecognizer];

  NSDictionary* info = [aNotification userInfo];
  CGFloat kbHeight = [[info objectForKey:UIKeyboardFrameEndUserInfoKey] CGRectValue].size.height;
  NSTimeInterval duration = [[info objectForKey:UIKeyboardAnimationDurationUserInfoKey] doubleValue];
  UIViewAnimationCurve curve = [[info objectForKey:UIKeyboardAnimationCurveUserInfoKey] integerValue];
  UIViewAnimationOptions options = (curve << 16) | UIViewAnimationOptionBeginFromCurrentState;

  // Adjust the text entry field, tableview
  CGRect enterMessageViewFrame = self.enterMessageView.frame;
  enterMessageViewFrame.origin.y -= kbHeight;

  UITableView *tableView = self.alertDetailsTableView;
  UIEdgeInsets contentInsets = tableView.contentInset;
  contentInsets.bottom += kbHeight;
  UIEdgeInsets scrollIndicatorInsets = tableView.scrollIndicatorInsets;
  scrollIndicatorInsets.bottom += kbHeight;

  // Change the contentOffset only when the user is at bottom.
  // In that case, the animation is nice as if the keyboard is pushing the tableview up.
  // If the user is not at bottom, we depend on scrollToBottomOfTableView:animated:
  CGPoint contentOffset = tableView.contentOffset;
  if ([self isLastMessageVisible:tableView]) {
    contentOffset.y = tableView.contentSize.height - tableView.frame.size.height + kbHeight;
  }

  [UIView animateWithDuration:duration
                        delay:0.
                      options:options
                   animations:^{
                     self.enterMessageView.frame = enterMessageViewFrame;
                     tableView.contentOffset = contentOffset;
                     tableView.contentInset = contentInsets;
                     tableView.scrollIndicatorInsets = scrollIndicatorInsets;
                   }
                   completion:^(BOOL finished) {
                     [self scrollToBottomOfTableView:tableView animated:YES];
                   }];
}

- (void)keyboardWillHide:(NSNotification*)aNotification {
  [self.navigationController.view removeGestureRecognizer:self.dismissKeyboardRecognizer];

  NSDictionary* info = [aNotification userInfo];
  CGFloat kbHeight = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size.height;
  NSTimeInterval duration = [[info objectForKey:UIKeyboardAnimationDurationUserInfoKey] doubleValue];
  UIViewAnimationCurve curve = [[info objectForKey:UIKeyboardAnimationCurveUserInfoKey] integerValue];
  UIViewAnimationOptions options = (curve << 16) | UIViewAnimationOptionBeginFromCurrentState;

  // Adjust the text entry field, tableview
  CGRect enterMessageViewFrame = self.enterMessageView.frame;
  enterMessageViewFrame.origin.y =
      CGRectGetMaxY(self.view.bounds) - enterMessageViewFrame.size.height;
  UITableView *tableView = self.alertDetailsTableView;
  UIEdgeInsets contentInsets = tableView.contentInset;
  contentInsets.bottom = 0;
  UIEdgeInsets scrollIndicatorInsets = tableView.scrollIndicatorInsets;
  scrollIndicatorInsets.bottom = 0;

  CGPoint contentOffset = tableView.contentOffset;
  contentOffset.y -= kbHeight;
  if (contentOffset.y < 0) contentOffset.y = 0;

  [UIView animateWithDuration:duration
                        delay:0.
                      options:options
                   animations:^{
                     self.enterMessageView.frame = enterMessageViewFrame;
                     tableView.contentOffset = contentOffset;
                     tableView.contentInset = contentInsets;
                     tableView.scrollIndicatorInsets = scrollIndicatorInsets;
                   }
                   completion:nil];
}

- (BOOL)hasUserScrolledToBottomOfTableView:(UITableView *)tableView {
  CGFloat contentHeight = tableView.contentSize.height + tableView.contentInset.bottom;
  if ((contentHeight > tableView.frame.size.height) &&
      ((tableView.contentOffset.y + tableView.frame.size.height) >= contentHeight)) {
    return YES;
  }
  return NO;
}

- (BOOL)isLastMessageVisible:(UITableView *)tableView {
  if ((tableView.contentOffset.y + tableView.frame.size.height) >= tableView.contentSize.height) {
    return YES;
  }
  return NO;
}

- (void)scrollToBottomOfTableView:(UITableView *)tableView
                         animated:(BOOL)animated {
  NSInteger maxSection = [self numberOfSectionsInTableView:tableView] - 1;
  NSInteger maxRow = [self tableView:tableView numberOfRowsInSection:maxSection] - 1;
  [tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:maxRow inSection:maxSection]
                   atScrollPosition:UITableViewScrollPositionTop
                           animated:animated];
}

@end