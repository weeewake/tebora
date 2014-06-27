//
//  CCSendMessageView.h
//  PageMD
//
//  Created by Srinath on 6/26/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CCSendMessageView : UIView <NSCoding>

@property (strong, nonatomic) UITextField *messageTextField;
@property (strong, nonatomic) UIButton *quickActionButton;

@end
