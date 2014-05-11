//
//  CCLoginViewController.m
//  CrossCoverv2
//
//  Created by Vivek Sundaram on 5/8/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCLoginViewController.h"

@interface CCLoginViewController ()

@end

@implementation CCLoginViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    // Disable Login Button
    [self.loginButton setEnabled:NO];
}

- (BOOL) textFieldShouldReturn:(UITextField *)textField
{
    [textField resignFirstResponder];
    return YES;
}

- (BOOL) validateEmail: (NSString *) candidate {
    NSString *emailRegex = @"[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}";
    NSPredicate *emailTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", emailRegex];
    
    return [emailTest evaluateWithObject:candidate];
}

- (BOOL) validateAlphanumericDash: (NSString *) candidate {
    NSMutableCharacterSet *characterSet = [NSMutableCharacterSet alphanumericCharacterSet];
    [characterSet addCharactersInString:@"-_."];
    return [self validateStringInCharacterSet:candidate characterSet:characterSet];
}

- (BOOL) validateStringInCharacterSet: (NSString *) string characterSet: (NSMutableCharacterSet *) characterSet {
    // Since we invert the character set if it is == NSNotFound then it is in the character set.
    return ([string rangeOfCharacterFromSet:[characterSet invertedSet]].location != NSNotFound) ? NO : YES;
}

- (BOOL)textFieldShouldEndEditing:(UITextField *)textField
{
    // The textfield is about to resign First responder
    if(textField == self.usernameTextField)
    {
        if(![self validateEmail:textField.text])
        {
            UIAlertView *theAlert = [[UIAlertView alloc] initWithTitle:@"Invalid Email Address"
                                                               message:@"Valid e-mail addresses are of the form xx@yy.zz"
                                                              delegate:self
                                                     cancelButtonTitle:@"OK"
                                                     otherButtonTitles:nil];
            [theAlert show];

            return NO;
        }
        else
            return YES;
        
    }
    else if(textField == self.passwordTextField)
    {
        if(![self validateAlphanumericDash:textField.text])
        {
            UIAlertView *theAlert = [[UIAlertView alloc] initWithTitle:@"Invalid Password"
                                                               message:@"Valid password only contain alphabets, numbers and -'s."
                                                              delegate:self
                                                     cancelButtonTitle:@"OK"
                                                     otherButtonTitles:nil];
            [theAlert show];
            return NO;
        }
        else
            return YES;
    }
    return NO;
}

- (void)textFieldDidEndEditing:(UITextField *)textField
{
    if(textField == self.usernameTextField)
    {
       [self.passwordTextField becomeFirstResponder];
    }
    else if(textField == self.passwordTextField)
    {
        Firebase* ref = [[Firebase alloc] initWithUrl:@"https://tebora.firebaseio.com"];
        FirebaseSimpleLogin* authClient = [[FirebaseSimpleLogin alloc] initWithRef:ref];

        [authClient loginWithEmail:self.usernameTextField.text andPassword:self.passwordTextField.text
               withCompletionBlock:^(NSError* error, FAUser* user) {
                   if (error != nil) {
                       NSLog(@"Login Error: %@", error);
                       // There was an error logging in to this account

                       UIAlertView *theAlert = [[UIAlertView alloc] initWithTitle:nil
                                                                          message:error.userInfo[@"NSLocalizedDescription"]
                                                                         delegate:self
                                                                cancelButtonTitle:@"OK"
                                                                otherButtonTitles:nil];
                       [theAlert show];

                   } else {
                       NSLog(@"%@", user);
                       [self performSegueWithIdentifier:@"LoginSuccessful" sender:nil];
                   }
               }];
    }
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

- (IBAction)loginButton:(UIButton *)sender {
}
@end