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
@property (strong, nonatomic) NSArray *messageList;

@end

@implementation CCAlertDetailsViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  [self registerForKeyboardNotifications];
  self.enterMessageTextField.delegate = self;

  UITableView *tableView = self.alertDetailsTableView;
  [tableView registerClass:[CCAlertDetailsPatientCell class] forCellReuseIdentifier:@"PatientCell"];
  [tableView registerClass:[CCAlertDetailsNurseCell class] forCellReuseIdentifier:@"NurseCell"];
  [tableView registerClass:[CCAlertDetailsConversationCell class]
    forCellReuseIdentifier:@"ConversationCell"];
  tableView.delegate = self;
  tableView.dataSource = self;
  tableView.sectionHeaderHeight = 30;
  // Warning: Don't set the estimatedRowHeight. The perf improvement is negligible for us
  // but it messes with scrollToRowAtIndexPath:atScrollPosition:animated:
  // so we can't automatically scroll the last message!
  //     tableView.estimatedRowHeight = tableView.rowHeight;
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  [self updateData];
  self.thisUser.delegate = self;
  [self updateView];
}

- (void)viewDidDisappear:(BOOL)animated {
  [super viewDidDisappear:animated];
  if (self.thisUser.delegate == self) {
    self.thisUser.delegate = nil;
  }
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
  self.messageList = [self.alert.messages sortedArrayUsingComparator:sortMessageList];
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
    [self scrollToBottomOfTableView:self.alertDetailsTableView];
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

- (void)tableView:(UITableView *)tableView
    willDisplayHeaderView:(UIView *)view
               forSection:(NSInteger)section {
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
    NSString *message = nil, *timestamp = nil, *name = nil;
    BOOL isAlertMessage = NO;
    if (row == 0) {
      message = self.alert.alertDescription;
      timestamp = [CCUtils userVisibleDateStringFromDate:self.alert.creationDate];
      if (![self.alert.creator.uid isEqualToString:self.thisUser.uid]) {
        name = self.alert.creator.displayName;
      }
      isAlertMessage = YES;
    } else {
      CCAlertMessage *alertMessage = self.messageList[row-1];
      message = alertMessage.message;
      timestamp = [CCUtils userVisibleDateStringFromDate:alertMessage.date];
      if (![alertMessage.sender.uid isEqualToString:self.thisUser.uid]) {
        name = alertMessage.sender.displayName;
      }
    }

    cellSize = [CCAlertDetailsConversationCell sizeThatFits:constraintSize
                                                withName:name
                                                 message:message
                                               timestamp:timestamp
                                          isAlertMessage:isAlertMessage];
  }
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

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  switch(section) {
    case 0: return 1;
    case 1: return 1;
    case 2: return 1 + [self.messageList count];
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
      CCAlertDetailsConversationCell *cell =
          [tableView dequeueReusableCellWithIdentifier:@"ConversationCell"];
      NSInteger row = indexPath.row;
      cell.isAlertMessage = (row == 0);
      cell.nameLabel.text = @"";
      cell.isMyMessage = YES;
      if (row == 0) {
        cell.messageLabel.text = self.alert.alertDescription;
        cell.timestampLabel.text = [CCUtils userVisibleDateStringFromDate:self.alert.creationDate];
        if (![self.alert.creator.uid isEqualToString:self.thisUser.uid]) {
          cell.nameLabel.text = self.alert.creator.displayName;
          cell.isMyMessage = NO;
        }
      } else {
        CCAlertMessage *alertMessage = self.messageList[row-1];
        if (![alertMessage.sender.uid isEqualToString:self.thisUser.uid]) {
          cell.nameLabel.text = alertMessage.sender.displayName;
          cell.isMyMessage = NO;
        }
        cell.messageLabel.text = alertMessage.message;
        cell.timestampLabel.text = [CCUtils userVisibleDateStringFromDate:alertMessage.date];
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
  [self.alert sendMessage:self.enterMessageTextField.text fromProvider:self.thisUser];
  self.enterMessageTextField.text = @"";
  return NO;
}

- (void)keyboardWillShow:(NSNotification*)aNotification {
  NSDictionary* info = [aNotification userInfo];
  CGFloat kbHeight = [[info objectForKey:UIKeyboardFrameEndUserInfoKey] CGRectValue].size.height;
  NSTimeInterval duration = [[info objectForKey:UIKeyboardAnimationDurationUserInfoKey] doubleValue];
  UIViewAnimationCurve curve = [[info objectForKey:UIKeyboardAnimationCurveUserInfoKey] integerValue];
  UIViewAnimationOptions options = (curve << 16) | UIViewAnimationOptionBeginFromCurrentState;

  // Adjust the text entry field, tableview
  CGRect textFieldFrame = self.enterMessageTextField.superview.frame;
  textFieldFrame.origin.y -= kbHeight;

  UITableView *tableView = self.alertDetailsTableView;
  UIEdgeInsets contentInsets = tableView.contentInset;
  contentInsets.bottom += kbHeight;
  UIEdgeInsets scrollIndicatorInsets = tableView.scrollIndicatorInsets;
  scrollIndicatorInsets.bottom += kbHeight;

  // Changing the contentOffset seems to animate the tableview.
  // Changing insets doesn't seem to animate when keyboard comes up.
  CGPoint contentOffset = tableView.contentOffset;
  contentOffset.y = tableView.contentSize.height - tableView.frame.size.height + kbHeight;

  [UIView animateWithDuration:duration
                        delay:0.
                      options:options
                   animations:^{
                     self.enterMessageTextField.superview.frame = textFieldFrame;
                     tableView.contentOffset = contentOffset;
                   }
                   completion:^(BOOL finished) {
                     tableView.contentInset = contentInsets;
                     tableView.scrollIndicatorInsets = scrollIndicatorInsets;
                     // Fix the contentOffset by scrolling to the end.
                     // This shouldn't cause any visual position change,
                     // only UITableView internal data update.
                     [self scrollToBottomOfTableView:tableView];
                   }];
}

- (void)keyboardWillHide:(NSNotification*)aNotification {
  NSDictionary* info = [aNotification userInfo];
  CGFloat kbHeight = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size.height;
  NSTimeInterval duration = [[info objectForKey:UIKeyboardAnimationDurationUserInfoKey] doubleValue];
  UIViewAnimationCurve curve = [[info objectForKey:UIKeyboardAnimationCurveUserInfoKey] integerValue];
  UIViewAnimationOptions options = (curve << 16) | UIViewAnimationOptionBeginFromCurrentState;

  // Adjust the text entry field, tableview
  CGRect textFieldFrame = self.enterMessageTextField.superview.frame;
  textFieldFrame.origin.y += kbHeight;
  UITableView *tableView = self.alertDetailsTableView;
  UIEdgeInsets contentInsets = tableView.contentInset;
  contentInsets.bottom -= kbHeight;
  UIEdgeInsets scrollIndicatorInsets = tableView.scrollIndicatorInsets;
  scrollIndicatorInsets.bottom -= kbHeight;

  CGPoint contentOffset = tableView.contentOffset;
  contentOffset.y -= kbHeight;
  [UIView animateWithDuration:duration
                        delay:0.
                      options:options
                   animations:^{
                     self.enterMessageTextField.superview.frame = textFieldFrame;
                     tableView.contentOffset = contentOffset;
                     tableView.contentInset = contentInsets;
                     tableView.scrollIndicatorInsets = scrollIndicatorInsets;
                   }
                   completion:nil];
}

- (BOOL)hasUserScrolledToBottomOfTableView:(UITableView *)tableView {
  CGFloat contentHeight = tableView.contentSize.height + tableView.contentInset.bottom;
  if((contentHeight > tableView.frame.size.height) &&
     ((tableView.contentOffset.y + tableView.frame.size.height) >= contentHeight)) {
    return YES;
  }
  return NO;
}

- (void)scrollToBottomOfTableView:(UITableView *)tableView {
  NSInteger maxSection = [self numberOfSectionsInTableView:tableView] - 1;
  NSInteger maxRow = [self tableView:tableView numberOfRowsInSection:maxSection] - 1;
  [tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:maxRow inSection:maxSection]
                   atScrollPosition:UITableViewScrollPositionTop
                           animated:YES];
}

@end