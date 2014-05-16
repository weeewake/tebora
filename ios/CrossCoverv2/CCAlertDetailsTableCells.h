//
//  CCAlertDetailsTableCells.h
//  PageMD
//
//  Created by Srinath on 5/19/14.
//  Copyright (c) 2014 Tebora. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CCTableViewPatientCell : UITableViewCell

@property (nonatomic, strong) UILabel *nameLabel;
@property (nonatomic, strong) UILabel *mrnLabel;
@property (nonatomic, strong) UILabel *bedLabel;

+ (CGSize)sizeThatFits:(CGSize)size
              withName:(NSString *)name
                   mrn:(NSString *)mrn
                   bed:(NSString *)bed;

@end


@interface CCTableViewNurseCell : UITableViewCell

@property (nonatomic, strong) UILabel *nameLabel;
@property (nonatomic, strong) UILabel *phoneLabel;

+ (CGSize)sizeThatFits:(CGSize)size
              withName:(NSString *)name
                 phone:(NSString *)phone;

@end


@interface CCTableViewConversationCell : UITableViewCell

@property (nonatomic, assign) BOOL isMyMessage;
@property (nonatomic, strong) UILabel *nameLabel;
@property (nonatomic, strong) UILabel *messageLabel;
@property (nonatomic, strong) UILabel *timestampLabel;


+ (CGSize)sizeThatFits:(CGSize)size
              withName:(NSString *)name
               message:(NSString *)message
             timestamp:(NSString *)timestamp;

@end