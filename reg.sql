/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : liku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 18:01:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('27', 'wwwww@sws.ds', '123456');
INSERT INTO `reg` VALUES ('26', 'sds@sw.dsd', '123456');
INSERT INTO `reg` VALUES ('6', '13432896290', '12345678');
INSERT INTO `reg` VALUES ('7', '13454334232', '12343443');
INSERT INTO `reg` VALUES ('8', '13454334235', '1234567');
INSERT INTO `reg` VALUES ('9', '13432896291', '1234567');
INSERT INTO `reg` VALUES ('10', '13432896292', '12345678');
INSERT INTO `reg` VALUES ('11', '13432896200', '123647788');
INSERT INTO `reg` VALUES ('12', '223@ds.ds', '223@ds.ds');
INSERT INTO `reg` VALUES ('13', '223@d.ds', '223@d.ds');
INSERT INTO `reg` VALUES ('14', '223@d.dsss', '223@d.dsdd');
INSERT INTO `reg` VALUES ('15', 'sdsd@sfd.dd', 'sdsd@sfd.dd');
INSERT INTO `reg` VALUES ('16', 'sdsd@sfd.aa', 'sdsd@sfd.dd');
INSERT INTO `reg` VALUES ('17', 'sdsd@sfd.ww', '74e65c1d44905de0250b4f45a1323763');
INSERT INTO `reg` VALUES ('18', '1dssd@sds.dd', 'c9d65ce33c0cc1940af7205861adb3b3');
INSERT INTO `reg` VALUES ('19', '1dssd@sds.cc', 'c4d9dbcf64b5a726dc2fb8501dd4dc9d');
INSERT INTO `reg` VALUES ('20', '1dssd@sds.aa', '76fe2fd740948a53343d5c71004b05a0');
INSERT INTO `reg` VALUES ('21', '1dssd@sds.ww', '57db44add75032231422105b8b90c91e');
INSERT INTO `reg` VALUES ('22', '1dssd@sds.ss', '3c6e8b9df4dd539fa72fa23754e8e76c');
INSERT INTO `reg` VALUES ('23', '1dssd@sds.ff', '3c6e8b9df4dd539fa72fa23754e8e76c');
INSERT INTO `reg` VALUES ('24', 'sds.sdjs@sk.sds', '123456');
INSERT INTO `reg` VALUES ('25', 'ddddd@dd.dd', '123456');
SET FOREIGN_KEY_CHECKS=1;
