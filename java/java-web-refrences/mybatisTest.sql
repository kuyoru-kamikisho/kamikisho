-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: localhost    Database: mybatis
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `mybatis`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `mybatis` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mybatis`;

--
-- Table structure for table `tb_brand`
--

DROP TABLE IF EXISTS `tb_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(20) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `ordered` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_brand`
--

LOCK TABLES `tb_brand` WRITE;
/*!40000 ALTER TABLE `tb_brand` DISABLE KEYS */;
INSERT INTO `tb_brand` VALUES (1,'华为','华为技术有限公司',100,'万物互联',1),(2,'小米','小米科技有限公司',50,'are you ok',1),(3,'格力','格力电器股份有限公司',30,'让世界爱上中国造',1),(4,'阿里巴巴','阿里巴巴集团控股有限公司',10,'买买买',1),(6,'百度','百度在线网络技术公司',5,'波导手机,手机2中的战斗机',0),(9,'三只松鼠','三只松鼠股份有限公司',5,'好吃不上火',0),(10,'华为','华为技术有限公司',100,'万物互联',1),(11,'小米','小米科技有限公司',50,'are you ok',1),(12,'格力','格力电器股份有限公司',30,'让世界爱上中国造',1),(13,'阿里巴巴','阿里巴巴集团控股有限公司',10,'买买买',1),(14,'腾讯','腾讯计算机系统有限公司',50,'玩玩玩',0),(15,'百度','百度在线网络技术公司',5,'搜搜搜',0),(16,'京东','北京京东世纪贸易有限公司',40,'就是快',1),(17,'华为','华为技术有限公司',100,'万物互联',1),(18,'小米','小米科技有限公司',50,'are you ok',1),(19,'格力','格力电器股份有限公司',30,'让世界爱上中国造',1),(20,'阿里巴巴','阿里巴巴集团控股有限公司',10,'买买买',1),(21,'腾讯','腾讯计算机系统有限公司',50,'玩玩玩',0),(22,'百度','百度在线网络技术公司',5,'搜搜搜',0),(23,'京东','北京京东世纪贸易有限公司',40,'就是快',1),(24,'小米','小米科技有限公司',50,'are you ok',1),(25,'三只松鼠','三只松鼠股份有限公司',5,'好吃不上火',0),(26,'华为','华为技术有限公司',100,'万物互联',1),(27,'小米','小米科技有限公司',50,'are you ok',1),(28,'格力','格力电器股份有限公司',30,'让世界爱上中国造',1),(29,'阿里巴巴','阿里巴巴集团控股有限公司',10,'买买买',1),(30,'腾讯','腾讯计算机系统有限公司',50,'玩玩玩',0),(31,'百度','百度在线网络技术公司',5,'搜搜搜',0),(32,'京东','北京京东世纪贸易有限公司',40,'就是快',1),(33,'华为','华为技术有限公司',100,'万物互联',1),(34,'小米','小米科技有限公司',50,'are you ok',1),(35,'格力','格力电器股份有限公司',30,'让世界爱上中国造',1),(36,'阿里巴巴','阿里巴巴集团控股有限公司',10,'买买买',1),(37,'腾讯','腾讯计算机系统有限公司',50,'玩玩玩',0),(38,'百度','百度在线网络技术公司',5,'搜搜搜',0),(39,'京东','北京京东世纪贸易有限公司',40,'就是快',1),(40,'小米','小米科技有限公司',50,'are you ok',1),(41,'三只松鼠','三只松鼠股份有限公司',5,'好吃不上火',0),(42,'华为','华为技术有限公司',100,'万物互联',1),(43,'小米','小米科技有限公司',50,'are you ok',1),(44,'格力','格力电器股份有限公司',30,'让世界爱上中国造',1),(45,'阿里巴巴','阿里巴巴集团控股有限公司',10,'买买买',1),(46,'腾讯','腾讯计算机系统有限公司',50,'玩玩玩',0),(47,'百度','百度在线网络技术公司',5,'搜搜搜',0),(48,'京东','北京京东世纪贸易有限公司',40,'就是快',1);
/*!40000 ALTER TABLE `tb_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `addr` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'zhangsan','123','男','北京'),(2,'李四','234','女','天津'),(3,'王五','11','男','西安');
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-13 17:15:22
