//
//  CCAlertDetailsViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>

// Views
@interface CCAlertDetailsViewController : UIViewController <UITableViewDataSource, UITableViewDelegate>
@property (strong, nonatomic) IBOutlet UIImageView *alertImage;
@property (strong, nonatomic) IBOutlet UILabel *alertDescription;
@property (strong, nonatomic) IBOutlet UITableView *alertDetailsTableView;
@property (strong, nonatomic) IBOutlet UIButton *toggleStatusButton;

// Model
@property (strong, nonatomic) NSDictionary *alert;


// Actions
- (IBAction)toggleStatusButtonPressed:(UIButton *)sender;


@end
