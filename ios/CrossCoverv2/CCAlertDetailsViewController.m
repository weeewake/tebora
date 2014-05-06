//
//  CCAlertDetailsViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

@interface CCAlertDetailsViewController ()
@property (strong, nonatomic) NSArray *messageList;

@end

@implementation CCAlertDetailsViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    [self registerForKeyboardNotifications];
    
    self.enterMessageTextField.delegate = self;
    self.alertDetailsTableView.delegate = self;
    self.alertDetailsTableView.dataSource = self;
    
    self.alertDetailsTableView.allowsSelection = NO;
    self.alertDetailsTableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    
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
        self.messageList = [snapshot.value[@"messages"] allValues];
        [self updateView];
    }];
}

- (void)updateView
{
    [self.toggleStatusButton setTitle:([self.alert[@"details"][@"status"] isEqualToString:@"OPEN"]) ? @"Resolve" : @"Reopen" forState:UIControlStateNormal];
    
    [self.alertDetailsTableView reloadData];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)callNursePressed :(id) sender
{
    NSString *phoneCallURL = [NSString stringWithFormat:@"tel:%@", self.alert[@"creator"][@"phone"]];
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString: phoneCallURL]];
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 4;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    // The header for the section is the region name -- get this from the region at the section index.
    switch(section) {
        case 0: return @"Alert Details";
        case 1: return @"Patient Details";
        case 2: return @"Nurse Details";
        case 3: return @"Conversation";
    }
    return @"Unknown";
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    switch(indexPath.section) {
        case 0:
        case 1:
        case 2:
            return 50;
        case 3:
            return 80;
    }
    return 50;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    UITableViewCell *cell;
    
    switch(indexPath.section) {
        case 0: {
            cell = [tableView dequeueReusableCellWithIdentifier:@"AlertCell"];
            UIImageView *alertImage = (UIImageView *)[cell.contentView viewWithTag:1];
            UILabel *alertLabel = (UILabel *)[cell.contentView viewWithTag:2];
            alertImage.image = [UIImage imageNamed: [[NSString alloc] initWithFormat:@"%@.png", self.alert[@"details"][@"type"]]];
            alertLabel = self.alert[@"details"][@"description"];
            return cell;
        }
            
        case 1: {
            cell = [tableView dequeueReusableCellWithIdentifier:@"NameCell"];
            UILabel *titleLabel, *valueLabel;
            
            titleLabel = (UILabel *)[cell.contentView viewWithTag:1];
            valueLabel = (UILabel *)[cell.contentView viewWithTag:2];
            
            switch(indexPath.row) {
                case 0:
                    titleLabel.text = @"Name";
                    valueLabel.text = self.alert[@"patient"][@"name"];
                    break;
                case 1:
                    titleLabel.text = @"MRN";
                    valueLabel.text = self.alert[@"patient"][@"mrn"];
                    break;
                case 2:
                    titleLabel.text = @"Bed";
                    valueLabel.text = self.alert[@"patient"][@"bed"];
                    break;
            }
            return cell;
        }
            
        case 2: {
            UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"NameCell"];
            UILabel *titleLabel, *valueLabel;
            
            titleLabel = (UILabel *)[cell.contentView viewWithTag:1];
            valueLabel = (UILabel *)[cell.contentView viewWithTag:2];
            
            switch(indexPath.row) {
                case 0:
                    titleLabel.text = @"Name";
                    valueLabel.text = self.alert[@"creator"][@"name"];
                    break;
                case 1:
                    titleLabel.text = @"Phone";
                    valueLabel.text = self.alert[@"creator"][@"phone"];
                    cell.detailTextLabel.textColor = [UIColor blueColor];
                    cell.detailTextLabel.tag = indexPath.row;
                    cell.detailTextLabel.userInteractionEnabled = YES;
                    UITapGestureRecognizer *tapped = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(callNursePressed:)];
                    tapped.numberOfTapsRequired = 1;
                    [cell.detailTextLabel addGestureRecognizer:tapped];
                    break;
            }
            return cell;
        }
            
        case 3: {
            UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"MessageCell"];
            UILabel *titleLabel, *valueLabel;
            
            titleLabel = (UILabel *)[cell.contentView viewWithTag:1];
            valueLabel = (UILabel *)[cell.contentView viewWithTag:2];
            titleLabel.text = self.messageList[indexPath.row][@"sender"][@"name"];
            valueLabel.text = self.messageList[indexPath.row][@"message"];
            return cell;
        }
    }
    return cell;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    switch(section) {
        case 0: return 1;
        case 1: return 3;
        case 2: return 2;
        case 3: return [self.messageList count];
    }
    return 0;
}

#pragma mark - Actions

- (IBAction)toggleStatusButtonPressed:(UIButton *)sender {

    Firebase* alertDetailsRef = [[Firebase alloc] initWithUrl:[NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@/details", self.alert[@"id"]]];

    if([self.alert[@"details"][@"status"] isEqualToString:@"OPEN"])
    {
        [alertDetailsRef updateChildValues:@{@"status": @"RESOLVED"}];
    }
    else
    {
        [alertDetailsRef updateChildValues:@{@"status": @"OPEN"}];
    }
    [self.navigationController popViewControllerAnimated:YES];
}

- (IBAction)sendMessageButtonPressed:(UIButton *)sender
{
    if(![self.enterMessageTextField.text isEqualToString:@""])
    {
        Firebase* messagesRef = [[Firebase alloc] initWithUrl:[NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@/messages/", self.alert[@"id"]]];
        Firebase* newMessageRef = [messagesRef childByAutoId];
        NSDictionary *newMessage = @{@"message": self.enterMessageTextField.text, @"sender": @ {@"name": @"Bob"}, @"timestamp": @"1111"};
        [newMessageRef setValue:newMessage];
    }
    [self.enterMessageTextField resignFirstResponder];
    [self updateView];
}

- (void)keyboardWasShown:(NSNotification*)aNotification {
    NSDictionary* info = [aNotification userInfo];
    CGSize kbSize = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size;
    
    CGRect bkgndRect = self.enterMessageTextField.superview.frame;
    bkgndRect.origin.y -= kbSize.height;
    
    [self.enterMessageTextField.superview setFrame:bkgndRect];
}

- (void)keyboardWillBeHidden:(NSNotification*)aNotification
{
    NSDictionary* info = [aNotification userInfo];
    CGSize kbSize = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size;
    
    CGRect bkgndRect = self.enterMessageTextField.superview.frame;
    bkgndRect.origin.y += kbSize.height;
    
    [self.enterMessageTextField.superview setFrame:bkgndRect];
}

@end