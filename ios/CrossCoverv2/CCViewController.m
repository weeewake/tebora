//
//  CCViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCViewController.h"
#import "CCAlertDetailsViewController.h"

@interface CCViewController ()

@end

@implementation CCViewController

#pragma mark - Initialization

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.user = [@{@"id":@4} mutableCopy];
    [self loadAlertData];
    
    self.currentTypeFilter = [@"HOME" mutableCopy];
    self.currentStatusFilter = [@"OPEN" mutableCopy];
    
    self.tableView.dataSource = self;
    self.tableView.delegate = self;
    self.tableView.tableFooterView = [[UIView alloc] initWithFrame:CGRectZero];
    
    self.segmentedControl = [[UISegmentedControl alloc] initWithItems:[NSArray arrayWithObjects:@"Open", @"Resolved", nil]];
    [self.segmentedControl setSelectedSegmentIndex:0];
    [self.segmentedControl addTarget:self action:@selector(segmentedControlValueChanged:) forControlEvents: UIControlEventValueChanged];
    self.navigationItem.titleView = self.segmentedControl;
    
    [self.emptyTableView setHidden: YES];
    [self updateView];
}

- (void) loadAlertData
{
    self.alertList = [[NSMutableArray alloc] init];
    
    Firebase *alertsListRef = [[Firebase alloc] initWithUrl:[NSString stringWithFormat:@"https://tebora.firebaseio.com/user/%@/channels", self.user[@"id"]]];
    
    [alertsListRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
        [self alertListChangedTo: snapshot.value];
    }];
}

- (void) alertListChangedTo: (NSDictionary *) newAlertList
{
    self.alertList = [[newAlertList allValues] mutableCopy];
    
    for(NSDictionary *alert in self.alertList) {
        Firebase *alertRef = [[Firebase alloc] initWithUrl:[NSString stringWithFormat:@"https://tebora.firebaseio.com/channel/%@", alert[@"id"]]];
        
        [alertRef observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
            NSMutableDictionary *changedAlert = [snapshot.value mutableCopy];
            [changedAlert setValue:snapshot.name forKey:@"id"];
            
            NSInteger index = [self.alertList indexOfObjectPassingTest:^BOOL(NSDictionary *alert, NSUInteger idx, BOOL *stop) { return [alert[@"id"] isEqualToString:changedAlert[@"id"]];}];
            
            if(index == NSNotFound)
            {
                [self.alertList addObject:changedAlert];
            } else
            {
                self.alertList[index] = changedAlert;
            }
            [self updateView];
        }];
    }
}

- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    if([segue.destinationViewController isKindOfClass:[CCAlertDetailsViewController class]])
    {
        CCAlertDetailsViewController *alertDetailsVC = segue.destinationViewController;
        NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath:sender];
        NSMutableDictionary *thisAlert = self.alertList[thisIndex];
        alertDetailsVC.alert = thisAlert;
    }
}

-(void)updateView
{
    [self setTitle:[self.currentTypeFilter capitalizedString]];
    
    if([self.currentTypeFilter isEqualToString:@"HOME"])
    {
        [self.navigationItem setLeftBarButtonItems:nil];
    }
    else
    {
        [self.navigationItem setLeftBarButtonItem:self.backButton];
    }
    
    self.indexesOfCurrentlyDisplayedAlerts = [self.alertList indexesOfObjectsPassingTest:^BOOL(NSDictionary *thisAlert, NSUInteger idx, BOOL *stop) {
        if([self.currentTypeFilter isEqualToString:@"HOME"])
        {
            return [thisAlert[@"details"][@"status"] isEqualToString: self.currentStatusFilter];
        } else
        {
            return [thisAlert[@"details"][@"status"] isEqualToString: self.currentStatusFilter] && [thisAlert[@"details"][@"type"] isEqualToString:self.currentTypeFilter];
        }
    }];
    
    [self.tableView reloadData];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - UITableViewDataSource

-(NSInteger) numberOfSectionsInTableView:tableView
{
    return 1;
}

-(NSInteger) tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    NSInteger count = [self.indexesOfCurrentlyDisplayedAlerts count];
    if(count > 0) {
        [self.emptyTableView setHidden:YES];
        return count;
    } else {
        NSString *emptyTableViewMessage = [NSString stringWithFormat:@"No %@ alerts %@",
                                           [self.currentTypeFilter isEqualToString:@"HOME"] ? @"" : [self.currentTypeFilter capitalizedString],
                                           [self.currentStatusFilter capitalizedString]];
        UILabel *emptyTableViewLabel = (UILabel *)[self.emptyTableView viewWithTag:1];
        emptyTableViewLabel.text = emptyTableViewMessage;
        [self.emptyTableView setHidden:NO];
        return count;
    }
}

-(NSInteger) indexInAlertListForTableViewIndexPath: (NSIndexPath *)indexPath
{
    NSUInteger thisIndex = [self.indexesOfCurrentlyDisplayedAlerts firstIndex];
    
    for (NSUInteger i = 0; i < indexPath.row; i++)
        thisIndex = [self.indexesOfCurrentlyDisplayedAlerts indexGreaterThanIndex:thisIndex];
    
    return thisIndex;
}

-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"AlertCell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier forIndexPath:indexPath];
    
    NSUInteger thisIndex = [self indexInAlertListForTableViewIndexPath: indexPath];
    NSDictionary *thisAlert = self.alertList[thisIndex];
    
    NSString *alertText = [NSString stringWithFormat:@"%@ [%@] %@", thisAlert[@"patient"][@"name"], thisAlert[@"patient"][@"bed"], thisAlert[@"details"][@"description"]];
    
    cell.textLabel.textColor = [UIColor darkGrayColor];
    cell.textLabel.text = alertText;
    
    cell.detailTextLabel.text = thisAlert[@"details"][@"timestamp"];
    
    cell.imageView.image = [UIImage imageNamed: [NSString stringWithFormat:@"%@.png", thisAlert[@"details"][@"type"]]];
    cell.imageView.userInteractionEnabled = YES;
    cell.imageView.tag = thisIndex;
    UITapGestureRecognizer *tapped = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(alertImageClicked:)];
    tapped.numberOfTapsRequired = 1;
    [cell.imageView addGestureRecognizer:tapped];
    return cell;
}

#pragma mark - UITableViewDelegate

-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    //    NSLog(@"%@", indexPath);
    [self performSegueWithIdentifier:@"HomeToAlertDetails" sender:indexPath];
    [tableView deselectRowAtIndexPath:indexPath animated:YES];
}

#pragma mark - Action Handlers

-(void)alertImageClicked :(id) sender
{
    UITapGestureRecognizer *gesture = (UITapGestureRecognizer *) sender;
    self.currentTypeFilter = self.alertList[gesture.view.tag][@"details"][@"type"];
    [self updateView];
}

- (IBAction)backButtonPressed:(UIBarButtonItem *)sender
{
    self.currentTypeFilter = [@"HOME" mutableCopy];
    [self updateView];
}

- (void)segmentedControlValueChanged:(UISegmentedControl *)sender
{
    if([self.segmentedControl selectedSegmentIndex] == 0) {
        self.currentStatusFilter = @"OPEN";
    }
    else {
        self.currentStatusFilter = @"RESOLVED";
    }
    [self updateView];
}

@end