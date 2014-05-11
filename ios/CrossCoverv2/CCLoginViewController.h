//
//  CCLoginViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 5/8/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CCLoginViewController : UIViewController <UITextFieldDelegate>

@property (strong, nonatomic) IBOutlet UITextField *usernameTextField;
@property (strong, nonatomic) IBOutlet UITextField *passwordTextField;
@property (strong, nonatomic) IBOutlet UIButton *loginButton;

- (IBAction)loginButton:(UIButton *)sender;

@end
