//
//  CCAlertDetailsViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "CCUser.h"

@interface CCAlertDetailsViewController : UIViewController<UITableViewDataSource,
                                                           UITableViewDelegate,
                                                           UITextFieldDelegate>
// Views
@property (strong, nonatomic) IBOutlet UITableView *alertDetailsTableView;
@property (strong, nonatomic) IBOutlet UIButton *toggleStatusButton;
@property (strong, nonatomic) IBOutlet UITextField *enterMessageTextField;

// View State
@property (strong, nonatomic) UITextField *activeField;

// Model
@property (strong, nonatomic) NSMutableDictionary *alert;
@property (strong, nonatomic) CCUser *thisUser;

// Actions
- (IBAction)toggleStatusButtonPressed:(UIButton *)sender;
- (IBAction)sendMessageButtonPressed:(UIButton *)sender;

@end
