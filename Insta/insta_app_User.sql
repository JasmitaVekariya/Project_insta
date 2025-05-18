CREATE DATABASE  IF NOT EXISTS `insta_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `insta_app`;
-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (x86_64)
--
-- Host: 127.0.0.1    Database: insta_app
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('123','kashyap','asd@gmail.com','asd'),('165c9990-a353-44fc-a8f3-391cd2246801','Tina.Ernser44','Judge.Heller@gmail.com','lhm2a9Ey6rML3hN'),('30ae5c59-2e0f-4dcf-b2a2-18d8d6c19618','Jasmita','pjasmita7@gmail.com','123'),('3d97b40e-26cb-4a03-8c68-e89d4647405e','Elenor_Murphy','Archibald98@gmail.com','I98pDLztc3bF28m'),('513fd18d-f24c-43a9-b728-edcf59b92b70','Wilburn62','Dayton76@gmail.com','F2d2j9SbyMSe752'),('65573908-ab4d-4a71-8ba5-d87858601866','Amira.Oberbrunner93','Hertha.Halvorson56@gmail.com','wTfItw4MRpvjJqd'),('66d3b17e-30c8-418a-a1ca-c34f7344c609','Zoie17','Avery7@yahoo.com','RCJI52gPDrFuNOu'),('93582021-7323-473d-a55c-76b54bcb325c','Dorcas67','Milan.Blick77@gmail.com','CY66t_EQu2zP9pO'),('b508c7b2-1110-47d5-9f37-b2d4ac0176c2','Ada_Osinski21','Adrain.Marquardt51@yahoo.com','bo0fthRP2jTH12x'),('bef2b55e-82c0-4b50-9793-a5ecd6d1e6be','Ethel.Hahn','Sylvia_Dach53@gmail.com','1TTS0qpEZxdpsof'),('e950abe6-0b90-46b7-9047-059235bde062','Joanne_Labadie-Roob','Anthony_Lang@yahoo.com','WClwW6MBzODmO0q'),('f9ccb8c5-0c91-4eb1-9a50-1e63f7537d02','Arianna_Boehm-Bernier','Grace.Bosco11@gmail.com','mYt4a6YVetzUFcd');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-18 23:21:15
