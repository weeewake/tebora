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
static const UIEdgeInsets kAlertHeaderInsets = { 13, 10, 10, 10 };  // top, left, bottom, right
static const CGSize kAlertHeaderImageSize = { 45, 45 };  // width, height
static const UIEdgeInsets kAlertHeaderImageMargins = { 0, 0, 5, 10 };  // top, left, bottom, right

@implementation CCAlertDetailsPatientCell

@synthesize nameLabel = nameLabel_,
             mrnLabel = mrnLabel_,
             bedLabel = bedLabel_;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
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
                   bed:(NSString *)bed {
  NSDictionary *fontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};

  // 1 padding for left side, 1 more for mrn.
  CGFloat widthForName = size.width/2 - 2 * kLabelPadding;
  CGSize nameConstraintSize = CGSizeMake(widthForName, CGFLOAT_MAX);
  CGRect nameBoundingRect = [name boundingRectWithSize:nameConstraintSize
                                               options:NSStringDrawingUsesLineFragmentOrigin
                                            attributes:fontAttributes
                                               context:nil];

  // 1 padding for the right side.
  CGFloat widthForMrn = size.width/2 - kLabelPadding;
  CGSize mrnConstraintSize = CGSizeMake(widthForMrn, CGFLOAT_MAX);
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

- (CGSize)sizeThatFits:(CGSize)size {
  return [[self class] sizeThatFits:size
                           withName:self.nameLabel.text
                                mrn:self.mrnLabel.text
                                bed:self.bedLabel.text];
}

- (void)layoutSubviews {
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
                                                          CGFLOAT_MAX)
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

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
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
                 phone:(NSString *)phone {
  NSDictionary *fontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};

  // 1 padding for left side, 1 more for mrn.
  CGFloat widthForName = size.width/2 - 2 * kLabelPadding;
  CGSize nameConstraintSize = CGSizeMake(widthForName, CGFLOAT_MAX);
  CGRect nameBoundingRect = [name boundingRectWithSize:nameConstraintSize
                                               options:NSStringDrawingUsesLineFragmentOrigin
                                            attributes:fontAttributes
                                               context:nil];
  // 1 padding for the right side.
  CGFloat widthForPhone = size.width/2 - kLabelPadding;
  CGSize phoneConstraintSize = CGSizeMake(widthForPhone, CGFLOAT_MAX);
  CGRect phoneBoundingRect = [phone boundingRectWithSize:phoneConstraintSize
                                                 options:NSStringDrawingUsesLineFragmentOrigin
                                              attributes:fontAttributes
                                                 context:nil];
  CGFloat height = 2 * kLabelPadding + MAX(ceil(CGRectGetHeight(nameBoundingRect)),
                                           ceil(CGRectGetHeight(phoneBoundingRect)));

  return CGSizeMake(size.width, height);
}

- (CGSize)sizeThatFits:(CGSize)size {
  return [[self class] sizeThatFits:size
                           withName:self.nameLabel.text
                              phone:self.phoneLabel.text];
}

- (void)layoutSubviews {
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

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
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

- (void)setIsMyMessage:(BOOL)isMyMessage {
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
        isAlertMessage:(BOOL)isAlertMessage {
  NSAssert((messages.count == timestamps.count),
           @"Array size of messages and timestamps don't match");
  CGFloat height = kConversationTopPadding;
  CGSize constraintSize =
      CGSizeMake(MIN(size.width, kConversationBubbleViewWidth) - 2 * kConversationDefaultPadding,
                 CGFLOAT_MAX);
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

- (CGSize)sizeThatFits:(CGSize)size {
  return [[self class] sizeThatFits:size
                           withName:self.nameLabel.text
                           messages:self.messages
                         timestamps:self.timestamps
                     isAlertMessage:self.isAlertMessage];
}

- (void)layoutSubviews {
  NSAssert((self.messageLabels.count == self.timestampLabels.count),
           @"Array size of messages and timestamps don't match");
  NSAssert((self.messageLabels.count == self.dividerViews.count),
           @"Array size of messages and divider views don't match");

  CGFloat bubbleViewY =
      kConversationDefaultPadding + (self.isAlertMessage ? kConversationDefaultPadding : 0);
  CGRect bubbleViewFrame = CGRectMake(kConversationBubbleViewShorterPadding,
                                      bubbleViewY,
                                      kConversationBubbleViewWidth,
                                      CGFLOAT_MAX);
  CGSize constraintSize = CGSizeMake(bubbleViewFrame.size.width - 2 * kConversationDefaultPadding,
                                     CGFLOAT_MAX);
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

#pragma mark - CCAlertDetailsAlertHeader

@interface CCAlertDetailsAlertHeader ()

@property (nonatomic, strong) UILabel *changeLabel;
@property (nonatomic, strong) UIImageView *alertTypeImageView;

@end

@implementation CCAlertDetailsAlertHeader

@synthesize messageLabel  = messageLabel_,
          timestampLabel  = timestampLabel_,
          alertTypeString = alertTypeString_,
             changeLabel  = changeLabel_,
      alertTypeImageView  = alertTypeImageView_;

- (id)initWithReuseIdentifier:(NSString *)reuseIdentifier {
  self = [super initWithReuseIdentifier:reuseIdentifier];
  if (self) {
    self.contentView.backgroundColor = [UIColor colorWithWhite:(144./255.) alpha:0.1];

    messageLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    messageLabel_.numberOfLines = 0;
    messageLabel_.textAlignment = NSTextAlignmentLeft;
    messageLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    messageLabel_.font = [[self class] messageLabelFont];
    messageLabel_.textColor = [UIColor colorWithWhite:(100./255.) alpha:1.];
    [self.contentView addSubview:messageLabel_];

    timestampLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    timestampLabel_.numberOfLines = 1;
    timestampLabel_.textAlignment = NSTextAlignmentRight;
    timestampLabel_.lineBreakMode = NSLineBreakByTruncatingTail;
    timestampLabel_.font = [[self class] timestampLabelFont];
    timestampLabel_.textColor = [UIColor colorWithWhite:(155./255.) alpha:1.];
    [self.contentView addSubview:timestampLabel_];

    changeLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    changeLabel_.numberOfLines = 1;
    changeLabel_.textAlignment = NSTextAlignmentLeft;
    changeLabel_.lineBreakMode = NSLineBreakByTruncatingTail;
    changeLabel_.font = [[self class] changeLabelFont];
    changeLabel_.text = [[self class] changeLabelText];
    changeLabel_.textColor = [UIColor colorWithRed:0 green:(124./255.) blue:(255./255.) alpha:1.];
    [self.contentView addSubview:changeLabel_];
  }
  return self;
}

- (void)setAlertTypeString:(NSString *)alertTypeString {
  alertTypeString_ = alertTypeString;
  UIImage *image = [UIImage imageNamed:alertTypeString];
  [alertTypeImageView_ removeFromSuperview];
  alertTypeImageView_ = [[UIImageView alloc] initWithImage:image];
  [self.contentView addSubview:alertTypeImageView_];
}

+ (UIFont *)messageLabelFont {
  return [UIFont fontWithName:@"HelveticaNeue" size:17.];
}

+ (UIFont *)timestampLabelFont {
  return [UIFont fontWithName:@"HelveticaNeue-Light" size:12.];
}

+ (UIFont *)changeLabelFont {
  return [UIFont fontWithName:@"HelveticaNeue" size:11.];
}

+ (NSString *)changeLabelText {
  return @"Change";
}

+ (CGSize)sizeThatFits:(CGSize)size
           withMessage:(NSString *)message
             timestamp:(NSString *)timestamp {
  CGSize changeLabelSize =
      [[self changeLabelText] boundingRectWithSize:CGSizeMake(size.width, CGFLOAT_MAX)
                                           options:NSStringDrawingUsesLineFragmentOrigin
                                        attributes:@{NSFontAttributeName : [self changeLabelFont]}
                                           context:nil].size;
  CGFloat textWidth =
      size.width - kAlertHeaderInsets.left - kAlertHeaderInsets.right
      - MAX(ceil(changeLabelSize.width), kAlertHeaderImageSize.width)
      - kAlertHeaderImageMargins.right - kAlertHeaderImageMargins.left;
  CGSize constraintSize = CGSizeMake(textWidth, CGFLOAT_MAX);
  CGFloat height = ceil([message boundingRectWithSize:constraintSize
                                              options:NSStringDrawingUsesLineFragmentOrigin
                                           attributes:@{NSFontAttributeName : [self messageLabelFont]}
                                              context:nil].size.height);
  height += kConversationDefaultPadding;
  height += ceil([timestamp boundingRectWithSize:constraintSize
                                         options:NSStringDrawingUsesLineFragmentOrigin
                                      attributes:@{NSFontAttributeName : [self timestampLabelFont]}
                                         context:nil].size.height);

  CGFloat imageAndChangeLabelHeight =
      kAlertHeaderImageSize.height + kAlertHeaderImageMargins.top + kAlertHeaderImageMargins.bottom
      + changeLabelSize.height;
  height = MAX(height, imageAndChangeLabelHeight) + kAlertHeaderInsets.top + kAlertHeaderInsets.bottom;
  return CGSizeMake(size.width, height);
}

- (CGSize)sizeThatFits:(CGSize)size {
  return [[self class] sizeThatFits:size
                        withMessage:self.messageLabel.text
                          timestamp:self.timestampLabel.text];
}

- (void)layoutSubviews {
  CGSize size = self.bounds.size;
  alertTypeImageView_.frame = CGRectMake(kAlertHeaderInsets.left + kAlertHeaderImageMargins.left,
                                         kAlertHeaderInsets.top + kAlertHeaderImageMargins.top,
                                         kAlertHeaderImageSize.width,
                                         kAlertHeaderImageSize.height);
  CGSize changeLabelSize =
      [changeLabel_.text boundingRectWithSize:size
                                      options:NSStringDrawingUsesLineFragmentOrigin
                                   attributes:@{NSFontAttributeName : changeLabel_.font}
                                      context:nil].size;
  CGFloat changeLabelY =
      kAlertHeaderInsets.top + kAlertHeaderImageMargins.top + kAlertHeaderImageSize.height
      + kAlertHeaderImageMargins.bottom;
  changeLabel_.frame = CGRectMake(kAlertHeaderInsets.left + kAlertHeaderImageMargins.left,
                                  changeLabelY,
                                  ceil(changeLabelSize.width),
                                  ceil(changeLabelSize.height));
  // Center align image and change label.
  CGPoint changeLabelCenter = changeLabel_.center;
  changeLabelCenter.x = alertTypeImageView_.center.x;
  changeLabel_.center = changeLabelCenter;

  CGFloat textX = kAlertHeaderInsets.left + kAlertHeaderImageMargins.right
      + kAlertHeaderImageMargins.left + MAX(ceil(changeLabelSize.width), kAlertHeaderImageSize.width);
  CGFloat textWidth = size.width - textX - kAlertHeaderInsets.right;
  CGSize constraintSize = CGSizeMake(textWidth, CGFLOAT_MAX);
  CGSize messageSize =
      [messageLabel_.text boundingRectWithSize:constraintSize
                                       options:NSStringDrawingUsesLineFragmentOrigin
                                    attributes:@{NSFontAttributeName : messageLabel_.font}
                                       context:nil].size;
  CGFloat currentY = kAlertHeaderInsets.top;
  messageLabel_.frame =
      CGRectMake(textX, currentY, ceil(messageSize.width), ceil(messageSize.height));
  currentY += ceil(messageSize.height) + kConversationDefaultPadding;

  CGSize timestampSize =
      [timestampLabel_.text boundingRectWithSize:constraintSize
                                         options:NSStringDrawingUsesLineFragmentOrigin
                                      attributes:@{NSFontAttributeName : timestampLabel_.font}
                                         context:nil].size;
  timestampLabel_.frame =
      CGRectMake(textX, currentY, ceil(timestampSize.width), ceil(timestampSize.height));
}


@end