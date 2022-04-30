-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: Spaceship_data
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `spaceship_main`
--

DROP TABLE IF EXISTS `spaceship_main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spaceship_main` (
  `id` int NOT NULL,
  `name` varchar(25) NOT NULL,
  `manufacturer` varchar(25) NOT NULL,
  `price` int NOT NULL,
  `image` varchar(250) NOT NULL,
  `state` varchar(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spaceship_main`
--

LOCK TABLES `spaceship_main` WRITE;
/*!40000 ALTER TABLE `spaceship_main` DISABLE KEYS */;
INSERT INTO `spaceship_main` VALUES (1,'Voyager','Rilis',500000000,'SpaceshipsImages/new1.jpg','new'),(2,'Galactic','Vorer',1000000,'SpaceshipsImages/new2.jpg','new'),(3,'Enterprise','Lavon',3000000,'SpaceshipsImages/crashed1.jpeg','used'),(4,'Starer','Nebula Inc.',40000000,'SpaceshipsImages/crashed2.jpeg','used'),(5,'Neutro','Tob Industries',900000,'SpaceshipsImages/new3.png','new'),(6,'Energy5','Eleni',15000000,'SpaceshipsImages/damaged1.jpg','used'),(7,'Photoner','Boder',700000,'SpaceshipsImages/damaged2.jpeg','used'),(8,'Starglider','Posweri',2000000000,'SpaceshipsImages/new4.jpg','new'),(9,'Black star','Rakon Industries',170000000,'SpaceshipsImages/new5.png','new'),(10,'Galaxy3','Voleti',600000,'SpaceshipsImages/new6.jpg','used');
/*!40000 ALTER TABLE `spaceship_main` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29 21:02:59
