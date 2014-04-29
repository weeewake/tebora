//
//  CCViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCViewController.h"
#import "CCAlertData.h"
#import "CCAlertDetailsViewController.h"

@interface CCViewController ()

@end

@implementation CCViewController

#pragma mark - Initialization

- (NSMutableArray *)allAlerts
{
    if(!_allAlerts) {
        _allAlerts = [[NSMutableArray alloc] init];
    }
    return _allAlerts;
}

- (void)fireBaseTest
{
    // Create a reference to a Firebase location
    Firebase* f = [[Firebase alloc] initWithUrl:@"https://myapp.firebaseIO-demo.com/"];

    // Write data to Firebase
    [f setValue:@"Do you have data? You'll love Firebase."];

    // Read data and react to changes
    [f observeEventType:FEventTypeValue withBlock:^(FDataSnapshot *snapshot) {
        NSLog(@"%@ -> %@", snapshot.name, snapshot.value);
    }];
}

- (void)viewDidLoad
{
    [super viewDidLoad];

    [self fireBaseTest];

	for (NSMutableDictionary *alertData in [CCAlertData allAlerts])
	{
		CCAlert *alert = [[CCAlert alloc] initWithData:alertData];
		[self.allAlerts addObject:alert];
	}

    self.currentAlertTypeFilter = [@"home" mutableCopy];
    self.tableView.dataSource = self;
    self.tableView.delegate = self;
    self.tableView.tableFooterView = [[UIView alloc] initWithFrame:CGRectZero];
    [self updateView];

    self.segmentedControl = [[UISegmentedControl alloc] initWithItems:[NSArray arrayWithObjects:@"Remaining", @"Completed", nil]];
    [self.segmentedControl setSelectedSegmentIndex:0];
    [self.segmentedControl addTarget:self action:@selector(segmentedControlValueChanged:) forControlEvents: UIControlEventValueChanged];
    self.navigationItem.titleView = self.segmentedControl;
    [self.emptyTableView setHidden: YES];
}

- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    if([segue.destinationViewController isKindOfClass:[CCAlertDetailsViewController class]])
    {
        CCAlertDetailsViewController *alertDetailsVC = segue.destinationViewController;
        NSIndexPath *indexPath = sender;
        CCAlert *selectedAlert = self.currentlyVisibleAlerts[indexPath.row];
        alertDetailsVC.alert = selectedAlert;
        alertDetailsVC.delegate = self;
    }
}

-(void)updateView
{
    // Update Table
    NSString *completionStatus = @"ALL";
    NSString *alertType = self.currentAlertTypeFilter;

    if([self.segmentedControl selectedSegmentIndex] == 0) {
        completionStatus = @"NO";
    }
    else {
        completionStatus = @"YES";
    }

    self.currentlyVisibleAlerts = [self alertsOfType:alertType andCompletionStatus:completionStatus];

    [self.tableView reloadData];

    // Update Title
    [self setTitle:[alertType capitalizedString]];

    // Update Toolbar
    if([alertType isEqualToString:@"home"])
    {
        // Hide back button
        [self.navigationItem setLeftBarButtonItems:nil];
    }
    else
    {
        // Show back button
        [self.navigationItem setLeftBarButtonItem:self.backButton];
    }
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Alert Filtering

- (NSArray*) alertsOfType: (NSString *)alertType
{
    if( [alertType isEqualToString:@"home"] ) {
        return self.allAlerts;
    }
    else
    {
        NSPredicate *predicate = [NSPredicate predicateWithBlock:^BOOL(CCAlert *alert, NSDictionary *bindings){
            return [alert.alertType isEqualToString: alertType];
        }];
        return [self.allAlerts filteredArrayUsingPredicate:predicate];
    }

}

- (NSArray*) alertsOfCompletionStatus: (NSString *)completionStatus
{
    NSPredicate *predicate = [NSPredicate predicateWithBlock:^BOOL(CCAlert *alert, NSDictionary *bindings){
        return [alert.isComplete isEqualToString: completionStatus];
    }];

    return [self.allAlerts filteredArrayUsingPredicate:predicate];
}

- (NSArray *) alertsOfType: (NSString *) alertType andCompletionStatus: (NSString *)isComplete
{
    NSMutableOrderedSet *alertsOfType = [NSMutableOrderedSet orderedSetWithArray:[self alertsOfType:alertType]];
    NSMutableOrderedSet *alertsOfCompletionStatus = [NSMutableOrderedSet orderedSetWithArray:[self alertsOfCompletionStatus:isComplete]];

    [alertsOfType intersectOrderedSet:alertsOfCompletionStatus];
    return [alertsOfType array];
}

#pragma mark - CCAlertDetailsViewControllerDelegate

-(void)didSetCompletionStatusOf:(CCAlert *)alert to:(BOOL)status {
    if(status == YES) {
        alert.isComplete = @"YES";
    } else {
        alert.isComplete = @"NO";
    }
    [self updateView];
}

#pragma mark - UITableViewDataSource

-(NSInteger) numberOfSectionsInTableView:tableView
{
    return 1;
}

-(NSInteger) tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    NSInteger rowCount = [self.currentlyVisibleAlerts count];
    if (rowCount == 0) {
        NSString *alertType = ([self.currentAlertTypeFilter isEqualToString:@"home"]) ? @"" : self.currentAlertTypeFilter;
        NSString *completedStatus = ([self.segmentedControl selectedSegmentIndex] == 0) ? @"remaining" : @"completed";
        UILabel *emptyTableLabel = self.emptyTableView.subviews[0];
        emptyTableLabel.text = [NSString stringWithFormat:@"No %@ alerts %@", alertType, completedStatus];
        [self.emptyTableView setHidden:NO];
        return 0;
    }
    else {
        [self.emptyTableView setHidden:YES];
        return rowCount;
    }
}

-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"AlertCell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier forIndexPath:indexPath];
    CCAlert *alert = self.currentlyVisibleAlerts[indexPath.row];
    NSString *alertText = [[NSString alloc] initWithFormat:@"%@ (%@) %@",
                           alert.patientName, alert.patientBed, alert.alertDescription];
    if([alert.isComplete isEqualToString:@"YES"])
    {
        cell.textLabel.textColor = [UIColor lightGrayColor];
        NSDictionary* attributes = @{
                                     NSStrikethroughStyleAttributeName: [NSNumber numberWithInt:NSUnderlineStyleSingle]
                                     };
        NSAttributedString* attrText = [[NSAttributedString alloc] initWithString:alertText attributes:attributes];
        cell.textLabel.attributedText = attrText;
    }
    else
    {
        cell.textLabel.textColor = [UIColor darkGrayColor];
        cell.textLabel.text = alertText;
    }
    cell.detailTextLabel.text = alert.alertTimeAgo;
    cell.imageView.image = [UIImage imageNamed: [[NSString alloc] initWithFormat:@"%@.png", alert.alertType]];
    cell.imageView.userInteractionEnabled = YES;
    cell.imageView.tag = indexPath.row;
    UITapGestureRecognizer *tapped = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(alertImageClicked:)];
    tapped.numberOfTapsRequired = 1;
    [cell.imageView addGestureRecognizer:tapped];
    return cell;
}

#pragma mark - UITableViewDelegate

-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    NSLog(@"%@", indexPath);
    [self performSegueWithIdentifier:@"HomeToAlertDetails" sender:indexPath];
    [tableView deselectRowAtIndexPath:indexPath animated:YES];
}

#pragma mark - Action Handlers

-(void)alertImageClicked :(id) sender
{
    UITapGestureRecognizer *gesture = (UITapGestureRecognizer *) sender;
    CCAlert *thisAlert = self.currentlyVisibleAlerts[gesture.view.tag];
    self.currentAlertTypeFilter =  [[NSString stringWithString: thisAlert.alertType] mutableCopy];
    [self updateView];
}

- (IBAction)backButtonPressed:(UIBarButtonItem *)sender
{
    self.currentAlertTypeFilter = [@"home" mutableCopy];
    [self updateView];
}

- (IBAction)segmentedControlValueChanged:(UISegmentedControl *)sender
{
    [self updateView];
}

@end