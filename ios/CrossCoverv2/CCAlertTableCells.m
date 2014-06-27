//
//  CCAlertTableCells.m
//  PageMD
//
//  Created by Srinath on 5/28/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import "CCAlertTableCells.h"

#import "CCSettings.h"

static const CGFloat kLabelPadding = 10.;
static const CGFloat kImageWidth = 45.;
static const CGFloat kImageHeight = 45.;
static const CGFloat kTimestampWidth = 50.;
static const CGFloat kTitleDescriptionPadding = 5.;
static const CGFloat kQuickActionWidth = 70;

@interface CCAlertCell ()

@property (strong, nonatomic) UIView *separator;

@end

@implementation CCAlertCell

@synthesize titleLabel = titleLabel_,
            descriptionLabel = descriptionLabel_,
            timestampLabel = timestampLabel_,
            separator = separator_,
            markAsReadLabel = markAsReadLabel_,
            resolveLabel = resolveLabel_,
            showQuickActions = showQuickActions_;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
  if (self) {
    self.contentView.backgroundColor = [UIColor clearColor];
    titleLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    titleLabel_.numberOfLines = 0;
    titleLabel_.textColor = [UIColor colorWithWhite:(151./255.) alpha:1.];
    titleLabel_.textAlignment = NSTextAlignmentLeft;
    titleLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    titleLabel_.font = [UIFont boldSystemFontOfSize:16.f];
    [self.contentView addSubview:titleLabel_];

    descriptionLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    descriptionLabel_.numberOfLines = 0;
    descriptionLabel_.textColor = [UIColor colorWithWhite:(74./255.) alpha:1.];
    descriptionLabel_.textAlignment = NSTextAlignmentLeft;
    descriptionLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    descriptionLabel_.font = [UIFont systemFontOfSize:14.f];
    [self.contentView addSubview:descriptionLabel_];

    timestampLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    timestampLabel_.numberOfLines = 1;
    timestampLabel_.textColor = [UIColor colorWithWhite:(190./255.) alpha:1.];
    timestampLabel_.textAlignment = NSTextAlignmentRight;
    timestampLabel_.lineBreakMode = NSLineBreakByTruncatingTail;
    timestampLabel_.font = [UIFont systemFontOfSize:12.f];
    [self.contentView addSubview:timestampLabel_];

    separator_ = [[UIView alloc] initWithFrame:CGRectZero];
    separator_.backgroundColor = [CCSettings separatorColor];
    [self.contentView addSubview:separator_];

    self.imageView.contentMode = UIViewContentModeCenter;

    markAsReadLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    markAsReadLabel_.numberOfLines = 2;
    markAsReadLabel_.textColor = [UIColor whiteColor];
    markAsReadLabel_.text = @"Mark\nRead";
    markAsReadLabel_.textAlignment = NSTextAlignmentCenter;
    markAsReadLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    markAsReadLabel_.font = [UIFont systemFontOfSize:14.f];
    markAsReadLabel_.backgroundColor = [CCSettings tintColor];
    [self.contentView addSubview:markAsReadLabel_];

    resolveLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    resolveLabel_.numberOfLines = 1;
    resolveLabel_.textColor = [UIColor whiteColor];
    resolveLabel_.text = @"Resolve";
    resolveLabel_.textAlignment = NSTextAlignmentCenter;
    resolveLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    resolveLabel_.font = [UIFont systemFontOfSize:14.f];
    resolveLabel_.backgroundColor = [UIColor colorWithRed:(200./255.) green:0 blue:0 alpha:1.];
    [self.contentView addSubview:resolveLabel_];

    showQuickActions_ = NO;
  }
  return self;
}

+ (CGSize)sizeThatFits:(CGSize)size
             withTitle:(NSString *)title
           description:(NSString *)description
             timestamp:(NSString *)timestamp {
  NSDictionary *titleFontAttributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:14.f]};
  NSDictionary *descFontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};

  // 2 paddings for left/right edge, 1 for image, 1 for timestamp.
  CGSize constraintSize =
      CGSizeMake(size.width - kImageWidth - 4 * kLabelPadding - kTimestampWidth, CGFLOAT_MAX);
  CGRect titleBoundingRect = [title boundingRectWithSize:constraintSize
                                                 options:NSStringDrawingUsesLineFragmentOrigin
                                              attributes:titleFontAttributes
                                                 context:nil];

  CGRect descBoundingRect = [description boundingRectWithSize:constraintSize
                                                      options:NSStringDrawingUsesLineFragmentOrigin
                                                   attributes:descFontAttributes
                                                      context:nil];
  CGFloat height = 2 * kLabelPadding;
  height += MAX(kImageHeight,
                (ceil(CGRectGetHeight(titleBoundingRect)) +
                 ceil(CGRectGetHeight(descBoundingRect)) +
                 kTitleDescriptionPadding));

  return CGSizeMake(size.width, height);
}

- (CGSize)sizeThatFits:(CGSize)size {
  return [[self class] sizeThatFits:size
                          withTitle:self.titleLabel.text
                        description:self.descriptionLabel.text
                          timestamp:self.timestampLabel.text];
}

- (void)setShowQuickActions:(BOOL)showQuickActions {
  showQuickActions_ = showQuickActions;
  [self layoutSubviews];
}

- (void)prepareForReuse {
  [super prepareForReuse];
  showQuickActions_ = NO;
  for (UIView *view in @[self, self.imageView, self.resolveLabel, self.markAsReadLabel]) {
    for (UIGestureRecognizer *gr in [view gestureRecognizers]) {
      [view removeGestureRecognizer:gr];
    }
  }
}

- (void)layoutSubviews {
  CGSize size = self.bounds.size;
  CGFloat xOffset = 0;
  if (showQuickActions_) {
    xOffset = -2 * kQuickActionWidth;
  }
  self.imageView.frame = CGRectMake(xOffset, 0, kImageWidth + 2 * kLabelPadding, size.height);

  NSDictionary *titleFontAttributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:14.f]};
  NSDictionary *descFontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};
  NSDictionary *tsFontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:12.f]};

  CGRect tsBoundingRect =
      [self.timestampLabel.text boundingRectWithSize:CGSizeMake(kTimestampWidth, CGFLOAT_MAX)
                                             options:NSStringDrawingTruncatesLastVisibleLine
                                          attributes:tsFontAttributes
                                             context:nil];
  self.timestampLabel.frame =
      CGRectMake(CGRectGetMaxX(self.bounds) - kTimestampWidth - kLabelPadding + xOffset,
                 kLabelPadding,
                 kTimestampWidth,
                 tsBoundingRect.size.height);

  // 2 paddings for left/right edge, 1 for image, 1 for timestamp.
  CGSize constraintSize =
      CGSizeMake(size.width - kImageWidth - 4 * kLabelPadding - kTimestampWidth, CGFLOAT_MAX);
  CGRect titleBoundingRect = [self.titleLabel.text boundingRectWithSize:constraintSize
                                                                options:NSStringDrawingUsesLineFragmentOrigin
                                                             attributes:titleFontAttributes
                                                                context:nil];
  self.titleLabel.frame = CGRectMake(2 * kLabelPadding + kImageWidth + xOffset,
                                     kLabelPadding,
                                     constraintSize.width,
                                     titleBoundingRect.size.height);

  CGRect descBoundingRect = [self.descriptionLabel.text boundingRectWithSize:constraintSize
                                                                     options:NSStringDrawingUsesLineFragmentOrigin
                                                                  attributes:descFontAttributes
                                                                     context:nil];
  self.descriptionLabel.frame =
      CGRectMake(2 * kLabelPadding + kImageWidth + xOffset,
                 kLabelPadding + ceil(titleBoundingRect.size.height) + kTitleDescriptionPadding,
                 constraintSize.width,
                 descBoundingRect.size.height);

  self.separator.frame = CGRectMake(kLabelPadding + xOffset,
                                    size.height - 1,
                                    size.width - 2 * kLabelPadding - xOffset,
                                    1);

  markAsReadLabel_.frame = CGRectMake(size.width + kQuickActionWidth + xOffset,
                                      0,
                                      kQuickActionWidth,
                                      size.height);
  resolveLabel_.frame = CGRectMake(size.width + xOffset,
                                   0,
                                   kQuickActionWidth,
                                   size.height);
}

@end
