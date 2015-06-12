-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Giu 12, 2015 alle 15:55
-- Versione del server: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_bigym`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `about` text NOT NULL,
  `image` varchar(50) NOT NULL,
  `image_header` varchar(50) NOT NULL,
  `thumbnail` varchar(50) NOT NULL,
  `promo_video` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dump dei dati per la tabella `category`
--

INSERT INTO `category` (`id`, `name`, `about`, `image`, `image_header`, `thumbnail`, `promo_video`) VALUES
(1, 'Combat', 'Combact arts are practiced for a wide variety of reasons including: self defence, competition, health fitness and physical and spiritual development. All the trainer that teaches this courses in our gym are expert\r\nof self defense and has certification that proves their\r\nabilities and experience. Furthermore each of them is trained in rescue activities for any possible risk. However we are proud to say that the amount of accidents in our gym in this courses is the smalles fo the country.\r\nWe recomend to bring always personal protection.\r\nAt Big gym  we have several classes available.\r\nView our guide to see which class suits you best and the video below as an introduction and to meet our instructors.', 'category-combat.jpg', 'category-header-combat.jpg', 'category-thumbnail-combat.jpg', 'https://www.youtube.com/embed/BlmjN0FQF6E'),
(2, 'Mind and Body', 'Combact arts are practiced for a wide variety of reasons including: self defence, competition, health fitness and physical and spiritual development. All the trainer that teaches this courses in our gym are expert\r\nof self defense and has certification that proves their\r\nabilities and experience. Furthermore each of them is trained in rescue activities for any possible risk. However we are proud to say that the amount of accidents in our gym in this courses is the smalles fo the country.\r\nWe recomend to bring always personal protection.\r\nAt Big gym  we have several classes available.\r\nView our guide to see which class suits you best and the video below as an introduction and to meet our instructors.', 'category-mind-and-body.jpg', 'category-header-mind-and-body.jpg', 'category-thumbnail-mind-and-body.jpg', 'https://www.youtube.com/embed/nL4kfGpa5E8'),
(5, 'Workout', 'Combact arts are practiced for a wide variety of reasons including: self defence, competition, health fitness and physical and spiritual development. All the trainer that teaches this courses in our gym are expert\r\nof self defense and has certification that proves their\r\nabilities and experience. Furthermore each of them is trained in rescue activities for any possible risk. However we are proud to say that the amount of accidents in our gym in this courses is the smalles fo the country.\r\nWe recomend to bring always personal protection.\r\nAt Big gym  we have several classes available.\r\nView our guide to see which class suits you best and the video below as an introduction and to meet our instructors.', 'category-workout.jpg', 'category-header-workout.jpg', 'category-thumbnail-workout.jpg', 'https://www.youtube.com/embed/-YQHrqBDIok');

-- --------------------------------------------------------

--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `difficulty` int(11) NOT NULL,
  `target` text NOT NULL,
  `room_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(50) NOT NULL,
  `image_header` varchar(50) NOT NULL,
  `thumbnail` varchar(50) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `category_id` (`category_id`),
  KEY `room_id` (`room_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dump dei dati per la tabella `course`
--

INSERT INTO `course` (`id`, `name`, `category_id`, `description`, `difficulty`, `target`, `room_id`, `price`, `image`, `image_header`, `thumbnail`, `schedule`) VALUES
(1, 'Kickboxing', 1, '<p>Kickboxing is a full-contact combat sport that allows the use of both striking and grappling techniques, both standing and on the ground, from a variety of other combat sports and martial arts.</p>', 2, '<p>This course is intended for healthy and energic people from 16 to 50 years old.</p>', 3, '199', 'courses-kickboxing.jpg', 'courses-header-kickboxing.jpg', 'courses-thumbnail-kickboxing.jpg', '013/014/114/200/309/503/504/505'),
(2, 'Fitboxing', 1, '<p>Fitboxing is a full-contact combat sport that allows the use of both striking and grappling techniques, both standing and on the ground, from a variety of other combat sports and martial arts.</p>', 1, '<p>This course is intended for healthy and energic people from 16 to 50 years old.</p>', 4, '150', 'courses-fitboxing.jpg', 'courses-header-fitboxing.jpg', 'courses-thumbnail-fitboxing.jpg', '004/112/114/210/403/409/410/507'),
(3, 'Yoga (Basic)', 2, '<p>This beginner level Yoga sequence will help you build strength, increase flexibility and find focus. Yoga is a challenging and dynamic Vinyasa series, meaning breath is linked to movement. This class is moderately paced so you will learn the fundamental Yoga postures and principles that create a successful and effective yoga practice. Set to music, this class will invigorate your entire body.</p>', 0, '<p>This yoga class is ideal for anyone new to yoga and interested in its benefits.</p>', 2, '99', 'courses-yoga.jpg', 'courses-header-yoga.jpg', 'courses-thumbnail-yoga-basic.jpg', '014/104/105/203/204'),
(4, 'Yoga (Medium)', 2, '<p>Yoga Medium is a rigorous yoga class with demanding strength postures that will have you moving, breathing and sweating! During this medium level class, you will focus on engaging your core strength to support yourself in arm balances and inversions. You will also explore deeper alignment, the importance of breath and challenging Yoga sequences.</p>', 1, '<p>This class is energizing and fun and appeals to anyone who appreciates a healthy sweat.</p>', 2, '125', 'courses-yoga.jpg', 'courses-header-yoga.jpg', 'courses-thumbnail-yoga-medium.jpg', '013/004/104/204/309'),
(5, 'Yoga (Advanced)', 2, '<p>A total body workout, Yoga Advanced classes are set to energizing music and designed to tone and sculpt every major muscle group. This class complements your regular yoga practice, while boosting your metabolism and pushing your strength and flexibility to new heights. Free weights are added to theYoga Medium sequence, creating resistance and intensifying each pose. Strength-training exercises such as squats, lunges, bicep curls and tricep curls are incorporated to build lean muscle mass. You will see visible results in your body.</p>', 2, '<p>This class is energizing and fun and appeals to anyone who appreciates a healthy sweat.</p>', 2, '150', 'courses-yoga.jpg', 'courses-header-yoga.jpg', 'courses-thumbnail-yoga-advanced.jpg', '001/102/203/309/505/506/507'),
(6, 'Spartan Training', 5, '<p>Spartans! Ready your breakfast and eat hearty... For tonight, we dine in hell!!\nTrain yourself like a real Spartan Warrior, in this hard-core HIIT (High Intensity Interval Training). A variety of workouts designed to improve strenght, stamina, agility and endurance, which finally leads you to shout out loud: "This is SPARTA!!!"</p>', 2, '<p>This course is intended for very healthy people, with a very high level of fitness, from 18 to 50</p>', 3, '220', 'courses-spartan.jpg', 'courses-header-spartan.jpg', 'courses-thumbnail-spartan.jpg', '003/004/104/201/203/209/509/510'),
(7, 'Core Blast', 5, '<p>Core Blast provides innovative and effective exercises techniques, combined with strenght conditioning, back health and injury prevention. This class is for those seeking muscle and definition but who also want a stronger, healthier, injury-free body.</p>', 1, '<p>This course is intended for people from 16 to 60, with a good to high level of fitness</p>', 9, '150', 'courses-core-blast.jpg', 'courses-header-core-blast.jpg', 'courses-thumbnail-core-blast.jpg', '013/014/114/309/504/505'),
(8, 'Learn to Lift', 5, '<p>Build your knowledge and your technique. Be the best you can be - you can lift more weight confidently and safely. Learn to Lift is an exciting new session deliver by oue very in-house sport scientist. Over an 8 week block we will steadily equip you with the skills and knowledge to progress  you to advanced lifting and training techiniques.\nThese sessions are become very popular with our female clients who recognise the health benefits of weight bearing exercises.</p>', 0, '<p>This course is intended for people from 16 to 60, with medium to low level of fitness.</p>', 9, '100', 'courses-learn-to-lift.jpg', 'courses-header-learn-to-lift.jpg', 'courses-thumbnail-learn-to-lift.jpg', '011/201/202/203/310/401/404'),
(9, 'MetaFit', 5, '<p>Simple and effective workout the combines high intensity interval trianing with body weight exercises that will shake up and kick start your metabolism and have you incinerating the calories long after the class has ended.</p>', 1, '<p>This course is intended for healthy people, with a medium level of fitness, no age limit.</p>', 8, '125', 'courses-meta-fit.jpg', 'courses-header-meta-fit.jpg', 'courses-thumbnail-meta-fit.jpg', '101/102/103/300/301'),
(10, 'MMA', 1, '<p>Mixed martial arts (MMA) is a full-contact combat sport that allows the use of both striking and grappling techniques, both standing and on the ground, from a variety of other combat sports and martial arts.</p>', 2, '<p>This course is intended for healthy and energic people from 16 to 50 years old.</p>', 4, '200', 'courses-mma.jpg', 'courses-header-mma.jpg', 'courses-thumbnail-mma.jpg', '013/014/114/200/309/503/504/505');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor`
--

CREATE TABLE IF NOT EXISTS `instructor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `about` text NOT NULL,
  `awards` text NOT NULL,
  `image_1` varchar(50) NOT NULL,
  `image_2` varchar(50) NOT NULL,
  `image_3` varchar(50) NOT NULL,
  `image_4` varchar(50) NOT NULL,
  `twitter_account` varchar(50) NOT NULL,
  `widget_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dump dei dati per la tabella `instructor`
--

INSERT INTO `instructor` (`id`, `name`, `surname`, `about`, `awards`, `image_1`, `image_2`, `image_3`, `image_4`, `twitter_account`, `widget_id`) VALUES
(1, 'Aaron', 'Freeda', 'Certified Personal Trainer specializing in Advanced\nIndividual programs since 1986. \nFormer WA & OR bodybuilding show judge and trainer of competitive bodybuilders all levels (from first timers to Olympic competitors); long term training of athletes for specific sports; designed and ran full rehab and personal training facility for injury recovery and prevention; worked for several chiropractors and physical therapists on rehab of athletes; ran fitness center for Elderly Adults; managed a country club fitness center and specialized in golf training for 4 yrs; trained clients in either their homes or in home-gym; corporate fitness and wellness at several businesses (saves money on their insurance besides the fitness benefit); currently designing a specified law enforcement fitness program for testing candidates and current officers with their agencies. In addition I specialize in Internal Wellness via nutrition. I have worked with a vast amount of clients who were dealing with diabetes, hypertension, IBS, hormones and various other health issues.  ', 'Instructor of the month: April 2011, March 2013 <br>IFBB Context: Golden medal 1996', 'instructor_Aaron_320x320.jpg', 'instructor_Aaron_2.jpg', 'instructor_Aaron_3.jpg', 'instructor_Aaron_4.jpg', 'AthleteCreator', '606063136215592961'),
(2, 'Nicole', 'Prigge', 'Certified Personal Trainer specializing in Advanced\nIndividual programs since 1986. \nFormer WA & OR bodybuilding show judge and trainer of competitive bodybuilders all levels (from first timers to Olympic competitors); long term training of athletes for specific sports; designed and ran full rehab and personal training facility for injury recovery and prevention; worked for several chiropractors and physical therapists on rehab of athletes; ran fitness center for Elderly Adults; managed a country club fitness center and specialized in golf training for 4 yrs; trained clients in either their homes or in home-gym; corporate fitness and wellness at several businesses (saves money on their insurance besides the fitness benefit); currently designing a specified law enforcement fitness program for testing candidates and current officers with their agencies. In addition I specialize in Internal Wellness via nutrition. I have worked with a vast amount of clients who were dealing with diabetes, hypertension, IBS, hormones and various other health issues.  ', 'Instructor of the month: May 2012', 'instructor_Nicole_320x320.jpg', 'instructor_Nicole_2.jpg', 'instructor_Nicole_3.jpg', 'instructor_Nicole_4.jpg', 'JillianMichaels', '606065780124459008'),
(3, 'Tyler', 'Hansen', 'Certified Personal Trainer specializing in Advanced\r\nIndividual programs since 1986. \r\nFormer WA & OR bodybuilding show judge and trainer of competitive bodybuilders all levels (from first timers to Olympic competitors); long term training of athletes for specific sports; designed and ran full rehab and personal training facility for injury recovery and prevention; worked for several chiropractors and physical therapists on rehab of athletes; ran fitness center for Elderly Adults; managed a country club fitness center and specialized in golf training for 4 yrs; trained clients in either their homes or in home-gym; corporate fitness and wellness at several businesses (saves money on their insurance besides the fitness benefit); currently designing a specified law enforcement fitness program for testing candidates and current officers with their agencies. In addition I specialize in Internal Wellness via nutrition. I have worked with a vast amount of clients who were dealing with diabetes, hypertension, IBS, hormones and various other health issues.  ', '', 'instructor_Tyler_320x320.jpg', 'instructor_Tyler_2.jpg', 'instructor_Tyler_3.jpg', 'instructor_Tyler_4.jpg', 'Fitness4thehome', '606065356340371456'),
(4, 'Veronica', 'Chase', 'Certified Personal Trainer specializing in Advanced\nIndividual programs since 1986. \nFormer WA & OR bodybuilding show judge and trainer of competitive bodybuilders all levels (from first timers to Olympic competitors); long term training of athletes for specific sports; designed and ran full rehab and personal training facility for injury recovery and prevention; worked for several chiropractors and physical therapists on rehab of athletes; ran fitness center for Elderly Adults; managed a country club fitness center and specialized in golf training for 4 yrs; trained clients in either their homes or in home-gym; corporate fitness and wellness at several businesses (saves money on their insurance besides the fitness benefit); currently designing a specified law enforcement fitness program for testing candidates and current officers with their agencies. In addition I specialize in Internal Wellness via nutrition. I have worked with a vast amount of clients who were dealing with diabetes, hypertension, IBS, hormones and various other health issues.  ', 'Instructor of the month: June 2012, April 2013', 'instructor_Veronica_320x320.jpg', 'instructor_Veronica_2.jpg', 'instructor_Veronica_3.jpg', 'instructor_Veronica_4.jpg', 'ashleyborden', '607869769983905792'),
(5, 'Lucinda', 'LaRee', 'Certified Personal Trainer specializing in Advanced\nIndividual programs since 1986. \nFormer WA & OR bodybuilding show judge and trainer of competitive bodybuilders all levels (from first timers to Olympic competitors); long term training of athletes for specific sports; designed and ran full rehab and personal training facility for injury recovery and prevention; worked for several chiropractors and physical therapists on rehab of athletes; ran fitness center for Elderly Adults; managed a country club fitness center and specialized in golf training for 4 yrs; trained clients in either their homes or in home-gym; corporate fitness and wellness at several businesses (saves money on their insurance besides the fitness benefit); currently designing a specified law enforcement fitness program for testing candidates and current officers with their agencies. In addition I specialize in Internal Wellness via nutrition. I have worked with a vast amount of clients who were dealing with diabetes, hypertension, IBS, hormones and various other health issues.  ', '', 'instructor_Lucinda_320x320.jpg', 'instructor_Lucinda_2.jpg', 'instructor_Lucinda_3.jpg', 'instructor_Lucinda_4.jpg', 'Fitness4Her', '607871071149289473');

-- --------------------------------------------------------

--
-- Struttura della tabella `intro`
--

CREATE TABLE IF NOT EXISTS `intro` (
  `page` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`page`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `intro`
--

INSERT INTO `intro` (`page`, `description`) VALUES
('allcourses', '<p>We have over 20 different courses to suit all ages and abilities. To help you find the course that is right for you, we''ve split them into five different categories. These categories are identified on the different types of training and activities that the courses required. Click on a class category to see the descriptions of the category and a summary of all courses of that category.</p>'),
('allcoursecategories', '<p>We have over 20 different courses to suit all ages and abilities. To help you find the course that is right for you, we''ve split them into five different categories.\n\nThis categories are identified on the different types of training and activities that the courses required.\n\nClick on a class category to see the descriptions of the category and a summary of all courses of that category.\n</p>');

-- --------------------------------------------------------

--
-- Struttura della tabella `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `lat` float NOT NULL,
  `lon` float NOT NULL,
  `by_car` text NOT NULL,
  `phone` text NOT NULL,
  `mail` text NOT NULL,
  `fax` text NOT NULL,
  `mobile` text NOT NULL,
  `address` text NOT NULL,
  PRIMARY KEY (`lat`,`lon`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `location`
--

INSERT INTO `location` (`lat`, `lon`, `by_car`, `phone`, `mail`, `fax`, `mobile`, `address`) VALUES
(52.1935, 0.13292, ' <h2>By Car</h2><p>From the north, west and east, take the A14 until its junction with the M11. Head south on the M11 and come off at Junction 11. At the roundabout, bear left into Cambridge, passing through Trumpington. Following signs to Addenbrookes Hospital, turn right onto Long Road. At the junction between Long Road and Hills Road, turn left. The Faculty of Education is approximately 1 mile up Hills Road on your left, in Harrison Drive (by pedestrian traffic lights) which is the turning after Luard Road.</p><p>\r\nFrom the south, take the M11 and come off at Junction 11 (where the A10 also arrives from the south west). At the roundabout, bear right (or straight on if you have come on the A10) into Cambridge, passing through Trumpington. Follow directions as outlined above.</p>\r\n<h2>By Train</h2><p>There are frequent trains to Cambridge from London (King''s Cross and Liverpool Street stations). Direct express trains run from London Kings Cross every 30 minutes and take 48 minutes. Cambridge railway station is in Station Road (see location on University map).</p><p>\r\nFrom the station, if walking, turn immediately left and it''s a 15 minute walk through the new ''CB2'' accommodation site, towards and then along Hills Road.</p><p>\r\nAlternatively, by the station entrance, a taxi will cost you a few pounds.  Or, to catch a bus, turn left when leaving the station and find the bus stops for Number 1 or Number 7 (left side of the road). These both go south along Hills Road towards Addenbrookes Hospital. Get off just after the railway bridge or at the next stop, near Homerton College. \r\nFrom the south, take the M11 and come off at Junction 11 (where the A10 also arrives from the south west). At the roundabout, bear right (or straight on if you have come on the A10) into Cambridge, passing through Trumpington. Follow directions as outlined above.</p>', '+44 (0)1263 856690', 'info@bigym.com', '+44 (0)1263 856691', '+44 339 7308449', '<strong>Big Gym</strong><br>\r\n84 Hills Road<br>\r\nCambridge, UK<br>');

-- --------------------------------------------------------

--
-- Struttura della tabella `room`
--

CREATE TABLE IF NOT EXISTS `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=403 ;

--
-- Dump dei dati per la tabella `room`
--

INSERT INTO `room` (`id`, `name`, `image`) VALUES
(2, 'Body Room 2', 'room-body-room-2.jpg'),
(3, 'Combat Room 1', 'room-combat-room-1.jpg'),
(4, 'Combat Room 2', 'room-combat-room-2.jpg'),
(8, 'Weight Room 1', 'room-weight-room-1.jpg'),
(9, 'Weight Room 2', 'room-weight-room-2.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `teaching_category`
--

CREATE TABLE IF NOT EXISTS `teaching_category` (
  `category_id` int(11) NOT NULL,
  `instructor_id` int(11) NOT NULL,
  PRIMARY KEY (`category_id`,`instructor_id`),
  KEY `category_id` (`category_id`),
  KEY `instructor_id` (`instructor_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `teaching_category`
--

INSERT INTO `teaching_category` (`category_id`, `instructor_id`) VALUES
(1, 3),
(1, 5),
(2, 2),
(2, 4),
(5, 1),
(5, 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `teaching_course`
--

CREATE TABLE IF NOT EXISTS `teaching_course` (
  `course_id` int(11) NOT NULL,
  `instructor_id` int(11) NOT NULL,
  PRIMARY KEY (`course_id`,`instructor_id`),
  KEY `course_id` (`course_id`),
  KEY `instructor_id` (`instructor_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `teaching_course`
--

INSERT INTO `teaching_course` (`course_id`, `instructor_id`) VALUES
(1, 5),
(2, 3),
(2, 5),
(3, 2),
(4, 2),
(4, 4),
(5, 4),
(6, 1),
(7, 1),
(8, 1),
(9, 3),
(10, 5),
(11, 3);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
