//
//  CCLoginViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 5/8/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCSettings.h"
#import "CCLoginViewController.h"
#import "CCViewController.h"

@interface CCLoginViewController ()

@property (strong, nonatomic) UIView *usernameFieldPaddingView;
@property (strong, nonatomic) UIView *passwordFieldPaddingView;

@end

@implementation CCLoginViewController

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
  UINavigationController *navVC = [segue destinationViewController];
  CCViewController *vc = (CCViewController *)navVC.topViewController;
  vc.thisUser = (FAUser *)sender;
}

- (void)viewDidLoad
{
  [super viewDidLoad];

  // Set the background to be our blue.
  self.backgroundView.backgroundColor = [CCSettings tintColor];

  // Add a white border to the sign in button and round the corners.
  CALayer *signInButtonLayer = self.signInButton.layer;
  signInButtonLayer.borderWidth = 1.0f;
  signInButtonLayer.borderColor = [[UIColor whiteColor] CGColor];
  signInButtonLayer.cornerRadius = 1.5f;
  signInButtonLayer.masksToBounds = YES;

  // Add a padding to the username and password text fields.
  self.usernameTextField.leftView = self.usernameFieldPaddingView;
  self.usernameTextField.leftViewMode = UITextFieldViewModeAlways;
  self.passwordTextField.leftView = self.passwordFieldPaddingView;
  self.passwordTextField.leftViewMode = UITextFieldViewModeAlways;

  // Round the corners for username and password text fields.
  CALayer *usernameLayer = self.usernameTextField.layer;
  usernameLayer.cornerRadius = 2.0f;
  usernameLayer.masksToBounds = YES;
  CALayer *passwordLayer = self.passwordTextField.layer;
  passwordLayer.cornerRadius = 2.0f;
  passwordLayer.masksToBounds = YES;
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField
{
  [textField resignFirstResponder];
  return YES;
}

- (BOOL)validateEmail:(NSString *)candidate {
  NSString *emailRegex = @"[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}";
  NSPredicate *emailTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", emailRegex];
  return [emailTest evaluateWithObject:candidate];
}

- (void)textFieldDidEndEditing:(UITextField *)textField
{
  if (textField == self.usernameTextField) {
    [self.passwordTextField becomeFirstResponder];
  } else if (textField == self.passwordTextField) {
    if (![self.usernameTextField.text isEqualToString:@""] &&
        ![self.passwordTextField.text isEqualToString:@""]) {
      // send a click event.
      [self.signInButton sendActionsForControlEvents:UIControlEventTouchUpInside];
    }
  }
}

- (IBAction)signInButtonClicked:(id)sender
{
  if(![self validateEmail:self.usernameTextField.text]) {
    UIAlertView *theAlert = [[UIAlertView alloc] initWithTitle:@"Invalid Email Address"
                                                       message:@"Valid e-mail addresses are of "
                             "the form email@company.com"
                                                      delegate:self
                                             cancelButtonTitle:@"OK"
                                             otherButtonTitles:nil];
    [theAlert show];
    return;
  }

  [self.signInActivityView startAnimating];

  Firebase* ref = [[Firebase alloc] initWithUrl:@"https://tebora.firebaseio.com"];
  FirebaseSimpleLogin* authClient = [[FirebaseSimpleLogin alloc] initWithRef:ref];
  [authClient loginWithEmail:self.usernameTextField.text andPassword:self.passwordTextField.text
         withCompletionBlock:^(NSError* error, FAUser* user) {
            [self.signInActivityView stopAnimating];
            if (error != nil) {
              NSLog(@"Login Error: %@", error);
              // There was an error logging in to this account

              UIAlertView *theAlert =
              [[UIAlertView alloc] initWithTitle:nil
                                         message:error.userInfo[@"NSLocalizedDescription"]
                                        delegate:self
                               cancelButtonTitle:@"OK"
                               otherButtonTitles:nil];
              [theAlert show];
            } else {
              [self performSegueWithIdentifier:@"LoginSuccessful" sender:user];
            }
         }];
}

- (UIView *)usernameFieldPaddingView
{
  if (_usernameFieldPaddingView == nil) {
    _usernameFieldPaddingView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 15, 42)];
  }
  return _usernameFieldPaddingView;
}

- (UIView *)passwordFieldPaddingView
{
  if (_passwordFieldPaddingView == nil) {
    _passwordFieldPaddingView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 15, 42)];
  }
  return _passwordFieldPaddingView;
}


@end
