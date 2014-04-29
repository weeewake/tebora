//
//  CCAlertDetailsViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 4/13/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "CCAlert.h"


// Protocols
@protocol CCAlertDetailsViewControllerDelegate <NSObject>
-(void) didSetCompletionStatusOf:(CCAlert *)alert to:(BOOL)status;
@end

// Views
@interface CCAlertDetailsViewController : UIViewController <UITableViewDataSource, UITableViewDelegate>
@property (strong, nonatomic) IBOutlet UIImageView *alertImage;
@property (strong, nonatomic) IBOutlet UILabel *alertDescription;
@property (strong, nonatomic) IBOutlet UIButton *callNurse;
@property (strong, nonatomic) IBOutlet UIButton *toggleCompleteButton;
@property (strong, nonatomic) IBOutlet UITableView *messagesTableView;

// Delegate
@property (weak, nonatomic) id <CCAlertDetailsViewControllerDelegate> delegate;

// Model
@property (strong, nonatomic) CCAlert *alert;
@property (strong, nonatomic) NSArray *messages;


// Actions
- (IBAction)completeButtonPressed:(UIButton *)sender;

@end
