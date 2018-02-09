/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : liku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 18:01:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for newgoodlist
-- ----------------------------
DROP TABLE IF EXISTS `newgoodlist`;
CREATE TABLE `newgoodlist` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `decrition` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `jifen` varchar(21) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of newgoodlist
-- ----------------------------
INSERT INTO `newgoodlist` VALUES ('40', '../img/b1.jpg', '257.00', '男子汤普森潮流篮球鞋', '1', '257');
INSERT INTO `newgoodlist` VALUES ('41', '../img/b2.jpg', '252.00', '男子汤普森潮流篮球鞋', '1', '252');
INSERT INTO `newgoodlist` VALUES ('42', '../img/b3.jpg', '222.00', '男子汤普森潮流篮球鞋', '1', '222');
INSERT INTO `newgoodlist` VALUES ('43', '../img/b4.jpg', '212.00', '男子汤普森潮流篮球鞋', '1', '212');
INSERT INTO `newgoodlist` VALUES ('44', '../img/b5.jpg', '332.00', '男子汤普森潮流篮球鞋', '1', '332');
INSERT INTO `newgoodlist` VALUES ('45', '../img/b6.jpg', '232.00', '男子汤普森潮流篮球鞋', '1', '232');
INSERT INTO `newgoodlist` VALUES ('46', '../img/b8.jpg', '232.00', '男子汤普森潮流篮球鞋', '1', '232');
INSERT INTO `newgoodlist` VALUES ('47', '../img/b9.jpg', '322.00', '男子汤普森潮流篮球鞋', '1', '322');
INSERT INTO `newgoodlist` VALUES ('48', '../img/b10.jpg', '321.00', '男子汤普森潮流篮球鞋', '1', '321');
INSERT INTO `newgoodlist` VALUES ('49', '../img/b11.jpg', '654.00', '男子汤普森潮流篮球鞋', '1', '654');
INSERT INTO `newgoodlist` VALUES ('50', '../img/b12.jpg', '344.00', '男子汤普森潮流篮球鞋', '1', '344');
INSERT INTO `newgoodlist` VALUES ('51', '../img/b13.jpg', '654.00', '男子汤普森潮流篮球鞋', '1', '654');
INSERT INTO `newgoodlist` VALUES ('52', '../img/b14.jpg', '657.00', '男子汤普森潮流篮球鞋', '1', '657');
INSERT INTO `newgoodlist` VALUES ('53', '../img/b15.jpg', '765.00', '男子汤普森潮流篮球鞋', '1', '765');
INSERT INTO `newgoodlist` VALUES ('54', '../img/b16.jpg', '233.00', '男子汤普森潮流篮球鞋', '1', '233');
INSERT INTO `newgoodlist` VALUES ('55', '../img/b17.jpg', '324.00', '男子汤普森潮流篮球鞋', '1', '324');
INSERT INTO `newgoodlist` VALUES ('56', '../img/b18.jpg', '234.00', '男子汤普森潮流篮球鞋', '1', '234');
INSERT INTO `newgoodlist` VALUES ('57', '../img/b19.jpg', '544.00', '男子汤普森潮流篮球鞋', '1', '544');
INSERT INTO `newgoodlist` VALUES ('58', '../img/b20.jpg', '234.00', '男子汤普森潮流篮球鞋', '1', '234');
INSERT INTO `newgoodlist` VALUES ('59', '../img/b21.jpg', '323.00', '男子汤普森潮流篮球鞋', '1', '323');
INSERT INTO `newgoodlist` VALUES ('60', '../img/b22.jpg', '452.00', '男子汤普森潮流篮球鞋', '1', '452');
INSERT INTO `newgoodlist` VALUES ('61', '../img/b25.jpg', '322.00', '男子汤普森潮流篮球鞋', '1', '322');
INSERT INTO `newgoodlist` VALUES ('62', '../img/b24.jpg', '234.00', '男子汤普森潮流篮球鞋', '1', '234');
INSERT INTO `newgoodlist` VALUES ('63', '../img/b26.jpg', '121.00', '男子汤普森潮流篮球鞋', '1', '121');
INSERT INTO `newgoodlist` VALUES ('64', '../img/b27.jpg', '123.00', '男子汤普森潮流篮球鞋', '1', '123');
INSERT INTO `newgoodlist` VALUES ('65', '../img/b28.jpg', '321.00', '男子汤普森潮流篮球鞋', '1', '321');
INSERT INTO `newgoodlist` VALUES ('66', '../img/b29.jpg', '321.00', '男子汤普森潮流篮球鞋', '1', '321');
INSERT INTO `newgoodlist` VALUES ('67', '../img/b23.jpg', '123.00', '男子汤普森潮流篮球鞋', '1', '123');
INSERT INTO `newgoodlist` VALUES ('68', '../img/b1.jpg', '123.00', '男子汤普森潮流篮球鞋', '1', '123');
INSERT INTO `newgoodlist` VALUES ('69', '../img/b1.jpg', '134.00', '男子汤普森潮流篮球鞋', '1', '134');
INSERT INTO `newgoodlist` VALUES ('70', '../img/b1.jpg', '321.00', '男子汤普森潮流篮球鞋', '1', '321');
INSERT INTO `newgoodlist` VALUES ('71', '../img/b1.jpg', '232.00', '男子汤普森潮流篮球鞋', '1', '232');
INSERT INTO `newgoodlist` VALUES ('72', '../img/b1.jpg', '213.00', '男子汤普森潮流篮球鞋', '1', '213');
INSERT INTO `newgoodlist` VALUES ('73', '../img/b1.jpg', '233.00', '男子汤普森潮流篮球鞋', '1', '233');
INSERT INTO `newgoodlist` VALUES ('74', '../img/b1.jpg', '323.00', '男子汤普森潮流篮球鞋', '1', '323');
INSERT INTO `newgoodlist` VALUES ('75', '../img/b1.jpg', '312.00', '男子汤普森潮流篮球鞋', '1', '312');
INSERT INTO `newgoodlist` VALUES ('77', '../img/b1.jpg', '343.00', '男子汤普森潮流篮球鞋', '1', '343');
INSERT INTO `newgoodlist` VALUES ('76', '../img/b1.jpg', '343.00', '男子汤普森潮流篮球鞋', '1', '343');
INSERT INTO `newgoodlist` VALUES ('78', '../img/b1.jpg', '232.00', '男子汤普森潮流篮球鞋', '1', '232');
INSERT INTO `newgoodlist` VALUES ('79', '../img/b1.jpg', '432.00', '男子汤普森潮流篮球鞋', '1', '432');
INSERT INTO `newgoodlist` VALUES ('80', '../img/b1.jpg', '134.00', '男子汤普森潮流篮球鞋', '1', '134');
INSERT INTO `newgoodlist` VALUES ('81', '../img/b1.jpg', '213.00', '男子汤普森潮流篮球鞋', '1', '213');
INSERT INTO `newgoodlist` VALUES ('82', '../img/b1.jpg', '433.00', '男子汤普森潮流篮球鞋', '1', '433');
INSERT INTO `newgoodlist` VALUES ('83', '../img/b1.jpg', '564.00', '男子汤普森潮流篮球鞋', '1', '564');
INSERT INTO `newgoodlist` VALUES ('84', '../img/b1.jpg', '453.00', '男子汤普森潮流篮球鞋', '1', '453');
INSERT INTO `newgoodlist` VALUES ('85', '../img/b1.jpg', '323.00', '男子汤普森潮流篮球鞋', '1', '323');
INSERT INTO `newgoodlist` VALUES ('86', '../img/b1.jpg', '435.00', '男子汤普森潮流篮球鞋', '1', '435');
INSERT INTO `newgoodlist` VALUES ('87', '../img/b1.jpg', '345.00', '男子汤普森潮流篮球鞋', '1', '345');
INSERT INTO `newgoodlist` VALUES ('88', '../img/b1.jpg', '343.00', '男子汤普森潮流篮球鞋', '1', '343');
INSERT INTO `newgoodlist` VALUES ('89', '../img/b1.jpg', '234.00', '男子汤普森潮流篮球鞋', '1', '234');
INSERT INTO `newgoodlist` VALUES ('90', '../img/b1.jpg', '324.00', '男子汤普森潮流篮球鞋', '1', '324');
INSERT INTO `newgoodlist` VALUES ('91', '../img/b1.jpg', '324.00', '男子汤普森潮流篮球鞋', '1', '324');
INSERT INTO `newgoodlist` VALUES ('92', '../img/b1.jpg', '342.00', '男子汤普森潮流篮球鞋', '1', '342');
INSERT INTO `newgoodlist` VALUES ('93', '../img/b1.jpg', '342.00', '男子汤普森潮流篮球鞋', '1', '342');
INSERT INTO `newgoodlist` VALUES ('94', '../img/b1.jpg', '432.00', '男子汤普森潮流篮球鞋', '1', '432');
INSERT INTO `newgoodlist` VALUES ('95', '../img/b1.jpg', '432.00', '男子汤普森潮流篮球鞋', '1', '432');
INSERT INTO `newgoodlist` VALUES ('96', '../img/b1.jpg', '244.00', '男子汤普森潮流篮球鞋', '1', '244');
INSERT INTO `newgoodlist` VALUES ('97', '../img/b1.jpg', '245.00', '男子汤普森潮流篮球鞋', '1', '245');
INSERT INTO `newgoodlist` VALUES ('98', '../img/b1.jpg', '233.00', '男子汤普森潮流篮球鞋', '1', '233');
INSERT INTO `newgoodlist` VALUES ('99', '../img/b1.jpg', '466.00', '男子汤普森潮流篮球鞋', '1', '466');
INSERT INTO `newgoodlist` VALUES ('100', '../img/b13.jpg', '342.00', '男子汤普森潮流篮球鞋', '1', '342');
INSERT INTO `newgoodlist` VALUES ('101', '../img/b13.jpg', '345.00', '男子汤普森潮流篮球鞋', '1', '345');
INSERT INTO `newgoodlist` VALUES ('102', '../img/b13.jpg', '344.00', '男子汤普森潮流篮球鞋', '1', '344');
INSERT INTO `newgoodlist` VALUES ('103', '../img/b13.jpg', '324.00', '男子汤普森潮流篮球鞋', '1', '324');
INSERT INTO `newgoodlist` VALUES ('104', '../img/b20.jpg', '343.00', '男子汤普森潮流篮球鞋', '1', '343');
INSERT INTO `newgoodlist` VALUES ('105', '../img/b1.jpg', '433.00', '男子汤普森潮流篮球鞋', '1', '433');
INSERT INTO `newgoodlist` VALUES ('106', '../img/b1.jpg', '454.00', '男子汤普森潮流篮球鞋', '1', '454');
INSERT INTO `newgoodlist` VALUES ('107', '../img/b1.jpg', '322.00', '男子汤普森潮流篮球鞋', '1', '322');
INSERT INTO `newgoodlist` VALUES ('108', '../img/b20.jpg', '544.00', '男子汤普森潮流篮球鞋', '1', '544');
INSERT INTO `newgoodlist` VALUES ('109', '../img/b13.jpg', '212.00', '男子汤普森潮流篮球鞋', '1', '212');
INSERT INTO `newgoodlist` VALUES ('110', '../img/b1.jpg', '234.00', '男子汤普森潮流篮球鞋', '1', '234');
INSERT INTO `newgoodlist` VALUES ('111', '../img/b13.jpg', '323.00', '男子汤普森潮流篮球鞋', '1', '323');
INSERT INTO `newgoodlist` VALUES ('112', '../img/b17.jpg', '233.00', '男子汤普森潮流篮球鞋', '1', '233');
INSERT INTO `newgoodlist` VALUES ('113', '../img/b20.jpg', '213.00', '男子汤普森潮流篮球鞋', '1', '213');
INSERT INTO `newgoodlist` VALUES ('114', '../img/b17.jpg', '324.00', '男子汤普森潮流篮球鞋', '1', '324');
INSERT INTO `newgoodlist` VALUES ('115', '../img/b20.jpg', '132.00', '男子汤普森潮流篮球鞋', '1', '132');
INSERT INTO `newgoodlist` VALUES ('116', '../img/b13.jpg', '453.00', '男子汤普森潮流篮球鞋', '1', '453');
INSERT INTO `newgoodlist` VALUES ('117', '../img/b20.jpg', '259.00', '男子汤普森潮流篮球鞋', '1', '259');
INSERT INTO `newgoodlist` VALUES ('118', '../img/b1.jpg', '233.00', '男子汤普森潮流篮球鞋', '1', '233');
INSERT INTO `newgoodlist` VALUES ('119', '../img/b20.jpg', '345.00', '男子汤普森潮流篮球鞋', '1', '345');
INSERT INTO `newgoodlist` VALUES ('120', '../img/b1.jpg', '433.00', '男子汤普森潮流篮球鞋', '1', '433');
INSERT INTO `newgoodlist` VALUES ('121', '../img/b20.jpg', '453.00', '男子汤普森潮流篮球鞋', '1', '453');
INSERT INTO `newgoodlist` VALUES ('122', '../img/b17.jpg', '232.00', '男子汤普森潮流篮球鞋', '1', '232');
INSERT INTO `newgoodlist` VALUES ('123', '../img/b20.jpg', '343.00', '男子汤普森潮流篮球鞋', '1', '343');
INSERT INTO `newgoodlist` VALUES ('124', '../img/b20.jpg', '655.00', '男子汤普森潮流篮球鞋', '1', '655');
INSERT INTO `newgoodlist` VALUES ('125', '../img/b20.jpg', '434.00', '男子汤普森潮流篮球鞋', '1', '434');
INSERT INTO `newgoodlist` VALUES ('126', '../img/b19.jpg', '432.00', '男子汤普森潮流篮球鞋', '1', '432');
INSERT INTO `newgoodlist` VALUES ('127', '../img/b19.jpg', '259.00', '男子汤普森潮流篮球鞋', '1', '259');
INSERT INTO `newgoodlist` VALUES ('128', '../img/b19.jpg', '343.00', '男子汤普森潮流篮球鞋', '1', '343');
INSERT INTO `newgoodlist` VALUES ('129', '../img/b19.jpg', '564.00', '男子汤普森潮流篮球鞋', '1', '564');
SET FOREIGN_KEY_CHECKS=1;
