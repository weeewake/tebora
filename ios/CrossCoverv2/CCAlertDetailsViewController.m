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
  [self.alertDetailsTableView registerClass:[CCAlertDetailsPatientCell class]
                     forCellReuseIdentifier:@"PatientCell"];
  [self.alertDetailsTableView registerClass:[CCAlertDetailsNurseCell class]
                     forCellReuseIdentifier:@"NurseCell"];
  [self.alertDetailsTableView registerClass:[CCAlertDetailsConversationCell class]
                     forCellReuseIdentifier:@"ConversationCell"];

  [self registerForKeyboardNotifications];

  self.enterMessageTextField.delegate = self;
  self.alertDetailsTableView.delegate = self;
  self.alertDetailsTableView.dataSource = self;
  self.alertDetailsTableView.sectionHeaderHeight = 30;
  self.alertDetailsTableView.estimatedRowHeight = self.alertDetailsTableView.rowHeight;
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
                                           selector:@selector(keyboardWasShown:)
                                               name:UIKeyboardDidShowNotification object:nil];
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(keyboardWillBeHidden:)
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
  [self.alertDetailsTableView reloadData];
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
      name = self.alert.creator.displayName;
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

//Add subviews to a cell’s content view.

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
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
      return cell;
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
      return cell;
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
      return cell;
    }
  }
  return nil;
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
  [self.alert toggleAlertStatus];
  [self.navigationController popViewControllerAnimated:YES];
}

- (IBAction)sendMessageButtonPressed:(UIButton *)sender
{
  [self.alert sendMessage:self.enterMessageTextField.text fromProvider:self.thisUser];
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