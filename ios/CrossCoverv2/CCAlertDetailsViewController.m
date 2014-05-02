//
//  CCAlertDetailsViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsViewController.h"

@interface CCAlertDetailsViewController ()

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
    // Do any additional setup after loading the view.
    
    self.alertImage.image = [UIImage imageNamed: [[NSString alloc] initWithFormat:@"%@.png", self.alert[@"details"][@"type"]]];
    self.alertDescription.text = self.alert[@"details"][@"description"];

    [self.toggleStatusButton setTitle:([self.alert[@"details"][@"status"] isEqualToString:@"OPEN"]) ? @"Resolve" : @"Reopen" forState:UIControlStateNormal];
    
    self.alertDetailsTableView.dataSource = self;
    self.alertDetailsTableView.delegate = self;
    self.alertDetailsTableView.allowsSelection = NO;
    self.alertDetailsTableView.separatorStyle = UITableViewCellSeparatorStyleNone;
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/


-(void)callNursePressed :(id) sender
{
    NSString *phoneCallURL = [NSString stringWithFormat:@"tel:%@", self.alert[@"creator"][@"phone"]];
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString: phoneCallURL]];
}

- (IBAction)toggleStatusButtonPressed:(UIButton *)sender {
    if([self.alert[@"details"][@"status"] isEqualToString:@"OPEN"])
    {
        Firebase* detailsRef = [[Firebase alloc] initWithUrl:self.alert[@"fireBaseURLForDetails"]];
        [detailsRef updateChildValues:@{@"status": @"RESOLVED"}];
    }
    else
    {
        Firebase* detailsRef = [[Firebase alloc] initWithUrl:self.alert[@"fireBaseURLForDetails"]];
        [detailsRef updateChildValues:@{@"status": @"OPEN"}];
    }
    [self.navigationController popViewControllerAnimated:YES];
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 3;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    // The header for the section is the region name -- get this from the region at the section index.
    switch(section) {
        case 0: return @"Patient Details";
        case 1: return @"Nurse Details";
        case 2: return @"Conversation";
    }
    return @"Unknown";
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 58.0;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {

    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"NameCell"];
    UILabel *titleLabel, *valueLabel;
    titleLabel = (UILabel *)[cell.contentView viewWithTag:1];
    valueLabel = (UILabel *)[cell.contentView viewWithTag:2];

    switch(indexPath.section) {
        case 0:
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
            break;
        case 1:
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
            break;
        case 2:
            cell = [tableView dequeueReusableCellWithIdentifier:@"MessageCell"];
            titleLabel = (UILabel *)[cell.contentView viewWithTag:1];
            valueLabel = (UILabel *)[cell.contentView viewWithTag:2];
            titleLabel.text = self.alert[@"messages"][indexPath.row][@"sender"][@"name"];
            valueLabel.text = self.alert[@"messages"][indexPath.row][@"message"];
            break;
    }

    return cell;

}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    switch(section) {
        case 0: return 3;
        case 1: return 2;
        case 2: return [self.alert[@"messages"] count];
    }
    return 0;
    //    return [self.messages count];
}

@end