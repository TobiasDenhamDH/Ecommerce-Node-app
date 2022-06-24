CREATE DATABASE  IF NOT EXISTS `proyecto_integrador` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyecto_integrador`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto_integrador
-- ------------------------------------------------------
-- Server version	5.7.34

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(200) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `users_id` int(10) unsigned NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id` (`users_id`),
  KEY `products_id` (`products_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` (`id`, `text`, `created_at`, `updated_at`, `users_id`, `products_id`) VALUES (4,'Muy buenas!','2022-06-23 11:36:15','2022-06-23 11:36:15',1,2),(5,'No me bajas el precio?','2022-06-23 11:37:59','2022-06-23 11:37:59',2,3),(6,'Haces por encargo?','2022-06-24 00:56:53','2022-06-24 00:56:53',3,2),(7,'Me interesan para mi papa, que talles te quedan?','2022-06-24 00:57:12','2022-06-24 00:57:12',3,5),(8,'Las compre y vino algo nada que ver con la foto. No compren!','2022-06-24 00:58:30','2022-06-24 00:58:30',1,7),(9,'Nada como un par de Vans clasicas','2022-06-24 00:58:59','2022-06-24 00:58:59',1,8),(10,'Que lindas que estan','2022-06-24 00:59:33','2022-06-24 00:59:33',2,1),(11,'Si compro 3 me haces precio?','2022-06-24 00:59:55','2022-06-24 00:59:55',2,5),(12,'Las pedi hace 2 meses y nunca me llegaron, estafa','2022-06-24 01:00:20','2022-06-24 01:00:20',2,7),(13,'Hago descuentos por el dia del padre!','2022-06-24 01:00:41','2022-06-24 01:00:41',2,4);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `followed_id` int(10) unsigned DEFAULT NULL,
  `users_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `followed_id` (`followed_id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`followed_id`) REFERENCES `users` (`id`),
  CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` (`id`, `followed_id`, `users_id`) VALUES (1,1,2),(3,1,1),(5,1,1),(6,1,1),(7,2,1),(9,3,1);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `users_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `description`, `image`, `created_at`, `updated_at`, `users_id`) VALUES (1,'Nike Air Force 1 Limited','White as snow','image-1655947129710.jpg','2022-06-22 21:44:09','2022-06-23 01:18:49',1),(2,'Nike Air Max','Used but look like new','image-1655984166742.jpg','2022-06-23 11:36:06','2022-06-23 11:36:06',1),(3,'Nike Air Jordan 1 Black','Black Limited Edition wore by Lebron James','image-1655984246350.jpg','2022-06-23 11:37:26','2022-06-23 11:37:26',2),(4,'Nike Air Jordan 4','Black Limited Edition wore by Lebron James','image-1655984324216.jpg','2022-06-23 11:38:44','2022-06-23 11:38:44',2),(5,'Puma RS- Fast Black & Red','Fast & Furious','image-1656025210636.jpg','2022-06-23 23:00:10','2022-06-23 23:00:10',1),(6,'Zapatillas Adidas Superstar','There is nothing like a good pair of Superstars.','image-1656030770096.jpg','2022-06-24 00:32:50','2022-06-24 00:32:50',3),(7,'Chuck Taylor All Star Move','For everyday life','image-1656030940801.jpg','2022-06-24 00:35:40','2022-06-24 00:35:40',3),(8,'Vans Old Skool','Off the Wall','image-1656032133996.jpg','2022-06-24 00:55:33','2022-06-24 00:55:33',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `document` int(10) unsigned NOT NULL,
  `birth_date` date NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `surname`, `document`, `birth_date`, `password`, `email`, `avatar`, `created_at`, `updated_at`) VALUES (1,'Tobias','Denham',44514419,'2002-10-26','$2b$10$VJw8BN5KGizKxviAXncox.j/lLh2haflgQQNJL0O5TrMElnj/LU1W','tobidenham@gmail.com','avatar-1655934220677.jpg','2022-06-22','2022-06-22'),(2,'Sebastian','Chiterer',12321313,'2002-03-03','$2b$10$FHdUlzMh4aqG9XDcrJhyY.s5FOtvztVd3riEJLaZD2LSxLt5KpLvS','schiterer@udesa.edu.ar','avatar-1655934323705.jpg','2022-06-22','2022-06-22'),(3,'Ana','Teperman',4422312,'2003-02-02','$2b$10$7uDQyi6FqhSSkg5acd1T1eZ8A4RWbzrNTJA2eowF1pthmr5Fut/CS','ateperman@udesa.edu.ar','avatar-1656030684043.jpg','2022-06-24','2022-06-24');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'proyecto_integrador'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 23:59:25
