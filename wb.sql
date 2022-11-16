-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: wb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `clienteprodutos`
--

DROP TABLE IF EXISTS `clienteprodutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clienteprodutos` (
  `IdProduto` int NOT NULL,
  `IdCliente` int NOT NULL,
  `Genero` int DEFAULT NULL,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  `NomeCliente` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienteprodutos`
--

LOCK TABLES `clienteprodutos` WRITE;
/*!40000 ALTER TABLE `clienteprodutos` DISABLE KEYS */;
INSERT INTO `clienteprodutos` VALUES (3,16,2,'Esmalte',1.99,'eloisa'),(6,15,1,'Gel',20.99,'everton'),(7,17,2,'Xampu',20.00,'Bruna'),(7,17,2,'Xampu',20.00,'Bruna'),(3,17,2,'Esmalte',1.99,'Bruna'),(14,17,2,'Batom',25.00,'Bruna'),(8,22,2,'Camisa',30.00,'Samira'),(9,22,2,'Cera',35.00,'Samira'),(15,22,2,'Pente',10.00,'Samira'),(10,22,2,'Rímel',80.00,'Samira'),(11,15,1,'Secador',200.00,'Everton'),(12,15,1,'Demaquilante',60.00,'Everton'),(13,15,1,'Acetona',40.00,'Everton'),(13,15,1,'Acetona',40.00,'Everton'),(10,36,1,'Rímel',80.00,'Leonardo'),(13,36,1,'Acetona',40.00,'Leonardo'),(15,36,1,'Pente',10.00,'Leonardo'),(3,24,2,'Esmalte',1.99,'Madelyn'),(7,43,1,'Xampu',20.00,'Pedro'),(12,43,1,'Demaquilante',60.00,'Pedro'),(13,43,1,'Acetona',40.00,'Pedro');
/*!40000 ALTER TABLE `clienteprodutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(500) DEFAULT NULL,
  `NomeSocial` varchar(500) DEFAULT NULL,
  `Cpf` int DEFAULT NULL,
  `DataEmissaoCpf` date DEFAULT NULL,
  `Rg` int DEFAULT NULL,
  `DataEmissaoRg` date DEFAULT NULL,
  `DDD` int DEFAULT NULL,
  `Telefone` int DEFAULT NULL,
  `Genero` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (15,'Everton','Ricardo',321243,NULL,12,NULL,123,123214314,1),(16,'Eloisa','Maria',3243,NULL,12323,NULL,123,213213213,2),(17,'Bruna','bru',5111111,NULL,123213,NULL,123,321321321,2),(18,'Kendall','Jenner',123215566,NULL,123215555,NULL,878,987987879,2),(19,'Gabriel','Biel',155151515,NULL,155151515,NULL,15,155151515,1),(20,'Lucas','Luc',566,NULL,566666,NULL,45,546546546,1),(21,'Luiz','Lu',889899999,NULL,889899999,NULL,89,889899999,1),(22,'Samira','Samirinha',222222222,NULL,222222222,NULL,22,222222222,2),(23,'Julianne','Ju',14,NULL,14,NULL,14,141414141,2),(24,'Madelyn','Ma',15,NULL,15,NULL,15,151515151,2),(25,'Livia','Liv',16,NULL,16,NULL,16,161616161,2),(26,'Kate','Kat',17,NULL,17,NULL,17,171717177,2),(27,'Mayara','Maya',18,NULL,18,NULL,18,18181818,2),(28,'Leticia','Let',19,NULL,19,NULL,19,19191919,2),(29,'Gabriela','Gabi',20,NULL,20,NULL,20,20202020,2),(30,'Gisele','Gi',21,NULL,21,NULL,21,21212121,2),(31,'Maria','Ma',22,NULL,22,NULL,22,21232123,2),(32,'Fernanda','Fe',23,NULL,23,NULL,23,232323232,2),(33,'Julia','Ju',24,NULL,24,NULL,24,24242424,2),(34,'Estefani','Ester',25,NULL,25,NULL,25,25252525,2),(35,'Patricia','Pat',26,NULL,26,NULL,26,26262626,2),(36,'Leonardo','Leo',27,NULL,27,NULL,27,27727727,1),(37,'Tiago','Ti',28,NULL,28,NULL,28,282888882,1),(38,'Elon','Musk',29,NULL,29,NULL,29,292929292,1),(39,'Antonio','Antoni',30,NULL,30,NULL,30,303303030,1),(40,'Marcelo','Marcelin',31,NULL,31,NULL,31,313131313,1),(41,'Icaro','Ica',32,NULL,32,NULL,32,32323232,1),(42,'Igor','Ig',33,NULL,33,NULL,33,333333333,1),(43,'Pedro','Ped',34,NULL,34,NULL,34,343434343,1),(44,'Ramon','Ram',35,NULL,35,NULL,35,353535353,1);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clienteservicos`
--

DROP TABLE IF EXISTS `clienteservicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clienteservicos` (
  `IdServico` int NOT NULL,
  `IdCliente` int NOT NULL,
  `Genero` int DEFAULT NULL,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  `NomeCliente` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienteservicos`
--

LOCK TABLES `clienteservicos` WRITE;
/*!40000 ALTER TABLE `clienteservicos` DISABLE KEYS */;
INSERT INTO `clienteservicos` VALUES (3,16,2,'Escova',100.00,'eloisa'),(4,16,2,'Unha',100.00,'eloisa'),(3,16,2,'Escova',100.00,'eloisa'),(3,15,1,'Escova',100.00,'everton'),(4,16,2,'Unha',100.00,'eloisa'),(6,16,2,'teste',2132.00,'eloisa'),(12,17,2,'Pedicure',40.00,'Bruna'),(16,17,2,'Depilação',25.00,'Bruna'),(9,17,2,'Sobrancelha',60.00,'Bruna'),(7,22,2,'Unha',15.00,'Samira'),(8,22,2,'Limpeza',50.00,'Samira'),(7,15,1,'Unha',15.00,'Everton'),(11,15,1,'Maquiagem',70.00,'Everton'),(11,15,1,'Maquiagem',70.00,'Everton'),(7,36,1,'Unha',15.00,'Leonardo'),(16,36,1,'Depilação',25.00,'Leonardo'),(8,36,1,'Limpeza',50.00,'Leonardo'),(16,24,2,'Depilação',25.00,'Madelyn'),(9,24,2,'Sobrancelha',60.00,'Madelyn'),(11,43,1,'Maquiagem',70.00,'Pedro');
/*!40000 ALTER TABLE `clienteservicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (3,'Esmalte',1.99),(4,'Alicate',10.00),(6,'Gel',20.99),(7,'Xampu',20.00),(8,'Camisa',30.00),(9,'Cera',35.00),(10,'Rímel',80.00),(11,'Secador',200.00),(12,'Demaquilante',60.00),(13,'Acetona',40.00),(14,'Batom',25.00),(15,'Pente',10.00);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
INSERT INTO `servicos` VALUES (3,'Escova',100.00),(7,'Unha',15.00),(8,'Limpeza',50.00),(9,'Sobrancelha',60.00),(10,'Corte',20.00),(11,'Maquiagem',70.00),(12,'Pedicure',40.00),(13,'Botox',80.00),(14,'Preenchimento',45.00),(15,'Cílios',60.00),(16,'Depilação',25.00);
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-16 10:37:32
