//
//  CCAlertDetailsTableCells.m
//  PageMD
//
//  Created by Srinath on 5/19/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertDetailsTableCells.h"

static const CGFloat kLabelPadding = 10.f;
static const CGFloat kMrnBedPadding = 5.f;
static const CGFloat kConversationTopPadding = 2.f;
static const CGFloat kConversationBottomPadding = 3.f;
static const CGFloat kConversationDefaultPadding = 5.f;
static const CGFloat kConversationBubbleViewShorterPadding = 10.f;
static const CGFloat kConversationDividerHeight = 1.f;
static const CGFloat kConversationBubbleViewWidth = 210.f;

@implementation CCAlertDetailsPatientCell

@synthesize nameLabel = nameLabel_,
             mrnLabel = mrnLabel_,
             bedLabel = bedLabel_;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
  if (self) {
    self.contentView.backgroundColor = [UIColor clearColor];
    nameLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    nameLabel_.numberOfLines = 0;
    nameLabel_.textColor = [UIColor blackColor];
    nameLabel_.textAlignment = NSTextAlignmentLeft;
    nameLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    nameLabel_.font = [UIFont systemFontOfSize:16.f];
    [self.contentView addSubview:nameLabel_];

    mrnLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    mrnLabel_.numberOfLines = 0;
    mrnLabel_.userInteractionEnabled = YES;
    mrnLabel_.textColor = [UIColor colorWithRed:0.
                                          green:(124./255.)
                                           blue:(255./255.)
                                          alpha:1.f];
    mrnLabel_.textAlignment = NSTextAlignmentLeft;
    mrnLabel_.lineBreakMode = NSLineBreakByCharWrapping;
    mrnLabel_.font = [UIFont systemFontOfSize:16.f];
    [self.contentView addSubview:mrnLabel_];

    bedLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    bedLabel_.numberOfLines = 0;
    bedLabel_.textColor = [UIColor blackColor];
    bedLabel_.textAlignment = NSTextAlignmentLeft;
    bedLabel_.lineBreakMode = NSLineBreakByCharWrapping;
    bedLabel_.font = [UIFont systemFontOfSize:16.f];
    [self.contentView addSubview:bedLabel_];
  }
  return self;
}

+ (CGSize)sizeThatFits:(CGSize)size
              withName:(NSString *)name
                   mrn:(NSString *)mrn
                   bed:(NSString *)bed
{
  NSDictionary *fontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};

  // 1 padding for left side, 1 more for mrn.
  CGFloat widthForName = size.width/2 - 2 * kLabelPadding;
  CGSize nameConstraintSize = CGSizeMake(widthForName, FLT_MAX);
  CGRect nameBoundingRect = [name boundingRectWithSize:nameConstraintSize
                                               options:NSStringDrawingUsesLineFragmentOrigin
                                            attributes:fontAttributes
                                               context:nil];

  // 1 padding for the right side.
  CGFloat widthForMrn = size.width/2 - kLabelPadding;
  CGSize mrnConstraintSize = CGSizeMake(widthForMrn, FLT_MAX);
  CGRect mrnBoundingRect = [mrn boundingRectWithSize:mrnConstraintSize
                                             options:NSStringDrawingUsesLineFragmentOrigin
                                          attributes:fontAttributes
                                             context:nil];
  CGRect bedBoundingRect = [bed boundingRectWithSize:mrnConstraintSize
                                             options:NSStringDrawingUsesLineFragmentOrigin
                                          attributes:fontAttributes
                                             context:nil];

  CGFloat height = 2 * kLabelPadding;
  height += MAX(ceil(CGRectGetHeight(nameBoundingRect)),
                (ceil(CGRectGetHeight(mrnBoundingRect)) +
                 ceil(CGRectGetHeight(bedBoundingRect)) +
                 kMrnBedPadding));

  return CGSizeMake(size.width, height);
}

- (CGSize)sizeThatFits:(CGSize)size
{
  return [[self class] sizeThatFits:size
                           withName:self.nameLabel.text
                                mrn:self.mrnLabel.text
                                bed:self.bedLabel.text];
}

- (void)layoutSubviews
{
  CGSize size = self.bounds.size;
  // 1 padding for left side, 1 more for mrn.
  self.nameLabel.frame = CGRectMake(kLabelPadding,
                                    kLabelPadding,
                                    ceil(size.width/2 - 2 * kLabelPadding),
                                    size.height - 2 * kLabelPadding);
  // 1 padding for the right side.
  NSDictionary *fontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};
  CGSize mrnSize =
      [self.mrnLabel.text boundingRectWithSize:CGSizeMake(ceil(size.width/2 - kLabelPadding),
                                                          FLT_MAX)
                                       options:NSStringDrawingUsesLineFragmentOrigin
                                    attributes:fontAttributes
                                       context:nil].size;
  CGRect mrnLabelFrame = CGRectMake(ceil(size.width/2.),
                                    kLabelPadding,
                                    ceil(size.width/2 - kLabelPadding),
                                    ceil(mrnSize.height));
  self.mrnLabel.frame = mrnLabelFrame;
  self.bedLabel.frame = CGRectMake(mrnLabelFrame.origin.x,
                                   CGRectGetMaxY(mrnLabelFrame) + kMrnBedPadding,
                                   CGRectGetWidth(mrnLabelFrame),
                                   ceil(size.height - CGRectGetMaxY(mrnLabelFrame) -
                                        kMrnBedPadding - kLabelPadding));
}

@end

#pragma mark - CCTableViewNurseCell

@implementation CCAlertDetailsNurseCell

@synthesize nameLabel = nameLabel_,
           phoneLabel = phoneLabel_;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
  if (self) {
    self.contentView.backgroundColor = [UIColor clearColor];
    nameLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    nameLabel_.numberOfLines = 0;
    nameLabel_.textColor = [UIColor blackColor];
    nameLabel_.textAlignment = NSTextAlignmentLeft;
    nameLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    nameLabel_.font = [UIFont systemFontOfSize:16.f];
    [self.contentView addSubview:nameLabel_];

    phoneLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    phoneLabel_.numberOfLines = 0;
    phoneLabel_.userInteractionEnabled = YES;
    phoneLabel_.textColor = [UIColor colorWithRed:0.
                                            green:(124./255.)
                                             blue:(255./255.)
                                            alpha:1.f];
    phoneLabel_.textAlignment = NSTextAlignmentLeft;
    phoneLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    phoneLabel_.font = [UIFont systemFontOfSize:16.f];
    [self.contentView addSubview:phoneLabel_];
  }
  return self;
}

+ (CGSize)sizeThatFits:(CGSize)size
              withName:(NSString *)name
                 phone:(NSString *)phone
{
  NSDictionary *fontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};

  // 1 padding for left side, 1 more for mrn.
  CGFloat widthForName = size.width/2 - 2 * kLabelPadding;
  CGSize nameConstraintSize = CGSizeMake(widthForName, FLT_MAX);
  CGRect nameBoundingRect = [name boundingRectWithSize:nameConstraintSize
                                               options:NSStringDrawingUsesLineFragmentOrigin
                                            attributes:fontAttributes
                                               context:nil];
  // 1 padding for the right side.
  CGFloat widthForPhone = size.width/2 - kLabelPadding;
  CGSize phoneConstraintSize = CGSizeMake(widthForPhone, FLT_MAX);
  CGRect phoneBoundingRect = [phone boundingRectWithSize:phoneConstraintSize
                                                 options:NSStringDrawingUsesLineFragmentOrigin
                                              attributes:fontAttributes
                                                 context:nil];
  CGFloat height = 2 * kLabelPadding + MAX(ceil(CGRectGetHeight(nameBoundingRect)),
                                           ceil(CGRectGetHeight(phoneBoundingRect)));

  return CGSizeMake(size.width, height);
}

- (CGSize)sizeThatFits:(CGSize)size
{
  return [[self class] sizeThatFits:size
                           withName:self.nameLabel.text
                              phone:self.phoneLabel.text];
}

- (void)layoutSubviews
{
  CGSize size = self.bounds.size;
  // 1 padding for left side, 1 more for mrn.
  self.nameLabel.frame = CGRectMake(kLabelPadding,
                                    kLabelPadding,
                                    ceil(size.width/2 - 2 * kLabelPadding),
                                    size.height - 2 * kLabelPadding);
  // 1 padding for the right side.
  self.phoneLabel.frame = CGRectMake(ceil(size.width/2.),
                                     kLabelPadding,
                                     ceil(size.width/2 - kLabelPadding),
                                     size.height - 2 * kLabelPadding);
}

@end

#pragma mark - CCTableViewConversationCell

@interface CCAlertDetailsConversationCell ()

@property (nonatomic, strong) NSMutableArray *messageLabels;
@property (nonatomic, strong) NSMutableArray *timestampLabels;
@property (nonatomic, strong) NSMutableArray *dividerViews;
@property (nonatomic, strong) UIView *bubbleView;

@end

@implementation CCAlertDetailsConversationCell

@synthesize isMyMessage = isMyMessage_,
              nameLabel = nameLabel_,
               messages = messages_,
             timestamps = timestamps_,
          messageLabels = messageLabels_,
        timestampLabels = timestampLabels_,
           dividerViews = dividerViews_,
             bubbleView = bubbleView_;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
  if (self) {
    self.contentView.backgroundColor = [UIColor clearColor];
    bubbleView_ = [[UIView alloc] initWithFrame:CGRectZero];
    bubbleView_.layer.cornerRadius = 4.f;
    bubbleView_.layer.masksToBounds = YES;
    bubbleView_.backgroundColor = [UIColor colorWithRed:(246./255.)
                                                  green:(246./255.)
                                                   blue:(246./255.)
                                                  alpha:1.f];

    nameLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    nameLabel_.numberOfLines = 0;
    nameLabel_.textAlignment = NSTextAlignmentLeft;
    nameLabel_.textColor = [UIColor colorWithRed:(155./255.)
                                           green:(155./255.)
                                            blue:(155./255.)
                                           alpha:1.f];
    nameLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    nameLabel_.font = [UIFont systemFontOfSize:14.f];
    [bubbleView_ addSubview:nameLabel_];

    messageLabels_ = [[NSMutableArray alloc] initWithCapacity:1];
    timestampLabels_ = [[NSMutableArray alloc] initWithCapacity:1];
    dividerViews_ = [[NSMutableArray alloc] initWithCapacity:1];
    [self.contentView addSubview:bubbleView_];
  }
  return self;
}

- (void)setTextColor:(UIColor *)textColor
         forUILabels:(NSArray *)labels {
  for (UILabel *label in labels) {
    label.textColor = textColor;
  }
}

- (void)setBackgroundColor:(UIColor *)backgroundColor
                forUIViews:(NSArray *)views {
  for (UIView *view in views) {
    view.backgroundColor = backgroundColor;
  }
}

- (void)setIsMyMessage:(BOOL)isMyMessage
{
  isMyMessage_ = isMyMessage;
  if (isMyMessage) {
    self.bubbleView.backgroundColor = [UIColor colorWithRed:(74./255.)
                                                      green:(144./255.)
                                                       blue:(226./255.)
                                                      alpha:1.f];
    [self setTextColor:[UIColor whiteColor]
           forUILabels:self.messageLabels];
    [self setTextColor:[UIColor colorWithRed:(216./255.)
                                       green:(216./255.)
                                        blue:(216./255.)
                                       alpha:1.f]
           forUILabels:self.timestampLabels];
    [self setBackgroundColor:[UIColor whiteColor]
                  forUIViews:self.dividerViews];
  } else {
    self.bubbleView.backgroundColor = [UIColor colorWithRed:(246./255.)
                                                      green:(246./255.)
                                                       blue:(246./255.)
                                                      alpha:1.f];
    self.nameLabel.textColor = [UIColor colorWithRed:(155./255.)
                                               green:(155./255.)
                                                blue:(155./255.)
                                               alpha:1.f];
    [self setTextColor:[UIColor blackColor]
           forUILabels:self.messageLabels];
    [self setTextColor:self.nameLabel.textColor
           forUILabels:self.timestampLabels];
    [self setBackgroundColor:[UIColor colorWithRed:(225./255.)
                                             green:(225./255.)
                                              blue:(225./255.)
                                             alpha:1.f]
                  forUIViews:self.dividerViews];
  }
  [self setNeedsDisplay];
}

- (void)resizeUIViewArray:(NSMutableArray *)views
                  toCount:(NSUInteger)newCount
            withViewClass:(Class)class {
  NSInteger diff = (NSInteger)newCount - (NSInteger)views.count;
  if (diff > 0) {
    // Increase the size
    for (NSUInteger i = 0; i < diff; i++) {
      UIView *view = (UIView *)[[class alloc] initWithFrame:CGRectZero];
      [views addObject:view];
      [bubbleView_ addSubview:view];
    }
  } else {
    diff = -diff;
    // remove objects
    for (NSUInteger i = 0; i < diff; i++) {
      [(UIView *)[views lastObject] removeFromSuperview];
      [views removeLastObject];
    }
  }
}

- (void)setMessages:(NSArray *)messages {
  messages_ = [messages copy];
  [self resizeUIViewArray:self.messageLabels
                  toCount:messages.count
            withViewClass:[UILabel class]];
  for (NSUInteger i = 0; i < messages.count; i++) {
    UILabel *messageLabel = self.messageLabels[i];
    NSString *message = messages[i];
    messageLabel.numberOfLines = 0;
    messageLabel.textAlignment = NSTextAlignmentLeft;
    messageLabel.lineBreakMode = NSLineBreakByWordWrapping;
    messageLabel.font = [UIFont systemFontOfSize:16.f];
    messageLabel.text = message;
  }
  [self resizeUIViewArray:self.dividerViews
                  toCount:messages.count
            withViewClass:[UIView class]];
  [self setIsMyMessage:self.isMyMessage];
}

- (void)setTimestamps:(NSArray *)timestamps {
  timestamps_ = [timestamps copy];
  [self resizeUIViewArray:self.timestampLabels
                  toCount:timestamps.count
            withViewClass:[UILabel class]];
  for (NSUInteger i = 0; i < timestamps.count; i++) {
    UILabel *timestampLabel = self.timestampLabels[i];
    NSString *timestamp = timestamps[i];
    timestampLabel.numberOfLines = 0;
    timestampLabel.textAlignment = NSTextAlignmentRight;
    timestampLabel.lineBreakMode = NSLineBreakByWordWrapping;
    timestampLabel.font = [UIFont systemFontOfSize:12.f];
    timestampLabel.text = timestamp;
  }
  [self resizeUIViewArray:self.dividerViews
                  toCount:timestamps.count
            withViewClass:[UIView class]];
  [self setIsMyMessage:self.isMyMessage];
}

+ (CGSize)sizeThatFits:(CGSize)size
              withName:(NSString *)name
              messages:(NSArray *)messages
            timestamps:(NSArray *)timestamps
        isAlertMessage:(BOOL)isAlertMessage
{
  NSAssert((messages.count == timestamps.count),
           @"Array size of messages and timestamps don't match");
  CGFloat height = kConversationTopPadding;
  CGSize constraintSize =
      CGSizeMake(MIN(size.width, kConversationBubbleViewWidth) - 2 * kConversationDefaultPadding,
                 FLT_MAX);
  if (name != nil && ![name isEqualToString:@""]) {
    height += ceil([name boundingRectWithSize:constraintSize
                                      options:NSStringDrawingUsesLineFragmentOrigin
                                   attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:14.f]}
                                      context:nil].size.height);
    height += kConversationDefaultPadding;
  }

  for (int i = 0; i < [messages count]; i++) {
    NSString *message = messages[i];
    NSString *timestamp = timestamps[i];
    height += ceil([message boundingRectWithSize:constraintSize
                                         options:NSStringDrawingUsesLineFragmentOrigin
                                      attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:16.f]}
                                         context:nil].size.height);
    height += kConversationDefaultPadding;

    height += ceil([timestamp boundingRectWithSize:constraintSize
                                           options:NSStringDrawingUsesLineFragmentOrigin
                                        attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:12.f]}
                                           context:nil].size.height);
    height += kConversationDefaultPadding;
  }
  height += kConversationBottomPadding - kConversationDefaultPadding;

  // Add 2 * kConversationDefaultPadding for bubbleView padding and if it is the first message,
  // add kConversationDefaultPadding for the top.
  return CGSizeMake(size.width, height
                    + 2 * kConversationDefaultPadding
                    + (isAlertMessage ? kConversationDefaultPadding : 0));
}

- (CGSize)sizeThatFits:(CGSize)size
{
  return [[self class] sizeThatFits:size
                           withName:self.nameLabel.text
                           messages:self.messages
                         timestamps:self.timestamps
                     isAlertMessage:self.isAlertMessage];
}

- (void)layoutSubviews
{
  NSAssert((self.messageLabels.count == self.timestampLabels.count),
           @"Array size of messages and timestamps don't match");
  NSAssert((self.messageLabels.count == self.dividerViews.count),
           @"Array size of messages and divider views don't match");

  CGFloat bubbleViewY =
      kConversationDefaultPadding + (self.isAlertMessage ? kConversationDefaultPadding : 0);
  CGRect bubbleViewFrame = CGRectMake(kConversationBubbleViewShorterPadding,
                                      bubbleViewY,
                                      kConversationBubbleViewWidth,
                                      FLT_MAX);
  CGSize constraintSize = CGSizeMake(bubbleViewFrame.size.width - 2 * kConversationDefaultPadding,
                                     FLT_MAX);
  CGFloat currentY = kConversationTopPadding;

  if (self.isMyMessage) {
    // This is my conversation, right indent
    bubbleViewFrame.origin.x = self.bounds.size.width - kConversationBubbleViewWidth
                                                      - kConversationBubbleViewShorterPadding;
    self.nameLabel.frame = CGRectZero;
    ((UIView *)self.dividerViews[0]).frame = CGRectZero;
  } else {
    CGSize nameSize =
        [self.nameLabel.text boundingRectWithSize:constraintSize
                                          options:NSStringDrawingUsesLineFragmentOrigin
                                       attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:14.f]}
                                          context:nil].size;
    self.nameLabel.frame = CGRectMake(kConversationDefaultPadding,
                                      currentY,
                                      constraintSize.width,
                                      ceil(nameSize.height));
    currentY += ceil(nameSize.height);
    UIView *dividerView = self.dividerViews[0];
    dividerView.frame = CGRectMake(kConversationDefaultPadding,
                                   currentY + (kConversationDefaultPadding - kConversationDividerHeight) / 2.0,
                                   nameSize.width,
                                   kConversationDividerHeight);
    currentY += kConversationDefaultPadding;
  }

  for (NSInteger i = 0; i < self.messageLabels.count; i++) {
    UILabel *messageLabel = self.messageLabels[i];
    CGSize messageSize =
        [messageLabel.text boundingRectWithSize:constraintSize
                                        options:NSStringDrawingUsesLineFragmentOrigin
                                     attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:16.f]}
                                        context:nil].size;
    messageLabel.frame = CGRectMake(kConversationDefaultPadding,
                                    currentY,
                                    constraintSize.width,
                                    ceil(messageSize.height));
    currentY += ceil(messageSize.height) + kConversationDefaultPadding;

    UILabel *timestampLabel = self.timestampLabels[i];
    CGSize timestampSize =
        [timestampLabel.text boundingRectWithSize:constraintSize
                                          options:NSStringDrawingUsesLineFragmentOrigin
                                       attributes:@{NSFontAttributeName : [UIFont systemFontOfSize:12.f]}
                                          context:nil].size;
    timestampLabel.frame = CGRectMake(kConversationDefaultPadding,
                                      currentY,
                                      constraintSize.width,
                                      ceil(timestampSize.height));
    currentY += ceil(timestampSize.height);

    if ((i+1) < self.dividerViews.count) {
      UIView *dividerView = self.dividerViews[i+1];
      dividerView.frame = CGRectMake(kConversationDefaultPadding,
                                     currentY + (kConversationDefaultPadding - kConversationDividerHeight) / 2.0,
                                     constraintSize.width,
                                     kConversationDividerHeight);
    }
    currentY += kConversationDefaultPadding;
  }
  currentY += kConversationBottomPadding - kConversationDefaultPadding;
  bubbleViewFrame.size.height = currentY;
  self.bubbleView.frame = bubbleViewFrame;
}

@end