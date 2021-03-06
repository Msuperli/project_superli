/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : liku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 18:01:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `smallurl1` varchar(255) DEFAULT NULL,
  `smallurl2` varchar(255) DEFAULT NULL,
  `smallurl3` varchar(255) DEFAULT NULL,
  `smallurl4` varchar(255) DEFAULT NULL,
  `decrition` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `buy` varchar(255) NOT NULL,
  `shouye` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `jifen` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'img/1.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('2', 'img/2.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('3', 'img/3.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('4', 'img/4.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('5', 'img/5.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('6', 'img/6.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('7', 'img/7.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('8', 'img/8.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('9', 'img/9.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('10', 'img/10.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('11', 'img/11.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('12', 'img/12.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('13', 'img/13.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('14', 'img/14.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('15', 'img/15.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('16', 'img/16.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('17', 'img/17.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('18', 'img/18.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('19', 'img/19.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('20', 'img/20.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('21', 'img/21.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('22', 'img/22.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('23', 'img/23.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('24', 'img/24.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('25', 'img/25.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('26', 'img/26.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('27', 'img/27.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('28', 'img/28.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('29', 'img/29.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('30', 'img/30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('31', 'img/32.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('32', 'img/33.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('33', 'img/34.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('34', 'img/35.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('35', 'img/36.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('36', 'img/37.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('37', 'img/38.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('38', 'img/39.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('39', 'img/40.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
INSERT INTO `goods` VALUES ('40', 'img/31.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', 'img/11811102_10_01--w_30_h_30.jpg', '2018新款汤普森3代战靴', '598.00', '立即购买', 'ss', '1', '598');
SET FOREIGN_KEY_CHECKS=1;
