/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : liku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 18:00:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `smallimg1` varchar(255) DEFAULT NULL,
  `smallimg2` varchar(255) DEFAULT NULL,
  `smallimg3` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `decrition` varchar(255) NOT NULL,
  `liebiao` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `jifen` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '257.00', '男子汤普森潮流篮球鞋', 'lie', '1', '257');
INSERT INTO `goodlist` VALUES ('2', '../img/b2.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '252.00', '男子汤普森潮流篮球鞋', 'lie', '1', '252');
INSERT INTO `goodlist` VALUES ('3', '../img/b3.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '222.00', '男子汤普森潮流篮球鞋', 'lie', '1', '222');
INSERT INTO `goodlist` VALUES ('4', '../img/b4.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '212.00', '男子汤普森潮流篮球鞋', 'lie', '1', '212');
INSERT INTO `goodlist` VALUES ('5', '../img/b5.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '332.00', '男子汤普森潮流篮球鞋', 'lie', '1', '332');
INSERT INTO `goodlist` VALUES ('6', '../img/b6.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '232.00', '男子汤普森潮流篮球鞋', 'lie', '1', '232');
INSERT INTO `goodlist` VALUES ('7', '../img/b8.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '232.00', '男子汤普森潮流篮球鞋', 'lie', '1', '232');
INSERT INTO `goodlist` VALUES ('8', '../img/b9.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '322.00', '男子汤普森潮流篮球鞋', 'lie', '1', '322');
INSERT INTO `goodlist` VALUES ('9', '../img/b10.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '321.00', '男子汤普森潮流篮球鞋', 'lie', '1', '321');
INSERT INTO `goodlist` VALUES ('10', '../img/b11.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '654.00', '男子汤普森潮流篮球鞋', 'lie', '1', '654');
INSERT INTO `goodlist` VALUES ('11', '../img/b12.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '344.00', '男子汤普森潮流篮球鞋', 'lie', '1', '344');
INSERT INTO `goodlist` VALUES ('12', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '654.00', '男子汤普森潮流篮球鞋', 'lie', '1', '654');
INSERT INTO `goodlist` VALUES ('13', '../img/b14.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '657.00', '男子汤普森潮流篮球鞋', 'lie', '1', '657');
INSERT INTO `goodlist` VALUES ('14', '../img/b15.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '765.00', '男子汤普森潮流篮球鞋', 'lie', '1', '765');
INSERT INTO `goodlist` VALUES ('15', '../img/b16.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '233.00', '男子汤普森潮流篮球鞋', 'lie', '1', '233');
INSERT INTO `goodlist` VALUES ('16', '../img/b17.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '324.00', '男子汤普森潮流篮球鞋', 'lie', '1', '324');
INSERT INTO `goodlist` VALUES ('17', '../img/b18.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '234.00', '男子汤普森潮流篮球鞋', 'lie', '1', '234');
INSERT INTO `goodlist` VALUES ('18', '../img/b19.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '544.00', '男子汤普森潮流篮球鞋', 'lie', '1', '544');
INSERT INTO `goodlist` VALUES ('19', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '234.00', '男子汤普森潮流篮球鞋', 'lie', '1', '234');
INSERT INTO `goodlist` VALUES ('20', '../img/b21.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '323.00', '男子汤普森潮流篮球鞋', 'lie', '1', '323');
INSERT INTO `goodlist` VALUES ('21', '../img/b22.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '452.00', '男子汤普森潮流篮球鞋', 'lie', '1', '452');
INSERT INTO `goodlist` VALUES ('22', '../img/b25.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '322.00', '男子汤普森潮流篮球鞋', 'lie', '1', '322');
INSERT INTO `goodlist` VALUES ('23', '../img/b24.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '234.00', '男子汤普森潮流篮球鞋', 'lie', '1', '234');
INSERT INTO `goodlist` VALUES ('24', '../img/b26.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '121.00', '男子汤普森潮流篮球鞋', 'lie', '1', '121');
INSERT INTO `goodlist` VALUES ('25', '../img/b27.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '123.00', '男子汤普森潮流篮球鞋', 'lie', '1', '123');
INSERT INTO `goodlist` VALUES ('26', '../img/b28.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '321.00', '男子汤普森潮流篮球鞋', 'lie', '1', '321');
INSERT INTO `goodlist` VALUES ('27', '../img/b29.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '321.00', '男子汤普森潮流篮球鞋', 'lie', '1', '321');
INSERT INTO `goodlist` VALUES ('28', '../img/b23.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '123.00', '男子汤普森潮流篮球鞋', 'lie', '1', '123');
INSERT INTO `goodlist` VALUES ('29', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '123.00', '男子汤普森潮流篮球鞋', 'lie', '1', '123');
INSERT INTO `goodlist` VALUES ('30', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '134.00', '男子汤普森潮流篮球鞋', 'lie', '1', '134');
INSERT INTO `goodlist` VALUES ('31', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '321.00', '男子汤普森潮流篮球鞋', 'lie', '1', '321');
INSERT INTO `goodlist` VALUES ('32', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '232.00', '男子汤普森潮流篮球鞋', 'lie', '1', '232');
INSERT INTO `goodlist` VALUES ('33', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '213.00', '男子汤普森潮流篮球鞋', 'lie', '1', '213');
INSERT INTO `goodlist` VALUES ('34', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '233.00', '男子汤普森潮流篮球鞋', 'lie', '1', '233');
INSERT INTO `goodlist` VALUES ('35', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '323.00', '男子汤普森潮流篮球鞋', 'lie', '1', '323');
INSERT INTO `goodlist` VALUES ('36', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '312.00', '男子汤普森潮流篮球鞋', 'lie', '1', '312');
INSERT INTO `goodlist` VALUES ('37', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '343.00', '男子汤普森潮流篮球鞋', 'lie', '1', '343');
INSERT INTO `goodlist` VALUES ('38', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '343.00', '男子汤普森潮流篮球鞋', 'lie', '1', '343');
INSERT INTO `goodlist` VALUES ('39', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '232.00', '男子汤普森潮流篮球鞋', 'lie', '1', '232');
INSERT INTO `goodlist` VALUES ('40', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '432.00', '男子汤普森潮流篮球鞋', 'lie', '1', '432');
INSERT INTO `goodlist` VALUES ('41', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '134.00', '男子汤普森潮流篮球鞋', 'lie', '1', '134');
INSERT INTO `goodlist` VALUES ('42', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '213.00', '男子汤普森潮流篮球鞋', 'lie', '1', '213');
INSERT INTO `goodlist` VALUES ('43', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '433.00', '男子汤普森潮流篮球鞋', 'lie', '1', '433');
INSERT INTO `goodlist` VALUES ('44', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '564.00', '男子汤普森潮流篮球鞋', 'lie', '1', '564');
INSERT INTO `goodlist` VALUES ('45', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '453.00', '男子汤普森潮流篮球鞋', 'lie', '1', '453');
INSERT INTO `goodlist` VALUES ('46', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '323.00', '男子汤普森潮流篮球鞋', 'lie', '1', '323');
INSERT INTO `goodlist` VALUES ('47', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '435.00', '男子汤普森潮流篮球鞋', 'lie', '1', '435');
INSERT INTO `goodlist` VALUES ('48', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '345.00', '男子汤普森潮流篮球鞋', 'lie', '1', '345');
INSERT INTO `goodlist` VALUES ('49', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '343.00', '男子汤普森潮流篮球鞋', 'lie', '1', '343');
INSERT INTO `goodlist` VALUES ('50', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '234.00', '男子汤普森潮流篮球鞋', 'lie', '1', '234');
INSERT INTO `goodlist` VALUES ('51', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '324.00', '男子汤普森潮流篮球鞋', 'lie', '1', '324');
INSERT INTO `goodlist` VALUES ('52', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '324.00', '男子汤普森潮流篮球鞋', 'lie', '1', '324');
INSERT INTO `goodlist` VALUES ('53', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '342.00', '男子汤普森潮流篮球鞋', 'lie', '1', '342');
INSERT INTO `goodlist` VALUES ('54', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '342.00', '男子汤普森潮流篮球鞋', 'lie', '1', '342');
INSERT INTO `goodlist` VALUES ('55', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '432.00', '男子汤普森潮流篮球鞋', 'lie', '1', '432');
INSERT INTO `goodlist` VALUES ('56', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '432.00', '男子汤普森潮流篮球鞋', 'lie', '1', '432');
INSERT INTO `goodlist` VALUES ('57', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '244.00', '男子汤普森潮流篮球鞋', 'lie', '1', '244');
INSERT INTO `goodlist` VALUES ('58', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '245.00', '男子汤普森潮流篮球鞋', 'lie', '1', '245');
INSERT INTO `goodlist` VALUES ('59', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '233.00', '男子汤普森潮流篮球鞋', 'lie', '1', '233');
INSERT INTO `goodlist` VALUES ('60', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '466.00', '男子汤普森潮流篮球鞋', 'lie', '1', '466');
INSERT INTO `goodlist` VALUES ('61', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '342.00', '男子汤普森潮流篮球鞋', 'lie', '1', '342');
INSERT INTO `goodlist` VALUES ('62', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '345.00', '男子汤普森潮流篮球鞋', 'lie', '1', '345');
INSERT INTO `goodlist` VALUES ('63', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '344.00', '男子汤普森潮流篮球鞋', 'lie', '1', '344');
INSERT INTO `goodlist` VALUES ('64', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '324.00', '男子汤普森潮流篮球鞋', 'lie', '1', '324');
INSERT INTO `goodlist` VALUES ('65', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '343.00', '男子汤普森潮流篮球鞋', 'lie', '1', '343');
INSERT INTO `goodlist` VALUES ('66', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '433.00', '男子汤普森潮流篮球鞋', 'lie', '1', '433');
INSERT INTO `goodlist` VALUES ('67', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '454.00', '男子汤普森潮流篮球鞋', 'lie', '1', '454');
INSERT INTO `goodlist` VALUES ('68', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '322.00', '男子汤普森潮流篮球鞋', 'lie', '1', '322');
INSERT INTO `goodlist` VALUES ('69', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '544.00', '男子汤普森潮流篮球鞋', 'lie', '1', '544');
INSERT INTO `goodlist` VALUES ('70', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '212.00', '男子汤普森潮流篮球鞋', 'lie', '1', '212');
INSERT INTO `goodlist` VALUES ('71', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '234.00', '男子汤普森潮流篮球鞋', 'lie', '1', '234');
INSERT INTO `goodlist` VALUES ('72', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '323.00', '男子汤普森潮流篮球鞋', 'lie', '1', '323');
INSERT INTO `goodlist` VALUES ('73', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '213.00', '男子汤普森潮流篮球鞋', 'lie', '1', '213');
INSERT INTO `goodlist` VALUES ('74', '../img/b17.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '233.00', '男子汤普森潮流篮球鞋', 'lie', '1', '233');
INSERT INTO `goodlist` VALUES ('75', '../img/b17.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '324.00', '男子汤普森潮流篮球鞋', 'lie', '1', '324');
INSERT INTO `goodlist` VALUES ('76', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '132.00', '男子汤普森潮流篮球鞋', 'lie', '1', '132');
INSERT INTO `goodlist` VALUES ('77', '../img/b13.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '453.00', '男子汤普森潮流篮球鞋', 'lie', '1', '453');
INSERT INTO `goodlist` VALUES ('78', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '259.00', '男子汤普森潮流篮球鞋', 'lie', '1', '259');
INSERT INTO `goodlist` VALUES ('79', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '233.00', '男子汤普森潮流篮球鞋', 'lie', '1', '233');
INSERT INTO `goodlist` VALUES ('80', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '345.00', '男子汤普森潮流篮球鞋', 'lie', '1', '345');
INSERT INTO `goodlist` VALUES ('81', '../img/b1.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '433.00', '男子汤普森潮流篮球鞋', 'lie', '1', '433');
INSERT INTO `goodlist` VALUES ('82', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '453.00', '男子汤普森潮流篮球鞋', 'lie', '1', '453');
INSERT INTO `goodlist` VALUES ('83', '../img/b17.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '232.00', '男子汤普森潮流篮球鞋', 'lie', '1', '232');
INSERT INTO `goodlist` VALUES ('84', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '343.00', '男子汤普森潮流篮球鞋', 'lie', '1', '343');
INSERT INTO `goodlist` VALUES ('85', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '655.00', '男子汤普森潮流篮球鞋', 'lie', '1', '655');
INSERT INTO `goodlist` VALUES ('86', '../img/b20.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '434.00', '男子汤普森潮流篮球鞋', 'lie', '1', '434');
INSERT INTO `goodlist` VALUES ('87', '../img/b19.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '432.00', '男子汤普森潮流篮球鞋', 'lie', '1', '432');
INSERT INTO `goodlist` VALUES ('88', '../img/b19.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '259.00', '男子汤普森潮流篮球鞋', 'lie', '1', '259');
INSERT INTO `goodlist` VALUES ('89', '../img/b19.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '343.00', '男子汤普森潮流篮球鞋', 'lie', '1', '343');
INSERT INTO `goodlist` VALUES ('90', '../img/b19.jpg', '../img/cc.jpg', '../img/cc.jpg', '../img/cc.jpg', '564.00', '男子汤普森潮流篮球鞋', 'lie', '1', '564');
SET FOREIGN_KEY_CHECKS=1;
