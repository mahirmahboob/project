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
-- Table structure for table `blogtable`
--

DROP TABLE IF EXISTS `blogtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogtable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(400) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `description` longtext NOT NULL,
  `author` varchar(150) NOT NULL,
  `articleimagelink` varchar(1000) NOT NULL,
  `postTime` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogtable`
--

LOCK TABLES `blogtable` WRITE;
/*!40000 ALTER TABLE `blogtable` DISABLE KEYS */;
INSERT INTO `blogtable` VALUES (1,'Asymmetry','https://www.nytimes.com/2018/02/12/books/review/lisa-halliday-asymmetry.html','Three-quarters of the way through Lisa Halliday’s debut novel, “Asymmetry,” a British foreign correspondent named Alistair is \n                spending Christmas on a compound outside of Baghdad. His fellow revelers include cameramen, defense contractors, United Nations \n                employees and aid workers. Someone’s mother has FedExed a HoneyBaked ham from Maine; people are smoking by the swimming pool. It is 2003, \n                just days after Saddam Hussein’s capture, and though the mood is optimistic, Alistair is worrying aloud about the ethics of his chosen profession, \n                wondering if reporting on violence doesn’t indirectly abet violence and questioning why he’d rather be in a combat zone than reading a picture book \n                to his son. But every time he returns to London, he begins to “spin out.” He can’t go home. “You observe what people do with their freedom — what \n                they don’t do — and it’s impossible not to judge them for it,” he says. The line, embedded unceremoniously in the middle of a page-long paragraph, doubles, like so many others in “Asymmetry,” as literary criticism. \n                Halliday’s novel is so strange and startlingly smart that its mere existence seems like commentary on the state of fiction. One finishes \n                “Asymmetry” for the first or second (or like this reader, third) time and is left wondering what other writers are not doing with their freedom \n                — and, like Alistair, judging them for it. Despite its title, “Asymmetry” comprises two seemingly unrelated sections of equal length, appended \n                by a slim and quietly shocking coda. Halliday’s prose is clean and lean, almost reportorial in the style of W. G. Sebald, and like the murmurings \n                of a shy person at a cocktail party, often comic only in single clauses. It’s a first novel that reads like the work of an author who has published\n                many books over many years. […]','Lisa Halliday','https://www.thebooksatchel.com/wp-content/uploads/2018/04/asymmetry1.jpg','11/28/2021, 05:30 PM'),(2,'Ready Player One','https://www.kirkusreviews.com/book-reviews/ernest-cline/ready-player-one/','Video-game players embrace the quest of a lifetime in a virtual world; screenwriter Cline’s first novel is old wine in new bottles. The real world, in 2045, is the usual dystopian horror story. So who can blame Wade, our narrator, if he spends most of his time in a \n                        virtual world? The 18-year-old, orphaned at 11, has no friends in his vertical trailer park in Oklahoma City, while the OASIS \n                        has captivating bells and whistles, and it’s free. Its creator, the legendary billionaire James Halliday, left a curious will. \n                        He had devised an elaborate online game, a hunt for a hidden Easter egg. The finder would inherit his estate. Old-fashioned riddles \n                        lead to three keys and three gates. Wade, or rather his avatar Parzival, is the first gunter (egg-hunter) to win the Copper Key, first \n                        of three. Halliday was obsessed with the pop culture of the 1980s, primarily the arcade games, so the novel is as much retro as futurist. \n                        Parzival’s great strength is that he has absorbed all Halliday’s obsessions; he knows by heart three essential movies, crossing \n                        the line from geek to freak. His most formidable competitors are the Sixers, contract gunters working for the evil conglomerate IOI, \n                        whose goal is to acquire the OASIS. Cline’s narrative is straightforward but loaded with exposition. It takes a while to reach a scene \n                        that crackles with excitement: the meeting between Parzival (now world famous as the lead contender) and Sorrento, the head of IOI. The \n                        latter tries to recruit Parzival; when he fails, he issues and executes a death threat. Wade’s trailer is demolished, his relatives killed; \n                        luckily Wade was not at home. Too bad this is the dramatic high point. Parzival threads his way between more ’80s games and movies to gain \n                        the other keys; it’s clever but not exciting. Even a romance with another avatar and the ultimate “epic throwdown” fail to stir the blood.\n                    Too much puzzle-solving, not enough suspense.','Ernest Cline','https://i.redd.it/rydmank1n0i21.jpg','12/01/2021, 02:20 PM'),(7,'Becoming','https://becomingmichelleobama.com/','In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.','Michelle Obama','https://houston.momcollective.com/wp-content/uploads/2019/01/IMG_2697.jpg','12/09/2021, 12:11 AM');
/*!40000 ALTER TABLE `blogtable` ENABLE KEYS */;
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
