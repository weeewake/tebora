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
        
        NSComparator sortMessageList = ^(NSMutableDictionary *msg1, NSMutableDictionary *msg2)
        {
            return [msg2[@"timestamp"] compare:msg1[@"timestamp"]];
        };
        
        self.messageList = [[self.messageList sortedArrayUsingComparator:sortMessageList] mutableCopy];

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


- (void)tableView:(UITableView *)tableView willDisplayCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath {
    if (indexPath.section == 3 && indexPath.row%2 == 0) {
        UIColor *altCellColor = [UIColor colorWithWhite:0.985 alpha:1];
        cell.backgroundColor = altCellColor;
        [cell.contentView sizeToFit];
    }
}

//Add subviews to a cell’s content view.

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    UITableViewCell *cell;
    
    switch(indexPath.section) {
        case 0: {
            cell = [tableView dequeueReusableCellWithIdentifier:@"AlertCell"];
            cell.imageView.image = [UIImage imageNamed: [[NSString alloc] initWithFormat:@"%@.png", self.alert[@"details"][@"type"]]];
            cell.textLabel.text = self.alert[@"details"][@"description"];
            return cell;
        }
            
        case 1: {
            cell = [tableView dequeueReusableCellWithIdentifier:@"NameCell"];
            switch(indexPath.row) {
                case 0:
                    cell.textLabel.text = self.alert[@"patient"][@"name"];
                    break;
                case 1:
                    cell.textLabel.text = self.alert[@"patient"][@"mrn"];
                    break;
                case 2:
                    cell.textLabel.text = self.alert[@"patient"][@"bed"];
                    break;
            }
            return cell;
        }
            
        case 2: {
            UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"NameCell"];
            switch(indexPath.row) {
                case 0:
                    cell.textLabel.text = self.alert[@"creator"][@"name"];
                    break;
                case 1:
                    cell.textLabel.text = self.alert[@"creator"][@"phone"];
                    cell.textLabel.textColor = [UIColor blueColor];
                    cell.textLabel.userInteractionEnabled = YES;
                    UITapGestureRecognizer *tapped = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(callNursePressed:)];
                    tapped.numberOfTapsRequired = 1;
                    [cell.textLabel addGestureRecognizer:tapped];
                    break;
            }
            return cell;
        }
            
        case 3: {
            UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"MessageCell"];
            UILabel *timestampLabel;
            if([[cell.contentView subviews] count] <= 3)
            {
                timestampLabel = [[UILabel alloc] initWithFrame:CGRectMake(250, 0, 60, 20)];
                [cell.contentView addSubview:timestampLabel];
                timestampLabel.font = [UIFont systemFontOfSize:10.0];
                timestampLabel.textAlignment = NSTextAlignmentRight;
                timestampLabel.textColor = [UIColor lightGrayColor];
            } else
            {
                timestampLabel = [cell.contentView subviews][3];
            }

            cell.textLabel.text = self.messageList[indexPath.row][@"sender"][@"name"];
            cell.detailTextLabel.text = self.messageList[indexPath.row][@"message"];
            timestampLabel.text = [self userVisibleDateStringFromTimestamp: self.messageList[indexPath.row][@"timestamp"]];
            return cell;
        }
    }
    return cell;
}

- (NSString *) userVisibleDateStringFromTimestamp: (NSString *) timestampString
{
    long long timestamp = [timestampString longLongValue];
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateStyle:NSDateFormatterNoStyle];
    [dateFormatter setTimeStyle:NSDateFormatterShortStyle];
    
    NSDate *date = [NSDate dateWithTimeIntervalSince1970:timestamp];
    
    NSString *formattedDateString = [dateFormatter stringFromDate:date];
    
    return formattedDateString;
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
    self.enterMessageTextField.text = @"";
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


//Listing 5-7  Adding subviews to a cell’s content view
//#define MAINLABEL_TAG 1
//#define SECONDLABEL_TAG 2
//#define PHOTO_TAG 3

//- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
//    
//    static NSString *CellIdentifier = @"ImageOnRightCell";
//    
//    UILabel *mainLabel, *secondLabel;
//    UIImageView *photo;
//    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
//    if (cell == nil) {
//        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier];
//        cell.accessoryType = UITableViewCellAccessoryDetailDisclosureButton;
//        
//        mainLabel = [[UILabel alloc] initWithFrame:CGRectMake(0.0, 0.0, 220.0, 15.0)];
//        mainLabel.tag = MAINLABEL_TAG;
//        mainLabel.font = [UIFont systemFontOfSize:14.0];
//        mainLabel.textAlignment = UITextAlignmentRight;
//        mainLabel.textColor = [UIColor blackColor];
//        mainLabel.autoresizingMask = UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleHeight;
//        [cell.contentView addSubview:mainLabel];
//        
//        secondLabel = [[UILabel alloc] initWithFrame:CGRectMake(0.0, 20.0, 220.0, 25.0)];
//        secondLabel.tag = SECONDLABEL_TAG;
//        secondLabel.font = [UIFont systemFontOfSize:12.0];
//        secondLabel.textAlignment = UITextAlignmentRight;
//        secondLabel.textColor = [UIColor darkGrayColor];
//        secondLabel.autoresizingMask = UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleHeight;
//        [cell.contentView addSubview:secondLabel];
//        
//        photo = [[UIImageView alloc] initWithFrame:CGRectMake(225.0, 0.0, 80.0, 45.0)];
//        photo.tag = PHOTO_TAG;
//        photo.autoresizingMask = UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleHeight;
//        [cell.contentView addSubview:photo];
//    } else {
//        mainLabel = (UILabel *)[cell.contentView viewWithTag:MAINLABEL_TAG];
//        secondLabel = (UILabel *)[cell.contentView viewWithTag:SECONDLABEL_TAG];
//        photo = (UIImageView *)[cell.contentView viewWithTag:PHOTO_TAG];
//    }
//    NSDictionary *aDict = [self.list objectAtIndex:indexPath.row];
//    mainLabel.text = [aDict objectForKey:@"mainTitleKey"];
//    secondLabel.text = [aDict objectForKey:@"secondaryTitleKey"];
//    NSString *imagePath = [[NSBundle mainBundle] pathForResource:[aDict objectForKey:@"imageKey"] ofType:@"png"];
//    UIImage *theImage = [UIImage imageWithContentsOfFile:imagePath];
//    photo.image = theImage;
//    
//    return cell;
//}