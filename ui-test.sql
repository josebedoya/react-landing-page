# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.29)
# Database: ui-test
# Generation Time: 2020-06-16 14:17:09 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table character
# ------------------------------------------------------------

DROP TABLE IF EXISTS `character`;

CREATE TABLE `character` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` varchar(30) NOT NULL,
  `summary` varchar(120) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `character` WRITE;
/*!40000 ALTER TABLE `character` DISABLE KEYS */;

INSERT INTO `character` (`id`, `title`, `image`, `category`, `summary`, `createdAt`, `updatedAt`)
VALUES
	(1,'Kanye West','kanye-west.jpg','Entertainment','Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.','2020-06-12 10:51:56.412472','2020-06-12 10:51:56.412472'),
	(2,'Mark Zuckerberg','mark.jpg','Business','Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.','2020-06-12 10:53:03.316813','2020-06-12 10:53:03.316813'),
	(3,'Cristina Fernández de Kirchner','cristina-fernandez.jpg','Politics','Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.','2020-06-12 10:53:39.251455','2020-06-12 10:53:39.251455'),
	(4,'Malala Yousafzai','malaya-yousafzai.jpg','Entertainment','Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.','2020-06-12 10:54:12.938599','2020-06-12 10:54:12.938599');

/*!40000 ALTER TABLE `character` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(80) NOT NULL,
  `age` int(3) NOT NULL,
  `maritalStatus` enum('Married','Single','Divorced','Widowed') NOT NULL DEFAULT 'Single',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `age`, `maritalStatus`, `createdAt`, `updatedAt`)
VALUES
	(1,'Jose','Bedoya','me@josebedoya.co','$2a$10$nQWIZf41ZX6Rc0ekeFjLT.878bPNZdO0MdXe3N/47fOOqNYjegjb.',36,'Single','2020-06-08 21:13:34.133255','2020-06-08 21:13:34.133255'),
	(2,'Jose David','Bedoya','jossephb@gmail.com','$2a$10$qDokmuOSWzXh7qnLwWMkqucwAdYZBUGuixxYb6NG1P2QhjEPuDHGK',36,'Single','2020-06-11 23:26:53.992427','2020-06-11 23:26:53.992427'),
	(3,'Test','One','test1@test.com','$2a$10$bXDCALxcHnu1g9SrZpvOxeDD2kmzAlbwfVbtBGgxcaXUgX0c4NNcm',20,'Single','2020-06-16 08:42:04.478870','2020-06-16 08:42:04.478870'),
	(4,'Test','Two','test2@test.com','$2a$10$Afi6/Q/pjca49ZuOEStdRu4Az0Azdqvq1RODK7L24vR8.R.ihKr36',20,'Single','2020-06-16 08:42:16.325442','2020-06-16 08:42:16.325442'),
	(5,'Test','Three','test3@test.com','$2a$10$AZLqiE6wt//OeF5fuspkXuZioBGPJxQLZxsgJ4cYjbo4muogMC8PK',20,'Single','2020-06-16 08:42:24.539008','2020-06-16 08:42:24.539008');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_character_vote
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_character_vote`;

CREATE TABLE `user_character_vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `characterId` int(11) NOT NULL,
  `vote` varchar(5) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_9ae9679123bf4bd330c693655fb` (`userId`),
  KEY `FK_8c5c590419ddc488c48759c8bd9` (`characterId`),
  CONSTRAINT `FK_8c5c590419ddc488c48759c8bd9` FOREIGN KEY (`characterId`) REFERENCES `character` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_9ae9679123bf4bd330c693655fb` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `user_character_vote` WRITE;
/*!40000 ALTER TABLE `user_character_vote` DISABLE KEYS */;

INSERT INTO `user_character_vote` (`id`, `userId`, `characterId`, `vote`, `createdAt`)
VALUES
	(1,1,1,'up','2020-06-14 18:10:29.654937'),
	(2,1,1,'down','2020-06-14 18:10:38.888138'),
	(3,1,1,'up','2020-06-14 18:10:44.986169'),
	(4,1,2,'up','2020-06-14 18:10:52.038254'),
	(5,1,3,'down','2020-06-14 18:10:58.337902');

/*!40000 ALTER TABLE `user_character_vote` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
