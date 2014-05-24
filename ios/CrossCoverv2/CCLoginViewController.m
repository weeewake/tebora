//
//  CCLoginViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 5/8/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCLoginViewController.h"

#import <FirebaseSimpleLogin/FirebaseSimpleLogin.h>

#import "CCSettings.h"
#import "CCViewController.h"

@interface CCLoginViewController ()

@property (assign, nonatomic) BOOL isSigningIn;

@end

@implementation CCLoginViewController

@synthesize isSigningIn = isSigningIn_;

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(CCUser *)sender
{
  UINavigationController *navVC = [segue destinationViewController];
  CCViewController *vc = (CCViewController *)navVC.topViewController;
  vc.thisUser = sender;
}

- (void)viewDidLoad
{
  [super viewDidLoad];

  self.isSigningIn = NO;
  self.overlayView.userInteractionEnabled = YES;
  UITapGestureRecognizer *tapped =
      [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(overlayTouched:)];
  tapped.numberOfTapsRequired = 1;
  [self.overlayView addGestureRecognizer:tapped];


  // Set the background to be our blue.
  self.backgroundView.backgroundColor = [CCSettings tintColor];

  // Add a white border to the sign in button and round the corners.
  CALayer *signInButtonLayer = self.signInButton.layer;
  signInButtonLayer.borderWidth = 1.0f;
  signInButtonLayer.borderColor = [[UIColor whiteColor] CGColor];
  signInButtonLayer.cornerRadius = 1.5f;
  signInButtonLayer.masksToBounds = YES;

  // Add a padding to the username and password text fields.
  self.usernameTextField.leftView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 15, 42)];
  self.usernameTextField.leftViewMode = UITextFieldViewModeAlways;
  self.passwordTextField.leftView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 15, 42)];
  self.passwordTextField.leftViewMode = UITextFieldViewModeAlways;

  // Round the corners for username and password text fields.
  CALayer *usernameLayer = self.usernameTextField.layer;
  usernameLayer.cornerRadius = 2.0f;
  usernameLayer.masksToBounds = YES;

  CALayer *passwordLayer = self.passwordTextField.layer;
  passwordLayer.cornerRadius = 2.0f;
  passwordLayer.masksToBounds = YES;
}

- (void)overlayTouched:(UIGestureRecognizer *)gestureRecognizer
{
  // ignore touches.
}

- (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event
{
  if ([self.usernameTextField isFirstResponder] ||
      [self.passwordTextField isFirstResponder]) {
    UITouch *touch = [[event allTouches] anyObject];
    if ((touch.view != self.usernameTextField) &&
        (touch.view != self.passwordTextField)) {
      [self.view endEditing:YES];
    }
  }
  [super touchesEnded:touches withEvent:event];
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField
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
  return YES;
}

- (BOOL)validateEmail:(NSString *)candidate
{
  NSString *emailRegex = @"[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}";
  NSPredicate *emailTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", emailRegex];
  return [emailTest evaluateWithObject:candidate];
}

- (void)setIsSigningIn:(BOOL)isSigningIn
{
  isSigningIn_ = isSigningIn;
  if (isSigningIn_) {
    [self.signInActivityView startAnimating];
    self.overlayView.hidden = NO;
    [self.view bringSubviewToFront:self.overlayView];
  } else {
    [self.signInActivityView stopAnimating];
    self.overlayView.hidden = YES;
  }
}

- (IBAction)signInButtonClicked:(id)sender
{
  [self.view endEditing:YES];
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

  self.isSigningIn = YES;

  Firebase* ref = [CCSettings firebaseForPathComponents:@[]];
  FirebaseSimpleLogin* authClient = [[FirebaseSimpleLogin alloc] initWithRef:ref];
  [authClient loginWithEmail:self.usernameTextField.text andPassword:self.passwordTextField.text
         withCompletionBlock:^(NSError* error, FAUser* faUser) {
            self.isSigningIn = NO;
            if (error != nil) {
              NSLog(@"Login Error: %@", error);
              UIAlertView *theAlert =
                  [[UIAlertView alloc] initWithTitle:nil
                                             message:error.userInfo[@"NSLocalizedDescription"]
                                            delegate:self
                                   cancelButtonTitle:@"OK"
                                   otherButtonTitles:nil];
              [theAlert show];
            } else {
              CCUser *user = [[CCUser alloc] initWithUserId:faUser.userId];
              [user updateNameAndPhoneWithBlock:^{
                [self performSegueWithIdentifier:@"LoginSuccessful" sender:user];
              }];
            }
         }];
}

@end
