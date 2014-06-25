//
//  CCLoginViewController.h
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 5/8/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CCLoginViewController : UIViewController<UITextFieldDelegate>

@property (strong, nonatomic) IBOutlet UIView *backgroundView;
@property (strong, nonatomic) IBOutlet UITextField *usernameTextField;
@property (strong, nonatomic) IBOutlet UITextField *passwordTextField;
@property (strong, nonatomic) IBOutlet UIButton *signInButton;
@property (strong, nonatomic) IBOutlet UIView *overlayView;
@property (strong, nonatomic) IBOutlet UIActivityIndicatorView *signInActivityView;

- (IBAction)signInButtonClicked:(id)sender;
- (IBAction)unwindToLoginViewController:(UIStoryboardSegue *)sender;

@end
