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

@interface CCAlertCell ()

@property (strong, nonatomic) UIView *separator;

@end

@implementation CCAlertCell

@synthesize titleLabel = titleLabel_,
            descriptionLabel = descriptionLabel_,
            timestampLabel = timestampLabel_,
            separator = separator_;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
  if (self) {
    self.contentView.backgroundColor = [UIColor clearColor];
    titleLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    titleLabel_.numberOfLines = 0;
    titleLabel_.textColor = [UIColor colorWithWhite:0.5 alpha:1.];
    titleLabel_.textAlignment = NSTextAlignmentLeft;
    titleLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    titleLabel_.font = [UIFont boldSystemFontOfSize:14.f];
    [self.contentView addSubview:titleLabel_];

    descriptionLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    descriptionLabel_.numberOfLines = 0;
    descriptionLabel_.textColor = [UIColor colorWithWhite:0.1 alpha:1.];
    descriptionLabel_.textAlignment = NSTextAlignmentLeft;
    descriptionLabel_.lineBreakMode = NSLineBreakByWordWrapping;
    descriptionLabel_.font = [UIFont systemFontOfSize:16.f];
    [self.contentView addSubview:descriptionLabel_];

    timestampLabel_ = [[UILabel alloc] initWithFrame:CGRectZero];
    timestampLabel_.numberOfLines = 1;
    timestampLabel_.textColor = [UIColor lightGrayColor];
    timestampLabel_.textAlignment = NSTextAlignmentRight;
    timestampLabel_.lineBreakMode = NSLineBreakByTruncatingTail;
    timestampLabel_.font = [UIFont systemFontOfSize:12.f];
    [self.contentView addSubview:timestampLabel_];

    separator_ = [[UIView alloc] initWithFrame:CGRectZero];
    separator_.backgroundColor = [CCSettings separatorColor];
    [self.contentView addSubview:separator_];

    self.imageView.contentMode = UIViewContentModeCenter;
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
  CGSize titleConstraintSize =
      CGSizeMake(size.width - kImageWidth - 4 * kLabelPadding - kTimestampWidth, CGFLOAT_MAX);
  CGRect titleBoundingRect = [title boundingRectWithSize:titleConstraintSize
                                                 options:NSStringDrawingUsesLineFragmentOrigin
                                              attributes:titleFontAttributes
                                                 context:nil];

  // 2 paddings for left/right edge, 1 for image. Timestamp is aligned with title.
  CGSize descConstraintSize = CGSizeMake(size.width - kImageWidth - 3 * kLabelPadding, CGFLOAT_MAX);
  CGRect descBoundingRect = [description boundingRectWithSize:descConstraintSize
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

- (void)layoutSubviews {
  CGSize size = self.bounds.size;
  self.imageView.frame = CGRectMake(0, 0, kImageWidth + 2 * kLabelPadding, size.height);

  NSDictionary *titleFontAttributes = @{NSFontAttributeName : [UIFont boldSystemFontOfSize:14.f]};
  NSDictionary *descFontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:16.f]};
  NSDictionary *tsFontAttributes = @{NSFontAttributeName : [UIFont systemFontOfSize:12.f]};

  CGRect tsBoundingRect =
      [self.timestampLabel.text boundingRectWithSize:CGSizeMake(kTimestampWidth, CGFLOAT_MAX)
                                             options:NSStringDrawingTruncatesLastVisibleLine
                                          attributes:tsFontAttributes
                                             context:nil];
  self.timestampLabel.frame = CGRectMake(CGRectGetMaxX(self.bounds) - kTimestampWidth - kLabelPadding,
                                         kLabelPadding,
                                         kTimestampWidth,
                                         tsBoundingRect.size.height);

  // 2 paddings for left/right edge, 1 for image, 1 for timestamp.
  CGSize titleConstraintSize =
      CGSizeMake(size.width - kImageWidth - 4 * kLabelPadding - kTimestampWidth, CGFLOAT_MAX);
  CGRect titleBoundingRect = [self.titleLabel.text boundingRectWithSize:titleConstraintSize
                                                                options:NSStringDrawingUsesLineFragmentOrigin
                                                             attributes:titleFontAttributes
                                                                context:nil];
  self.titleLabel.frame = CGRectMake(2 * kLabelPadding + kImageWidth,
                                     kLabelPadding,
                                     titleConstraintSize.width,
                                     titleBoundingRect.size.height);

  // 2 paddings for left/right edge, 1 for image. Timestamp is aligned with title.
  CGSize descConstraintSize = CGSizeMake(size.width - kImageWidth - 3 * kLabelPadding, CGFLOAT_MAX);
  CGRect descBoundingRect = [self.descriptionLabel.text boundingRectWithSize:descConstraintSize
                                                                     options:NSStringDrawingUsesLineFragmentOrigin
                                                                  attributes:descFontAttributes
                                                                     context:nil];
  self.descriptionLabel.frame =
      CGRectMake(2 * kLabelPadding + kImageWidth,
                 kLabelPadding + titleBoundingRect.size.height + kTitleDescriptionPadding,
                 descConstraintSize.width,
                 descBoundingRect.size.height);

  CGFloat separatorStartX = CGRectGetMaxX(self.imageView.frame);
  self.separator.frame = CGRectMake(separatorStartX,
                                    size.height - 1,
                                    size.width - separatorStartX - kLabelPadding,
                                    1);
}

@end
