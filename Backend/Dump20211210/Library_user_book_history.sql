-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: Library
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `user_book_history`
--

DROP TABLE IF EXISTS `user_book_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_book_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `book_name` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `rating` int NOT NULL,
  `age_range` varchar(45) NOT NULL,
  `maximum_pages` int NOT NULL,
  `publication_date` int NOT NULL,
  `trigger_warning` varchar(100) NOT NULL,
  `best_seller` varchar(45) NOT NULL,
  `series` varchar(45) NOT NULL,
  `PictureLink` varchar(1000) NOT NULL,
  `LinkToAmazon` varchar(1000) NOT NULL,
  `Synopsis` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_book_history`
--

LOCK TABLES `user_book_history` WRITE;
/*!40000 ALTER TABLE `user_book_history` DISABLE KEYS */;
INSERT INTO `user_book_history` VALUES (38,'mahirmahboob91','Girl, Stolen','fantasy','April Henry',80,'young adult',240,2012,'kidnapping','No','Yes','https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1316730155l/7906105.jpg','https://www.barnesandnoble.com/w/girl-stolen-april-henry/1100191585?ean=9780312674755','Sixteen-year-old Cheyenne Wilder is sleeping in the back of the car while her stepmom fills a prescription for antibiotics. Before Cheyenne realizes what\'s happening, the car is being stolen. Griffin hadn\'t meant to kidnap Cheyenne and once he finds out that not only does she have pneumonia, but that she\'s blind, he really doesn\'t know what to do. When his dad finds out that Cheyenne\'s father is the president of a powerful corporation, everything changes--now there\'s a reason to keep her.');
/*!40000 ALTER TABLE `user_book_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-10 14:42:20
