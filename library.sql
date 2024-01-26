-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2024 at 04:14 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `borrow`
--

CREATE TABLE `borrow` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `book_title` varchar(255) NOT NULL,
  `borrow_date` date NOT NULL,
  `return_date` date NOT NULL,
  `status` enum('Borrowing','Returned') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `borrow`
--

INSERT INTO `borrow` (`id`, `name`, `contact`, `book_title`, `borrow_date`, `return_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dr. Daryl Padberg DDS', '(214) 970-3868', 'Error', '2002-06-24', '1979-05-13', 'Returned', '2024-01-25 19:42:13', '2024-01-25 19:42:13'),
(2, 'Mr. Finn Price', '1-585-996-4961', 'Est', '2012-04-14', '1999-10-15', 'Returned', '2024-01-25 19:42:13', '2024-01-25 19:42:13'),
(3, 'Florida Witting', '(854) 365-3668', 'Exercitationem', '1973-12-16', '1976-02-18', 'Returned', '2024-01-25 19:42:13', '2024-01-25 19:42:13'),
(4, 'Josiane Terry', '+1-952-735-2868', 'Voluptas', '2019-06-12', '1985-02-02', 'Returned', '2024-01-25 19:42:13', '2024-01-25 19:42:13'),
(5, 'Kayley O\'Connell', '608.944.6074', 'Et', '2006-03-15', '1980-08-31', 'Borrowing', '2024-01-25 19:42:13', '2024-01-25 19:42:13'),
(6, 'Libbie Steuber', '1-775-796-1659', 'Modi Excepturi Sed', '1982-06-10', '1985-07-22', 'Returned', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(7, 'Dr. Eloy Crona I', '717.534.1975', 'Porro', '1981-09-12', '1976-05-05', 'Returned', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(8, 'Mariano Franecki MD', '812.353.3276', 'Id', '2012-02-27', '1987-05-23', 'Borrowing', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(9, 'Prof. Clovis Legros', '+1.346.736.4341', 'Ab', '2003-12-05', '2002-06-01', 'Returned', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(10, 'Rahul Predovic', '+1-820-239-3402', 'Quos Natus Ipsam', '2019-11-10', '1999-09-10', 'Borrowing', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(11, 'Elvera Feest', '+1.425.392.8720', 'Soluta Consequuntur Eveniet', '1974-09-30', '2000-04-11', 'Borrowing', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(12, 'Miss Penelope Collier II', '+15419049953', 'Aut Omnis', '2001-10-28', '2011-10-08', 'Returned', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(13, 'Bridie Orn', '+1 (831) 834-2762', 'Dolores', '1989-04-23', '1989-05-24', 'Returned', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(14, 'Martin Gleason V', '(848) 806-8708', 'Totam', '1996-06-07', '1990-01-10', 'Borrowing', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(15, 'Mr. Hershel Lakin Jr.', '530-644-8842', 'Odio Sunt', '2015-08-11', '1985-05-06', 'Returned', '2024-01-25 19:42:14', '2024-01-25 19:42:14'),
(16, 'Bruce Collier', '+1-716-741-3887', 'Ut', '1995-02-06', '2011-06-10', 'Borrowing', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(17, 'Eula Konopelski PhD', '+13416053479', 'Sapiente', '2016-09-22', '1973-07-02', 'Returned', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(18, 'Mrs. Deja Morar', '646.910.9259', 'Deserunt Totam Eos', '1984-06-02', '2022-03-27', 'Returned', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(19, 'Leta Maggio', '(870) 341-6781', 'Aspernatur', '2018-08-26', '2014-04-11', 'Returned', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(20, 'Destini Steuber', '216-849-0819', 'Illo', '1984-02-25', '2022-08-30', 'Borrowing', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(21, 'Eugenia Gerlach Jr.', '+1 (347) 851-3181', 'Placeat', '1975-01-15', '1982-01-27', 'Returned', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(22, 'Kimberly Spinka', '1-309-385-2093', 'Quibusdam Reprehenderit Exercitationem', '1970-09-06', '2013-10-17', 'Borrowing', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(23, 'Antonina Lowe', '1-754-997-6925', 'Quo Laudantium Et', '1978-10-09', '2000-08-18', 'Borrowing', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(24, 'Shawn Weissnat', '678.423.2740', 'Qui Harum Temporibus', '1986-07-09', '2005-10-01', 'Returned', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(25, 'Carrie Anderson', '+1.906.428.9400', 'Voluptas Ut', '2006-04-30', '1991-05-22', 'Returned', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(26, 'Dr. Jerrell Hackett', '239-912-1034', 'Quia', '2001-06-29', '1973-09-04', 'Borrowing', '2024-01-25 19:42:15', '2024-01-25 19:42:15'),
(27, 'Madge Howell', '+14809583897', 'Atque Quo', '2014-11-28', '1997-05-03', 'Returned', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(28, 'Dr. Estrella Keebler', '317-707-4868', 'Aut Soluta', '2017-07-21', '2000-11-25', 'Borrowing', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(29, 'Prof. Nikko Ratke II', '+1-928-206-0999', 'Earum Facilis Distinctio', '2022-12-06', '1978-10-20', 'Borrowing', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(30, 'Jade Lemke', '+1-828-702-5067', 'Omnis Quod Voluptatem', '2012-11-13', '2005-03-29', 'Borrowing', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(31, 'Columbus Halvorson', '1-240-358-1400', 'Eum Id', '1979-04-30', '1976-10-18', 'Returned', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(32, 'Mrs. Lola Osinski', '(907) 513-7314', 'Laborum', '1979-05-14', '1997-10-24', 'Borrowing', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(33, 'Johnathan Jacobs', '+1 (870) 519-1831', 'Eius Dolore', '1970-11-12', '2004-01-18', 'Returned', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(34, 'Chadd Okuneva', '678-390-6825', 'Voluptatem Velit Dignissimos', '1992-12-30', '2020-10-22', 'Returned', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(35, 'Ms. Zola Stokes III', '+18316461119', 'Aperiam', '2008-05-30', '2018-04-23', 'Returned', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(36, 'Art McClure', '1-657-290-1474', 'Aut Quis', '1995-09-08', '2017-07-10', 'Returned', '2024-01-25 19:42:16', '2024-01-25 19:42:16'),
(37, 'Cara Wisoky', '435.855.4850', 'Mollitia Dicta', '2003-01-08', '1992-09-11', 'Borrowing', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(38, 'Tyrique Casper', '+1-219-340-5947', 'Eos Expedita', '1988-01-10', '1993-07-05', 'Returned', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(39, 'Zakary Jacobi', '+1 (701) 314-0185', 'Error Aut', '1978-02-15', '2014-04-09', 'Returned', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(40, 'Louisa Haag', '385-305-6780', 'Harum Suscipit', '1981-04-15', '1994-11-08', 'Returned', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(41, 'Hester Bosco II', '650-768-1539', 'Similique Quas Voluptas', '1986-10-06', '1998-03-03', 'Borrowing', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(42, 'Tyrell Casper', '505-718-8290', 'Consequatur Dolor', '1977-11-29', '2005-01-18', 'Borrowing', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(43, 'Ms. Roselyn Bogisich II', '1-838-321-4509', 'Cupiditate Totam', '1982-06-09', '1973-12-13', 'Borrowing', '2024-01-25 19:42:17', '2024-01-25 19:42:17'),
(44, 'Sanford Lakin', '(458) 465-1841', 'Harum At', '2003-02-26', '1980-05-26', 'Returned', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(45, 'Loraine Fritsch', '+1 (930) 550-6298', 'Qui Illum', '2000-12-16', '1972-06-28', 'Returned', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(46, 'Torey Schaden V', '+1.623.924.9495', 'Mollitia Eveniet', '1992-03-30', '1996-11-25', 'Returned', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(47, 'Horace Tromp', '681-253-5012', 'Esse Non', '2012-12-13', '1982-04-03', 'Returned', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(48, 'Jesse Marquardt', '+1-325-363-7469', 'Possimus Ad Qui', '1974-12-10', '1999-12-21', 'Borrowing', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(49, 'Hunter Erdman', '254.243.3561', 'Dolor', '2020-04-06', '1993-01-25', 'Borrowing', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(50, 'Paul Schmidt', '949-806-8620', 'Hic', '1997-12-16', '2011-09-29', 'Borrowing', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(51, 'Ismael Abbott', '+1.612.871.7743', 'Ea', '1974-05-13', '1997-04-24', 'Returned', '2024-01-25 19:42:18', '2024-01-25 19:42:18'),
(52, 'Rebeka Yost', '+1-364-694-0453', 'Suscipit Et Beatae', '1970-11-29', '1998-03-23', 'Borrowing', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(53, 'Mrs. Asia Murphy', '585.409.1967', 'Atque Nihil', '1978-12-10', '1990-01-09', 'Borrowing', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(54, 'Loma Stanton', '720.456.2506', 'Et', '1972-05-12', '2016-03-14', 'Returned', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(55, 'Sunny Keeling', '(838) 714-3964', 'Omnis', '1972-06-30', '2015-05-22', 'Returned', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(56, 'Gideon Huels', '+1.360.687.4740', 'Distinctio Eum', '1997-07-21', '1971-02-05', 'Returned', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(57, 'Jimmie Kihn', '+17439042615', 'Rerum', '1995-11-04', '1977-08-18', 'Returned', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(58, 'Prof. Sonia Zieme V', '1-862-326-7602', 'Eum Totam', '1979-05-17', '1985-06-09', 'Borrowing', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(59, 'Brandy Jaskolski', '(878) 456-0383', 'Inventore Natus Ipsum', '2015-04-13', '2009-11-12', 'Returned', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(60, 'Kianna Ryan III', '+1 (215) 951-1601', 'Fugit', '2009-10-20', '2005-06-22', 'Borrowing', '2024-01-25 19:42:19', '2024-01-25 19:42:19'),
(61, 'Clementina Fahey', '+1-920-618-4489', 'Velit Cumque', '2020-04-15', '1981-04-11', 'Borrowing', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(62, 'Mr. Rowan Gulgowski', '1-740-238-7188', 'Qui', '2006-09-22', '2013-08-05', 'Borrowing', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(63, 'Evert Murphy', '+1-973-639-5230', 'Beatae Aut Ratione', '2013-06-19', '2011-05-21', 'Returned', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(64, 'Stephen Pouros', '+1-341-548-0125', 'Iure Dolores', '1994-05-16', '1994-09-16', 'Returned', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(65, 'Pietro Bergnaum II', '(520) 976-6913', 'Voluptate Ea', '1990-11-16', '2023-11-22', 'Borrowing', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(66, 'Keagan Marks', '(307) 449-0537', 'In Fuga Beatae', '2019-07-15', '1973-01-14', 'Borrowing', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(67, 'Miss Makenzie Little DDS', '+1-425-255-7273', 'Impedit Sunt Voluptatum', '2021-07-01', '2008-01-19', 'Returned', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(68, 'Elsie Jaskolski', '341-788-3564', 'Voluptatem Et', '2019-09-24', '2020-12-20', 'Returned', '2024-01-25 19:42:20', '2024-01-25 19:42:20'),
(69, 'Prof. Jarret Fadel DVM', '+1-972-903-8357', 'Odio Ex Quia', '2010-09-23', '1988-08-31', 'Borrowing', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(70, 'Prof. Wiley Kulas V', '808-460-1271', 'Ratione', '1976-09-24', '1975-12-27', 'Returned', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(71, 'Mr. Lazaro Kshlerin', '+14104244537', 'Sed Numquam Nobis', '2000-08-12', '1972-09-26', 'Returned', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(72, 'Deborah Bruen', '740-797-6468', 'Et Dolore', '2010-01-03', '1995-07-18', 'Returned', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(73, 'Alize Cartwright', '(360) 929-6068', 'Ut Omnis Aspernatur', '1997-01-20', '2000-08-11', 'Returned', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(74, 'Dax Rice', '+1-941-866-3772', 'Fugit Maxime', '2003-03-07', '1970-09-02', 'Borrowing', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(75, 'Dorothea Langworth IV', '984.696.8267', 'Alias Eaque Consequatur', '1984-01-21', '1974-05-22', 'Borrowing', '2024-01-25 19:42:21', '2024-01-25 19:42:21'),
(76, 'Ernestina Dicki', '1-802-343-1689', 'Qui Quia', '2001-12-05', '2003-11-01', 'Borrowing', '2024-01-25 19:42:22', '2024-01-25 19:42:22'),
(77, 'Lura Considine Sr.', '(914) 302-6977', 'Necessitatibus Omnis', '1988-11-08', '1997-11-03', 'Returned', '2024-01-25 19:42:22', '2024-01-25 19:42:22'),
(78, 'Dr. Loyal Strosin', '(351) 858-2911', 'Vitae Mollitia', '1980-04-23', '2020-03-16', 'Returned', '2024-01-25 19:42:22', '2024-01-25 19:42:22'),
(79, 'Carlie Donnelly', '940.275.7607', 'Beatae', '1990-10-10', '1997-09-19', 'Borrowing', '2024-01-25 19:42:22', '2024-01-25 19:42:22'),
(80, 'Dr. Elaina Predovic', '(364) 736-4982', 'Sed Et Aut', '1988-05-29', '1992-09-17', 'Returned', '2024-01-25 19:42:22', '2024-01-25 19:42:22'),
(81, 'Ms. Imogene Tromp', '(903) 522-5327', 'Quasi', '1982-07-31', '1988-11-20', 'Returned', '2024-01-25 19:42:22', '2024-01-25 19:42:22'),
(82, 'Princess Mosciski', '+1 (702) 341-1286', 'Cupiditate Et Dicta', '2007-11-16', '1998-11-10', 'Borrowing', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(83, 'Jamir Donnelly', '+1-828-560-3531', 'Quas Cumque Consectetur', '1980-07-03', '1980-08-04', 'Borrowing', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(84, 'Mrs. Etha Wiza PhD', '805.526.0143', 'Fugiat', '2019-03-21', '1998-09-10', 'Borrowing', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(85, 'Janis Price', '951.254.5954', 'Vel', '1984-01-12', '2009-01-27', 'Borrowing', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(86, 'Bette Stoltenberg', '678-698-2027', 'Enim Animi Ab', '2019-03-05', '1990-05-03', 'Returned', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(87, 'Bethany Jast', '+1-256-892-8251', 'Quam Aspernatur', '1997-08-26', '1979-02-28', 'Borrowing', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(88, 'Dr. Rosalia Simonis I', '+1 (430) 668-9398', 'Excepturi', '2014-06-17', '1984-04-29', 'Returned', '2024-01-25 19:42:23', '2024-01-25 19:42:23'),
(89, 'Mr. Zachariah Hettinger', '283.696.0948', 'Perferendis Beatae', '2016-01-17', '2018-06-19', 'Borrowing', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(90, 'Dr. Nichole Nikolaus Jr.', '938-670-3432', 'Nihil Occaecati Praesentium', '1982-06-11', '1984-07-29', 'Returned', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(91, 'Eliseo Hilpert', '1-667-650-5765', 'Minima Voluptate', '2015-05-04', '1997-03-18', 'Borrowing', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(92, 'Destini White IV', '1-559-906-3936', 'Et Qui A', '2020-10-19', '2010-06-08', 'Borrowing', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(93, 'Jewell Veum', '1-325-432-4223', 'Sunt', '1978-10-18', '1975-11-01', 'Borrowing', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(94, 'Eveline Grant', '(845) 245-5708', 'Expedita Eveniet Saepe', '1987-05-22', '2005-05-16', 'Returned', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(95, 'Dr. Shanie Borer', '878.256.3366', 'Et Odit', '1971-12-22', '1976-02-19', 'Returned', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(96, 'Dr. Thelma Barrows', '986-788-8135', 'Commodi Distinctio Sit', '2003-07-28', '1973-02-14', 'Returned', '2024-01-25 19:42:24', '2024-01-25 19:42:24'),
(97, 'Lowell Fahey PhD', '847.969.7579', 'Et', '1992-11-05', '1981-02-18', 'Returned', '2024-01-25 19:42:25', '2024-01-25 19:42:25'),
(98, 'Cydney Smitham', '859-745-8438', 'Ab Quasi', '1993-11-30', '2021-01-01', 'Borrowing', '2024-01-25 19:42:25', '2024-01-25 19:42:25'),
(99, 'Dr. Timmothy Ruecker Jr.', '872-805-5903', 'Quia', '1989-11-14', '2005-04-23', 'Returned', '2024-01-25 19:42:25', '2024-01-25 19:42:25'),
(100, 'Cloyd Wiza', '216-893-3333', 'Eum A', '1977-05-22', '2014-07-29', 'Borrowing', '2024-01-25 19:42:25', '2024-01-25 19:42:25');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_25_022234_create_borrow_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@admin.com', NULL, '$2y$10$lcs/hqcMlHeubYFRqOE97.ix6yus7qFCVNtEzCyl8EhFEQ520.NiG', NULL, '2024-01-25 19:45:17', '2024-01-25 19:45:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `borrow`
--
ALTER TABLE `borrow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borrow`
--
ALTER TABLE `borrow`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
