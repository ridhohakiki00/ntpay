-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: ntpay
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'Banner 1','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747555535/Gradient_Geometric_Creative_Agency_LinkedIn_Banner_5_xyysfs.jpg','Ini adalah banner 1'),(2,'Banner 2','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747555359/Gradient_Geometric_Creative_Agency_LinkedIn_Banner_rqzdl8.jpg','Ini adalah banner 2'),(3,'Banner 3','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747555356/Gradient_Geometric_Creative_Agency_LinkedIn_Banner_1_ctxntk.jpg','Ini adalah banner 3'),(4,'Banner 4','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747555354/Gradient_Geometric_Creative_Agency_LinkedIn_Banner_2_p1tmjq.jpg','Ini adalah banner 4'),(5,'Banner 5','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747555348/Gradient_Geometric_Creative_Agency_LinkedIn_Banner_3_lq7s3g.jpg','Ini adalah banner 5'),(6,'Banner 6','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747555347/Gradient_Geometric_Creative_Agency_LinkedIn_Banner_4_tt6a9c.jpg','Ini adalah banner 6');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES ('MUSIK','Musik Berlangganan','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747550018/f0465520-008d-4fb3-b15e-3b3a52265f22.png',50000),('PAJAK','Pajak PBB','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747548878/0810610f-db02-4496-8b0f-bf1070e64b26.png',40000),('PAKET_DATA','Paket data','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747549760/4ceab27c-36c3-4ed5-8b18-675f9dfe5382.png',50000),('PDAM','PDAM Berlangganan','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747549227/6cb5ae5a-eaae-49fd-97b9-5711e02a362a.png',40000),('PGN','PGN Berlangganan','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747549518/fadc65bb-84fc-4b6d-b44f-1656de61b48d.png',50000),('PLN','Token Listrik','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747549067/9ed9ccfe-7b65-479c-9adb-a49586ae0258.png',10000),('PULSA','Pulsa','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747550198/19e8efa0-572b-4688-9664-28e2ffee367b.png',40000),('QURBAN','Qurban','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747550337/95be106d-1f9b-4b16-959c-04356b65accc.png',200000),('TV','TV Berlangganan','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747549669/4110d08c-c0ee-4f00-804d-b7ff1bebefa0.png',50000),('VOUCHER_GAME','Voucher Game','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747550238/83724f2e-ffb5-49ba-817a-7c0ddf6dd67b.png',100000),('VOUCHER_MAKANAN','Voucher Makanan','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747550319/2a00bcae-8332-40d7-b0cf-b039ccadc26a.png',100000),('ZAKAT','Zakat','https://res.cloudinary.com/dhkbrscd0/image/upload/v1747550410/c5dc90f3-f8e7-4fde-804e-f1b846b3486f.png',300000);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-19 13:06:39
