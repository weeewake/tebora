//
//  CCSendMessageView.m
//  PageMD
//
//  Created by Srinath on 6/26/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCSendMessageView.h"

@interface CCSendMessageView ()

@property (strong, nonatomic) UIView *verticalBar;
@property (strong, nonatomic) UIView *topBorder;

- (void)createSubviews;

@end

@implementation CCSendMessageView

- (id)initWithCoder:(NSCoder *)aDecoder {
  self = [super initWithCoder:aDecoder];
  if (self) {
    [self createSubviews];
  }
  return self;
}

- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
      [self createSubviews];
    }
    return self;
}

- (void)createSubviews {
  _messageTextField = [[UITextField alloc] initWithFrame:CGRectZero];
  _messageTextField.textColor = [UIColor blackColor];
  _messageTextField.font = [UIFont systemFontOfSize:18.];
  _messageTextField.placeholder = @"Type a message...";
  _messageTextField.borderStyle = UITextBorderStyleNone;
  _messageTextField.clearButtonMode = UITextFieldViewModeWhileEditing;
  _messageTextField.enablesReturnKeyAutomatically = YES;
  _messageTextField.autocapitalizationType = UITextAutocapitalizationTypeSentences;
  _messageTextField.returnKeyType = UIReturnKeySend;
  _messageTextField.tintColor = _messageTextField.textColor;
  [self addSubview:_messageTextField];

  self.quickActionButton = [UIButton buttonWithType:UIButtonTypeCustom];
  UIImage *image = [UIImage imageNamed:@"QuickAction"];
  [_quickActionButton setImage:image forState:UIControlStateNormal];
  [_quickActionButton setImage:image forState:UIControlStateHighlighted];
  [_quickActionButton setImage:image forState:UIControlStateSelected];
  _quickActionButton.imageEdgeInsets = UIEdgeInsetsMake(8, 8, 8, 8);
  _quickActionButton.contentMode = UIViewContentModeCenter;
  _quickActionButton.frame =
      CGRectMake(0, 0, ceil(image.size.width) + 20, ceil(image.size.height) + 20);
  [self addSubview:_quickActionButton];

  CGFloat singlePixelSize = 1/[[UIScreen mainScreen] scale];
  _verticalBar = [[UIView alloc] initWithFrame:CGRectMake(0, 0, singlePixelSize, singlePixelSize)];
  _verticalBar.backgroundColor = [UIColor colorWithWhite:(229./255.) alpha:1.];
  [self addSubview:_verticalBar];

  _topBorder = [[UIView alloc] initWithFrame:CGRectMake(0, 0, singlePixelSize, singlePixelSize)];
  _topBorder.backgroundColor = [UIColor colorWithWhite:(204./255.) alpha:1.];
  [self addSubview:_topBorder];
}

- (void)layoutSubviews {
  CGRect buttonSize = _quickActionButton.bounds;
  _quickActionButton.frame = CGRectMake(CGRectGetMaxX(self.bounds) - buttonSize.size.width,
                                        0,
                                        buttonSize.size.width,
                                        self.bounds.size.height);
  CGRect verticalBarFrame = CGRectMake(_quickActionButton.frame.origin.x - _verticalBar.bounds.size.width,
                                       5,
                                       _verticalBar.bounds.size.width,
                                       self.bounds.size.height - 10);
  _verticalBar.frame = verticalBarFrame;
  CGRect textFieldFrame = CGRectMake(15,
                                     8,
                                     verticalBarFrame.origin.x - 30,
                                     self.bounds.size.height - 16);
  _messageTextField.frame = textFieldFrame;

  _topBorder.frame = CGRectMake(0, 0, self.bounds.size.width, _topBorder.bounds.size.height);
}

@end
