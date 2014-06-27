//
//  CCAlertTableCells.h
//  PageMD
//
//  Created by Srinath on 5/28/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CCAlertCell : UITableViewCell

@property (nonatomic, strong) UILabel *titleLabel;
@property (nonatomic, strong) UILabel *descriptionLabel;
@property (nonatomic, strong) UILabel *timestampLabel;

+ (CGSize)sizeThatFits:(CGSize)size
             withTitle:(NSString *)title
           description:(NSString *)description
             timestamp:(NSString *)timestamp;

@end
