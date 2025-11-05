-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 04, 2025 at 10:25 PM
-- Server version: 8.0.43-cll-lve
-- PHP Version: 8.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thepwpolikno_ecomm`
--

-- --------------------------------------------------------

--
-- Table structure for table `billing_addresses`
--

CREATE TABLE `billing_addresses` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telcode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zone_id` bigint UNSIGNED NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel_cache_5c785c036466adea360111aa28563bfd556b5fba', 'i:1;', 1748521760),
('laravel_cache_5c785c036466adea360111aa28563bfd556b5fba:timer', 'i:1748521760;', 1748521760);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` bigint UNSIGNED DEFAULT NULL,
  `status` enum('active','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `parent_id`, `status`, `meta_title`, `meta_description`, `meta_keywords`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Cloths', 'Cloths', NULL, 'active', 'Cloths', 'Cloths', 'Cloths', 'cloths', '2025-05-19 15:55:46', '2025-05-19 15:55:46'),
(2, 'Suit Set', 'Suit Set', 1, 'active', 'Suit Set', 'Suit Set', 'Suit Set', 'suit-set', '2025-05-19 15:55:46', '2025-05-19 15:55:46'),
(3, 'Kurta Set', 'Kurta Set', 1, 'active', 'Kurta Set', 'Kurta Set', 'Kurta Set', 'kurta-set', '2025-05-19 15:55:46', '2025-05-19 15:55:46'),
(4, 'Lehenga Set', 'Lehenga Set', 1, 'active', 'Lehenga Set', 'Lehenga Set', 'Lehenga Set', 'lehenga-set', '2025-05-19 15:55:46', '2025-05-19 15:55:46'),
(5, 'Saree Set', 'Saree Set', 1, 'active', 'Saree Set', 'Saree Set', 'Saree Set', 'saree-set', '2025-05-19 16:52:09', '2025-05-19 16:52:09'),
(6, 'Anarkali Set', 'Anarkali Set', 1, 'active', 'Anarkali Set', 'Anarkali Set', 'Anarkali Set', 'anarkali-set', '2025-05-19 16:52:09', '2025-05-19 16:52:09'),
(7, 'Sharara Set', 'Sharara Set', 1, 'active', 'Sharara Set', 'Sharara Set', 'Sharara Set', 'sharara-set', '2025-05-19 16:54:11', '2025-05-19 16:54:11'),
(8, 'Gharara Set', 'Gharara Set', 1, 'active', 'Gharara Set', 'Gharara Set', 'Gharara Set', 'gharara-set', '2025-05-19 16:54:11', '2025-05-19 16:54:11');

-- --------------------------------------------------------

--
-- Table structure for table `category_variants`
--

CREATE TABLE `category_variants` (
  `id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `variant_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_variants`
--

INSERT INTO `category_variants` (`id`, `created_at`, `updated_at`, `category_id`, `variant_id`) VALUES
(1, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 1, 2),
(2, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 1, 3),
(3, '2025-05-19 15:59:55', '2025-05-19 15:59:55', 1, 1),
(4, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 3, 1),
(5, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 3, 2),
(6, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 3, 2),
(7, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 2, 1),
(8, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 2, 3),
(9, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 2, 2),
(10, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 4, 1),
(11, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 4, 3),
(12, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 4, 2),
(13, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 5, 1),
(14, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 5, 3),
(15, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 5, 2),
(16, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 6, 1),
(17, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 6, 3),
(18, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 6, 2),
(19, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 7, 1),
(20, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 7, 3),
(21, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 7, 2),
(22, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 8, 1),
(23, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 8, 3),
(24, '2025-05-19 16:01:59', '2025-05-19 16:01:59', 8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` enum('active','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `products` json DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `match` enum('all','any') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `media_id` bigint UNSIGNED DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`id`, `name`, `slug`, `description`, `status`, `products`, `type`, `match`, `media_id`, `meta_title`, `meta_description`, `meta_keywords`, `created_at`, `updated_at`) VALUES
(39, 'Summer Finds', 'summer-finds', '<p>Summer Finds</p>', 'active', NULL, 'manual', 'all', 156, 'Summer Finds', 'Summer Finds', 'Summer Finds', '2025-05-19 12:26:29', '2025-05-19 12:26:29'),
(40, 'Zardozi', 'zardozi', '<p>Zardozi</p>', 'active', NULL, 'manual', 'all', 25, 'Zardozi', 'Zardozi', 'Zardozi', '2025-05-19 12:27:53', '2025-05-19 12:27:53'),
(41, 'Hera', 'hera-collection-of-embroidered-flared-suit-sets-for-women', '<p>Dive into elegance with Hera Collection. Check out embroidered flared chanderi kurta, cotton pants, and tissue dupattas suit sets for weddings &amp; festivities.</p>', 'active', NULL, 'manual', 'all', 126, 'Hera Collection of Embroidered Flared Suit Sets for Women', 'Dive into elegance with Hera Collection. Check out embroidered flared chanderi kurta, cotton pants, and tissue dupattas suit sets for weddings & festivities.', 'Hera Collection of Embroidered Flared Suit Sets for Women', '2025-05-19 12:29:03', '2025-05-19 12:29:03'),
(42, 'Sitara', 'shop-designer-sitara-with-matching-pants-and-dupattas-online', '<p>Immerse yourself in elegance with our collection of designer Sitara suits, kurtas, chruidar pants, etc, perfect wear for any festive gathering or occasion.</p>', 'active', NULL, 'smart', 'any', 125, 'Shop Designer Sitara with Matching Pants and Dupattas Online', 'Immerse yourself in elegance with our collection of designer Sitara suits, kurtas, chruidar pants, etc, perfect wear for any festive gathering or occasion.', 'Shop Designer Sitara with Matching Pants and Dupattas Online, Sitara', '2025-05-19 12:30:47', '2025-05-19 13:21:42'),
(43, 'Nagma', 'nagma', '<p>Nagma</p>', 'active', NULL, 'smart', 'all', 124, 'Nagma', 'Nagma', 'Nagma', '2025-05-19 13:20:58', '2025-05-19 13:20:58'),
(44, 'Suit Set', 'suit-set', '<p>Suit Set</p>', 'active', NULL, 'smart', 'all', 61, 'Suit Set', 'Suit Set', 'Suit Set', '2025-05-19 13:27:28', '2025-05-19 13:27:28'),
(45, 'Kurta', 'kurta', '<p>Kurta</p>', 'active', NULL, 'smart', 'all', 22, 'Kurta', 'Kurta', 'Kurta', '2025-05-19 13:44:18', '2025-05-19 13:45:03');

-- --------------------------------------------------------

--
-- Table structure for table `collection_column_conditions`
--

CREATE TABLE `collection_column_conditions` (
  `id` bigint UNSIGNED NOT NULL,
  `collection_id` bigint UNSIGNED DEFAULT NULL,
  `column_condition_id` bigint UNSIGNED DEFAULT NULL,
  `condition_id` bigint UNSIGNED DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `collection_column_conditions`
--

INSERT INTO `collection_column_conditions` (`id`, `collection_id`, `column_condition_id`, `condition_id`, `value`, `created_at`, `updated_at`) VALUES
(29, 43, 3, 7, '5000', '2025-05-19 13:20:58', '2025-05-19 13:20:58'),
(30, 44, 2, 1, 'Suit Set', '2025-05-19 13:27:28', '2025-05-19 13:27:28');

-- --------------------------------------------------------

--
-- Table structure for table `column_conditions`
--

CREATE TABLE `column_conditions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `conditions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `column_conditions`
--

INSERT INTO `column_conditions` (`id`, `name`, `conditions`, `created_at`, `updated_at`) VALUES
(1, 'name', NULL, '2025-05-12 10:50:24', '2025-05-12 10:50:24'),
(2, 'category', NULL, '2025-05-12 10:50:25', '2025-05-12 10:50:25'),
(3, 'sale_price', NULL, '2025-05-12 10:50:27', '2025-05-12 10:50:27'),
(4, 'actual_price', NULL, '2025-05-12 10:50:28', '2025-05-12 10:50:28'),
(5, 'weight', NULL, '2025-05-12 10:50:28', '2025-05-12 10:50:28'),
(6, 'stock', NULL, '2025-05-12 10:50:29', '2025-05-12 10:50:29'),
(7, 'variant', NULL, '2025-05-12 10:50:29', '2025-05-12 10:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `column_conditions_conditions`
--

CREATE TABLE `column_conditions_conditions` (
  `id` bigint UNSIGNED NOT NULL,
  `column_id` bigint UNSIGNED DEFAULT NULL,
  `condition_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `column_conditions_conditions`
--

INSERT INTO `column_conditions_conditions` (`id`, `column_id`, `condition_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(2, 1, 2, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(3, 1, 3, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(4, 1, 4, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(5, 1, 5, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(6, 1, 6, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(7, 2, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(8, 2, 2, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(9, 3, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(10, 3, 2, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(11, 3, 7, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(12, 3, 8, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(13, 4, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(14, 4, 2, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(15, 4, 7, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(16, 4, 8, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(17, 4, 9, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(18, 4, 10, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(19, 5, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(20, 5, 2, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(21, 5, 7, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(22, 5, 8, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(23, 6, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(24, 6, 7, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(25, 6, 8, '2025-05-13 22:21:46', '2025-05-13 22:21:46'),
(26, 7, 1, '2025-05-13 22:21:46', '2025-05-13 22:21:46');

-- --------------------------------------------------------

--
-- Table structure for table `comment_media`
--

CREATE TABLE `comment_media` (
  `comment_id` bigint UNSIGNED DEFAULT NULL,
  `media_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment_media`
--

INSERT INTO `comment_media` (`comment_id`, `media_id`) VALUES
(5, 2),
(14, 10),
(14, 11);

-- --------------------------------------------------------

--
-- Table structure for table `conditions`
--

CREATE TABLE `conditions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `conditions`
--

INSERT INTO `conditions` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'is equal to', 'is-equal-to', '2025-05-12 10:38:08', '2025-05-12 10:38:08'),
(2, 'is not equal to', 'is-not-equal-to', '2025-05-12 10:38:10', '2025-05-12 10:38:10'),
(3, 'starts with', 'starts-with', '2025-05-12 10:38:11', '2025-05-12 10:38:11'),
(4, 'ends with', 'ends-with', '2025-05-12 10:38:11', '2025-05-12 10:38:11'),
(5, 'contains', 'contains', '2025-05-12 10:38:12', '2025-05-12 10:38:12'),
(6, 'does not contain', 'does-not-contain', '2025-05-12 10:38:12', '2025-05-12 10:38:12'),
(7, 'is greater than', 'is-greater-than', '2025-05-12 10:38:13', '2025-05-12 10:38:13'),
(8, 'is less than', 'is-less-than', '2025-05-12 10:38:13', '2025-05-12 10:38:13'),
(9, 'is not empty', 'is-not-empty', '2025-05-12 10:38:14', '2025-05-12 10:38:14'),
(10, 'is empty', 'is-empty', '2025-05-12 10:38:14', '2025-05-12 10:38:14');

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE `contents` (
  `id` bigint UNSIGNED NOT NULL,
  `number` int DEFAULT NULL,
  `heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `second_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `button_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `extra5` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contents`
--

INSERT INTO `contents` (`id`, `number`, `heading`, `sub_heading`, `image`, `second_image`, `description`, `button_text`, `button_link`, `extra1`, `extra2`, `extra3`, `extra4`, `extra5`, `created_at`, `updated_at`) VALUES
(1, NULL, ' Healthy Diet: Fueling Your Heart', 'Eat for a Stronger Heart', NULL, NULL, 'A heart-healthy diet focuses on consuming nutrient-dense foods that provide essential vitamins and minerals while avoiding unhealthy fats and excess sugars. Emphasize whole grains, lean proteins, fruits, and vegetables. Foods rich in omega-3 fatty acids, like salmon and walnuts, can reduce inflammation and lower cholesterol levels. Limiting red meat, sodium, and sugary beverages will help reduce the risk of hypertension and heart disease. Eating mindfully and in moderation is key, as maintaining a healthy weight is one of the most effective ways to protect your heart.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(2, NULL, 'Regular Exercise: Strengthen Your Heart', 'Move More, Stay Healthy', NULL, NULL, 'Physical activity is crucial for heart health, helping to strengthen the heart muscle, improve circulation, and regulate blood pressure. Aim for at least 150 minutes of moderate-intensity exercise per week, such as brisk walking, cycling, or swimming. Cardiovascular exercises boost heart rate, enhance stamina, and reduce stress on the cardiovascular system. Strength training twice a week helps build muscle and improve metabolism, which supports weight management. Regular exercise also reduces the risk of developing conditions such as obesity, diabetes, and hypertension, all of which can strain the heart.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(3, NULL, 'Stress Management: Protecting Your Heart from Emotional Strain', 'Calm Your Mind, Care for Your Heart', NULL, NULL, 'Chronic stress can significantly impact heart health, leading to increased blood pressure, inflammation, and a higher risk of heart disease. Practicing relaxation techniques, such as deep breathing exercises, meditation, and yoga, can help reduce stress levels. Setting aside time for hobbies, socializing with loved ones, and taking breaks from work can also alleviate stress. Understanding stress triggers and learning to manage them effectively helps to lower the risk of stress-induced heart problems. Prioritizing mental health is just as important as maintaining physical health.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(4, NULL, 'Quit Smoking: Break the Habit for a Healthier Heart', 'Kick the Habit for Good', NULL, NULL, 'Smoking is one of the leading causes of heart disease, as it damages blood vessels, raises blood pressure, and reduces oxygen flow to the heart. Quitting smoking can significantly reduce the risk of heart attacks, strokes, and other cardiovascular diseases. Even secondhand smoke exposure is harmful, so avoiding smoke-filled environments is equally important. Support from friends, family, and health professionals can aid in the cessation process. The sooner smoking is eliminated, the quicker the heart begins to recover and heal.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(5, NULL, 'Limit Alcohol: Drink in Moderation', 'Sip Wisely for Heart Health', NULL, NULL, 'Excessive alcohol consumption can contribute to high blood pressure, obesity, and an irregular heartbeat, increasing the risk of heart disease. If you choose to drink, do so in moderation—up to one drink per day for women and two drinks per day for men. Choosing healthier alternatives like water, herbal teas, or sparkling water can reduce alcohol intake. Additionally, practicing mindful drinking habits and avoiding binge drinking will help protect the heart from the damaging effects of excessive alcohol consumption.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(6, NULL, 'Rolex-Luxury Watches worldwide', 'Introduction', NULL, NULL, 'Welcome to Rolex Boutique, your premier destination for luxury timepieces. We take pride in offering an exquisite selection of authentic Rolex watches, known for their precision, elegance, and timeless design. Our mission is to provide you with exceptional craftsmanship and unparalleled sophistication. Discover the perfect Rolex that complements your style and celebrates life’s most remarkable moments at Rolex Boutique.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(7, NULL, 'Monitor Blood Pressure: Keep It in Check', 'Know Your Numbers for a Healthy Heart', NULL, NULL, 'High blood pressure, or hypertension, is a significant risk factor for heart disease. Regular monitoring of blood pressure helps detect any irregularities early on. Implementing lifestyle changes like reducing sodium intake, exercising regularly, and managing stress can help lower blood pressure. For those with hypertension, medication may be necessary under a doctor’s supervision. Keeping blood pressure within a healthy range reduces the strain on the heart and decreases the risk of heart attacks, strokes, and other cardiovascular complications.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(8, NULL, 'Maintain Healthy Cholesterol Levels', 'Balance Your Cholesterol for Better Heart Health', NULL, NULL, 'Cholesterol is necessary for the body, but too much of the wrong type—low-density lipoprotein (LDL)—can lead to plaque buildup in the arteries, increasing the risk of heart disease. Regular cholesterol checks help ensure that LDL levels are not too high and that high-density lipoprotein (HDL) levels, the “good” cholesterol, are maintained. A heart-healthy diet, regular exercise, and, in some cases, medication can help keep cholesterol levels in check, supporting overall heart health.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(9, NULL, 'Stay Hydrated: The Role of Water in Heart Health', 'Drink Up for Heart Wellness', NULL, NULL, 'Staying hydrated is vital for heart health, as water helps maintain blood volume, ensuring that the heart pumps efficiently. Dehydration can lead to thicker blood, making it harder for the heart to circulate blood and potentially causing elevated blood pressure. Drinking plenty of water throughout the day helps support the cardiovascular system, improve digestion, and regulate body temperature. Additionally, replacing sugary drinks with water reduces the risk of weight gain and heart disease.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(10, NULL, 'Manage Diabetes: Controlling Blood Sugar for Heart Health', 'Control Your Blood Sugar, Protect Your Heart', NULL, NULL, 'Diabetes significantly increases the risk of heart disease, as high blood sugar levels can damage blood vessels and nerves controlling the heart. Managing diabetes through a healthy diet, regular exercise, and medication is crucial for reducing the risk of heart-related complications. Monitoring blood sugar levels and working closely with a healthcare provider to manage diabetes effectively can protect heart health and reduce the likelihood of developing cardiovascular disease.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(11, NULL, 'Maintain a Healthy Weight: Lighten the Load on Your Heart', 'Achieve and Sustain a Heart-Friendly Weight', NULL, NULL, 'Carrying excess weight, particularly around the abdomen, can increase the risk of heart disease by placing additional strain on the heart and leading to conditions like hypertension, high cholesterol, and diabetes. Achieving and maintaining a healthy weight through a balanced diet and regular physical activity is essential for heart health. Losing even a small amount of weight can significantly improve heart function, reduce blood pressure, and lower the risk of cardiovascular disease.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(12, NULL, 'Healthy Fats: Choose Wisely for Heart Health', 'Opt for Heart-Friendly Fats', NULL, NULL, 'Not all fats are created equal. While saturated and trans fats can raise cholesterol levels and increase the risk of heart disease, unsaturated fats, such as those found in olive oil, avocados, and nuts, can support heart health. Including healthy fats in your diet helps reduce inflammation, improve cholesterol levels, and protect against heart disease. Avoiding processed foods high in unhealthy fats and opting for natural sources of unsaturated fats can make a significant difference in cardiovascular health.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(13, NULL, 'Social Connections: Build a Heart-Healthy Support Network', 'Stay Connected for a Healthier Heart', NULL, NULL, 'Strong social connections and positive relationships can reduce stress levels, improve mood, and support heart health. Engaging in social activities, maintaining friendships, and seeking emotional support from loved ones can help protect the heart from the harmful effects of loneliness and isolation. Participating in community events, joining clubs or groups, and staying connected with family and friends can create a supportive network that promotes overall well-being and heart health', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(14, NULL, 'Limit Caffeine: Protect Your Heart from Overstimulation', 'Moderate Your Caffeine Intake', NULL, NULL, 'While moderate caffeine consumption can have some health benefits, excessive caffeine intake can lead to increased heart rate, elevated blood pressure, and disrupted sleep patterns, all of which can strain the heart. Monitoring and limiting caffeine intake, especially from sources like coffee, energy drinks, and certain medications, can help protect heart health. Opting for decaffeinated beverages, herbal teas, or water as alternatives can reduce the risk of caffeine-related heart issues.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(15, NULL, 'Regular Health Checkups: Stay Proactive About Heart Health', 'Preventative Care for a Strong Heart', NULL, NULL, 'Regular checkups with your healthcare provider are essential for monitoring heart health and catching potential issues early. Routine screenings for blood pressure, cholesterol, blood sugar, and other heart-related markers can help identify risk factors and prevent the development of cardiovascular disease. Working closely with your healthcare provider to address any concerns and follow a personalized heart health plan can lead to better long-term outcomes and a healthier heart.', 'Contact-us', 'contact.php', NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(16, NULL, 'Hurry! Give and Get Triple Matched!', NULL, NULL, NULL, 'Don\'t miss this limited-time opportunity to have your donation TRIPLE MATCHED making your impact go 3X further in honor of National Wear Red Day.Give now and help save even more lives.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(27, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(28, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(29, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(30, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(31, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(32, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(33, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(34, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(35, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(36, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(37, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(38, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(39, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(40, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(41, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(42, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(43, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(44, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(45, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(46, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:04', '2024-08-17 00:39:04'),
(47, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(48, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(51, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(52, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(53, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(54, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(55, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(56, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(57, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(58, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(59, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(60, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(61, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(62, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(63, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(64, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(65, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(66, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(67, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(68, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(69, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(70, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(71, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(72, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(73, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(74, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(75, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(76, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(77, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(78, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(79, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(80, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(81, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(82, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(83, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(84, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(85, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(86, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(87, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(88, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(89, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(90, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(91, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(92, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(93, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(94, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:05', '2024-08-17 00:39:05'),
(95, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(96, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(97, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(98, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(99, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `flag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `continent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postalcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `code`, `flag`, `continent`, `telcode`, `postalcode`, `zone`, `created_at`, `updated_at`) VALUES
(1, 'Afghanistan', 'AF', 'af.svg', 'Asia', '93', 'Postal code', 'Region', NULL, NULL),
(2, 'Åland Islands', 'AX', 'ax.svg', 'Europe', '358', 'Postal code', 'Region', NULL, NULL),
(3, 'Albania', 'AL', 'al.svg', 'Europe', '355', 'Postal code', 'Region', NULL, NULL),
(4, 'Algeria', 'DZ', 'dz.svg', 'Africa', '213', 'Postal code', 'Region', NULL, NULL),
(5, 'Andorra', 'AD', 'ad.svg', 'Europe', '376', 'Postal code', 'Region', NULL, NULL),
(6, 'Angola', 'AO', 'ao.svg', 'Africa', '244', NULL, 'Region', NULL, NULL),
(7, 'Anguilla', 'AI', 'ai.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(8, 'Antigua & Barbuda', 'AG', 'ag.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(9, 'Argentina', 'AR', 'ar.svg', 'South America', '54', 'Postal code', 'Province', NULL, NULL),
(10, 'Armenia', 'AM', 'am.svg', 'Asia', '374', 'Postal code', 'Region', NULL, NULL),
(11, 'Aruba', 'AW', 'aw.svg', 'North America', '297', NULL, 'Region', NULL, NULL),
(12, 'Ascension Island', 'AC', 'untitle.svg', 'Africa', '247', NULL, 'Region', NULL, NULL),
(13, 'Australia', 'AU', 'au.svg', 'Oceania', '61', 'Postcode', 'State/territory', NULL, NULL),
(14, 'Austria', 'AT', 'at.svg', 'Europe', '43', 'Postal code', 'Region', NULL, NULL),
(15, 'Azerbaijan', 'AZ', 'az.svg', 'Asia', '994', 'Postal code', 'Region', NULL, NULL),
(16, 'Bahamas', 'BS', 'bs.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(17, 'Bahrain', 'BH', 'bh.svg', 'Asia', '973', 'Postal code', 'Region', NULL, NULL),
(18, 'Bangladesh', 'BD', 'bd.svg', 'Asia', '880', 'Postal code', 'Region', NULL, NULL),
(19, 'Barbados', 'BB', 'bb.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(20, 'Belarus', 'BY', 'by.svg', 'Europe', '375', 'Postal code', 'Region', NULL, NULL),
(21, 'Belgium', 'BE', 'be.svg', 'Europe', '32', 'Postal code', 'Region', NULL, NULL),
(22, 'Belize', 'BZ', 'bz.svg', 'North America', '501', NULL, 'Region', NULL, NULL),
(23, 'Benin', 'BJ', 'bj.svg', 'Africa', '229', NULL, 'Region', NULL, NULL),
(24, 'Bermuda', 'BM', 'bm.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(25, 'Bhutan', 'BT', 'bt.svg', 'Asia', '975', 'Postal code', 'Region', NULL, NULL),
(26, 'Bolivia', 'BO', 'bo.svg', 'South America', '591', NULL, 'Region', NULL, NULL),
(27, 'Bosnia & Herzegovina', 'BA', 'ba.svg', 'Europe', '387', 'Postal code', 'Region', NULL, NULL),
(28, 'Botswana', 'BW', 'bw.svg', 'Africa', '267', NULL, 'Region', NULL, NULL),
(29, 'Brazil', 'BR', 'br.svg', 'South America', '55', 'Postal code', 'State', NULL, NULL),
(30, 'British Indian Ocean Territory', 'IO', 'io.svg', 'Africa', '246', 'Postal code', 'Region', NULL, NULL),
(31, 'British Virgin Islands', 'VG', 'vg.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(32, 'Brunei', 'BN', 'bn.svg', 'Asia', '673', 'Postal code', 'Region', NULL, NULL),
(33, 'Bulgaria', 'BG', 'bg.svg', 'Europe', '359', 'Postal code', 'Region', NULL, NULL),
(34, 'Burkina Faso', 'BF', 'bf.svg', 'Africa', '226', 'Postal code', 'Region', NULL, NULL),
(35, 'Burundi', 'BI', 'bi.svg', 'Africa', '257', NULL, 'Region', NULL, NULL),
(36, 'Cambodia', 'KH', 'kh.svg', 'Asia', '855', 'Postal code', 'Region', NULL, NULL),
(37, 'Cameroon', 'CM', 'cm.svg', 'Africa', '237', NULL, 'Region', NULL, NULL),
(38, 'Canada', 'CA', 'ca.svg', 'North America', '1', 'Postal code', 'Province', NULL, NULL),
(39, 'Cape Verde', 'CV', 'cv.svg', 'Africa', '238', 'Postal code', 'Region', NULL, NULL),
(40, 'Caribbean Netherlands', 'BQ', 'bq.svg', 'North America', '599', NULL, 'Region', NULL, NULL),
(41, 'Cayman Islands', 'KY', 'ky.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(42, 'Central African Republic', 'CF', 'cf.svg', 'Africa', '236', NULL, 'Region', NULL, NULL),
(43, 'Chad', 'TD', 'td.svg', 'Africa', '235', NULL, 'Region', NULL, NULL),
(44, 'Chile', 'CL', 'cl.svg', 'South America', '56', 'Postal code', 'Region', NULL, NULL),
(45, 'China', 'CN', 'cn.svg', 'Asia', '86', 'Postal code', 'Province', NULL, NULL),
(46, 'Christmas Island', 'CX', 'cx.svg', 'Oceania', '61', NULL, 'Region', NULL, NULL),
(47, 'Cocos (Keeling) Islands', 'CC', 'cc.svg', 'Oceania', '891', NULL, 'Region', NULL, NULL),
(48, 'Colombia', 'CO', 'co.svg', 'South America', '57', 'Postal code', 'Province', NULL, NULL),
(49, 'Comoros', 'KM', 'km.svg', 'Africa', '269', NULL, 'Region', NULL, NULL),
(50, 'Congo - Brazzaville', 'CG', 'cg.svg', 'Africa', '242', NULL, 'Region', NULL, NULL),
(51, 'Congo - Kinshasa', 'CD', 'cd.svg', 'Africa', '243', NULL, 'Region', NULL, NULL),
(52, 'Cook Islands', 'CK', 'ck.svg', 'Oceania', '682', NULL, 'Region', NULL, NULL),
(53, 'Costa Rica', 'CR', 'cr.svg', 'North America', '506', 'Postal code', 'Province', NULL, NULL),
(54, 'Croatia', 'HR', 'hr.svg', 'Europe', '385', 'Postal code', 'Region', NULL, NULL),
(55, 'Curaçao', 'CW', 'cw.svg', 'North America', '599', NULL, 'Region', NULL, NULL),
(56, 'Cyprus', 'CY', 'cy.svg', 'Asia', '357', 'Postal code', 'Region', NULL, NULL),
(57, 'Czechia', 'CZ', 'cz.svg', 'Europe', '420', 'Postal code', 'Region', NULL, NULL),
(58, 'Côte d’Ivoire', 'CI', 'ci.svg', 'Africa', '225', NULL, 'Region', NULL, NULL),
(59, 'Denmark', 'DK', 'dk.svg', 'Europe', '45', 'Postal code', 'Region', NULL, NULL),
(60, 'Djibouti', 'DJ', 'dj.svg', 'Africa', '253', NULL, 'Region', NULL, NULL),
(61, 'Dominica', 'DM', 'dm.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(62, 'Dominican Republic', 'DO', 'do.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(63, 'Ecuador', 'EC', 'ec.svg', 'South America', '593', 'Postal code', 'Region', NULL, NULL),
(64, 'Egypt', 'EG', 'eg.svg', 'Africa', '20', 'Postal code', 'Governorate', NULL, NULL),
(65, 'El Salvador', 'SV', 'sv.svg', 'North America', '503', 'Postal code', 'Department', NULL, NULL),
(66, 'Equatorial Guinea', 'GQ', 'gq.svg', 'Africa', '240', NULL, 'Region', NULL, NULL),
(67, 'Eritrea', 'ER', 'er.svg', 'Africa', '291', NULL, 'Region', NULL, NULL),
(68, 'Estonia', 'EE', 'ee.svg', 'Europe', '372', 'Postal code', 'Region', NULL, NULL),
(69, 'Eswatini', 'SZ', 'sz.svg', 'Africa', '268', 'Postal code', 'Region', NULL, NULL),
(70, 'Ethiopia', 'ET', 'et.svg', 'Africa', '251', 'Postal code', 'Region', NULL, NULL),
(71, 'Falkland Islands', 'FK', 'fk.svg', 'South America', '500', NULL, 'Region', NULL, NULL),
(72, 'Faroe Islands', 'FO', 'fo.svg', 'Europe', '298', 'Postal code', 'Region', NULL, NULL),
(73, 'Fiji', 'FJ', 'fj.svg', 'Oceania', '679', NULL, 'Region', NULL, NULL),
(74, 'Finland', 'FI', 'fi.svg', 'Europe', '358', 'Postal code', 'Region', NULL, NULL),
(75, 'France', 'FR', 'fr.svg', 'Europe', '33', 'Postal code', 'Region', NULL, NULL),
(76, 'French Guiana', 'GF', 'gf.svg', 'South America', '594', 'Postal code', 'Region', NULL, NULL),
(77, 'French Polynesia', 'PF', 'pf.svg', 'Oceania', '689', 'Postal code', 'Region', NULL, NULL),
(78, 'French Southern Territories', 'TF', 'tf.svg', 'Africa', '262', 'Postal code', 'Region', NULL, NULL),
(79, 'Gabon', 'GA', 'ga.svg', 'Africa', '241', NULL, 'Region', NULL, NULL),
(80, 'Gambia', 'GM', 'gm.svg', 'Africa', '220', NULL, 'Region', NULL, NULL),
(81, 'Georgia', 'GE', 'ge.svg', 'Asia', '995', 'Postal code', 'Region', NULL, NULL),
(82, 'Germany', 'DE', 'de.svg', 'Europe', '49', 'Postal code', 'Region', NULL, NULL),
(83, 'Ghana', 'GH', 'gh.svg', 'Africa', '233', 'Postal code', 'Region', NULL, NULL),
(84, 'Gibraltar', 'GI', 'gi.svg', 'Europe', '350', NULL, 'Region', NULL, NULL),
(85, 'Greece', 'GR', 'gr.svg', 'Europe', '30', 'Postal code', 'Region', NULL, NULL),
(86, 'Greenland', 'GL', 'gl.svg', 'North America', '299', 'Postal code', 'Region', NULL, NULL),
(87, 'Grenada', 'GD', 'gd.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(88, 'Guadeloupe', 'GP', 'gp.svg', 'North America', '590', 'Postal code', 'Region', NULL, NULL),
(89, 'Guatemala', 'GT', 'gt.svg', 'North America', '502', 'Postal code', 'Region', NULL, NULL),
(90, 'Guernsey', 'GG', 'gg.svg', 'Europe', '44', 'Postal code', 'Region', NULL, NULL),
(91, 'Guinea', 'GN', 'gn.svg', 'Africa', '224', 'Postal code', 'Region', NULL, NULL),
(92, 'Guinea-Bissau', 'GW', 'gw.svg', 'Africa', '245', 'Postal code', 'Region', NULL, NULL),
(93, 'Guyana', 'GY', 'gy.svg', 'South America', '592', NULL, 'Region', NULL, NULL),
(94, 'Haiti', 'HT', 'ht.svg', 'North America', '509', 'Postal code', 'Region', NULL, NULL),
(95, 'Honduras', 'HN', 'hn.svg', 'North America', '504', 'Postal code', 'Region', NULL, NULL),
(96, 'Hong Kong SAR', 'HK', 'hk.svg', 'Asia', '852', NULL, 'Region', NULL, NULL),
(97, 'Hungary', 'HU', 'hu.svg', 'Europe', '36', 'Postal code', 'Region', NULL, NULL),
(98, 'Iceland', 'is', 'aw.svg', 'Europe', '354', 'Postal code', 'Region', NULL, NULL),
(99, 'India', 'IN', 'in.svg', 'Asia', '91', 'PIN code', 'State', NULL, NULL),
(100, 'Indonesia', 'ID', 'id.svg', 'Asia', '62', 'Postal code', 'Province', NULL, NULL),
(101, 'Iran', 'IR', 'ir.svg', 'Asia', '98', 'Postal code', 'Region', NULL, NULL),
(102, 'Iraq', 'IQ', 'iq.svg', 'Asia', '964', 'Postal code', 'Region', NULL, NULL),
(103, 'Ireland', 'IE', 'ie.svg', 'Europe', '353', 'Postal code', 'County', NULL, NULL),
(104, 'Isle of Man', 'IM', 'im.svg', 'Europe', '44', 'Postal code', 'Region', NULL, NULL),
(105, 'Israel', 'IL', 'il.svg', 'Asia', '972', 'Postal code', 'Region', NULL, NULL),
(106, 'Italy', 'IT', 'it.svg', 'Europe', '39', 'Postal code', 'Province', NULL, NULL),
(107, 'Jamaica', 'JM', 'jm.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(108, 'Japan', 'JP', 'jp.svg', 'Asia', '81', 'Postal code', 'Prefecture', NULL, NULL),
(109, 'Jersey', 'JE', 'je.svg', 'Europe', '44', 'Postal code', 'Region', NULL, NULL),
(110, 'Jordan', 'JO', 'jo.svg', 'Asia', '962', 'Postal code', 'Region', NULL, NULL),
(111, 'Kazakhstan', 'KZ', 'kz.svg', 'Asia', '7', 'Postal code', 'Region', NULL, NULL),
(112, 'Kenya', 'KE', 'ke.svg', 'Africa', '254', 'Postal code', 'Region', NULL, NULL),
(113, 'Kiribati', 'KI', 'ki.svg', 'Oceania', '686', 'Postal code', 'Region', NULL, NULL),
(114, 'Kosovo', 'XK', 'xk.svg', 'Europe', '383', 'Postal code', 'Region', NULL, NULL),
(115, 'Kuwait', 'KW', 'kw.svg', 'Asia', '965', 'Postal code', 'Governorate', NULL, NULL),
(116, 'Kyrgyzstan', 'KG', 'kg.svg', 'Asia', '996', 'Postal code', 'Region', NULL, NULL),
(117, 'Laos', 'LA', 'la.svg', 'Asia', '856', 'Postal code', 'Region', NULL, NULL),
(118, 'Latvia', 'LV', 'lv.svg', 'Europe', '371', 'Postal code', 'Region', NULL, NULL),
(119, 'Lebanon', 'LB', 'lb.svg', 'Asia', '961', 'Postal code', 'Region', NULL, NULL),
(120, 'Lesotho', 'LS', 'ls.svg', 'Africa', '266', 'Postal code', 'Region', NULL, NULL),
(121, 'Liberia', 'LR', 'lr.svg', 'Africa', '231', 'Postal code', 'Region', NULL, NULL),
(122, 'Libya', 'LY', 'ly.svg', 'Africa', '218', 'Postal code', 'Region', NULL, NULL),
(123, 'Liechtenstein', 'LI', 'li.svg', 'Europe', '423', 'Postal code', 'Region', NULL, NULL),
(124, 'Lithuania', 'LT', 'lt.svg', 'Europe', '370', 'Postal code', 'Region', NULL, NULL),
(125, 'Luxembourg', 'LU', 'lu.svg', 'Europe', '352', 'Postal code', 'Region', NULL, NULL),
(126, 'Macao SAR', 'MO', 'mo.svg', 'Asia', '853', NULL, 'Region', NULL, NULL),
(127, 'Madagascar', 'MG', 'mg.svg', 'Africa', '261', 'Postal code', 'Region', NULL, NULL),
(128, 'Malawi', 'MW', 'mw.svg', 'Africa', '265', 'Postal code', 'Region', NULL, NULL),
(129, 'Malaysia', 'MY', 'my.svg', 'Asia', '60', 'Postcode', 'State/territory', NULL, NULL),
(130, 'Maldives', 'MV', 'mv.svg', 'Asia', '960', 'Postal code', 'Region', NULL, NULL),
(131, 'Mali', 'ML', 'ml.svg', 'Africa', '223', NULL, 'Region', NULL, NULL),
(132, 'Malta', 'MT', 'mt.svg', 'Europe', '356', 'Postal code', 'Region', NULL, NULL),
(133, 'Martinique', 'MQ', 'mq.svg', 'North America', '596', 'Postal code', 'Region', NULL, NULL),
(134, 'Mauritania', 'MR', 'mr.svg', 'Africa', '222', NULL, 'Region', NULL, NULL),
(135, 'Mauritius', 'MU', 'mu.svg', 'Africa', '230', 'Postal code', 'Region', NULL, NULL),
(136, 'Mayotte', 'YT', 'yt.svg', 'Africa', '262', 'Postal code', 'Region', NULL, NULL),
(137, 'Mexico', 'MX', 'mx.svg', 'North America', '52', 'Postal code', 'State', NULL, NULL),
(138, 'Moldova', 'MD', 'md.svg', 'Europe', '373', 'Postal code', 'Region', NULL, NULL),
(139, 'Monaco', 'MC', 'mc.svg', 'Europe', '377', 'Postal code', 'Region', NULL, NULL),
(140, 'Mongolia', 'MN', 'mn.svg', 'Asia', '976', 'Postal code', 'Region', NULL, NULL),
(141, 'Montenegro', 'ME', 'me.svg', 'Europe', '382', 'Postal code', 'Region', NULL, NULL),
(142, 'Montserrat', 'MS', 'ms.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(143, 'Morocco', 'MA', 'ma.svg', 'Africa', '212', 'Postal code', 'Region', NULL, NULL),
(144, 'Mozambique', 'MZ', 'mz.svg', 'Africa', '258', 'Postal code', 'Region', NULL, NULL),
(145, 'Myanmar (Burma)', 'MM', 'mm.svg', 'Asia', '95', 'Postal code', 'Region', NULL, NULL),
(146, 'Namibia', 'NA', 'na.svg', 'Africa', '264', 'Postal code', 'Region', NULL, NULL),
(147, 'Nauru', 'NR', 'nr.svg', 'Oceania', '674', NULL, 'Region', NULL, NULL),
(148, 'Nepal', 'NP', 'np.svg', 'Asia', '977', 'Postal code', 'Region', NULL, NULL),
(149, 'Netherlands', 'NL', 'nl.svg', 'Europe', '31', 'Postal code', 'Region', NULL, NULL),
(150, 'New Caledonia', 'NC', 'nc.svg', 'Oceania', '687', 'Postal code', 'Region', NULL, NULL),
(151, 'New Zealand', 'NZ', 'nz.svg', 'Oceania', '64', 'Postal code', 'Region', NULL, NULL),
(152, 'Nicaragua', 'NI', 'ni.svg', 'North America', '505', NULL, 'Region', NULL, NULL),
(153, 'Niger', 'NE', 'ne.svg', 'Africa', '227', 'Postal code', 'Region', NULL, NULL),
(154, 'Nigeria', 'NG', 'ng.svg', 'Africa', '234', 'Postal code', 'State', NULL, NULL),
(155, 'Niue', 'NU', 'nu.svg', 'Oceania', '683', NULL, 'Region', NULL, NULL),
(156, 'Norfolk Island', 'NF', 'nf.svg', 'Oceania', '672', NULL, 'Region', NULL, NULL),
(157, 'North Macedonia', 'MK', 'mk.svg', 'Europe', '389', 'Postal code', 'Region', NULL, NULL),
(158, 'Norway', 'NO', 'no.svg', 'Europe', '47', 'Postal code', 'Region', NULL, NULL),
(159, 'Oman', 'OM', 'om.svg', 'Asia', '968', 'Postal code', 'Region', NULL, NULL),
(160, 'Pakistan', 'PK', 'pk.svg', 'Asia', '92', 'Postal code', 'Region', NULL, NULL),
(161, 'Palestine', 'PS', 'ps.svg', 'Asia', '970', 'Postal code', 'Region', NULL, NULL),
(162, 'Panama', 'PA', 'pa.svg', 'North America', '507', 'Postal code', 'Region', NULL, NULL),
(163, 'Papua New Guinea', 'PG', 'pg.svg', 'Oceania', '675', 'Postal code', 'Region', NULL, NULL),
(164, 'Paraguay', 'PY', 'py.svg', 'South America', '595', 'Postal code', 'Region', NULL, NULL),
(165, 'Peru', 'PE', 'pe.svg', 'South America', '51', 'Postal code', 'Region', NULL, NULL),
(166, 'Philippines', 'PH', 'ph.svg', 'Asia', '63', 'Postal code', 'Region', NULL, NULL),
(167, 'Pitcairn Islands', 'PN', 'pn.svg', 'Oceania', '64', NULL, 'Region', NULL, NULL),
(168, 'Poland', 'PL', 'pl.svg', 'Europe', '48', 'Postal code', 'Region', NULL, NULL),
(169, 'Portugal', 'PT', 'pt.svg', 'Europe', '351', 'Postal code', 'Region', NULL, NULL),
(170, 'Qatar', 'QA', 'qa.svg', 'Asia', '974', NULL, 'Region', NULL, NULL),
(171, 'Réunion', 'RE', 're.svg', 'Africa', '262', 'Postal code', 'Region', NULL, NULL),
(172, 'Romania', 'RO', 'ro.svg', 'Europe', '40', 'Postal code', 'County', NULL, NULL),
(173, 'Russia', 'RU', 'ru.svg', 'Europe', '7', 'Postal code', 'Region', NULL, NULL),
(174, 'Rwanda', 'RW', 'rw.svg', 'Africa', '250', NULL, 'Region', NULL, NULL),
(175, 'Samoa', 'WS', 'ws.svg', 'Oceania', '685', 'Postal code', 'Region', NULL, NULL),
(176, 'San Marino', 'SM', 'sm.svg', 'Europe', '378', 'Postal code', 'Region', NULL, NULL),
(177, 'São Tomé & Príncipe', 'ST', 'st.svg', 'Africa', '239', NULL, 'Region', NULL, NULL),
(178, 'Saudi Arabia', 'SA', 'sa.svg', 'Asia', '966', 'Postal code', 'Region', NULL, NULL),
(179, 'Senegal', 'SN', 'sn.svg', 'Africa', '221', 'Postal code', 'Region', NULL, NULL),
(180, 'Serbia', 'RS', 'rs.svg', 'Europe', '381', 'Postal code', 'Region', NULL, NULL),
(181, 'Seychelles', 'SC', 'sc.svg', 'Africa', '248', NULL, 'Region', NULL, NULL),
(182, 'Sierra Leone', 'SL', 'sl.svg', 'Africa', '232', NULL, 'Region', NULL, NULL),
(183, 'Singapore', 'SG', 'sg.svg', 'Asia', '65', 'Postal code', 'Region', NULL, NULL),
(184, 'Sint Maarten', 'SX', 'sx.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(185, 'Slovakia', 'SK', 'sk.svg', 'Europe', '421', 'Postal code', 'Region', NULL, NULL),
(186, 'Slovenia', 'SI', 'si.svg', 'Europe', '386', 'Postal code', 'Region', NULL, NULL),
(187, 'Solomon Islands', 'SB', 'sb.svg', 'Oceania', '677', NULL, 'Region', NULL, NULL),
(188, 'Somalia', 'SO', 'so.svg', 'Africa', '252', 'Postal code', 'Region', NULL, NULL),
(189, 'South Africa', 'ZA', 'za.svg', 'Africa', '27', 'Postal code', 'Province', NULL, NULL),
(190, 'South Georgia & South Sandwich Islands', 'GS', 'gs.svg', 'South America', '500', NULL, 'Region', NULL, NULL),
(191, 'South Korea', 'KR', 'kr.svg', 'Asia', '82', 'Postal code', 'Province', NULL, NULL),
(192, 'South Sudan', 'SS', 'ss.svg', 'Africa', '211', NULL, 'Region', NULL, NULL),
(193, 'Spain', 'ES', 'es.svg', 'Europe', '34', 'Postal code', 'Province', NULL, NULL),
(194, 'Sri Lanka', 'LK', 'lk.svg', 'Asia', '94', 'Postal code', 'Region', NULL, NULL),
(195, 'St. Barthélemy', 'BL', 'bl.svg', 'North America', '590', 'Postal code', 'Region', NULL, NULL),
(196, 'St. Helena', 'SH', 'sh.svg', 'Africa', '290', NULL, 'Region', NULL, NULL),
(197, 'St. Kitts & Nevis', 'KN', 'kn.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(198, 'St. Lucia', 'LC', 'lc.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(199, 'St. Martin', 'MF', 'mf.svg', 'North America', '590', 'Postal code', 'Region', NULL, NULL),
(200, 'St. Pierre & Miquelon', 'PM', 'pm.svg', 'North America', '508', 'Postal code', 'Region', NULL, NULL),
(201, 'St. Vincent & Grenadines', 'VC', 'vc.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(202, 'Sudan', 'SD', 'sd.svg', 'Africa', '249', 'Postal code', 'Region', NULL, NULL),
(203, 'Suriname', 'SR', 'sr.svg', 'South America', '597', NULL, 'Region', NULL, NULL),
(204, 'Svalbard & Jan Mayen', 'SJ', 'sj.svg', 'Europe', '47', 'Postal code', 'Region', NULL, NULL),
(205, 'Sweden', 'SE', 'se.svg', 'Europe', '46', 'Postal code', 'Region', NULL, NULL),
(206, 'Switzerland', 'CH', 'ch.svg', 'Europe', '41', 'Postal code', 'Region', NULL, NULL),
(207, 'Taiwan', 'TW', 'tw.svg', 'Asia', '886', 'Postal code', 'Region', NULL, NULL),
(208, 'Tajikistan', 'TJ', 'tj.svg', 'Asia', '992', 'Postal code', 'Region', NULL, NULL),
(209, 'Tanzania', 'TZ', 'tz.svg', 'Africa', '255', 'Postal code', 'Region', NULL, NULL),
(210, 'Thailand', 'TH', 'th.svg', 'Asia', '66', 'Postal code', 'Province', NULL, NULL),
(211, 'Timor-Leste', 'TL', 'tl.svg', 'Asia', '670', NULL, 'Region', NULL, NULL),
(212, 'Togo', 'TG', 'tg.svg', 'Africa', '228', NULL, 'Region', NULL, NULL),
(213, 'Tokelau', 'TK', 'tk.svg', 'Oceania', '690', NULL, 'Region', NULL, NULL),
(214, 'Tonga', 'TO', 'to.svg', 'Oceania', '676', NULL, 'Region', NULL, NULL),
(215, 'Trinidad & Tobago', 'TT', 'tt.svg', 'North America', '1', 'Postal code', 'Region', NULL, NULL),
(216, 'Tristan da Cunha', 'TA', 'untitle.svg', 'Africa', '2908', NULL, 'Region', NULL, NULL),
(217, 'Tunisia', 'TN', 'tn.svg', 'Africa', '216', 'Postal code', 'Region', NULL, NULL),
(218, 'Türkiye', 'TR', 'tr.svg', 'Asia', '90', 'Postal code', 'Region', NULL, NULL),
(219, 'Turkmenistan', 'TM', 'tm.svg', 'Asia', '993', 'Postal code', 'Region', NULL, NULL),
(220, 'Turks & Caicos Islands', 'TC', 'tc.svg', 'North America', '1', NULL, 'Region', NULL, NULL),
(221, 'Tuvalu', 'TV', 'tv.svg', 'Oceania', '688', NULL, 'Region', NULL, NULL),
(222, 'U.S. Outlying Islands', 'UM', 'um.svg', 'Oceania', '1', 'Postal code', 'Region', NULL, NULL),
(223, 'Uganda', 'UG', 'ug.svg', 'Africa', '256', NULL, 'Region', NULL, NULL),
(224, 'Ukraine', 'UA', 'ua.svg', 'Europe', '380', 'Postal code', 'Region', NULL, NULL),
(225, 'United Arab Emirates', 'AE', 'ae.svg', 'Asia', '971', NULL, 'Emirate', NULL, NULL),
(226, 'United Kingdom', 'GB', 'gb.svg', 'Europe', '44', 'Postcode', 'Region', NULL, NULL),
(227, 'United States', 'US', 'us.svg', 'North America', '1', 'ZIP code', 'State', NULL, NULL),
(228, 'Uruguay', 'UY', 'uy.svg', 'South America', '598', 'Postal code', 'Department', NULL, NULL),
(229, 'Uzbekistan', 'UZ', 'uz.svg', 'Asia', '998', 'Postal code', 'Region', NULL, NULL),
(230, 'Vanuatu', 'VU', 'vu.svg', 'Oceania', '678', NULL, 'Region', NULL, NULL),
(231, 'Vatican City', 'VA', 'va.svg', 'Europe', '39', NULL, 'Region', NULL, NULL),
(232, 'Venezuela', 'VE', 've.svg', 'South America', '58', 'Postal code', 'Region', NULL, NULL),
(233, 'Vietnam', 'VN', 'vn.svg', 'Asia', '84', 'Postal code', 'Region', NULL, NULL),
(234, 'Wallis & Futuna', 'WF', 'wf.svg', 'Oceania', '681', 'Postal code', 'Region', NULL, NULL),
(235, 'Western Sahara', 'EH', 'eh.svg', 'Africa', '212', 'Postal code', 'Region', NULL, NULL),
(236, 'Yemen', 'YE', 'ye.svg', 'Asia', '967', NULL, 'Region', NULL, NULL),
(237, 'Zambia', 'ZM', 'zm.svg', 'Africa', '260', 'Postal code', 'Region', NULL, NULL),
(238, 'Zimbabwe', 'ZW', 'zw.svg', 'Africa', '263', NULL, 'Region', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint UNSIGNED NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_type` enum('fixed','percentage') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_value` decimal(10,2) NOT NULL,
  `usage_limit` int DEFAULT NULL,
  `used_count` int NOT NULL DEFAULT '0',
  `expires_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `code`, `discount_type`, `discount_value`, `usage_limit`, `used_count`, `expires_at`, `created_at`, `updated_at`) VALUES
(2, 'ROLE20', 'fixed', 20.00, 20, 0, '2026-05-23 00:00:00', '2025-04-04 16:51:54', '2025-04-04 16:51:54');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint UNSIGNED NOT NULL,
  `fname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_id` bigint UNSIGNED DEFAULT NULL,
  `telcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `fname`, `lname`, `email`, `password`, `email_verified_at`, `remember_token`, `country_id`, `telcode`, `phone`, `status`, `created_at`, `updated_at`, `address_id`) VALUES
(1, 'Madisen', 'Cronin', 'admin1@eglobal.com', NULL, NULL, NULL, 1, NULL, '1234567890', 'active', '2025-05-16 13:34:05', '2025-05-16 13:34:05', NULL),
(2, 'First', 'Customer', 'admin@gmail.com', '$2y$12$2MwIwcQXM62d1zi3cXVs2uJL22uvBWhoOdaYBdRe5zadyQvsKq/Gu', NULL, NULL, 5, '1', '1234567890', 'active', '2025-05-28 07:29:19', '2025-05-28 07:29:19', NULL),
(3, 'Tempor et exercitati', 'Consequuntur natus d', 'dysoq@mailinator.com', '$2y$12$IUTxICJI7xy8ofpMIbfcP./05Uy1jtYnSciaugt6jjBjp.efgECmu', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 05:38:21', '2025-05-29 05:38:21', NULL),
(4, 'Labore maiores accus', 'Quos rem nisi aliqui', 'cemeci@mailinator.com', '$2y$12$R/wOgNHojnb2RfaKus4oIuiyrpkGrNkbaFBFOs5yEbTy9QB9bpmu2', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 05:39:09', '2025-05-29 05:39:09', NULL),
(5, 'Quis dolore qui esse', 'Deserunt illum sit', 'zata@mailinator.com', '$2y$12$MEVavDcuOuM1t8T7X1LrGOnC5EVNbcXkta77O8x.9FvVZMOy6peXe', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 05:44:28', '2025-05-29 05:44:28', NULL),
(6, 'Nemo distinctio Ali', 'Labore aut tempora q', 'sekediruk@mailinator.com', '$2y$12$OOLw9MWOIMWseFj18gDeOO/YuCAhlYK1/ueAwSMZMHk5ZGTl8/RMa', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 06:14:52', '2025-05-29 06:14:52', NULL),
(7, 'Explicabo Aut numqu', 'Expedita facere sequ', 'wypove@mailinator.com', '$2y$12$Ro8BXs19t19lqKmjvuhz4e5xlLVFn2KnelbukXl9sdAyTI00CIpZa', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 06:29:51', '2025-05-29 06:29:51', NULL),
(8, 'Asperiores dolor rep', 'Doloremque nemo moll', 'kedu@mailinator.com', '$2y$12$KsD/fB1xS/4WQAeir.biVulxypAeBtyiDfGTx6EaO6i44N6h7k5Fy', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 06:32:50', '2025-05-29 06:32:50', NULL),
(9, 'Laborum Nam veniam', 'Dolor commodi a magn', 'qaciquloku@mailinator.com', '$2y$12$TKZjqonjG98MNoIbOG8AT.RI9A.2Q5kVlsdMFqgZXE.VQBMbWy17i', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 06:39:35', '2025-05-29 06:39:35', NULL),
(10, 'Ipsam in adipisicing', 'Cum qui velit error', 'fetyl@mailinator.com', '$2y$12$4fO.S.NwTszXnfsfkehMh.bvCXWVnxffoJiVBRwBubpZt5fgyzdS2', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 06:46:35', '2025-05-29 06:46:35', NULL),
(11, 'Voluptas unde incidi', 'Aperiam non odit ten', 'hagaw26368@daxiake.com', '$2y$12$ooyGqkVmna4gpYSb57PMH.U3s7QNY87n6AgvLfh9QaRfKvh4DC31W', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:08:53', '2025-05-29 07:08:53', NULL),
(12, 'Enim nemo optio nem', 'Irure irure rerum do', 'kidamef147@daxiake.com', '$2y$12$cnc5VjvU1k28m7RCWyhwUu5wItQpwuhGrNu/XrJtyHjcNyhin7foW', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:10:09', '2025-05-29 07:10:09', NULL),
(13, 'Aliquam necessitatib', 'Distinctio Vel iure', 'citive3803@daxiake.com', '$2y$12$/tladLodCUX4V.rChVXshe83.841Rq6pH2ejA2azqi1BiZ1BPYAgq', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:11:42', '2025-05-29 07:11:42', NULL),
(14, 'Et deserunt reiciend', 'Atque rerum explicab', 'janeho1944@daxiake.com', '$2y$12$zD5KMPYTnyMTtZHUhcgyj.fEpaZ.iVkifilvBsADjfZor7vH1TxqG', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:12:24', '2025-05-29 07:12:24', NULL),
(15, 'Eveniet praesentium', 'Quia at odio aut dol', 'xomawos273@daxiake.com', '$2y$12$HwTmcg9.XFUhmGa/rowbyOMMvOPzMdj812XjKF1OvlhshmnwSFHpW', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:14:23', '2025-05-29 07:14:23', NULL),
(16, 'Qui dolore inventore', 'Officia et vel non n', 'suxefumab@mailinator.com', '$2y$12$R.v/2sxLWSfM17JpNipTgevrnflF8t57ZSjPgLqJyrOJbcWCw3Mpe', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:17:43', '2025-05-29 07:17:43', NULL),
(17, 'Vel temporibus sed e', 'Tenetur in dolorem v', 'zuqyximiru@mailinator.com', '$2y$12$e4Rd.JpWO/eleYTOZiTxb.ziRbnNtbFkfD8MjdZOVDb07Lr2S0leG', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:20:08', '2025-05-29 07:20:08', NULL),
(18, 'At eos laudantium', 'Sunt dolorem facere', 'peleri1847@daxiake.com', '$2y$12$XP1sOiRFn7ZDv4SknIRZ1eaSuaZ38KwlMriUrOMydpWQom8KiBORS', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:22:34', '2025-05-29 07:22:34', NULL),
(19, 'Possimus magnam ali', 'Suscipit vel sit ill', 'megil51144@daxiake.com', '$2y$12$tCuGZAchJtb0.rkN3I4IfOw0YBvLRkRjZeC0MfKNUfzLV.KPmp3ii', NULL, NULL, NULL, NULL, NULL, 'active', '2025-05-29 07:28:41', '2025-05-29 07:28:41', NULL),
(20, 'In deleniti voluptat', 'Laboriosam mollit e', 'rafoje3726@daxiake.com', '$2y$12$aZ1rXcP6dw1cBaNsKYi4/OozK.TDq7uPMvKtWM/HgVSbQERfKzRti', '2025-05-29 23:53:45', NULL, NULL, NULL, NULL, 'active', '2025-05-29 23:51:53', '2025-05-29 23:53:45', NULL),
(21, 'Adipisicing voluptat', 'Pariatur Eum quam v', 'senap55804@daxiake.com', '$2y$12$bULE3lTfdNIPRUzb/fvqReByZZ49bLZfJrsenHRzoViD5.Sd3UIc.', '2025-05-29 23:56:16', NULL, NULL, NULL, NULL, 'active', '2025-05-29 23:55:29', '2025-05-29 23:56:16', NULL),
(22, 'Voluptas dolor ut ex', 'Quae veniam consequ', 'homosa9192@betzenn.com', '$2y$12$f.7FXmRfFcISQie7WKDfheD.FYKh0ymd.FaFE8RTe3zZWY5n/vddm', '2025-05-29 23:59:32', NULL, NULL, NULL, NULL, 'active', '2025-05-29 23:57:57', '2025-05-29 23:59:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer_addresses`
--

CREATE TABLE `customer_addresses` (
  `id` bigint UNSIGNED NOT NULL,
  `customer_id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `fname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zone_id` bigint UNSIGNED DEFAULT NULL,
  `postalcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_addresses`
--

INSERT INTO `customer_addresses` (`id`, `customer_id`, `country_id`, `fname`, `lname`, `company`, `address_1`, `address_2`, `city`, `zone_id`, `postalcode`, `telcode`, `phone`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Madisen', 'Cronin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1234567890', '2025-05-16 13:34:06', '2025-05-16 13:34:06');

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` bigint UNSIGNED NOT NULL,
  `type` enum('amount-off-product','amount-off-order','buy-x-get-y','free-shipping') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'amount-off-product',
  `method` enum('code','automatic') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'code',
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_type` enum('fixed','percentage','free') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'fixed',
  `amount` decimal(10,2) DEFAULT NULL,
  `applies_to` enum('collections','products') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'products',
  `requirement` enum('no_minimum_requirements','minimum_purchase_amount','minimum_quantity_items') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'no_minimum_requirements',
  `min_amount` decimal(10,2) DEFAULT NULL,
  `min_qty` int DEFAULT NULL,
  `buys` enum('minimum_quantity_items','minimum_purchase_amount') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'minimum_quantity_items',
  `gets_qty` int DEFAULT NULL,
  `gets_applies_to` enum('collections','products') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'products',
  `discounted_value_type` enum('fixed','percentage','free') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'fixed',
  `eligible_countries` enum('all','specific') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `eligible_customers` enum('all','specific') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `exclude_shipping_over_an_amount` tinyint(1) NOT NULL DEFAULT '0',
  `shipping_amount` decimal(10,2) DEFAULT NULL,
  `total_usage` int DEFAULT NULL,
  `once_per_customer` tinyint(1) DEFAULT '0',
  `active` tinyint(1) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`id`, `type`, `method`, `code`, `title`, `discount_type`, `amount`, `applies_to`, `requirement`, `min_amount`, `min_qty`, `buys`, `gets_qty`, `gets_applies_to`, `discounted_value_type`, `eligible_countries`, `eligible_customers`, `exclude_shipping_over_an_amount`, `shipping_amount`, `total_usage`, `once_per_customer`, `active`, `start_date`, `start_time`, `end_date`, `end_time`, `created_at`, `updated_at`) VALUES
(2, 'amount-off-product', 'automatic', NULL, 'Summer Sale', 'percentage', 10.00, 'collections', 'no_minimum_requirements', NULL, NULL, 'minimum_quantity_items', NULL, 'collections', 'percentage', 'all', 'all', 0, NULL, 100, 1, NULL, '2025-07-01', '00:00:00', '2025-07-31', '12:59:00', '2025-06-02 16:50:48', '2025-06-02 16:50:48'),
(3, 'amount-off-product', 'code', 'IPL25RCBVSPBKS', NULL, 'fixed', 100.00, 'products', 'minimum_purchase_amount', 1000.00, NULL, 'minimum_quantity_items', NULL, 'collections', 'percentage', 'all', 'all', 0, NULL, 50, 1, NULL, '2025-07-01', '00:00:00', '2025-07-31', '23:47:00', '2025-06-02 16:56:00', '2025-06-03 16:04:53'),
(4, 'amount-off-product', 'code', 'CM422HEN2Q', NULL, 'fixed', 100.00, 'products', 'minimum_purchase_amount', 1000.00, NULL, 'minimum_quantity_items', NULL, 'collections', 'percentage', 'all', 'all', 0, NULL, 50, 1, NULL, '2025-07-01', '00:00:00', '2025-07-31', '23:47:00', '2025-06-03 16:00:59', '2025-06-03 16:00:59');

-- --------------------------------------------------------

--
-- Table structure for table `discount_collections`
--

CREATE TABLE `discount_collections` (
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `collection_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discount_collections`
--

INSERT INTO `discount_collections` (`discount_id`, `collection_id`) VALUES
(2, 39),
(2, 45),
(2, 44);

-- --------------------------------------------------------

--
-- Table structure for table `discount_countries`
--

CREATE TABLE `discount_countries` (
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `country_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discount_customers`
--

CREATE TABLE `discount_customers` (
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `customer_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discount_customers`
--

INSERT INTO `discount_customers` (`discount_id`, `customer_id`) VALUES
(2, 2),
(2, 22);

-- --------------------------------------------------------

--
-- Table structure for table `discount_get_collections`
--

CREATE TABLE `discount_get_collections` (
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `collection_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discount_get_products`
--

CREATE TABLE `discount_get_products` (
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `inventories` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discount_products`
--

CREATE TABLE `discount_products` (
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `inventories` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discount_products`
--

INSERT INTO `discount_products` (`discount_id`, `product_id`, `inventories`) VALUES
(3, 13, '[35, 36, 37]'),
(3, 14, '[38, 40, 42, 43]'),
(4, 13, '[35, 36, 37]'),
(4, 14, '[38, 40, 42, 43]');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `flags`
--

CREATE TABLE `flags` (
  `id` bigint UNSIGNED NOT NULL,
  `comment_id` bigint UNSIGNED DEFAULT NULL,
  `customer_id` bigint UNSIGNED DEFAULT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hics`
--

CREATE TABLE `hics` (
  `id` int NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `subheading` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `buttontext` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hics`
--

INSERT INTO `hics` (`id`, `heading`, `subheading`, `image`, `content`, `buttontext`, `url`) VALUES
(1, 'Healthy Diet', 'Healthy Diet', NULL, 'A heart-healthy diet is foundational to maintaining cardiovascular well-being. Foods rich in fruits, vegetables, whole grains, and lean proteins, such as fish and poultry, can reduce the risk of heart disease. Limiting saturated fats, trans fats, and cholesterol helps manage cholesterol levels, while reducing salt intake lowers blood pressure. Healthy fats, such as those found in olive oil, avocados, and nuts, support good cholesterol levels (HDL) and reduce bad cholesterol (LDL). Additionally, reducing sugar intake can help prevent weight gain and lower the risk of diabetes, a major risk factor for heart disease. Consistently making healthier food choices can significantly lower the risk of heart-related issues and contribute to overall health.', NULL, NULL),
(2, 'Regular Exercise', 'Regular Exercise', NULL, 'Physical activity is crucial for a strong heart. Engaging in regular exercise, such as walking, jogging, cycling, or swimming, strengthens the heart muscle, improves circulation, and helps manage weight. The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity each week. Exercise helps reduce high blood pressure, lower cholesterol, and improve overall cardiovascular function. It also aids in managing stress and improving mental well-being, both of which are linked to heart health. Integrating consistent exercise into daily routines can greatly improve heart health and lower the risk of heart disease.', NULL, NULL),
(3, 'Blood Pressure Management', 'Blood Pressure Management', NULL, 'High blood pressure (hypertension) is a significant risk factor for heart disease and stroke. It puts extra strain on the heart and arteries, leading to damage over time. Managing blood pressure through diet, exercise, and, when necessary, medication is essential for heart health. Regular monitoring can help detect hypertension early, allowing for prompt intervention. Reducing salt intake, maintaining a healthy weight, and avoiding excessive alcohol consumption can also contribute to better blood pressure control. Proper management of hypertension can prevent long-term damage to the heart and blood vessels, reducing the risk of heart attacks and strokes.', NULL, NULL),
(4, 'Cholesterol Control', 'Cholesterol Control', NULL, 'Cholesterol levels play a critical role in heart health. High levels of low-density lipoprotein (LDL) cholesterol, often referred to as \"bad\" cholesterol, can lead to the buildup of plaques in arteries, increasing the risk of heart attacks and strokes. Conversely, high-density lipoprotein (HDL), or \"good\" cholesterol, helps remove LDL from the bloodstream. Maintaining healthy cholesterol levels through a balanced diet, regular exercise, and medications when needed is essential for preventing heart disease. Regular cholesterol screenings are important to monitor levels and make necessary lifestyle or medical adjustments to maintain optimal cardiovascular health.', NULL, NULL),
(5, ' Smoking Cessation', ' Smoking Cessation', NULL, 'Smoking is one of the most significant risk factors for heart disease. It damages the lining of the arteries, leading to the buildup of plaque, which can cause heart attacks or strokes. Smoking also reduces the amount of oxygen in the blood and raises blood pressure, making the heart work harder. Quitting smoking, regardless of how long someone has smoked, significantly reduces the risk of heart disease and improves overall cardiovascular health. In addition to the direct benefits for heart health, quitting smoking also enhances lung function, reduces cancer risk, and improves overall life expectancy.', NULL, NULL),
(6, ' Stress Management', ' Stress Management', NULL, 'Chronic stress can have a profound impact on heart health. Stress triggers the release of hormones like adrenaline and cortisol, which increase heart rate and blood pressure. Over time, this can contribute to the development of heart disease. Managing stress through relaxation techniques such as deep breathing, meditation, yoga, and regular exercise can mitigate its impact on the heart. Additionally, maintaining a healthy work-life balance, fostering positive relationships, and seeking professional help when needed can reduce chronic stress and improve overall heart health.', NULL, NULL),
(7, 'Maintaining a Healthy Weight', 'Maintaining a Healthy Weight', NULL, 'Excess body weight, especially around the abdomen, is a major risk factor for heart disease. Being overweight or obese increases the likelihood of high blood pressure, high cholesterol, and diabetes, all of which contribute to heart disease. Maintaining a healthy weight through a balanced diet and regular exercise reduces strain on the heart, lowers blood pressure, and improves cholesterol levels. Weight loss, even in small amounts, can have a positive impact on heart health. Achieving and maintaining a healthy weight is a critical component of preventing and managing cardiovascular disease.', NULL, NULL),
(8, ' Diabetes Management', ' Diabetes Management', NULL, 'Diabetes is a significant risk factor for heart disease. High blood sugar levels can damage blood vessels and nerves that control the heart. Managing diabetes through diet, exercise, and medication is essential to protect heart health. Regular monitoring of blood sugar levels, along with controlling blood pressure and cholesterol, helps reduce the risk of heart disease in individuals with diabetes. Maintaining a healthy lifestyle and working closely with healthcare providers to manage diabetes effectively can prevent heart-related complications and improve overall cardiovascular health.', NULL, NULL),
(9, 'Adequate Sleep', 'Adequate Sleep', NULL, 'Sleep is a crucial, yet often overlooked, factor in heart health. Chronic sleep deprivation can lead to conditions such as high blood pressure, obesity, and diabetes, all of which are risk factors for heart disease. Adults should aim for 7-9 hours of quality sleep each night to support heart health. Poor sleep patterns, including sleep apnea, can increase the risk of heart attack and stroke. Establishing a regular sleep routine, creating a restful environment, and addressing any sleep disorders are important steps in maintaining heart health and overall well-being.', NULL, NULL),
(10, 'Regular Health Screenings', 'Regular Health Screenings', NULL, 'Regular health check-ups are vital for maintaining heart health. Routine screenings for blood pressure, cholesterol levels, and blood sugar can detect risk factors for heart disease early, allowing for timely intervention. Regular visits to healthcare providers help monitor heart health and ensure that any developing issues, such as hypertension or diabetes, are managed appropriately. Additionally, screenings for other conditions that can affect the heart, such as kidney disease, are important. Staying proactive about health check-ups and screenings is a key step in preventing heart disease and maintaining long-term cardiovascular health.', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inventories`
--

CREATE TABLE `inventories` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `variants` json DEFAULT NULL,
  `media_id` bigint UNSIGNED DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `compare_at_price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cost_per_item` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `margin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sku` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `track_quantity` tinyint(1) DEFAULT '1',
  `continue_when_oos` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventories`
--

INSERT INTO `inventories` (`id`, `product_id`, `variants`, `media_id`, `price`, `compare_at_price`, `cost_per_item`, `profit`, `margin`, `qty`, `sku`, `barcode`, `track_quantity`, `continue_when_oos`, `created_at`, `updated_at`) VALUES
(35, 13, '[{\"name\": \"Indigo\", \"type\": \"Color\", \"value\": \"#4B0082\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '50000.00', '70000.00', NULL, NULL, NULL, '20', NULL, NULL, 1, 0, '2025-05-19 10:42:23', '2025-05-24 02:59:30'),
(36, 13, '[{\"name\": \"Indigo\", \"type\": \"Color\", \"value\": \"#4B0082\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '50000.00', '70000.00', NULL, NULL, NULL, '60', NULL, NULL, 1, 0, '2025-05-19 10:42:23', '2025-05-24 02:59:30'),
(37, 13, '[{\"name\": \"Indigo\", \"type\": \"Color\", \"value\": \"#4B0082\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '50000.00', '70000.00', NULL, NULL, NULL, '50', NULL, NULL, 1, 0, '2025-05-19 10:46:46', '2025-05-24 02:59:31'),
(38, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '37500.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:53:21', '2025-05-24 01:48:44'),
(39, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '38500.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:53:21', '2025-05-26 01:15:18'),
(40, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '39500.00', NULL, NULL, NULL, NULL, '500', NULL, NULL, 1, 0, '2025-05-19 10:53:22', '2025-05-26 01:15:18'),
(41, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '40500.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 10:53:22', '2025-05-26 01:15:18'),
(42, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '41500.00', NULL, NULL, NULL, NULL, '45', NULL, NULL, 1, 0, '2025-05-19 10:53:23', '2025-05-26 01:15:18'),
(43, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '42500.00', NULL, NULL, NULL, NULL, '56', NULL, NULL, 1, 0, '2025-05-19 10:53:23', '2025-05-26 01:15:19'),
(50, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '50', NULL, NULL, 1, 0, '2025-05-19 10:57:01', '2025-05-24 02:51:08'),
(51, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '50', NULL, NULL, 1, 0, '2025-05-19 10:57:01', '2025-05-24 02:51:08'),
(52, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '50', NULL, NULL, 1, 0, '2025-05-19 10:57:02', '2025-05-24 02:51:08'),
(53, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:57:02', '2025-05-24 02:51:08'),
(54, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:57:03', '2025-05-24 02:51:09'),
(55, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:57:03', '2025-05-24 02:51:09'),
(56, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:57:04', '2025-05-24 02:51:09'),
(57, 16, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '20000.00', '25000.00', NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-19 10:57:04', '2025-05-24 02:51:09'),
(58, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:51', '2025-05-24 01:49:25'),
(59, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:51', '2025-05-24 01:49:25'),
(60, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:52', '2025-05-24 01:49:25'),
(61, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:52', '2025-05-24 01:49:25'),
(62, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:53', '2025-05-24 01:49:25'),
(63, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:53', '2025-05-24 01:49:25'),
(64, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:54', '2025-05-24 01:49:25'),
(65, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:54', '2025-05-24 01:49:25'),
(66, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:54', '2025-05-24 01:49:25'),
(67, 17, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '35500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:01:55', '2025-05-24 01:49:25'),
(68, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:47', '2025-05-24 01:49:35'),
(69, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:47', '2025-05-24 01:49:35'),
(70, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:48', '2025-05-24 01:49:35'),
(71, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:48', '2025-05-24 01:49:35'),
(72, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:49', '2025-05-24 01:49:35'),
(73, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:49', '2025-05-24 01:49:35'),
(74, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:50', '2025-05-24 01:49:35'),
(75, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:50', '2025-05-24 01:49:35'),
(76, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:51', '2025-05-24 01:49:35'),
(77, 18, '[{\"name\": \"Crimson\", \"type\": \"Color\", \"value\": \"#DC143C\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '0.00', NULL, NULL, NULL, NULL, '100', NULL, NULL, 1, 0, '2025-05-19 11:07:51', '2025-05-24 01:49:35'),
(78, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:28', '2025-05-24 01:49:44'),
(79, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:29', '2025-05-24 01:49:44'),
(80, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:29', '2025-05-24 01:49:44'),
(81, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:30', '2025-05-24 01:49:44'),
(82, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:30', '2025-05-24 01:49:44'),
(83, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:31', '2025-05-24 01:49:44'),
(84, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:31', '2025-05-24 01:49:44'),
(85, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:32', '2025-05-24 01:49:44'),
(86, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:32', '2025-05-24 01:49:44'),
(87, 19, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '155000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:13:32', '2025-05-24 01:49:44'),
(88, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:54', '2025-05-24 02:52:18'),
(89, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:54', '2025-05-24 02:52:18'),
(90, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:55', '2025-05-24 02:52:18'),
(91, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:55', '2025-05-24 02:52:18'),
(92, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:56', '2025-05-24 02:52:18'),
(93, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:56', '2025-05-24 02:52:18'),
(94, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:57', '2025-05-24 02:52:18'),
(95, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:57', '2025-05-24 02:52:18'),
(96, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:57', '2025-05-24 02:52:18'),
(97, 20, '[{\"name\": \"Green\", \"type\": \"Color\", \"value\": \"#008000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:33:58', '2025-05-24 02:52:18'),
(98, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:55', '2025-05-24 02:52:48'),
(99, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:56', '2025-05-24 02:52:48'),
(100, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:56', '2025-05-24 02:52:48'),
(101, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:57', '2025-05-24 02:52:48'),
(102, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:57', '2025-05-24 02:52:48'),
(103, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:58', '2025-05-24 02:52:48'),
(104, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:58', '2025-05-24 02:52:48'),
(105, 21, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '11475.00', '13500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:36:59', '2025-05-24 02:52:48'),
(106, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:56', '2025-05-24 02:52:57'),
(107, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:57', '2025-05-24 02:52:57'),
(108, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:57', '2025-05-24 02:52:57'),
(109, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:58', '2025-05-24 02:52:57'),
(110, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:58', '2025-05-24 02:52:57'),
(111, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:59', '2025-05-24 02:52:57'),
(112, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:59', '2025-05-24 02:52:57'),
(113, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:39:59', '2025-05-24 02:52:57'),
(114, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:40:00', '2025-05-24 02:52:57'),
(115, 22, '[{\"name\": \"Sky Blue\", \"type\": \"Color\", \"value\": \"#87CEEB\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '10625.00', '12500.00', NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-19 11:40:00', '2025-05-24 02:52:57'),
(116, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:34', '2025-05-24 02:53:09'),
(117, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:34', '2025-05-24 02:53:09'),
(118, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:35', '2025-05-24 02:53:09'),
(119, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:35', '2025-05-24 02:53:09'),
(120, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:36', '2025-05-24 02:53:09'),
(121, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:36', '2025-05-24 02:53:09'),
(122, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:37', '2025-05-24 02:53:09'),
(123, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:37', '2025-05-24 02:53:09'),
(124, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:38', '2025-05-24 02:53:09'),
(125, 23, '[{\"name\": \"Magenta\", \"type\": \"Color\", \"value\": \"#FF00FF\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '7200.00', '8000.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:42:38', '2025-05-24 02:53:09'),
(126, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:45', '2025-05-24 02:53:18'),
(127, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:45', '2025-05-24 02:53:18'),
(128, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:46', '2025-05-24 02:53:18'),
(129, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:46', '2025-05-24 02:53:18'),
(130, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:47', '2025-05-24 02:53:18'),
(131, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:47', '2025-05-24 02:53:18'),
(132, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:48', '2025-05-24 02:53:18'),
(133, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:48', '2025-05-24 02:53:18'),
(134, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:49', '2025-05-24 02:53:18'),
(135, 24, '[{\"name\": \"Blue\", \"type\": \"Color\", \"value\": \"#0000FF\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:45:49', '2025-05-24 02:53:18'),
(136, 25, '[{\"name\": \"Pink\", \"type\": \"Color\", \"value\": \"#FFC0CB\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 11:48:56', '2025-05-24 02:53:47'),
(137, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:35', '2025-05-24 02:53:58'),
(138, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:35', '2025-05-24 02:53:58'),
(139, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:35', '2025-05-24 02:53:58'),
(140, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:36', '2025-05-24 02:53:58'),
(141, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:36', '2025-05-24 02:53:59'),
(142, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:37', '2025-05-24 02:53:59'),
(143, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:37', '2025-05-24 02:53:59'),
(144, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:38', '2025-05-24 02:53:59'),
(145, 26, '[{\"name\": \"White\", \"type\": \"Color\", \"value\": \"#FFFFFF\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '12325.00', '14500.00', NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:13:38', '2025-05-24 02:53:59'),
(146, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Extra Small\", \"type\": \"Size\", \"value\": \"XS\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:40', '2025-05-24 01:51:05'),
(147, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Small\", \"type\": \"Size\", \"value\": \"S\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:41', '2025-05-24 01:51:05'),
(148, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Medium\", \"type\": \"Size\", \"value\": \"M\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:41', '2025-05-24 01:51:05'),
(149, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:42', '2025-05-24 01:51:05'),
(150, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:42', '2025-05-24 01:51:05'),
(151, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:43', '2025-05-24 01:51:05'),
(152, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"3XL\", \"type\": \"Size\", \"value\": \"3XL\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:43', '2025-05-24 01:51:05'),
(153, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:44', '2025-05-24 01:51:05'),
(154, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:44', '2025-05-24 01:51:05'),
(155, 27, '[{\"name\": \"Red\", \"type\": \"Color\", \"value\": \"#FF0000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}]', NULL, '16000.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-19 12:16:45', '2025-05-24 01:51:05'),
(156, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '38000.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-26 01:15:18', '2025-05-26 01:15:18'),
(157, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '39000.00', NULL, NULL, NULL, NULL, '42', NULL, NULL, 1, 0, '2025-05-26 01:15:18', '2025-05-26 01:15:18'),
(158, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '40000.00', NULL, NULL, NULL, NULL, '75', NULL, NULL, 1, 0, '2025-05-26 01:15:18', '2025-05-26 01:15:18'),
(159, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '41000.00', NULL, NULL, NULL, NULL, '82', NULL, NULL, 1, 0, '2025-05-26 01:15:18', '2025-05-26 01:15:18'),
(160, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '42000.00', NULL, NULL, NULL, NULL, '67', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(161, 14, '[{\"name\": \"Purple\", \"type\": \"Color\", \"value\": \"#800080\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '43000.00', NULL, NULL, NULL, NULL, '35', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(162, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '37500.00', NULL, NULL, NULL, NULL, '75', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(163, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Large\", \"type\": \"Size\", \"value\": \"L\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '38000.00', NULL, NULL, NULL, NULL, '45', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(164, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '38500.00', NULL, NULL, NULL, NULL, '24', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(165, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"2XL\", \"type\": \"Size\", \"value\": \"2XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '39000.00', NULL, NULL, NULL, NULL, '15', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(166, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '39500.00', NULL, NULL, NULL, NULL, '20', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(167, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"4XL\", \"type\": \"Size\", \"value\": \"4XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '40000.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(168, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '40500.00', NULL, NULL, NULL, NULL, '5', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(169, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"5XL\", \"type\": \"Size\", \"value\": \"5XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '41000.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(170, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '41500.00', NULL, NULL, NULL, NULL, '10', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(171, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"6XL\", \"type\": \"Size\", \"value\": \"6XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '42000.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(172, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Female\", \"type\": \"Gender\", \"value\": \"F\"}]', NULL, '42500.00', NULL, NULL, NULL, NULL, '20', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19'),
(173, 14, '[{\"name\": \"Black\", \"type\": \"Color\", \"value\": \"#000000\"}, {\"name\": \"Extra Large\", \"type\": \"Size\", \"value\": \"XL\"}, {\"name\": \"Other\", \"type\": \"Gender\", \"value\": \"O\"}]', NULL, '43000.00', NULL, NULL, NULL, NULL, '0', NULL, NULL, 1, 0, '2025-05-26 01:15:19', '2025-05-26 01:15:19');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_variations`
--

CREATE TABLE `inventory_variations` (
  `id` bigint UNSIGNED NOT NULL,
  `inventory_id` bigint UNSIGNED DEFAULT NULL,
  `variant_id` bigint UNSIGNED DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint UNSIGNED NOT NULL,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extension` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `file`, `title`, `type`, `size`, `extension`, `alt`, `created_at`, `updated_at`) VALUES
(21, 'media/2.webp', 'green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-1', 'image', '50002', 'webp', '2.webp', '2025-02-17 08:09:53', '2025-05-09 05:04:14'),
(22, 'media/03_Custom_54_2.webp', '03_Custom_54', 'image', NULL, NULL, '03_Custom_54 12', '2025-02-17 08:09:53', '2025-04-03 11:20:43'),
(23, 'media/Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India.webp', '04_Custom_18', 'image', '42874', 'webp', 'best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India.webp', '2025-02-17 08:09:53', '2025-04-03 11:20:51'),
(24, 'media/03_Custom_fffb04ec-fe4b-4df7-8410-2d0a700bcfe6_4.webp', '03_Custom_fffb04ec-fe4b-4df7-8410-2d0a700bcfe6', 'image', NULL, NULL, 'Custom_fffb04ec-fe4b-4df7-8410-2d0a700bcfe6', '2025-02-17 08:09:53', '2025-03-07 05:21:05'),
(25, 'media/05_Custom_6ccd9d8a-bcf7-45f3-9d92-1fc11e9709fb.webp', 'Zuri_16 123', 'image', NULL, NULL, 'Zuri_16', '2025-02-17 08:09:53', '2025-03-07 05:18:40'),
(26, 'media/02_Custom_27_0e51cb51-18d1-4e8d-8b03-ac59805e784e_2.webp', '123 02_Custom_27_0e51cb51-18d1-4e8d-8b03-ac59805e784e', 'image', NULL, NULL, '12344545 02_Custom_27_0e51cb51-18d1-4e8d-8b03-ac59805e784e', '2025-02-17 08:09:53', '2025-02-19 08:26:12'),
(27, 'media/3.webp', '990x1272-5_dfaa5f5e-0c74-47b9-a4cb-7e07f8f33450', 'image', NULL, NULL, '3.webp', '2025-02-17 08:09:53', '2025-02-20 10:21:03'),
(28, 'media/990x1272-1_d6784444-54ea-42ca-bb61-e75238ac727d.webp', '02_Custom_9e781dce-0d47-44b1-8810-6e5e0e973f19', 'image', NULL, NULL, '02_Custom_9e781dce-0d47-44b1-8810-6e5e0e973f19', '2025-02-17 08:09:53', '2025-02-19 13:31:30'),
(29, 'media/5.webp', 'Stylum_Blog_Banner_copy_57e06608-e67f-48ce-aa4f-3a6040c72d45', 'image', '93562', 'webp', '5.webp', '2025-02-17 11:33:21', '2025-05-09 05:04:14'),
(30, 'media/banner_04b19064-7ef1-4fc8-8483-755ba407a735.webp', 'banner_04b19064-7ef1-4fc8-8483-755ba407a735', 'image', NULL, NULL, 'banner_04b19064-7ef1-4fc8-8483-755ba407a735', '2025-02-17 11:35:17', '2025-02-17 11:35:17'),
(31, 'media/PS_ethnic_women_scroll_01._CB656228733_.jpg', 'PS_ethnic_women_scroll_01._CB656228733_', 'image', NULL, NULL, 'PS_ethnic_women_scroll_01._CB656228733_', '2025-02-17 11:38:26', '2025-02-17 11:38:26'),
(32, 'media/Blog_Banner_gilori.webp', 'Blog_Banner_gilori', 'image', NULL, NULL, 'Blog_Banner_gilori', '2025-02-18 06:10:35', '2025-02-18 06:10:35'),
(33, 'media/womens_kurta_banner.webp', 'womens_kurta_banner', 'image', NULL, NULL, 'womens_kurta_banner.webp', '2025-02-18 06:11:36', '2025-02-18 11:40:48'),
(34, 'media/Skirts-Page-Banner-Reistor4.jpg', 'Skirts-Page-Banner-Reistor4', 'image', NULL, NULL, 'Skirts-Page-Banner-Reistor4', '2025-02-18 06:13:11', '2025-02-18 06:13:11'),
(35, 'media/Zuri_2_5f4540d4-8248-4930-a18e-252c4a8ca207.webp', 'Zuri_2_5f4540d4-8248-4930-a18e-252c4a8ca207', 'image', NULL, NULL, 'Zuri_2_5f4540d4-8248-4930-a18e-252c4a8ca207', '2025-02-18 06:39:44', '2025-02-18 06:39:44'),
(36, 'media/990x1272-1_d6784444-54ea-42ca-bb61-e75238ac727d.webp', '990x1272-1_d6784444-54ea-42ca-bb61-e75238ac727d', 'image', NULL, NULL, '990x1272-1_d6784444-54ea-42ca-bb61-e75238ac727d', '2025-02-18 07:41:03', '2025-02-18 07:41:03'),
(37, 'media/990x1272-7_1fd33bbf-1613-4b88-a236-5e22bd6dfc19.webp', '990x1272-7_1fd33bbf-1613-4b88-a236-5e22bd6dfc19', 'image', NULL, NULL, '990x1272-7_1fd33bbf-1613-4b88-a236-5e22bd6dfc19', '2025-02-18 07:43:56', '2025-02-18 07:43:56'),
(38, 'media/990x1272-6_2a614a8f-cb65-489b-b4b5-2545a927a2dd.webp', '990x1272-6_2a614a8f-cb65-489b-b4b5-2545a927a2dd', 'image', NULL, NULL, '990x1272-6_2a614a8f-cb65-489b-b4b5-2545a927a2dd.webp', '2025-02-18 07:44:23', '2025-02-18 11:40:31'),
(40, 'media/04_Custom_18_4.webp', '04_Custom_18', 'image', NULL, NULL, '04_Custom_18', '2025-02-18 11:41:01', '2025-02-18 11:41:01'),
(41, 'media/990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b (1).webp', '990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b (1)', 'image', NULL, NULL, '990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b (1).webp', '2025-02-20 08:24:45', '2025-02-20 08:25:25'),
(42, 'media/990x1272-5_4733b918-8de5-4c43-8eaa-ed0aa9e1c9d8.webp', '990x1272-5_4733b918-8de5-4c43-8eaa-ed0aa9e1c9d8', 'image', NULL, NULL, '990x1272-5_4733b918-8de5-4c43-8eaa-ed0aa9e1c9d8', '2025-02-20 08:25:25', '2025-02-20 08:25:25'),
(43, 'media/1.webp', '990x1272-1_47a77c1b-a15c-45bc-94f6-110b5ea568b1', 'image', NULL, NULL, '1.webp', '2025-02-20 08:25:25', '2025-02-20 10:21:03'),
(44, 'media/990x1272-3_7b121ad7-f31a-414f-a1a5-2ea050657a27.webp', '990x1272-3_7b121ad7-f31a-414f-a1a5-2ea050657a27', 'image', NULL, NULL, '990x1272-3_7b121ad7-f31a-414f-a1a5-2ea050657a27', '2025-02-20 08:25:25', '2025-02-20 08:25:25'),
(45, 'media/7_a870fc4d-abe3-4a37-bef6-8507d7dac7d5.webp', '7_a870fc4d-abe3-4a37-bef6-8507d7dac7d5', 'image', NULL, NULL, '7_a870fc4d-abe3-4a37-bef6-8507d7dac7d5', '2025-02-20 08:25:25', '2025-02-20 08:25:25'),
(46, 'media/990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b.webp', '990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b', 'image', NULL, NULL, '990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b', '2025-02-20 08:25:25', '2025-02-20 08:25:25'),
(47, 'media/02_Custom_9e781dce-0d47-44b1-8810-6e5e0e973f19_2.webp', '02_Custom_9e781dce-0d47-44b1-8810-6e5e0e973f19', 'image', NULL, NULL, '02_Custom_9e781dce-0d47-44b1-8810-6e5e0e973f19', '2025-02-20 09:47:52', '2025-02-20 09:47:52'),
(48, 'media/990x1272-5_242ad83e-d828-4dc8-bd70-dd07dc67fd96.webp', '990x1272-5_242ad83e-d828-4dc8-bd70-dd07dc67fd96', 'image', NULL, NULL, '272-5_242ad83e-d828-4dc8-bd70-dd07dc67fd96', '2025-02-20 09:48:19', '2025-03-07 07:25:32'),
(49, 'media/03_Custom_52_facc912e-2f5f-41a7-a946-d33e7be0fd06.webp', '03_Custom_52_facc912e-2f5f-41a7-a946-d33e7be0fd06', 'image', NULL, NULL, '03_Custom_52_facc912e-2f5f-41a7-a946-d33e7be0fd06', '2025-02-20 09:48:48', '2025-02-20 09:48:48'),
(50, 'media/04_Custom_589d079e-0248-4b2a-ab4e-c9db636a790e.webp', '04_Custom_589d079e-0248-4b2a-ab4e-c9db636a790e', 'image', NULL, NULL, '04_Custom_589d079e-0248-4b2a-ab4e-c9db636a790e', '2025-02-20 09:49:16', '2025-02-20 09:49:16'),
(51, 'media/06_Custom_69 (1).webp', '06_Custom_69 (1)', 'image', NULL, NULL, '06_Custom_69 (1)', '2025-02-20 10:06:05', '2025-02-20 10:06:05'),
(52, 'media/6x970_1a2f6c2a-0d00-4350-9812-198b186c2d9e.webp', '6x970_1a2f6c2a-0d00-4350-9812-198b186c2d9e', 'image', NULL, NULL, '6x970_1a2f6c2a-0d00-4350-9812-198b186c2d9e', '2025-02-20 10:06:59', '2025-02-20 10:06:59'),
(53, 'media/7_70ea917a-ba30-468a-a4a2-ffcee19d1f6c.webp', '7_70ea917a-ba30-468a-a4a2-ffcee19d1f6c', 'image', NULL, NULL, '7_70ea917a-ba30-468a-a4a2-ffcee19d1f6c', '2025-02-20 10:07:30', '2025-02-20 10:07:30'),
(54, 'media/6_bfc02ded-fe16-400b-aa44-32d448c8f875.webp', '6_bfc02ded-fe16-400b-aa44-32d448c8f875', 'image', '92630', 'webp', '6_bfc02ded-fe16-400b-aa44-32d448c8f875.webp', '2025-02-20 10:07:54', '2025-05-09 05:04:14'),
(55, 'media/03_Custom_b0165617-9213-4fb4-bc58-87f8a05c33d1.webp', '03_Custom_b0165617-9213-4fb4-bc58-87f8a05c33d1', 'image', NULL, NULL, '03_Custom_b0165617-9213-4fb4-bc58-87f8a05c33d1', '2025-02-20 10:09:10', '2025-02-20 10:09:10'),
(56, 'media/3_3fa8de18-b5fc-4f6d-a567-10195a915679.webp', '3_3fa8de18-b5fc-4f6d-a567-10195a915679', 'image', NULL, NULL, '3_3fa8de18-b5fc-4f6d-a567-10195a915679', '2025-02-20 10:09:33', '2025-02-20 10:09:33'),
(57, 'media/pink-embroidery-organza-saree-1.webp', 'pink-embroidery-organza-saree-1', 'image', NULL, NULL, 'pink-embroidery-organza-saree-1', '2025-02-20 10:12:41', '2025-02-20 10:12:41'),
(58, 'media/1738646659_banner_1738554353_banner_unnamed (2).png', '03_Custom_5a6d97be-826a-4588-b7ff-f01682b20a95', 'image', NULL, NULL, '03_Custom_5a6d97be-826a-4588-b7ff-f01682b20a95', '2025-02-20 10:13:17', '2025-04-04 03:34:41'),
(59, 'media/03_Custom_6533f9d4-3750-493a-aced-0797a25d7943.webp', '03_Custom_6533f9d4-3750-493a-aced-0797a25d7943', 'image', NULL, NULL, '03_Custom_6533f9d4-3750-493a-aced-0797a25d7943', '2025-02-20 10:13:47', '2025-02-20 10:13:47'),
(60, 'media/2_a5b81e37-102d-402b-91fd-bc8a13dacfb6.webp', '2_a5b81e37-102d-402b-91fd-bc8a13dacfb6', 'image', NULL, NULL, '2_a5b81e37-102d-402b-91fd-bc8a13dacfb6.webp', '2025-02-20 10:14:33', '2025-03-06 08:52:52'),
(61, 'media/2_Custom_23f51117-2a6c-43dc-88fe-50f11a280b57.webp', '2_Custom_23f51117-2a6c-43dc-88fe-50f11a280b57', 'image', NULL, NULL, '2_Custom_23f51117-2a6c-43dc-88fe-50f11a280b57.webp', '2025-02-20 10:15:12', '2025-03-06 08:52:52'),
(62, 'media/05_Custom_619147fe-ae5b-4020-96bc-077e154d179a.webp', '05_Custom_619147fe-ae5b-4020-96bc-077e154d179a', 'image', NULL, NULL, '05_Custom_619147fe-ae5b-4020-96bc-077e154d179a.webp', '2025-02-20 10:17:24', '2025-03-06 08:52:52'),
(63, 'media/Magenta-raw-silk-embroidered-lehenga-with-net-dupatta-4.webp', 'Magenta-raw-silk-embroidered-lehenga-with-net-dupatta-4', 'image', NULL, NULL, 'Magenta-raw-silk-embroidered-lehenga-with-net-dupatta-4.webp', '2025-02-20 10:19:09', '2025-03-06 08:52:52'),
(64, 'media/green-embroidery-printed-chanderi-blouse-with-organza-saree-and-satin-petticoat-1.webp', 'green-embroidery-printed-chanderi-blouse-with-organza-saree-and-satin-petticoat-1', 'image', NULL, NULL, 'green-embroidery-printed-chanderi-blouse-with-organza-saree-and-satin-petticoat-1.webp', '2025-02-20 10:19:57', '2025-03-06 08:52:52'),
(65, 'media/inara-collection.webp', 'inara-collection', 'image', NULL, NULL, 'inara-collection', '2025-02-20 10:21:03', '2025-02-20 10:21:03'),
(66, 'media/dark-blue-silk-velvet-embroidered-anarkali-with-pants-and-dupatta.webp', 'dark-blue-silk-velvet-embroidered-anarkali-with-pants-and-dupatta', 'image', NULL, NULL, 'dark-blue-silk-velvet-embroidered-anarkali-with-pants-and-dupatta', '2025-02-21 11:34:14', '2025-02-21 11:34:14'),
(67, 'media/06_Custom (1).webp', '06_Custom (1)', 'image', NULL, NULL, '06_Custom (1)', '2025-02-21 11:34:45', '2025-02-21 11:34:45'),
(68, 'media/01_Custom_63.webp', '01_Custom_63', 'image', NULL, NULL, '01_Custom_63.webp', '2025-02-21 11:35:15', '2025-03-05 09:14:13'),
(69, 'media/02_Custom_18.webp', '02_Custom_18', 'image', NULL, NULL, '02_Custom_18', '2025-02-21 11:36:24', '2025-02-21 11:36:24'),
(70, 'media/01_Custom_baa7d6f8-6bda-4ea0-961f-93e81e88bca1.webp', '01_Custom_baa7d6f8-6bda-4ea0-961f-93e81e88bca1', 'image', NULL, NULL, '01_Custom_baa7d6f8-6bda-4ea0-961f-93e81e88bca1', '2025-02-21 11:39:52', '2025-02-21 11:39:52'),
(71, 'media/02_Custom_53.webp', '02_Custom_53', 'image', NULL, NULL, '02_Custom_53', '2025-02-21 11:40:31', '2025-02-21 11:40:31'),
(72, 'media/07_Custom_5.webp', '07_Custom_5', 'image', NULL, NULL, '07_Custom_5', '2025-02-21 11:40:58', '2025-02-21 11:40:58'),
(73, 'media/02c_Custom.webp', '02c_Custom', 'image', NULL, NULL, '02c_Custom', '2025-02-21 11:41:36', '2025-02-21 11:41:36'),
(74, 'media/02_Custom_30 (1).webp', '02_Custom_30 (1)', 'image', NULL, NULL, '02_Custom_30 (1)', '2025-02-21 11:42:12', '2025-02-21 11:42:12'),
(75, 'media/5_Custom_2.webp', '5_Custom_2', 'image', NULL, NULL, '5_Custom_2', '2025-02-21 11:42:42', '2025-02-21 11:42:42'),
(76, 'media/02_Custom_4c0aa3dc-d048-4154-bd26-f1d8ed20b48a.webp', '02_Custom_4c0aa3dc-d048-4154-bd26-f1d8ed20b48a', 'image', NULL, NULL, '02_Custom_4c0aa3dc-d048-4154-bd26-f1d8ed20b48a', '2025-02-21 11:43:26', '2025-02-21 11:43:26'),
(77, 'media/01.webp', '01', 'image', '143378', 'webp', '01.webp', '2025-02-21 11:43:54', '2025-03-10 03:20:48'),
(78, 'media/7_95394e10-cab0-4953-83eb-1376a3330dd0.webp', '7_95394e10-cab0-4953-83eb-1376a3330dd0', 'image', '36408', 'webp', '7_95394e10-cab0-4953-83eb-1376a3330dd0.webp', '2025-02-21 11:44:20', '2025-03-10 03:20:48'),
(79, 'media/5_1c00797c-ac5f-4f03-ad92-ea7c8117a6de.webp', '5_1c00797c-ac5f-4f03-ad92-ea7c8117a6de', 'image', '35960', 'webp', '5_1c00797c-ac5f-4f03-ad92-ea7c8117a6de.webp', '2025-02-21 11:45:24', '2025-03-10 03:20:48'),
(80, 'media/Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India.webp', 'Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India', 'image', NULL, NULL, 'Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India', '2025-02-21 11:45:50', '2025-02-21 11:45:50'),
(81, 'media/Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India.webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India', 'image', '23904', 'webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India.webp', '2025-02-21 11:46:31', '2025-03-10 03:20:48'),
(82, 'media/image_1.png', 'image', 'image', NULL, NULL, 'image d', '2025-03-05 09:14:02', '2025-03-07 07:23:04'),
(83, 'media/election-day-world-map-header.png', 'election-day-world-map-header', 'image', '64831', 'png', 'election-day-world-map-header.png', '2025-03-06 07:50:28', '2025-03-12 12:30:28'),
(84, 'media/image.png', 'image test', 'image', '25904', 'png', 'image.png', '2025-03-06 07:55:48', '2025-03-12 12:30:28'),
(85, 'media/Screenshot 2024-03-08 150757.png', 'Screenshot 2024-03-08 150757', 'image', NULL, NULL, 'Screenshot 2024-03-08 150757', '2025-03-06 10:20:22', '2025-03-06 10:20:22'),
(86, 'media/Screenshot 2024-03-08 150805.png', 'Screenshot 2024-03-08 150805', 'image', NULL, NULL, 'Screenshot 2024-03-08 150805', '2025-03-06 10:20:22', '2025-03-06 10:20:22'),
(87, 'media/Screenshot 2024-03-08 150832.png', 'Screenshot 2024-03-08 150832', 'image', NULL, NULL, 'Screenshot 2024-03-08 150832', '2025-03-06 10:20:22', '2025-03-06 10:20:22'),
(88, 'media/Screenshot 2025-03-03 181354.png', 'Screenshot 2025-03-03 181354', 'image', '292015', NULL, 'Screenshot 2025-03-03 181354', '2025-03-06 10:26:38', '2025-03-06 10:26:38'),
(89, 'media/Screenshot 2025-02-21 181750.png', 'Screenshot 2025-02-21 181750', 'image', '18795', NULL, 'Screenshot 2025-02-21 181750', '2025-03-06 10:26:38', '2025-03-06 10:26:38'),
(90, 'media/Screenshot 2025-02-21 181718.png', 'Screenshot 2025-02-21 181718', 'image', '94394', NULL, 'Screenshot 2025-02-21 181718', '2025-03-06 10:26:38', '2025-03-06 10:26:38'),
(91, 'media/Screenshot 2025-02-21 151445.png', 'Screenshot 2025-02-21 151445', 'image', '11083', NULL, 'Screenshot 2025-02-21 151445', '2025-03-06 10:26:38', '2025-03-06 10:26:38'),
(92, 'media/Screenshot 2024-02-23 172029.png', 'Screenshot 2024-02-23 172029', 'image', '48295', 'png', 'Screenshot 2024-02-23 172029.png', '2025-03-06 10:29:42', '2025-03-06 10:42:45'),
(93, 'media/Screenshot 2024-02-23 181539.png', 'Screenshot 2024-02-23 181539', 'image', '52673', 'png', 'Screenshot 2024-02-23 181539.png', '2025-03-06 10:29:42', '2025-03-06 10:42:45'),
(94, 'media/Screenshot 2024-03-14 105052.png', 'Screenshot 2024-03-14 105052', 'image', '81414', 'png', 'Screenshot 2024-03-14 105052', '2025-03-06 10:33:18', '2025-03-06 10:33:18'),
(95, 'media/Screenshot 2024-03-08 150725.png', 'Screenshot 2024-03-08 150725', 'image', '635972', 'png', 'Screenshot 2024-03-08 150725', '2025-03-06 10:33:21', '2025-03-06 10:33:21'),
(96, 'media/Screenshot 2024-02-26 165837.png', 'Screenshot 2024-02-26 165837', 'image', '30711', 'png', 'Screenshot 2024-02-26 165837.png', '2025-03-06 10:37:30', '2025-03-06 11:28:28'),
(97, 'media/Screenshot 2024-02-26 160404.png', 'Screenshot 2024-02-26 160404', 'image', '43458', 'png', 'Screenshot 2024-02-26 160404.png', '2025-03-06 10:47:43', '2025-03-06 11:01:22'),
(98, 'media/Screenshot 2024-02-26 160412.png', 'Screenshot 2024-02-26 160412', 'image', '85469', 'png', 'Screenshot 2024-02-26 160412.png', '2025-03-06 11:01:57', '2025-03-06 11:28:27'),
(99, 'media/Screenshot 2024-02-26 163224.png', 'Screenshot 2024-02-26 163224', 'image', '57838', 'png', 'Screenshot 2024-02-26 163224.png', '2025-03-06 11:28:28', '2025-03-07 05:44:16'),
(100, 'media/Screenshot 2024-04-26 130218.png', 'Screenshot 2024-04-26 130218', 'image', '278912', 'png', 'Screenshot 2024-04-26 130218', '2025-03-06 11:52:42', '2025-03-06 11:52:42'),
(101, 'media/Screenshot 2024-04-26 130522.png', 'Screenshot 2024-04-26 130522', 'image', '261803', 'png', 'Screenshot 2024-04-26 130522', '2025-03-06 11:52:42', '2025-03-06 11:52:42'),
(102, 'media/Screenshot 2024-04-12 112903.png', 'Screenshot 2024-04-12 112903', 'image', '40321', 'png', 'Screenshot 2024-04-12 112903', '2025-03-06 11:53:45', '2025-03-06 11:53:45'),
(103, 'media/Screenshot 2024-05-07 160114.png', 'Screenshot 2024-05-07 160114', 'image', '602936', 'png', 'Screenshot 2024-05-07 160114', '2025-03-06 11:55:29', '2025-03-06 11:55:29'),
(104, 'media/Screenshot 2024-05-18 093518.png', 'Screenshot 2024-05-18 093518', 'image', '106590', 'png', 'Screenshot 2024-05-18 093518', '2025-03-06 11:56:45', '2025-03-06 11:56:45'),
(105, 'media/Screenshot 2024-02-22 130239.png', 'Screenshot 2024-02-22 130239', 'image', '18869', 'png', 'Screenshot 2024-02-22 130239.png', '2025-03-06 12:23:16', '2025-03-06 12:31:10'),
(106, 'media/Screenshot 2024-02-22 130404.png', 'Screenshot 2024-02-22 130404', 'image', '42909', 'png', 'Screenshot 2024-02-22 130404.png', '2025-03-06 12:23:16', '2025-03-06 12:31:10'),
(107, 'media/Screenshot 2024-02-23 163923.png', 'Screenshot 2024-02-23 163923', 'image', '32561', 'png', 'Screenshot 2024-02-23 163923.png', '2025-03-06 12:23:16', '2025-03-06 12:31:10'),
(108, 'media/product-categories.png', 'product-categories', 'image', '54523', 'png', 'product-categories.png', '2025-03-06 12:31:10', '2025-03-06 12:31:33'),
(109, 'media/Screenshot 2024-04-23 110623.png', 'Screenshot 2024-04-23 110623', 'image', '118819', 'png', 'Screenshot 2024-04-23 110623.png', '2025-03-06 12:31:47', '2025-03-07 05:42:15'),
(110, 'media/Screenshot 2024-04-23 111012.png', 'Screenshot 2024-04-23 111012', 'image', '4712', 'png', 'Screenshot 2024-04-23 111012.png', '2025-03-06 12:31:47', '2025-03-07 05:42:15'),
(111, 'media/Screenshot 2024-03-28 152647.png', 'Screenshot 2024-03-28 152647', 'image', '23371', 'png', 'Screenshot 2024-03-28 152647', '2025-03-06 12:32:08', '2025-03-06 12:32:08'),
(112, 'media/Screenshot 2024-03-28 152657.png', 'Screenshot 2024-03-28 152657', 'image', '59103', 'png', 'Screenshot 2024-03-28 152657', '2025-03-06 12:32:08', '2025-03-06 12:32:08'),
(113, 'media/Screenshot 2024-03-28 161256.png', 'Screenshot 2024-03-28 161256', 'image', '310903', 'png', 'Screenshot 2024-03-28 161256', '2025-03-06 12:32:08', '2025-03-06 12:32:08'),
(114, 'media/Screenshot 2024-02-23 165000.png', 'Screenshot 2024-02-23 165000', 'image', '57182', 'png', 'Screenshot 2024-02-23 165000', '2025-03-06 12:38:46', '2025-03-06 12:38:46'),
(115, 'media/Screenshot 2024-04-23 110610.png', 'Screenshot 2024-04-23 110610', 'image', '45544', 'png', 'Screenshot 2024-04-23 110610', '2025-03-07 05:42:15', '2025-03-07 05:42:15'),
(116, 'media/Screenshot 2024-04-23 164645.png', 'Screenshot 2024-04-23 164645', 'image', '74304', 'png', 'Screenshot 2024-04-23 164645', '2025-03-07 05:42:15', '2025-03-07 05:42:15'),
(117, 'media/Screenshot 2024-04-23 165829.png', 'Screenshot 2024-04-23 165829', 'image', '72466', 'png', 'Screenshot 2024-04-23 165829', '2025-03-07 05:42:15', '2025-03-07 05:42:15'),
(118, 'media/Screenshot 2024-04-25 103206.png', 'Screenshot 2024-04-25 103206', 'image', '10178', 'png', 'Screenshot 2024-04-25 103206', '2025-03-07 05:42:15', '2025-03-07 05:42:15'),
(119, 'media/Screenshot 2024-04-25 111217.png', 'Screenshot 2024-04-25 111217', 'image', '68134', 'png', 'Screenshot 2024-04-25 111217', '2025-03-07 05:42:15', '2025-03-07 05:42:15'),
(120, 'media/Screenshot 2024-02-27 094953.png', 'Screenshot 2024-02-27 094953', 'image', '97596', 'png', 'Screenshot 2024-02-27 094953', '2025-03-07 05:44:16', '2025-03-07 05:44:16'),
(121, 'media/990x1272-3_da93c044-1753-4f5c-957b-7927f68f481c.webp', '990x1272-3_da93c044-1753-4f5c-957b-7927f68f481c', 'image', '47370', 'webp', '990x1272-3_da93c044-1753-4f5c-957b-7927f68f481c.webp', '2025-03-10 10:54:13', '2025-03-12 12:30:28'),
(122, 'media/4_90816b5f-5cfa-4096-81cf-eb42c64976bb.webp', '4_90816b5f-5cfa-4096-81cf-eb42c64976bb', 'image', '49622', 'webp', '4_90816b5f-5cfa-4096-81cf-eb42c64976bb.webp', '2025-03-12 08:20:22', '2025-03-12 12:30:28'),
(123, 'media/04_Custom_42.webp', '04_Custom_42', 'image', '51694', 'webp', '04_Custom_42.webp', '2025-03-12 10:02:54', '2025-03-12 12:30:27'),
(124, 'media/4_2d3ee69f-f7e9-4845-9dbc-358137877528.webp', '4_2d3ee69f-f7e9-4845-9dbc-358137877528', 'image', '46810', 'webp', '4_2d3ee69f-f7e9-4845-9dbc-358137877528', '2025-03-12 12:33:49', '2025-03-12 12:33:49'),
(125, 'media/Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India (1).webp', 'Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India (1)', 'image', '42874', 'webp', 'Buy-the-best-Red-cheese-cotton-Anarkali-kurta-with-churidar-pants-and-an-organza-dupatta-for-women-in-India (1)', '2025-03-17 03:14:31', '2025-03-17 03:14:31'),
(126, 'media/1_863dd1d5-a2b2-447d-9839-c3eaa43cae31.webp', '1_863dd1d5-a2b2-447d-9839-c3eaa43cae31', 'image', '41688', 'webp', '1_863dd1d5-a2b2-447d-9839-c3eaa43cae31', '2025-03-17 03:17:45', '2025-03-17 03:17:45'),
(127, 'media/purple-chanderi-silk-kurta-with-pants-and-a-tissue-organza-dupatta-3.webp', 'purple-chanderi-silk-kurta-with-pants-and-a-tissue-organza-dupatta-3', 'image', '37728', 'webp', 'purple-chanderi-silk-kurta-with-pants-and-a-tissue-organza-dupatta-3', '2025-03-18 05:02:13', '2025-03-18 05:02:13'),
(128, 'media/Artboard6Riwayat_pant.webp', 'Artboard6Riwayat_pant', 'image', '89240', 'webp', 'Artboard6Riwayat_pant', '2025-04-04 11:54:00', '2025-04-04 11:54:00'),
(129, 'media/Artboard7Riwayat_pant.webp', 'Artboard7Riwayat_pant', 'image', '102842', 'webp', 'Artboard7Riwayat_pant', '2025-04-04 11:54:00', '2025-04-04 11:54:00'),
(130, 'media/Artboard8Riwayat_pant.webp', 'Artboard8Riwayat_pant', 'image', '111260', 'webp', 'Artboard8Riwayat_pant', '2025-04-04 11:54:00', '2025-04-04 11:54:00'),
(131, 'media/Buy-green-chanderi-straight-kurta-only-for-ladies-in-India-5.webp', 'Buy-green-chanderi-straight-kurta-only-for-ladies-in-India-5', 'image', '116262', 'webp', 'Buy-green-chanderi-straight-kurta-only-for-ladies-in-India-5', '2025-04-04 11:54:00', '2025-04-04 11:54:00'),
(132, 'media/Artboard5Riwayat_pant.webp', 'Artboard5Riwayat_pant', 'image', '131518', 'webp', 'Artboard5Riwayat_pant', '2025-04-04 11:54:00', '2025-04-04 11:54:00'),
(133, 'media/Buy-green-chanderi-straight-kurta-only-for-ladies-in-India-6.webp', 'Buy-green-chanderi-straight-kurta-only-for-ladies-in-India-6', 'image', '97296', 'webp', 'Buy-green-chanderi-straight-kurta-only-for-ladies-in-India-6', '2025-04-04 11:54:00', '2025-04-04 11:54:00'),
(134, 'media/4x970_a0e68a72-9d97-4aaf-97b9-c5b278f1fc84.webp', '4x970_a0e68a72-9d97-4aaf-97b9-c5b278f1fc84', 'image', '111882', 'webp', '4x970_a0e68a72-9d97-4aaf-97b9-c5b278f1fc84', '2025-04-05 08:31:17', '2025-04-05 08:31:17'),
(135, 'media/7x970_639be458-6b04-4c42-849f-f6ebaf4c7039.webp', '7x970_639be458-6b04-4c42-849f-f6ebaf4c7039', 'image', '48630', 'webp', '7x970_639be458-6b04-4c42-849f-f6ebaf4c7039', '2025-04-05 08:31:18', '2025-04-05 08:31:18'),
(136, 'media/6x970_0fee459d-7f49-436f-8584-12c50169796f.webp', '6x970_0fee459d-7f49-436f-8584-12c50169796f', 'image', '126348', 'webp', '6x970_0fee459d-7f49-436f-8584-12c50169796f', '2025-04-05 08:31:18', '2025-04-05 08:31:18'),
(137, 'media/3x970_3b4ba368-ef00-4538-9da0-7d0a2c138608.webp', '3x970_3b4ba368-ef00-4538-9da0-7d0a2c138608', 'image', '46066', 'webp', '3x970_3b4ba368-ef00-4538-9da0-7d0a2c138608', '2025-04-05 08:31:18', '2025-04-05 08:31:18'),
(138, 'media/5x970_4abb0ae6-ef4f-40a8-a14d-cf5476ba8467.webp', '5x970_4abb0ae6-ef4f-40a8-a14d-cf5476ba8467', 'image', '81112', 'webp', '5x970_4abb0ae6-ef4f-40a8-a14d-cf5476ba8467', '2025-04-05 08:31:18', '2025-04-05 08:31:18'),
(139, 'media/6x970_aeef3b4d-70b7-4e21-9342-9eb5027b5d11.webp', '6x970_aeef3b4d-70b7-4e21-9342-9eb5027b5d11', 'image', '131918', 'webp', '6x970_aeef3b4d-70b7-4e21-9342-9eb5027b5d11', '2025-04-07 03:46:55', '2025-04-07 03:46:55'),
(140, 'media/4x970_19fa2ab2-69cd-435a-9d5c-fca98bc9f031.webp', '4x970_19fa2ab2-69cd-435a-9d5c-fca98bc9f031', 'image', '61088', 'webp', '4x970_19fa2ab2-69cd-435a-9d5c-fca98bc9f031', '2025-04-07 03:46:55', '2025-04-07 03:46:55'),
(141, 'media/7x970_8d604ece-44de-452a-b9c5-df1ab6e1f3f2.webp', '7x970_8d604ece-44de-452a-b9c5-df1ab6e1f3f2', 'image', '47048', 'webp', '7x970_8d604ece-44de-452a-b9c5-df1ab6e1f3f2', '2025-04-07 03:46:55', '2025-04-07 03:46:55'),
(142, 'media/2x970_870affed-729c-4ba7-b58d-706cf614e139.webp', '2x970_870affed-729c-4ba7-b58d-706cf614e139', 'image', '42956', 'webp', '2x970_870affed-729c-4ba7-b58d-706cf614e139', '2025-04-07 03:46:55', '2025-04-07 03:46:55'),
(143, 'media/5x970_b1aea86c-09fb-48a2-95ff-a8f926d75ce0.webp', '5x970_b1aea86c-09fb-48a2-95ff-a8f926d75ce0', 'image', '105548', 'webp', '5x970_b1aea86c-09fb-48a2-95ff-a8f926d75ce0', '2025-04-07 03:46:55', '2025-04-07 03:46:55'),
(144, 'media/990x1272-5_4733b918-8de5-4c43-8eaa-ed0aa9e1c9d8 (1).webp', '990x1272-5_4733b918-8de5-4c43-8eaa-ed0aa9e1c9d8 (1)', 'image', '162180', 'webp', '990x1272-5_4733b918-8de5-4c43-8eaa-ed0aa9e1c9d8 (1)', '2025-04-07 03:57:27', '2025-04-07 03:57:27'),
(145, 'media/990x1272-1_47a77c1b-a15c-45bc-94f6-110b5ea568b1 (1).webp', '990x1272-1_47a77c1b-a15c-45bc-94f6-110b5ea568b1 (1)', 'image', '73560', 'webp', '990x1272-1_47a77c1b-a15c-45bc-94f6-110b5ea568b1 (1)', '2025-04-07 03:57:27', '2025-04-07 03:57:27'),
(146, 'media/990x1272-3_7b121ad7-f31a-414f-a1a5-2ea050657a27 (1).webp', '990x1272-3_7b121ad7-f31a-414f-a1a5-2ea050657a27 (1)', 'image', '94070', 'webp', '990x1272-3_7b121ad7-f31a-414f-a1a5-2ea050657a27 (1)', '2025-04-07 03:57:28', '2025-04-07 03:57:28'),
(147, 'media/7_a870fc4d-abe3-4a37-bef6-8507d7dac7d5 (1).webp', '7_a870fc4d-abe3-4a37-bef6-8507d7dac7d5 (1)', 'image', '97980', 'webp', '7_a870fc4d-abe3-4a37-bef6-8507d7dac7d5 (1)', '2025-04-07 03:57:28', '2025-04-07 03:57:28'),
(148, 'media/990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b (2).webp', '990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b (2)', 'image', '104050', 'webp', '990x1272-6_a633bddc-24f8-4fc4-8428-a72da82fc37b (2)', '2025-04-07 03:57:28', '2025-04-07 03:57:28'),
(149, 'media/990x1272-6_0486d8f0-4e6b-436b-87b8-d805348d5b66.webp', '990x1272-6_0486d8f0-4e6b-436b-87b8-d805348d5b66', 'image', '238948', 'webp', '990x1272-6_0486d8f0-4e6b-436b-87b8-d805348d5b66', '2025-04-07 03:58:52', '2025-04-07 03:58:52'),
(150, 'media/990x1272-4_140b7aa5-ee40-4ca7-b5b0-224e7fe5f334.webp', '990x1272-4_140b7aa5-ee40-4ca7-b5b0-224e7fe5f334', 'image', '231128', 'webp', '990x1272-4_140b7aa5-ee40-4ca7-b5b0-224e7fe5f334', '2025-04-07 03:58:52', '2025-04-07 03:58:52'),
(151, 'media/990x1272-2_50ca2b28-321f-4508-9dbe-108913685534.webp', '990x1272-2_50ca2b28-321f-4508-9dbe-108913685534', 'image', '230982', 'webp', '990x1272-2_50ca2b28-321f-4508-9dbe-108913685534', '2025-04-07 03:58:52', '2025-04-07 03:58:52'),
(152, 'media/990x1272-1_f4ce3c90-ddb1-4d0a-87d6-8f5034c523b2.webp', '990x1272-1_f4ce3c90-ddb1-4d0a-87d6-8f5034c523b2', 'image', '239340', 'webp', '990x1272-1_f4ce3c90-ddb1-4d0a-87d6-8f5034c523b2', '2025-04-07 03:58:52', '2025-04-07 03:58:52'),
(153, 'media/ChatGPT Image Apr 28, 2025, 12_13_30 PM (1).png', 'ChatGPT Image Apr 28, 2025, 12_13_30 PM (1)', 'image', '159901', 'png', 'ChatGPT Image Apr 28, 2025, 12_13_30 PM (1)', '2025-05-01 03:24:31', '2025-05-01 03:24:31'),
(154, 'media/ChatGPT Image Apr 28, 2025, 12_13_30 PM.png', 'ChatGPT Image Apr 28, 2025, 12_13_30 PM', 'image', '1546361', 'png', 'ChatGPT Image Apr 28, 2025, 12_13_30 PM', '2025-05-01 03:24:31', '2025-05-01 03:24:31'),
(155, 'media/ChatGPT Image Apr 28, 2025, 12_09_46 PM.png', 'ChatGPT Image Apr 28, 2025, 12_09_46 PM', 'image', '842080', 'png', 'ChatGPT Image Apr 28, 2025, 12_09_46 PM', '2025-05-01 03:24:31', '2025-05-01 03:24:31'),
(156, 'media/1_dc8947a0-edd4-45d3-9559-be307d5bbb06.webp', '1_dc8947a0-edd4-45d3-9559-be307d5bbb06', 'image', '60026', 'webp', '1_dc8947a0-edd4-45d3-9559-be307d5bbb06.webp', '2025-05-07 09:28:35', '2025-05-07 09:33:34'),
(157, 'media/2_4e209008-7d3c-4d48-9261-2ca1ac5d3b72.webp', '2_4e209008-7d3c-4d48-9261-2ca1ac5d3b72', 'image', '60492', 'webp', '2_4e209008-7d3c-4d48-9261-2ca1ac5d3b72', '2025-05-07 09:33:34', '2025-05-07 09:33:34'),
(158, 'media/2.1.webp', '2.1', 'image', '120292', 'webp', '2.1', '2025-05-07 09:33:34', '2025-05-07 09:33:34'),
(159, 'media/7_3d72e2a5-beec-4bfc-94bf-604b34ee0b4d.webp', '7_3d72e2a5-beec-4bfc-94bf-604b34ee0b4d', 'image', '189614', 'webp', '7_3d72e2a5-beec-4bfc-94bf-604b34ee0b4d', '2025-05-07 09:33:34', '2025-05-07 09:33:34'),
(160, 'media/6_7c5a3582-a4f8-48bd-952b-68669e25368a.webp', '6_7c5a3582-a4f8-48bd-952b-68669e25368a', 'image', '71564', 'webp', '6_7c5a3582-a4f8-48bd-952b-68669e25368a', '2025-05-07 09:33:34', '2025-05-07 09:33:34'),
(161, 'media/02_Custom_d6c6a827-3c6a-4f61-b030-ada7401cf2b4.webp', '02_Custom_d6c6a827-3c6a-4f61-b030-ada7401cf2b4', 'image', '89672', 'webp', '02_Custom_d6c6a827-3c6a-4f61-b030-ada7401cf2b4', '2025-05-07 09:48:39', '2025-05-07 09:48:39'),
(162, 'media/07_Custom_2c62e255-373a-419f-a1ab-08ed9a7b38c0.webp', '07_Custom_2c62e255-373a-419f-a1ab-08ed9a7b38c0', 'image', '60336', 'webp', '07_Custom_2c62e255-373a-419f-a1ab-08ed9a7b38c0', '2025-05-07 09:48:39', '2025-05-07 09:48:39'),
(163, 'media/05_Custom_25dc2d7b-36dd-46c8-933d-f9447598c3fe.webp', '05_Custom_25dc2d7b-36dd-46c8-933d-f9447598c3fe', 'image', '132596', 'webp', '05_Custom_25dc2d7b-36dd-46c8-933d-f9447598c3fe', '2025-05-07 09:48:39', '2025-05-07 09:48:39'),
(164, 'media/01_Custom_7c5a92ea-5e27-4335-b13d-f633569703ac.webp', '01_Custom_7c5a92ea-5e27-4335-b13d-f633569703ac', 'image', '55832', 'webp', '01_Custom_7c5a92ea-5e27-4335-b13d-f633569703ac', '2025-05-07 09:48:39', '2025-05-07 09:48:39'),
(165, 'media/03_Custom_0538d3c4-3b49-4a86-9cc9-f573b96d8677 (1).webp', '03_Custom_0538d3c4-3b49-4a86-9cc9-f573b96d8677 (1)', 'image', '62442', 'webp', '03_Custom_0538d3c4-3b49-4a86-9cc9-f573b96d8677 (1)', '2025-05-07 09:48:39', '2025-05-07 09:48:39'),
(166, 'media/Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-6.webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-6', 'image', '45960', 'webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-6', '2025-05-07 09:54:14', '2025-05-07 09:54:14'),
(167, 'media/Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-1.webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-1', 'image', '83076', 'webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-1', '2025-05-07 09:54:14', '2025-05-07 09:54:14'),
(168, 'media/Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-4.webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-4', 'image', '147760', 'webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-4', '2025-05-07 09:54:14', '2025-05-07 09:54:14'),
(169, 'media/Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-3.webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-3', 'image', '49192', 'webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India-3', '2025-05-07 09:54:14', '2025-05-07 09:54:14'),
(170, 'media/Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India (1).webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India (1)', 'image', '49428', 'webp', 'Buy-Sky-blue-embroidered-kurta-with-palazzo-and-dupatta-dress-for-women-in-India (1)', '2025-05-07 09:54:14', '2025-05-07 09:54:14'),
(171, 'media/Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-5.webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-5', 'image', '41338', 'webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-5', '2025-05-08 04:34:03', '2025-05-08 04:34:03'),
(172, 'media/Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-3.webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-3', 'image', '50366', 'webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-3', '2025-05-08 04:34:04', '2025-05-08 04:34:04'),
(173, 'media/Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-4.webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-4', 'image', '76330', 'webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-4', '2025-05-08 04:34:04', '2025-05-08 04:34:04'),
(174, 'media/Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-2.webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-2', 'image', '46768', 'webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-2', '2025-05-08 04:34:04', '2025-05-08 04:34:04'),
(175, 'media/Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-1.webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-1', 'image', '42592', 'webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India-1', '2025-05-08 04:34:04', '2025-05-08 04:34:04'),
(176, 'media/Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India.webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India', 'image', '39748', 'webp', 'Buy-the-best-Hot-Pink-embroidered-modal-cotton-kurta-with-pants-and-dupatta-for-women-in-India', '2025-05-08 04:34:04', '2025-05-08 04:34:04'),
(177, 'media/7_fed78afa-36ed-436d-997d-4dcec2312ba0.webp', '7_fed78afa-36ed-436d-997d-4dcec2312ba0', 'image', '169652', 'webp', '7_fed78afa-36ed-436d-997d-4dcec2312ba0', '2025-05-09 05:04:14', '2025-05-09 05:04:14'),
(178, 'media/1_49b66e19-032a-42ad-a1af-2cf54a55bbf4.webp', '1_49b66e19-032a-42ad-a1af-2cf54a55bbf4', 'image', '57646', 'webp', '1_49b66e19-032a-42ad-a1af-2cf54a55bbf4', '2025-05-09 05:04:14', '2025-05-09 05:04:14'),
(179, 'media/2_91c387f8-b4b0-4fd9-b91d-f1fe231c7c6e.webp', '2_91c387f8-b4b0-4fd9-b91d-f1fe231c7c6e', 'image', '63348', 'webp', '2_91c387f8-b4b0-4fd9-b91d-f1fe231c7c6e', '2025-05-09 05:06:25', '2025-05-09 05:06:25'),
(180, 'media/7_8d446581-294d-45c4-994e-6e2dcd12f375.webp', '7_8d446581-294d-45c4-994e-6e2dcd12f375', 'image', '103016', 'webp', '7_8d446581-294d-45c4-994e-6e2dcd12f375', '2025-05-09 05:06:25', '2025-05-09 05:06:25'),
(181, 'media/4_df6f7c51-8f31-44b1-8354-89a44889b793.webp', '4_df6f7c51-8f31-44b1-8354-89a44889b793', 'image', '146042', 'webp', '4_df6f7c51-8f31-44b1-8354-89a44889b793', '2025-05-09 05:06:25', '2025-05-09 05:06:25'),
(182, 'media/1_b48fbb90-e0c0-417e-9019-90f3683bb963.webp', '1_b48fbb90-e0c0-417e-9019-90f3683bb963', 'image', '61472', 'webp', '1_b48fbb90-e0c0-417e-9019-90f3683bb963', '2025-05-09 05:06:25', '2025-05-09 05:06:25'),
(183, 'media/6_a87fe50b-06b0-4187-a7e7-aff5774517b3.webp', '6_a87fe50b-06b0-4187-a7e7-aff5774517b3', 'image', '73358', 'webp', '6_a87fe50b-06b0-4187-a7e7-aff5774517b3', '2025-05-09 05:06:25', '2025-05-09 05:06:25'),
(184, 'media/8_76145ad0-318f-4174-82bd-d5e8358bc60a.webp', '8_76145ad0-318f-4174-82bd-d5e8358bc60a', 'image', '45814', 'webp', '8_76145ad0-318f-4174-82bd-d5e8358bc60a.webp', '2025-05-09 05:19:39', '2025-05-09 05:39:02'),
(185, 'media/7_6db7e433-95e0-4a21-9974-57a0fa078904.webp', '7_6db7e433-95e0-4a21-9974-57a0fa078904', 'image', '42174', 'webp', '7_6db7e433-95e0-4a21-9974-57a0fa078904.webp', '2025-05-09 05:19:39', '2025-05-09 05:39:02'),
(186, 'media/3_8051b9f7-ce45-4ab8-a8d9-05ed1962175e.webp', '3_8051b9f7-ce45-4ab8-a8d9-05ed1962175e', 'image', '47248', 'webp', '3_8051b9f7-ce45-4ab8-a8d9-05ed1962175e.webp', '2025-05-09 05:19:39', '2025-05-09 05:39:02'),
(187, 'media/2_aeeaced3-7383-4cdb-ae02-626c740cb411.webp', '2_aeeaced3-7383-4cdb-ae02-626c740cb411', 'image', '82434', 'webp', '2_aeeaced3-7383-4cdb-ae02-626c740cb411.webp', '2025-05-09 05:19:39', '2025-05-09 05:39:02'),
(188, 'media/1_af308427-bbb2-4ad7-9627-c2a3ec877eb1.webp', '1_af308427-bbb2-4ad7-9627-c2a3ec877eb1', 'image', '79900', 'webp', '1_af308427-bbb2-4ad7-9627-c2a3ec877eb1.webp', '2025-05-09 05:19:39', '2025-05-09 05:39:02'),
(189, 'media/990x1272-1_663f12a5-f998-4461-b8e2-5364cab69b2d.webp', '990x1272-1_663f12a5-f998-4461-b8e2-5364cab69b2d', 'image', '120360', 'webp', '990x1272-1_663f12a5-f998-4461-b8e2-5364cab69b2d', '2025-05-14 11:11:58', '2025-05-14 11:11:58'),
(190, 'media/06_Custom_da0bf47d-5894-4ed6-a9d4-26460029a5fb.webp', '06_Custom_da0bf47d-5894-4ed6-a9d4-26460029a5fb', 'image', '61866', 'webp', '06_Custom_da0bf47d-5894-4ed6-a9d4-26460029a5fb', '2025-05-16 09:11:45', '2025-05-16 09:11:45'),
(191, 'media/04_Custom_a7587021-8e62-449e-befb-38908db5ee54.webp', '04_Custom_a7587021-8e62-449e-befb-38908db5ee54', 'image', '58602', 'webp', '04_Custom_a7587021-8e62-449e-befb-38908db5ee54', '2025-05-16 09:11:45', '2025-05-16 09:11:45'),
(192, 'media/05_Custom_6393a230-0535-4491-87b8-41c6a8b2276d.webp', '05_Custom_6393a230-0535-4491-87b8-41c6a8b2276d', 'image', '66424', 'webp', '05_Custom_6393a230-0535-4491-87b8-41c6a8b2276d', '2025-05-16 09:11:45', '2025-05-16 09:11:45'),
(193, 'media/1748076123_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-3.jpg', '1748076123_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-3', 'image/webp', '124.43', 'jpg', '1748076123_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-3', '2025-05-24 03:12:05', '2025-05-24 03:12:05'),
(194, 'media/1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-2.jpg', '1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-2', 'image/webp', '238.29', 'jpg', '1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-2', '2025-05-24 03:12:05', '2025-05-24 03:12:05'),
(195, 'media/1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-1.jpg', '1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-1', 'image/webp', '206.62', 'jpg', '1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta-1', '2025-05-24 03:12:05', '2025-05-24 03:12:05'),
(196, 'media/1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta.jpg', '1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta', 'image/webp', '138.49', 'jpg', '1748076125_green-embroidery-printed-chanderi-blouse-with-skirt-and-organza-dupatta', '2025-05-24 03:12:05', '2025-05-24 03:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `metas`
--

CREATE TABLE `metas` (
  `id` bigint UNSIGNED NOT NULL,
  `page` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `metas`
--

INSERT INTO `metas` (`id`, `page`, `meta_title`, `meta_description`, `meta_keywords`, `created_at`, `updated_at`) VALUES
(1, 'home', NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(2, 'about', NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(3, 'services', NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(4, 'blogs', NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(5, 'contact', NULL, NULL, NULL, '2024-08-17 00:39:06', '2024-08-17 00:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(22, '2025_03_29_051900_create_personal_access_tokens_table', 8),
(24, '2025_03_24_093306_create_categories_table', 10),
(31, '2025_05_01_045858_create_media_table', 12),
(32, '2025_05_01_063547_rename_name_to_file_in_media_table', 13),
(33, '2025_03_24_093307_create_products_table', 14),
(34, '2025_04_29_112022_create_variants_table', 14),
(35, '2025_05_02_091943_create_tags_table', 15),
(36, '2025_05_03_062638_inventory', 16),
(37, '2025_05_03_094730_create_inventories_table', 17),
(38, '2025_05_03_100332_create_product_media_table', 18),
(39, '2025_05_05_045700_inventory_variation', 19),
(41, '2025_05_08_043641_add_column_in_inventories_table', 20),
(44, '2025_05_10_123054_create_table_collection', 21),
(45, '2025_05_12_044416_create_table_conditions', 21),
(46, '2025_05_12_044438_create_table_column_conditions', 21),
(47, '2025_05_12_045650_create_add_collection_column_conditions_table', 21),
(51, '2025_05_14_082627_add_columns_in_collection_table', 22),
(56, '2025_05_15_110256_create_countries_table', 23),
(57, '2025_05_15_110311_create_zones_table', 23),
(60, '2025_05_15_110333_create_customers_table', 24),
(61, '2025_05_15_110737_create_customer_addresses_table', 24),
(69, '2025_05_30_061106_create_table_discounts', 26),
(70, '2025_06_04_092815_create_table_orders', 27),
(71, '2025_06_04_100020_create_table_order_items', 27),
(72, '2025_06_05_101606_create_table_shipping_addresses', 28),
(73, '2025_06_05_102424_create_billing_addresses_table', 28),
(74, '2025_06_06_053604_change_column_in_orders_table', 29),
(75, '2025_06_06_054732_change_column_in_orders_table', 30),
(76, '2025_06_06_101504_change_column_in_orders_table', 31),
(77, '2025_06_06_105346_change_column_in_orders_table', 32),
(78, '2025_06_02_063707_add_columns_in_customers_table', 33),
(81, '2025_05_28_051833_create_product_comments_table', 34),
(82, '2025_06_09_104451_create_flags_table', 34),
(83, '2025_06_09_105634_create_other_media_table', 34),
(84, '2025_06_11_054343_create_comment_media_table', 34),
(85, '2025_06_11_101022_create_product_likes_table', 35);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `discount_id` bigint UNSIGNED DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `shipping_address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash_on_delivery',
  `transaction_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `customer_id` bigint UNSIGNED NOT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `grand_total` decimal(10,2) DEFAULT NULL,
  `shipping_status` enum('pending','shipped','in_transit','delivered') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'delivered',
  `estimated_delivery` date NOT NULL,
  `address` enum('same','different') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'same',
  `delivered_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `total_amount`, `discount_id`, `status`, `shipping_address`, `payment_method`, `transaction_id`, `created_at`, `updated_at`, `customer_id`, `sub_total`, `discount_amount`, `grand_total`, `shipping_status`, `estimated_delivery`, `address`, `delivered_at`) VALUES
(1, 0.00, NULL, 'pending', 'X3,Manor Royal,Sheffield, UK', 'cash_on_delivery', NULL, NULL, NULL, 2, 20000.00, 200.00, 18000.00, 'delivered', '2025-06-26', 'same', '2025-06-26 23:10:23');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `inventory_id` bigint UNSIGNED NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `others`
--

CREATE TABLE `others` (
  `id` bigint UNSIGNED NOT NULL,
  `content_id` bigint UNSIGNED DEFAULT NULL,
  `heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `others`
--

INSERT INTO `others` (`id`, `content_id`, `heading`, `description`, `image`, `button_text`, `button_link`, `created_at`, `updated_at`) VALUES
(1, 6, 'Hit the Trail Granola Bar', 'Need to fuel up? These fruity and nutty bars are under 100 calories and have no added sugars.', 'images/slider-1.jpg', 'Register Now', '#!', '2024-08-17 03:50:32', '2024-08-17 03:50:32'),
(2, 13, 'David Milton', 'Heart Doctor', 'images/team-3.png', '', '', '2024-08-17 04:33:54', '2024-08-17 04:33:54');

-- --------------------------------------------------------

--
-- Table structure for table `other_media`
--

CREATE TABLE `other_media` (
  `id` bigint UNSIGNED NOT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extension` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `other_media`
--

INSERT INTO `other_media` (`id`, `file`, `title`, `alt`, `extension`, `type`, `size`, `path`, `created_at`, `updated_at`) VALUES
(2, 'othermedia/sample3.mp4', 'latest image 4', 'new image 5', 'mp4', 'video', '2048', 'othermedia/sample1.mp4', '2025-06-12 11:09:04', '2025-06-12 12:27:52'),
(3, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 12:14:13', '2025-06-13 12:14:13'),
(4, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 12:14:59', '2025-06-13 12:14:59'),
(5, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 12:28:14', '2025-06-13 12:28:14'),
(6, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 12:28:35', '2025-06-13 12:28:35'),
(7, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 12:30:11', '2025-06-13 12:30:11'),
(8, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 12:31:54', '2025-06-13 12:31:54'),
(9, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 14:22:42', '2025-06-13 14:22:42'),
(10, 'othermedia/sample1.jpg', 'Front view', 'Product image 1', 'jpg', 'image/jpeg', '200', NULL, '2025-06-13 14:23:59', '2025-06-13 14:23:59'),
(11, 'othermedia/sample2.mp4', 'Unboxing', 'Demo video', 'mp4', 'video/mp4', '1024', NULL, '2025-06-13 14:24:00', '2025-06-13 14:24:00');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'home', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(2, 'about', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(3, 'services', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(4, 'blogs', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(5, 'categories', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(6, 'testimonials', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(7, 'enquiries', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(8, 'setting', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(9, 'users', '2024-08-17 00:39:06', '2024-08-17 00:39:06'),
(10, 'meta', '2024-08-16 18:30:00', '2024-08-16 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Customer', 2, 'customer-token', 'd3c4018e9667c06510af16699e4cbbbe85a1204f58ee38973afdcd4e77c54d95', '[\"*\"]', NULL, NULL, '2025-05-29 00:51:36', '2025-05-29 00:51:36'),
(2, 'App\\Models\\Customer', 2, 'customer-token', '9974b02d88940d8ea542d5fd4ad6ce71a71444a20bbf0538659fea0353ddc18a', '[\"*\"]', NULL, NULL, '2025-05-29 00:51:51', '2025-05-29 00:51:51'),
(3, 'App\\Models\\Customer', 2, 'customer-token', 'cf81bbb4c4ad5ea74bdb26d6618c89f016262135aa8e7e6e611b01a8444ef2e2', '[\"*\"]', NULL, NULL, '2025-05-29 00:52:42', '2025-05-29 00:52:42'),
(4, 'App\\Models\\Customer', 2, 'customer-token', '0dae30f1cbe370b11e23446298f7472f02906fb09c413ec548dfe3c9d94bc896', '[\"*\"]', NULL, NULL, '2025-05-29 00:57:16', '2025-05-29 00:57:16'),
(5, 'App\\Models\\Customer', 2, 'customer-token', 'af2f8fe1ce2a10b1afc677d77418843bb4f2bade2f831af94876ab03b72e387d', '[\"*\"]', NULL, NULL, '2025-05-29 01:02:39', '2025-05-29 01:02:39'),
(6, 'App\\Models\\Customer', 2, 'customer-token', '4442d145f8e4eec6ce9d26531cb80b755b7b66d0dc40fa88ca0aa2fd9a8cc91f', '[\"*\"]', NULL, NULL, '2025-05-29 01:04:00', '2025-05-29 01:04:00'),
(7, 'App\\Models\\Customer', 2, 'customer-token', 'bd4603a13fef0000caba16d0bb48730ad0fd755bd78c6d15b7a2969d24768fe9', '[\"*\"]', NULL, NULL, '2025-05-29 01:06:19', '2025-05-29 01:06:19'),
(8, 'App\\Models\\Customer', 2, 'customer-token', 'b98ef838d61fd987dabcd51f3eb6dc0daa313ac4d0b3f99ef2f07d3c05232cfe', '[\"*\"]', NULL, NULL, '2025-05-29 01:11:55', '2025-05-29 01:11:55'),
(9, 'App\\Models\\Customer', 2, 'customer-token', '39dd6302c67b391cdaf5f7a7b5adab6a71569fe02db44131a1e876bfc017be35', '[\"*\"]', NULL, NULL, '2025-05-29 01:12:39', '2025-05-29 01:12:39'),
(10, 'App\\Models\\Customer', 2, 'customer-token', '92f365e99b9eecc60610dbed653c08db3d531c9114597168d295bc461c6cabd7', '[\"*\"]', NULL, NULL, '2025-05-29 01:13:04', '2025-05-29 01:13:04'),
(11, 'App\\Models\\Customer', 2, 'customer-token', 'e3d4b9b4463d1cda8c0bea639a8ab212b54a9d47798134fbbcfa2f4b3b5dbc64', '[\"*\"]', NULL, NULL, '2025-05-29 01:14:54', '2025-05-29 01:14:54'),
(12, 'App\\Models\\Customer', 2, 'customer-token', 'fcaf993de13b55d2b343ad6fc3c2a78e7393028576cf100831f84d8e9503c38f', '[\"*\"]', NULL, NULL, '2025-05-29 01:15:02', '2025-05-29 01:15:02'),
(13, 'App\\Models\\Customer', 2, 'customer-token', 'e96824c819cdbdab4ce569431c3d1d394433c2bd8e7d4932d73dd352ec761082', '[\"*\"]', NULL, NULL, '2025-05-29 01:17:28', '2025-05-29 01:17:28'),
(14, 'App\\Models\\Customer', 2, 'customer-token', '65eb4d1843880f649a96d2f893d28d9c43dd58e779bac603e8ca43e05c9605ae', '[\"*\"]', NULL, NULL, '2025-05-29 01:23:21', '2025-05-29 01:23:21'),
(15, 'App\\Models\\Customer', 2, 'customer-token', '9faefd6c29fe026be3962944a2854c19b4dee31e0fcd485fa51c9b0bfcfd32e3', '[\"*\"]', NULL, NULL, '2025-05-29 01:23:35', '2025-05-29 01:23:35'),
(16, 'App\\Models\\Customer', 2, 'customer-token', '2546d2e9dc3b8559319d5c193fa04dad2f0fefdd9a5ca56c17bd0e48063fb411', '[\"*\"]', NULL, NULL, '2025-05-29 01:23:39', '2025-05-29 01:23:39'),
(17, 'App\\Models\\Customer', 2, 'customer-token', '723122c9c15a357a450e6da3523a052e8d837c0ef4e9f700304186961709f8f5', '[\"*\"]', NULL, NULL, '2025-05-29 03:59:16', '2025-05-29 03:59:16'),
(18, 'App\\Models\\Customer', 2, 'customer-token', 'f59690597930e5bd2f73b42a1b7ca1165e7cfedadcbed73b44f15fe5838a5988', '[\"*\"]', NULL, NULL, '2025-05-29 04:03:42', '2025-05-29 04:03:42'),
(19, 'App\\Models\\Customer', 2, 'customer-token', '4f66da2bed548d590613318ed4096965f874b7a3196b6583eafe86c29e8c91cd', '[\"*\"]', NULL, NULL, '2025-05-29 04:12:40', '2025-05-29 04:12:40'),
(20, 'App\\Models\\Customer', 2, 'customer-token', 'f9b9d6048424f018806e7fcd6905f8c2e77080e468a62b58713c9601c75a6357', '[\"*\"]', NULL, NULL, '2025-05-29 04:15:52', '2025-05-29 04:15:52'),
(21, 'App\\Models\\Customer', 2, 'customer-token', '05c39dcc5699d72bfdcf9e4b495f692bb5255d6ad9adc146f8584c53a3385a15', '[\"*\"]', '2025-05-29 04:45:42', NULL, '2025-05-29 04:17:20', '2025-05-29 04:45:42'),
(23, 'App\\Models\\Customer', 3, 'customer-token', 'f136c7840b87d7a7e86e6ce6c8ef609c8b5ad6c76ede9b7206a2782f7501937d', '[\"*\"]', NULL, NULL, '2025-05-29 05:38:25', '2025-05-29 05:38:25'),
(24, 'App\\Models\\Customer', 4, 'customer-token', '5f0f8463c53e7bb9bed2f3f9e5dce9b6dc7d2ac60780a62501a82c7521f017b2', '[\"*\"]', NULL, NULL, '2025-05-29 05:39:10', '2025-05-29 05:39:10'),
(25, 'App\\Models\\Customer', 5, 'customer-token', '661dd9794a3576b6ad676dc83a4fd3481f2f7490408db459818446b9b661a8c3', '[\"*\"]', NULL, NULL, '2025-05-29 05:44:28', '2025-05-29 05:44:28'),
(26, 'App\\Models\\Customer', 6, 'customer-token', '3f1821361f1c0090460536ce4134735f7b0bd73ae6ea18596b0775d417c4e75e', '[\"*\"]', NULL, NULL, '2025-05-29 06:14:52', '2025-05-29 06:14:52'),
(27, 'App\\Models\\Customer', 7, 'customer-token', '2c34ef13b39d43ab188a1b54ab4aa4dea2e195df7150c3069b1a66c429081eb1', '[\"*\"]', NULL, NULL, '2025-05-29 06:29:51', '2025-05-29 06:29:51'),
(29, 'App\\Models\\Customer', 10, 'customer-token', '742244c40cb7f4558848a7cc28135879ccefbeacecb4f56991028419470977ab', '[\"*\"]', NULL, NULL, '2025-05-29 06:46:36', '2025-05-29 06:46:36'),
(30, 'App\\Models\\Customer', 13, 'customer-token', '493c5bb89bcc941867b8dc5ad0e4c093cbd300a6ce241cbaa86d78a4c59eaab1', '[\"*\"]', NULL, NULL, '2025-05-29 07:11:48', '2025-05-29 07:11:48'),
(31, 'App\\Models\\Customer', 14, 'customer-token', '443313a3db732fba4b5f854f6ffe99568a18872e8d0affcf34d1497d064c5e8c', '[\"*\"]', NULL, NULL, '2025-05-29 07:12:28', '2025-05-29 07:12:28'),
(32, 'App\\Models\\Customer', 15, 'customer-token', 'd4718b7191b064f9716831bd5efe615bc39ebf6ff066e13471089cab1814f3f9', '[\"*\"]', NULL, NULL, '2025-05-29 07:14:27', '2025-05-29 07:14:27'),
(33, 'App\\Models\\Customer', 16, 'customer-token', 'b8886206a8cabddfcbe7e9696f992e65f92e1c3319e9d13e5cc705ced5dfb15d', '[\"*\"]', NULL, NULL, '2025-05-29 07:17:47', '2025-05-29 07:17:47'),
(36, 'App\\Models\\Customer', 19, 'customer-token', 'c7b5b9f2203f11924b84d153d5ac5a2b45d42d1f3f004ba4eaabb189eb9e0d79', '[\"*\"]', '2025-05-29 07:28:47', NULL, '2025-05-29 07:28:45', '2025-05-29 07:28:47'),
(39, 'App\\Models\\Customer', 22, 'customer-token', 'c0a1f8ff85bdade9682522d43c8e645a8f8af2cb6f66da6e8560fb9893f9e398', '[\"*\"]', NULL, NULL, '2025-05-30 00:00:11', '2025-05-30 00:00:11'),
(40, 'App\\Models\\User', 1, 'myapptoken', 'c14d2a57bc4a35d62d61f599e116500fbd69f8729f87865c8c143abaac94fb46', '[\"*\"]', NULL, NULL, '2025-06-02 16:29:04', '2025-06-02 16:29:04'),
(41, 'App\\Models\\User', 1, 'myapptoken', 'eaf1cb5d58abeece6065f13510a30f7304e6d20b0d8262d5ef649e3c5b7302c7', '[\"*\"]', '2025-06-16 17:17:02', NULL, '2025-06-02 16:32:37', '2025-06-16 17:17:02');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `long_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `actual_price` decimal(10,2) DEFAULT NULL,
  `track_stock` tinyint(1) DEFAULT NULL,
  `stock` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `continue_when_oos` tinyint(1) DEFAULT NULL,
  `if_sku` tinyint(1) DEFAULT NULL,
  `sku` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping` tinyint(1) DEFAULT NULL,
  `weight` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `product_type` enum('single','variable','affiliate','downloadable') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'single',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `short_description`, `long_description`, `sale_price`, `actual_price`, `track_stock`, `stock`, `continue_when_oos`, `if_sku`, `sku`, `barcode`, `shipping`, `weight`, `meta_title`, `meta_description`, `meta_keywords`, `slug`, `status`, `product_type`, `created_at`, `updated_at`) VALUES
(13, 2, 'Magenta Organza Kurta and dupatta with organza and chanderi pants', 'Magenta Organza Kurta and dupatta with organza and chanderi pants', '<p>Magenta Organza Kurta and dupatta with organza and chanderi pants</p>', 50000.00, 70000.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Magenta Organza Kurta and dupatta with organza and chanderi pants', 'Magenta Organza Kurta and dupatta with organza and chanderi pants', 'Magenta Organza Kurta and dupatta with organza and chanderi pants', 'magenta-organza-kurta-and-dupatta-with-organza-and-chanderi-pants', 'active', 'variable', '2025-05-19 10:42:19', '2025-05-19 10:42:19'),
(14, 6, 'Black Georgette Anarkali with Bustier and Dupatta fff', 'Unveiling the magic of festivities in vibrant hues, ornate patterns, and timeless ethnic flair. A season of celebration splashed in captivating black whispers tales of elegance and strength.', '<p>Unveiling the magic of festivities in vibrant hues, ornate patterns, and timeless ethnic flair. A season of celebration splashed in captivating black whispers tales of elegance and strength. Embrace the serene elegance of cherished anarkali with a modern twist of closed round neck and sheer anarkali. A symphony of intricate allure in a silhouette that flows with grace, this anarkali is designed to mesmerise with every glance. Adorned with delicate hand detailing all over and gotta lace on an exquisite canvas of sheer georgette, this outfit offers a touch of traditions to your cherished festive memories.&nbsp;&nbsp;<br>&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong> Black<br><strong>Work:</strong> Handwork &amp; Lace Work<br><strong>Style:</strong>&nbsp;Anarkali Suit Set<br><strong>Kurta Fabric:</strong> Georgette<br><strong>Dupatta Fabric:</strong> Georgette<br><strong>Lining:</strong> Santoon<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 37500.00, NULL, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Black Georgette Anarkali with Bustier and Dupatta', 'Black Georgette Anarkali with Bustier and Dupatta', 'Black Georgette Anarkali with Bustier and Dupatta', 'black-georgette-anarkali-with-bustier-and-dupatta-fff', 'active', 'variable', '2025-05-19 10:52:52', '2025-05-19 10:52:52'),
(16, 6, 'straight-cut kurta with straight-cut cotton pants', 'A splendid festive edit accentuating the beauty of Chanderi silk, this \"Riwayat Collection\" silhouette plays with modern colors. Enveloped with a textured touch and fluid style', '<p>A splendid festive edit accentuating the beauty of Chanderi silk, this \"Riwayat Collection\" silhouette plays with modern colors. Enveloped with a textured touch and fluid style, this outfit celebrates the green tone, and subtle white hues tucked with a statement cutwork design at the bottom of the kurta. Being traditional yet youthful simultaneously, this ensemble is the perfect choice for every occasion and festivity.</p><p><strong>Product Details:&nbsp;</strong></p><p><strong>Color:&nbsp;</strong>Green<br><strong>Work:</strong>&nbsp;Cutwork Design<br><strong>Style:</strong>&nbsp;Straight-cut Kurta Set<br><strong>Kurta Fabric:</strong>&nbsp;Chanderi Silk<br><strong>Pants Fabric:</strong>&nbsp;Cotton</p>', 20000.00, 25000.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, NULL, NULL, NULL, 'straight-cut-kurta-with-straight-cut-cotton-pants', 'active', 'variable', '2025-05-19 10:56:56', '2025-05-19 10:56:56'),
(17, 6, 'Black Georgette Anarkali with Bustier and Dupatta', 'Buy our latest, designer georgette black anarkali suit with georgette embroidered dupatta online. This party wear anarkali is available for women of all sizes.', '<p>Unveiling the magic of festivities in vibrant hues, ornate patterns, and timeless ethnic flair. A season of celebration splashed in captivating black whispers tales of elegance and strength. Embrace the serene elegance of cherished anarkali with a modern twist of closed round neck and sheer anarkali. A symphony of intricate allure in a silhouette that flows with grace, this anarkali is designed to mesmerise with every glance. Adorned with delicate hand detailing all over and gotta lace on an exquisite canvas of sheer georgette, this outfit offers a touch of traditions to your cherished festive memories.&nbsp;&nbsp;<br>&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong> Black<br><strong>Work:</strong> Handwork &amp; Lace Work<br><strong>Style:</strong>&nbsp;Anarkali Suit Set<br><strong>Kurta Fabric:</strong> Georgette<br><strong>Dupatta Fabric:</strong> Georgette<br><strong>Lining:</strong> Santoon<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 35500.00, NULL, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Black Georgette Anarkali with Bustier and Dupatta', 'Buy our latest, designer georgette black anarkali suit with georgette embroidered dupatta online. This party wear anarkali is available for women of all sizes.', 'Black Georgette Anarkali with Bustier and Dupatta', 'black-georgette-anarkali-with-bustier-and-dupatta', 'active', 'variable', '2025-05-19 11:01:47', '2025-05-19 11:01:47'),
(18, 6, 'Cinnamon Brown Modal Satin Anarkali with Organza Dupatta', 'Twirl through festivities in our modal satin organza pastel brown anarkali suit set &amp; make a statement. Our designer anarkali is available online for women.', '<p>Unveiling the magic of festivities in vibrant hues, ornate patterns, and timeless ethnic flair. A season of celebration splashed in subtle brown whispers tales of warmth and comfort. Embrace the serene elegance of cherished anarkali with a modern twist of cutout back and tie detail with tassels. A symphony of intricate allure in a silhouette that flows with grace, this anarkali is designed to mesmerise with every glance. Adorned with delicate hand detailing all over on an exquisite canvas of silken modal satin, this outfit offers a touch of traditions to your cherished festive memories.&nbsp;<br>&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong> Brown<br><strong>Work:</strong> Handwork &amp; Lace Work<br><strong>Style:</strong>&nbsp;Anarkali Suit Set<br><strong>Kurta Fabric:</strong> Modal Satin<br><strong>Dupatta Fabric:</strong> Organza<br><strong>Lining:</strong> Santoon<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 0.00, NULL, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Cinnamon Brown Modal Satin Anarkali with Organza Dupatta', 'Twirl through festivities in our modal satin organza pastel brown anarkali suit set &amp; make a statement. Our designer anarkali is available online for women.', 'Cinnamon Brown Modal Satin Anarkali with Organza Dupatta', 'cinnamon-brown-modal-satin-anarkali-with-organza-dupatta', 'active', 'variable', '2025-05-19 11:07:43', '2025-05-19 11:07:43'),
(19, 4, 'Red embroidered net blouse and skirt with chanderi dupatta', 'A reflection of an era of new heritage, the ‘Jodha’ collection is inspired by the rich flora, fauna, and heritage of India. With each intricate hand-embroidered detail, our lehenga weaves a narrative of elegance and poise, capturing hearts with its charm.', '<p>A reflection of an era of new heritage, the ‘Jodha’ collection is inspired by the rich flora, fauna, and heritage of India. With each intricate hand-embroidered detail, our lehenga weaves a narrative of elegance and poise, capturing hearts with its charm. A visual poetry of mesmerizing red and gold, the ensemble creates a harmonious blend of traditions and modernity with its captivating hues and timeless appeal. This beautiful lehenga will become your companion this festive season, telling stories of love and grace. &nbsp;<br>&nbsp;</p><p><strong>Product Details</strong></p><p><strong>Color</strong>: Red<br><strong>Work</strong>: Hand Embroidery&nbsp;<br><strong>Style</strong>: Lehenga Set<br><strong>Blouse Fabric</strong>: Net<br><strong>Skirt Fabric</strong>: Net<br><strong>Dupatta Fabric</strong>: Chanderi</p>', 155000.00, NULL, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Red embroidered net blouse and skirt with chanderi dupatta', 'A reflection of an era of new heritage, the ‘Jodha’ collection is inspired by the rich flora, fauna, and heritage of India. With each intricate hand-embroidered detail, our lehenga weaves a narrative of elegance and poise, capturing hearts with its charm.', 'Red embroidered net blouse and skirt with chanderi dupatta', 'red-embroidered-net-blouse-and-skirt-with-chanderi-dupatta', 'active', 'variable', '2025-05-19 11:13:25', '2025-05-19 11:13:25'),
(20, 6, 'Green Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Evoking a sense of cultural richness, each piece is a canvas of artistry where age-old block printing', '<p>Infuse joy into your every moment with a sumptuous green anarkali set from our ‘Malang’ collection. Evoking a sense of cultural richness, each piece is a canvas of artistry where age-old block printing work and sequin embroidery with lace work create a contemporary allure. Wrapped in the plush softness of light chanderi, with an eye-catching flair, the silhouette encapsulates the very essence of traditional meets modern in unparalleled elegance and grace.&nbsp;&nbsp;&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong> Green<br><strong>Work:</strong> Sequin Cheeta Work, Foil Block Printing &amp; Lace Work<br><strong>Style:</strong> Anarkali Suit Set<br><strong>Kurta Fabric:</strong>&nbsp;Light Chanderi<br><strong>Pants Fabric:</strong>&nbsp;Light Chanderi<br><strong>Dupatta Fabric:</strong> Light Chanderi<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 12325.00, 14500.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Green Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Evoking a sense of cultural richness, each piece is a canvas of artistry where age-old block printing', 'Green Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'green-embroidered-light-chanderi-anarkali-with-churidar-and-dupatta', 'active', 'variable', '2025-05-19 11:33:50', '2025-05-19 11:33:50'),
(21, 2, 'Purple chanderi embroidered kurta with pants and tissue organza dupatta', 'Crafted to add the right amount of brightness to your festivities, the suit set showcases a delicate hue and appealing style.', '<p>Indulge in minimalist sophistication this season with our Noor collection. Crafted to add the right amount of brightness to your festivities, the suit set showcases a delicate hue and appealing style. The intricate white embroidery along the yoke and the hemline of the pants creates a captivating fusion of meticulous craftsmanship and easy elegance. Paired with a scalloped tissue organza dupatta, this monochrome outfit will enhance your overall charm.&nbsp;</p><p><strong>Product Details</strong></p><p><strong>Color</strong>:&nbsp;Purple<br><strong>Work</strong>: Embroidery<br><strong>Style</strong>: Gathered Suit Set<br><strong>Kurta Fabric</strong>: Chanderi<br><strong>Pants fabric</strong>: Chanderi<br><strong>Dupatta Fabric</strong>: Tissue Organza</p>', 11475.00, 13500.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Purple chanderi embroidered kurta with pants and tissue organza dupatta', 'Crafted to add the right amount of brightness to your festivities, the suit set showcases a delicate hue and appealing style.', 'Purple chanderi embroidered kurta with pants and tissue organza dupatta', 'purple-chanderi-embroidered-kurta-with-pants-and-tissue-organza-dupatta', 'active', 'variable', '2025-05-19 11:36:52', '2025-05-19 11:36:52'),
(22, 2, 'Sky Blue Embroidered Kurta With Palazzo And Dupatta', 'Weaving into India\'s rich historical tapestry, this art of embedding threadwork gained prominence in the 16th century during the Mughal reign.', '<p>Destined to grace every day and special occasions, this silhouette brings forth \"the timelessness of zari craftsmanship faded into oblivion.\" Weaving into India\'s rich historical tapestry, this art of embedding threadwork gained prominence in the 16th century during the Mughal reign. A celebration of the age-old technique together with scintillating sequin work, this edit comes wrapped with the sky blue hue deriving its inspiration from every bit of a serene evening.</p><p><strong>Product Details:&nbsp;</strong></p><p><strong>Color</strong>: Sky Blue<br><strong>Work</strong>: Zari &amp; Sequins Embroidery<br><strong>Style</strong>: Straight-cut Suit Set<br><strong>Kurta Fabric</strong>: Chanderi Silk<br><strong>Palazzo Fabric</strong>: Chanderi Silk<br><strong>Dupatta Fabric</strong>: Tissue Organza<br><strong>Dupatta Size</strong>: 2.5M</p>', 10625.00, 12500.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Sky Blue Embroidered Kurta With Palazzo And Dupatta', 'Weaving into India\'s rich historical tapestry, this art of embedding threadwork gained prominence in the 16th century during the Mughal reign.', 'Sky Blue Embroidered Kurta With Palazzo And Dupatta', 'sky-blue-embroidered-kurta-with-palazzo-and-dupatta', 'active', 'variable', '2025-05-19 11:39:53', '2025-05-19 11:39:53'),
(23, 2, 'Magenta Embroidered Modal Cotton Kurta With Pants And Dupatta', 'showcasing one of the most intricate hand embroidery techniques in the world that hail from the beautiful state of Gujarat i.e., the Zari', '<p>Everything summer-friendly and everything stylish, the \"Gulaal Collection\" presents a scintillating floral-inspired&nbsp;magenta silhouette showcasing one of the most intricate hand embroidery techniques in the world that hail from the beautiful state of Gujarat i.e., the Zari work. A summer ensemble showcasing a modal cotton Anarkali suit, this piece is sure to add grace to your everyday occasions.</p><p><strong>Product Details:&nbsp;</strong></p><p><strong>Color</strong>:&nbsp;Magenta<br><strong>Work</strong>: Zari And Sequins Work<br><strong>Style</strong>: Gathered V-cut Suit Set<br><strong>Kurta Fabric</strong>: Modal Cotton<br><strong>Pants Fabric</strong>: Modal Cotton<br><strong>Dupatta Fabric</strong>: Tissue Organza</p>', 7200.00, 8000.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Magenta Embroidered Modal Cotton Kurta With Pants And Dupatta', 'showcasing one of the most intricate hand embroidery techniques in the world that hail from the beautiful state of Gujarat i.e., the Zari', 'Magenta Embroidered Modal Cotton Kurta With Pants And Dupatta', 'magenta-embroidered-modal-cotton-kurta-with-pants-and-dupatta', 'active', 'variable', '2025-05-19 11:42:30', '2025-05-19 11:42:30'),
(24, 6, 'Midnight Blue Embroidered Light Chanderi Anarkali with Churidar And Dupatta', NULL, '<p>Infuse joy into your every moment with a sumptuous midnight blue anarkali set from our ‘Malang’ collection. Evoking a sense of cultural richness, each piece is a canvas of artistry where age-old block printing work and sequin embroidery with lace work create a contemporary allure. Wrapped in the plush softness of light chanderi, with an eye-catching flair, the silhouette encapsulates the very essence of traditional meets modern in unparalleled elegance and grace.&nbsp;&nbsp;&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong>&nbsp;Midnight Blue<br><strong>Work:</strong> Sequin Cheeta Work, Foil Block Printing &amp; Lace Work<br><strong>Style:</strong> Anarkali Suit Set<br><strong>Kurta Fabric:</strong>&nbsp;Light Chanderi<br><strong>Pants Fabric:</strong>&nbsp;Light Chanderi<br><strong>Dupatta Fabric:</strong> Light Chanderi<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 12325.00, 14500.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Midnight Blue Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Midnight Blue Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Midnight Blue Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'midnight-blue-embroidered-light-chanderi-anarkali-with-churidar-and-dupatta', 'active', 'variable', '2025-05-19 11:45:42', '2025-05-19 11:45:42'),
(25, 6, 'Pink Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Infuse joy into your every moment with a sumptuous pink anarkali set from our ‘Malang’ collection.', '<p>Infuse joy into your every moment with a sumptuous pink anarkali set from our ‘Malang’ collection. Evoking a sense of cultural richness, each piece is a canvas of artistry where age-old block printing work and sequin embroidery with lace work create a contemporary allure. Wrapped in the plush softness of light chanderi, with an eye-catching flair, the silhouette encapsulates the very essence of traditional meets modern in unparalleled elegance and grace.&nbsp;&nbsp;&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong> Pink<br><strong>Work:</strong> Sequin Cheeta Work, Foil Block Printing &amp; Lace Work<br><strong>Style:</strong> Anarkali Suit Set<br><strong>Kurta Fabric:</strong>&nbsp;Light Chanderi<br><strong>Pants Fabric:</strong>&nbsp;Light Chanderi<br><strong>Dupatta Fabric:</strong> Light Chanderi<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 12325.00, 14500.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Pink Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Infuse joy into your every moment with a sumptuous pink anarkali set from our ‘Malang’ collection.', 'Pink Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'pink-embroidered-light-chanderi-anarkali-with-churidar-and-dupatta', 'active', 'variable', '2025-05-19 11:48:52', '2025-05-19 11:48:52'),
(26, 6, 'White and Green Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Infuse joy into your every moment with a graceful white anarkali set from our ‘Malang’ collection.', '<p>Infuse joy into your every moment with a graceful white anarkali set from our ‘Malang’ collection. Evoking a sense of cultural richness, each piece is a canvas of artistry where age-old block printing work and sequin embroidery with lace work create a contemporary allure. Wrapped in the plush softness of light chanderi, with an eye-catching flair, the silhouette encapsulates the very essence of traditional meets modern in unparalleled elegance and grace.&nbsp;&nbsp;&nbsp;</p><p><strong>Product Details:</strong><br><strong>Color:</strong> White&nbsp;<br><strong>Work:</strong> Foil Block Printing &amp; Lace Work<br><strong>Style:</strong> Anarkali Suit Set<br><strong>Kurta Fabric:</strong>&nbsp;Light Chanderi<br><strong>Pants Fabric:</strong>&nbsp;Light Chanderi<br><strong>Dupatta Fabric:</strong> Light Chanderi<br><strong>Dupatta Size:</strong>&nbsp;2.5M</p>', 12325.00, 14500.00, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'White and Green Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'Infuse joy into your every moment with a graceful white anarkali set from our ‘Malang’ collection.', 'White and Green Embroidered Light Chanderi Anarkali with Churidar And Dupatta', 'white-and-green-embroidered-light-chanderi-anarkali-with-churidar-and-dupatta', 'active', 'variable', '2025-05-19 12:13:31', '2025-05-19 12:13:31'),
(27, 5, 'Magenta Organza Saree With Chanderi Silk Blouse And Satin Petticoat', 'This product will be exclusively handcrafted for you, making the colour/texture/pattern slightly vary from the image shown, due to multiple artisan-led techniques and processes involved.', '<p>This product will be exclusively handcrafted for you, making the colour/texture/pattern slightly vary from the image shown, due to multiple artisan-led techniques and processes involved.</p><p><strong>No returns, refunds, exchange available since all our outfits are made-to-order.</strong></p>', 16000.00, NULL, 1, NULL, 0, 0, NULL, NULL, 1, NULL, 'Magenta Organza Saree With Chanderi Silk Blouse And Satin Petticoat', 'This product will be exclusively handcrafted for you, making the colour/texture/pattern slightly vary from the image shown,', 'Magenta Organza Saree With Chanderi Silk Blouse And Satin Petticoat', 'magenta-organza-saree-with-chanderi-silk-blouse-and-satin-petticoat', 'active', 'variable', '2025-05-19 12:16:38', '2025-05-19 12:16:38'),
(28, 4, 'Green Embroidered Printed Chanderi Blouse With Skirt And Organza Dupatta', 'Waltz gracefully into events in this festive-worthy green silhouette that comes with a stunning flared skirt, a v-neck blouse, and a matching organza dupatta', '<p>Waltz gracefully into events in this festive-worthy green silhouette that comes with a stunning flared skirt, a v-neck blouse, and a matching organza dupatta embellished with sequin work and beautiful Dori detailing. Adorn this lightweight and one-of-a-kind masterpiece lehenga and channel elegance. Make this beauty yours now!</p><p><strong>Product Details</strong></p><p><strong>Color</strong>: Green&nbsp;<br><strong>Work</strong>: Hand embroidery and bandhani print<br><strong>Style:</strong> Lehenga Set<br><strong>Skirt Fabric</strong>: Chanderi&nbsp;<br><strong>Blouse Fabric</strong>: Chanderi<br><strong>Dupatta Fabric</strong>: Organza</p>', 32500.00, NULL, 1, '3', 0, 0, NULL, NULL, 1, NULL, 'Green Embroidered Printed Chanderi Blouse With Skirt And Organza Dupatta', 'Waltz gracefully into events in this festive-worthy green silhouette that comes with a stunning flared skirt, a v-neck blouse, and a matching organza dupatta', 'Green Embroidered Printed Chanderi Blouse With Skirt And Organza Dupatta', 'green-embroidered-printed-chanderi-blouse-with-skirt-and-organza-dupatta', 'active', 'single', '2025-05-24 03:15:49', '2025-05-24 03:15:49');

-- --------------------------------------------------------

--
-- Table structure for table `product_collections`
--

CREATE TABLE `product_collections` (
  `id` bigint UNSIGNED NOT NULL,
  `collection_id` bigint UNSIGNED DEFAULT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_collections`
--

INSERT INTO `product_collections` (`id`, `collection_id`, `product_id`, `created_at`, `updated_at`) VALUES
(38, 39, 26, NULL, NULL),
(39, 39, 27, NULL, NULL),
(40, 39, 22, NULL, NULL),
(41, 39, 25, NULL, NULL),
(42, 39, 20, NULL, NULL),
(43, 39, 23, NULL, NULL),
(44, 39, 24, NULL, NULL),
(45, 39, 21, NULL, NULL),
(46, 40, 27, NULL, NULL),
(47, 43, 13, NULL, NULL),
(48, 43, 14, NULL, NULL),
(50, 43, 16, NULL, NULL),
(51, 43, 17, NULL, NULL),
(52, 43, 19, NULL, NULL),
(53, 43, 20, NULL, NULL),
(54, 43, 21, NULL, NULL),
(55, 43, 22, NULL, NULL),
(56, 43, 23, NULL, NULL),
(57, 43, 24, NULL, NULL),
(58, 43, 25, NULL, NULL),
(59, 43, 26, NULL, NULL),
(60, 43, 27, NULL, NULL),
(61, 44, 13, NULL, NULL),
(62, 44, 21, NULL, NULL),
(63, 44, 22, NULL, NULL),
(64, 44, 23, NULL, NULL),
(66, 42, 13, NULL, NULL),
(67, 42, 14, NULL, NULL),
(69, 42, 16, NULL, NULL),
(70, 42, 17, NULL, NULL),
(71, 42, 18, NULL, NULL),
(72, 42, 19, NULL, NULL),
(73, 42, 20, NULL, NULL),
(74, 42, 21, NULL, NULL),
(75, 42, 22, NULL, NULL),
(76, 42, 23, NULL, NULL),
(77, 42, 24, NULL, NULL),
(78, 42, 25, NULL, NULL),
(79, 42, 26, NULL, NULL),
(80, 42, 27, NULL, NULL),
(81, 45, 13, NULL, NULL),
(82, 45, 14, NULL, NULL),
(83, 45, 16, NULL, NULL),
(84, 45, 17, NULL, NULL),
(85, 45, 18, NULL, NULL),
(86, 45, 19, NULL, NULL),
(87, 45, 20, NULL, NULL),
(88, 45, 21, NULL, NULL),
(89, 45, 22, NULL, NULL),
(90, 45, 23, NULL, NULL),
(91, 45, 24, NULL, NULL),
(92, 45, 25, NULL, NULL),
(93, 45, 26, NULL, NULL),
(94, 45, 27, NULL, NULL),
(95, 42, 28, NULL, NULL),
(96, 43, 28, NULL, NULL),
(97, 45, 28, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_comments`
--

CREATE TABLE `product_comments` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `customer_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('pending','approved','rejected','spam') COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_comments`
--

INSERT INTO `product_comments` (`id`, `product_id`, `customer_id`, `title`, `message`, `rating`, `name`, `email`, `status`, `created_at`, `updated_at`) VALUES
(5, 13, 1, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:06:51', '2025-06-13 12:06:51'),
(7, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:14:12', '2025-06-13 12:14:12'),
(8, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:14:59', '2025-06-13 12:14:59'),
(9, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:28:14', '2025-06-13 12:28:14'),
(10, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:28:35', '2025-06-13 12:28:35'),
(11, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:30:11', '2025-06-13 12:30:11'),
(12, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 12:31:54', '2025-06-13 12:31:54'),
(13, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 14:22:41', '2025-06-13 14:22:41'),
(14, 14, 2, 'Best purchase', 'Very satisfied!', 5, 'Alice', 'alice@example.com', 'approved', '2025-06-13 14:23:59', '2025-06-13 14:23:59');

-- --------------------------------------------------------

--
-- Table structure for table `product_likes`
--

CREATE TABLE `product_likes` (
  `id` bigint UNSIGNED NOT NULL,
  `comment_id` bigint UNSIGNED DEFAULT NULL,
  `customer_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_media`
--

CREATE TABLE `product_media` (
  `id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `media_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_media`
--

INSERT INTO `product_media` (`id`, `created_at`, `updated_at`, `product_id`, `media_id`) VALUES
(25, NULL, NULL, 13, 45),
(26, NULL, NULL, 13, 41),
(27, NULL, NULL, 13, 46),
(28, NULL, NULL, 13, 44),
(29, NULL, NULL, 13, 42),
(30, NULL, NULL, 14, 36),
(31, NULL, NULL, 14, 29),
(32, NULL, NULL, 14, 27),
(33, NULL, NULL, 14, 21),
(38, NULL, NULL, 16, 126),
(39, NULL, NULL, 16, 128),
(40, NULL, NULL, 16, 129),
(41, NULL, NULL, 16, 130),
(42, NULL, NULL, 16, 131),
(43, NULL, NULL, 16, 132),
(44, NULL, NULL, 16, 133),
(45, NULL, NULL, 17, 138),
(46, NULL, NULL, 17, 134),
(47, NULL, NULL, 17, 135),
(48, NULL, NULL, 17, 136),
(49, NULL, NULL, 17, 137),
(50, NULL, NULL, 18, 139),
(51, NULL, NULL, 18, 140),
(52, NULL, NULL, 18, 141),
(53, NULL, NULL, 18, 142),
(54, NULL, NULL, 18, 143),
(55, NULL, NULL, 19, 149),
(56, NULL, NULL, 19, 150),
(57, NULL, NULL, 19, 151),
(58, NULL, NULL, 19, 152),
(59, NULL, NULL, 20, 160),
(60, NULL, NULL, 20, 156),
(61, NULL, NULL, 20, 157),
(62, NULL, NULL, 20, 158),
(63, NULL, NULL, 20, 159),
(64, NULL, NULL, 21, 165),
(65, NULL, NULL, 21, 161),
(66, NULL, NULL, 21, 162),
(67, NULL, NULL, 21, 163),
(68, NULL, NULL, 21, 164),
(69, NULL, NULL, 22, 170),
(70, NULL, NULL, 22, 166),
(71, NULL, NULL, 22, 167),
(72, NULL, NULL, 22, 168),
(73, NULL, NULL, 22, 169),
(74, NULL, NULL, 23, 176),
(75, NULL, NULL, 23, 171),
(76, NULL, NULL, 23, 172),
(77, NULL, NULL, 23, 173),
(78, NULL, NULL, 23, 174),
(79, NULL, NULL, 23, 175),
(80, NULL, NULL, 24, 178),
(81, NULL, NULL, 24, 21),
(82, NULL, NULL, 24, 177),
(83, NULL, NULL, 24, 27),
(84, NULL, NULL, 25, 180),
(85, NULL, NULL, 25, 181),
(86, NULL, NULL, 25, 182),
(87, NULL, NULL, 25, 183),
(88, NULL, NULL, 25, 179),
(89, NULL, NULL, 26, 188),
(90, NULL, NULL, 26, 184),
(91, NULL, NULL, 26, 185),
(92, NULL, NULL, 26, 186),
(93, NULL, NULL, 26, 187),
(94, NULL, NULL, 27, 192),
(95, NULL, NULL, 27, 191),
(96, NULL, NULL, 27, 190),
(97, NULL, NULL, 28, 193),
(98, NULL, NULL, 28, 194),
(99, NULL, NULL, 28, 195),
(100, NULL, NULL, 28, 196);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inner_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0pxLoGHbD9tYnmrYPwqzYTmhDb9AzqbtBXGER41p', NULL, '3.222.165.167', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMUJMdlFVNmJlQnlvNlVmSllQa2M2VGZla1p5ZnNpME13d0hQWTBqWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758694222),
('2bxaOoVYxYFo2gRjpUElOt3dyyx0kcabWu827F0e', NULL, '159.223.121.186', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWENzWkxQSGhmRHQ3bFI1UkxFbXlsRlR4YTVaRVM0eFpqY1F5RTNnRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755476940),
('354g0BWplLcIGamjw494l2gbAn8yLzuGb76NjbhS', NULL, '3.222.165.167', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNnV5RGkwOTdoNUVOT3VTbFhBUTNKb3JvUFp2VmpVZ245OXU1N1RLUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758694229),
('3jh9VGRpBkARfZNjz4504tn5gKMDWo99jAsqxB0c', NULL, '34.235.126.133', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaUV2dkFMbEJBUXJmSFhKMFJUMVA1RFBmdXVrUWxpRnRha01IZlFXOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758300997),
('3wvv2vhglmpgJEikmey1bJta1Zm597njsARyfyZJ', NULL, '205.210.31.23', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ1E1TnpaQkRNV3VoeWRibHJGREpSMG1hdXBCNklNVk51R0duMHJmUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1756716125),
('3YIgJam7q1tByfLhmww49vTFrCQauuUwxc5MTtpP', NULL, '44.204.173.137', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/138.0.7204.23 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic2w1U3ZSeFRhVnhYWjIxU2ZDeHpHU3B2MFB4ZGRObVBObnU3b1lwNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1757642689),
('51M60lDQu8LIDeD71Trg5rHXezqVnRfYnXciD6DS', NULL, '205.210.31.255', 'Hello from Palo Alto Networks, find out more about our scans in https://docs-cortex.paloaltonetworks.com/r/1/Cortex-Xpanse/Scanning-activity', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRVh1dkhMWkFEdGtZMjlDQ1ROWUE3SW1SUW54clROYVFldVdRbVRrViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755573003),
('5gHfau4GjOKAnFRm7YWz5btqPwbvgqDFS071zfbt', NULL, '134.122.122.184', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibWFuRkd0TlBrWGdWaTNYU05UM0VpUGNQR1l4SkJVQlhtMm9kaW1vTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755373073),
('5saTnWQ8TvSTj6jcpcQXsBI9IlBekHOjp6Q3hqJA', NULL, '103.227.62.246', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZkVkbXMzMjU2RG5vQnRSY1Iya25TbHdHdXJHVlpoY0N6ZzJxTFZHNCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1757603705),
('7GUJbM0hbEVq1wsxPndwCpVoDsRwp3pWp5Ufqu1n', NULL, '18.232.146.67', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVUtMdmtoQTMyOUI4ekg2aXh4ZmNFazVvUWU2S0UwQk83SXJKTUNVVyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755226797),
('83ThUf2SKpZkzBgSlpjERuoBsLMF1lnws9Xixza7', NULL, '178.128.226.23', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTENaVFl1YVJWdmxlWkxNMVlZWVpsVHNNWFY0bTZVV01oYW5ZSThiSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755137236),
('85YMYGIJ6wDGckIoEhNHTcPaTrUkrKBa2kMqCxXN', NULL, '18.232.146.67', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWk8wMzN0RkFITWw0SGhmY1AzMjdrekhnVFkwT2s0VWdiclVoc1JHRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755226797),
('aeqMg7usqZUYsJmMOVf9yDJCHhgdmRPO39jCZGPF', NULL, '147.185.132.15', 'Hello from Palo Alto Networks, find out more about our scans in https://docs-cortex.paloaltonetworks.com/r/1/Cortex-Xpanse/Scanning-activity', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRHJBYVJsT1hKZFRjRWJCdjd6OTVnYmw0NVYxQVNGVzQyNDRES1YwRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758300280),
('ajQCevLzZeIRdnxnNCgZIBwvmMnZhqy2WDOXNk9y', NULL, '205.210.31.37', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2xrRnRZbk95NzNnc0lxcDRUc01oT2IyM21sTTVQZGlGcFpKeHdzNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756668939),
('AyIHYigIWelYMhUqTNz1q5dxTyGY87v5EbIQLDN4', NULL, '54.188.31.149', 'Mozilla/5.0 (Linux; Android 9; SM-G970U1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.111 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUnBGMW9ib2F4dWRqM29hY3BPR0o5cHkyV3JycDZ2cUdCU3FRZzcxSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755194915),
('BLRAtldFnDmAwLlRjrwKxzsfOfgNRt67g1cOcRui', NULL, '34.173.207.241', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQU42eWVJUDdteTBRb0N0UGdjZndkWUpaYkFNUFdqNkNpSVNFRUprcyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755190514),
('bzzKicRnQClfoWg6XE4AV1Pa272Nc3MfkxZu7kR6', NULL, '198.235.24.132', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOWljWUNldGVOdlZuMXhDT3JCajVBTE9uQzhkaXZZQU9QSEVvZ1FCeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1756012496),
('dbnZxwN4gEwpFFFzvkjUFqenbARh350nCk3y5vQt', NULL, '34.28.106.73', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQThPblc2SHBUcmNQS2p2bVo0d2h5TGtsU0lxWGdoTXlEUkt1MkM3ciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755188150),
('dik4IIhacaFm25F9BhGDuMZiKlJIFd3bkf96kma5', NULL, '34.143.192.100', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRDBVV2ZrMG5yNEhBSWJRZ0ZsNjdZemFYRFZlNTRFYktkaUw0RnR0TiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758285113),
('ee6trp9Hy23ZUIiZMNESyzVZgUPCIwHgSHtsnYow', NULL, '134.122.122.184', 'Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSUtqb0E3V2toTGVuSXJPNTBQbVVlN1I0M1gzN0w0VXFzYjM0Qm93QSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755372540),
('eJ8K4dsof1YJQJTHGLvWXL7tcfwJxjmHICuW2t03', NULL, '167.172.97.30', 'Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic0UyZVVRazJEU3NqSWxoUDQ0ZElpNUtrWHFDM1VqcjMybHB1Uk9YaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1757044061),
('eJvNMPDz3YCEVMJ8H2EInf2kkuTWEzRWOEGL0fNn', NULL, '35.82.31.228', 'Mozilla/5.0 (compatible; wpbot/1.3; +https://forms.gle/ajBaxygz9jSR8p8G9)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibWJXc1RTbUxUbHYwdDZ5MGVNa0pnMmxEeFNlUktYWTc0ZVNKZ2FQcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757379125),
('eLj2P6S2waKCYY6sU3qvReBhLCswawKY2NTcoZgk', NULL, '3.222.165.167', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYnhjVWxQS3EyRDB2Z2ZJRVI2M3IxTkhmc1RlUFZLaXRhTDR0OUxlQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758694228),
('eQSCHkF5tJ90k4dV5XKyMVLpuQB20apk9BRELLT0', NULL, '44.193.254.10', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiODl4bkJiSERJMVRLSlhvVEdNMGtlMTZzNkt1VWFIMzJ3VExTYkw0WCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758007593),
('gAXlVFgG2jty497zA0bBlW8hhOXQArC1lZNpsYnT', NULL, '3.222.165.167', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMmxzZUdobkVXb1p2VE1sN01JOE9rM1p2NUNnUXp3eWtscDJvbUg2byI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758694222),
('Gc8lWF9nWA7gTWgNVF8YFRkXOCSj4mSeeGZ8DUtZ', NULL, '35.188.153.188', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWGFSQVJwYlF2eGFlcXhpOUU4Mko2SENCcFNZRG1Ka0JnaUdoSU9uayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755539397),
('GipcGTwUEaADi7j06g1lyUc89Q4t8sDDma36Y312', NULL, '171.244.43.14', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicmpUcG9ka1RIMkc0MzFMdmpsRjdzTkxrSGtvd3dIYUEyb3pjTlNjUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755151765),
('h2BszpRVAW3TkxOzD01vQbtsTkjHjNCK41AvKic7', NULL, '44.204.173.137', 'okhttp/4.9.2', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRmJzTU4xZ0FNbEdwOUF3emt5aXlkU0Via0Q3Sk5INkRuZzZyM24xZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1757642636),
('hG2X0ebr8tKOLwThJkMLpA34TSWmFwrhdAaHvtwG', NULL, '13.221.31.114', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM1RIazdOSTg2dWNndVNmN2hxR2JRWWhoWlZzM0VxTXZ5bUxudUNjcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755153691),
('HYJROCoBVD4g62EcgGlfbJRQdXgFSkbmDkN3OrnQ', NULL, '34.141.130.179', 'Scrapy/2.12.0 (+https://scrapy.org)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQXZoOWE3TUIzekFqTmZvenlDb2dpOW1JWVJXWGZrRHVjRXBPWUViaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757585760),
('HZwepKTacgfeHreK3lRzd6ViZO0OuMlsk7Uf7Bwp', NULL, '34.142.172.90', 'Mozilla/5.0 (Linux; Android 5.1.1; SM-J111F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZTlKdkRnUTNESGs3MVI2YzVSVzFsMm1zSmI2RVNkZUFMc3lXSlpMQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757588438),
('imqb0ZhWaCdCa3MzL0k2FKZTIMKLpBIPKjoTFjOj', NULL, '205.210.31.71', 'Hello from Palo Alto Networks, find out more about our scans in https://docs-cortex.paloaltonetworks.com/r/1/Cortex-Xpanse/Scanning-activity', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUHpiUnFuVU1ObUU0b054RFk4dXVLeHl0Y3hEa1BLZmNRTVM2YklKeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755921881),
('jX1CMCiMUfSCBZH1sksAdGGqMv977lYUrtvPqWzm', NULL, '18.234.207.108', 'okhttp/4.9.2', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2R2MG02R0FkOGlHS1RzeHB0N0lMb09EM2hHdFoyUG15eGY4aERjdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756998076),
('Jzfy3LHoCjpPyBAB51UksxjpsIjDrDrXjKMXg9fH', NULL, '3.222.165.167', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN3paSmVGR1RwSFMwa3VFSU9XeFVYb2tMVU1nUHVWc1VHZ1FKYnoyaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758694222),
('KCmY3eNuaeSGIF4WCh2Dgq5MHhXBf6MQ2bZPXKJx', NULL, '161.35.158.239', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid1pQYktqQTZRVUJJTFoxRzNYTEJPUkxjaGVPYTE5c0J4Z2ZhMExraSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755307030),
('KGg61bSydKf3HSyg0ePzFDVHHiYE7WnAZx3Strhr', NULL, '3.140.182.19', 'Mozilla/5.0 zgrab/0.x', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMGd2WGZKMnhDeElmVWZTcnVhMDV5RDFIRFd3ME02dGtObDVjeGRSQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756874772),
('mC2dGv6KzSSdvMXj0trSfcu30lDzh50IfIZBSbPJ', NULL, '34.142.134.182', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidEdjN3dSWnZ3clhIblFkM0Zlc3JuQmFhNG1xOUswVTdCQ1V1SFVFbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758305093),
('mgTaFt2II76EloRoeNamYj5aWbmWPhELfiG1zEst', NULL, '18.201.84.181', 'Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOWgza0Z4VmJXa1FRWndCWU84a0p5T29GQ0dkZE9CSUZSQjZhMG9mcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1756761547),
('NVqudn6ulLnBi9SnaXsTBXgL9sBIIu2zTE0Tx264', NULL, '54.188.31.149', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidGM2TERtTnMyOWdEeHVWeUNJOEhjdWpkd1YxNG55MnpUN1N6UFdYVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755201439),
('nwv2iIUcNNxmbCwroY4MQfxBgRZMkghjXVuwJ0bO', NULL, '34.46.92.247', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia2ZHaTFEbG44M0s2Y0Z1MGxib1NDMllJdHdaQllQQkhYSXBhSkpsaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755195867),
('o9UsfBILzf7gajc2fWvEgacxe4AAmCbTtGocqKWf', NULL, '34.254.176.115', 'Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNjJHZXJna045TkJlOERFcjU4T0hOdnNUOU1xVGlUVDZ3b1RnYkRLMiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757532645),
('ouuInsf5cbVTfXCWNhMzzHQZ45HUjbBgCPkDdn7R', NULL, '198.235.24.185', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoianBYSUp6V3ZZMldMQVlxZ2kzYVBEOGZ6aXNpYUNMYjdKcjdpREJHRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758460288),
('P27i1R4gsvmD28lnpjggIyOZEsTsQVxN6XnBk0hL', NULL, '198.235.24.12', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWmkxVDFzbkIyM01kNzA4RnVnY1BBVDF6SkFYUm1yZVBvbWZGU2NOTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757338821),
('PjRTj0Ppy8ShVpVzSjDqLquRzWbI6NFsjAKuK0CW', NULL, '44.250.135.95', 'Mozilla/5.0 (compatible; wpbot/1.3; +https://forms.gle/ajBaxygz9jSR8p8G9)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSEU5WnZSallOZTBBUEhucUtHWG81bkJFZDQwTWN4cTBXQVc2OENMNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1757336816),
('pLWJ2ff5gYcXZTuYa7UWrr85nFkxaF6u5gGfop27', NULL, '34.41.59.162', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU01OVVNUdE1VR0s4SnMwdWg0elh6cHVURDVIMjJER1FaWGE4OVM0RCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755627307),
('PvRcyzFsZtVXZwpuZhiu7tftas4DdCro8oB1bfFn', NULL, '205.210.31.60', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRjZPMjZDQkFUODlXeDBCbUltNURqYThGeER2SFN6U0tnbFhySmtyZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756032285),
('qFzd3GJRK980alrGiYin8PVccvlxdhQQjnZi3Vfv', NULL, '35.231.217.119', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieDB2ZG9uVnpwdDVIZWUwcGpMaU4wTHFJZERCM1VqZ2hpQU45TklhRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758279159),
('rGrcdnQYzMDxK5ktubA31VKQxupCkvLVJoI1pZS6', NULL, '167.71.245.140', 'Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYXREc2lvMXh2WHRsdGtmVVZsMnZFZEh2YTM4amg5REpnV1dISVJKVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755947400),
('Rwweyfrz6r3SggdujkSIfDObZkrbV4vO6SttIKO8', NULL, '205.210.31.28', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWWJkVmQ4RTRadm0zbVh3TnZidHZlbHdWdUVRNzd5UENSQ1Z3NHUwayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758385772),
('rZqfbbXoY6wNz07T18ppsVhOEpzQFBc7XrLgaKAk', NULL, '198.235.24.2', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUFZBZjVWVnk4dlVlS0ZvaWxmTFRqRTJhMUNaa29yMlJweld6R3BjZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755934386),
('RZWWovWTmmE5pAJmX3SkDASgIm25H2fmCizZbTvF', NULL, '3.222.165.167', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:139.0) Gecko/20100101 Firefox/139.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS2FiaVpBZHhybEhpQmZESlF1aXVvR0ZZNUNkV005VnI0cUFCSkxLWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758694229),
('S0mYcFOKEQsuMLLUt6ArXchaNf14imlElDG5wJWE', NULL, '198.235.24.156', 'Hello from Palo Alto Networks, find out more about our scans in https://docs-cortex.paloaltonetworks.com/r/1/Cortex-Xpanse/Scanning-activity', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS3hhRnVqeVNkbTlnbEpoNDlDanBtUGVzTk9sM0daZnNZbHpNTDZWOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758688587),
('s7OvYD7DLxJLlNwy9H4IOzCWSfQ3UC7kVYQ3u1ev', NULL, '3.222.165.167', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOGc0ZDJLc3FtOG1rVWNNajg0ZFZvWnFOT0s2MTVkdldadlpBR2ZuaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758694228),
('s8ZnRihK9AxqOhaa00FUTyxbwbQ9USKbvnXIWMgY', NULL, '205.210.31.6', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR2plVEVUajFLRldrRE5NUkZMQW1FVkVIV2VSS3lYTnhHZHdyTUk4SyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757722825),
('sqnO54CcSKKJ08ocJ9m6WYpAAslUdDb8Y02X4BLj', NULL, '167.94.146.61', 'Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ3V3TkFhYUhCNTJTVVo4SER1SFg2dnd0T1pJM1BIZDZBV2tnRjd3QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757142095),
('tH4ikaV6gDbYIw83Z6Ffth9az6bB7Vfux4jLvlvG', NULL, '205.210.31.163', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZTlPQ05lTmZHR1NrUzZ3ajB0OXR6NXd0QkJxTHQ5VjU2dHhjVmJ6eCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756589920),
('txSDFKpihLIrhxLzbA0RCDn3CgYkDdIYm0CQlVQ5', NULL, '34.142.177.129', 'Mozilla/5.0 (Linux; Android 5.1.1; SM-J111F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYjI2OG9BeU9kVG1FUmROdnUyVTVnVlhlUmpxTm1FeG1CcUJpVFlyWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758257100),
('uxczFkIm4GXWVwsyIuqf3THC3Akuy82BBIVpQwoG', NULL, '57.129.136.27', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNmFKa2JFNWhjSDRWZERja014ZDdsTFZERm5KMmJJTFN6aWRJTW11MSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755483177),
('vYANpCWgf4cGTnqQ1uaG6HX5jZzpg63sciyoZLDs', NULL, '188.166.90.131', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWnJ0SWZiM1ZKdDZST3JwRVJKMElRTW9jYUR4eDZLVnlwVHpFaG9qQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755198178),
('wBulidmayywx57Ct71gItPr95JYspC7yZaYPo9iU', NULL, '98.159.36.14', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaVJFVDdJZHg5b2RjM1Z4ZUZ6ZXJ6Y3Jwb3I2czMxWHZFQ3d0UGtVbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755379207),
('wmj2K4TzmfxlU7tdmgL9XjXX8tfajvxhI7L5r6V6', NULL, '34.140.116.231', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUnpGNzNOWWNtWEY1YnJkWFN1bEp0eE8wVnlOSUJMNnc4TVVlVGVJTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758277803),
('x6RVHbQ198mWsmLJfhAQO1ZhxkK6q17rE6NP2KOs', NULL, '171.244.43.14', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVTgxRG5UNEkzZk1ybUtGRzd0TW9YeFEyNXRWTXJFbUJWRFdZRnhoNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755133528),
('X9rI1ywVMP3mU7qcjLi7JOfAFiJ3YzEJ4NJDfNJ3', NULL, '205.210.31.168', '', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSlBBQnk0b29HUGJ6ZkZEaWw4ZGZReXNNRXJ6VHdJZW9pZ2swTzhQUSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757854369),
('y56iIsqeel1jllA8tGj6HK6GbxZ2ckaYtY7WhXlD', NULL, '34.46.92.247', 'Mozilla/5.0 (compatible; CMS-Checker/1.0; +https://example.com)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaGZSaUtqSTM5dUVyRmdSQ0ZwbnVPVnRHTFF0NllhaU9WMUh3U1pSayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755195867),
('YgJA2J9A4h8AOC7TD6xRLfkp2Os3mtK7modaSSco', NULL, '18.224.192.118', 'Mozilla/5.0 zgrab/0.x', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNG5YYWViZzB6Y2hiR1RidlhXd3ZvQlNFQVAxUnBzbGNRaWkwcjQ3WCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1755720586),
('YMXIzOSlGe9P8KKWwKUATqNoudYFy1dS8f9ah6aM', NULL, '143.198.236.102', 'Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSVMyaTdVWXJyZ0o3UEtsMlNoeHR3N05GdGdmWTNlTWdodUNEdWNPMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1758326140),
('YVP1zhhMLGQbemOpfrszZ3uHUn7HISST5eqt30ru', NULL, '205.210.31.46', 'Hello from Palo Alto Networks, find out more about our scans in https://docs-cortex.paloaltonetworks.com/r/1/Cortex-Xpanse/Scanning-activity', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUG9yMGxEekpRTHJ4TFQyTHczVHBrTms1Nld4bkhWRHBXdUJmSWpmWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756812044),
('YysWPtLCu9u0qDyAduq6KTuZZS8vIoRfBRU2qFs1', NULL, '139.59.20.52', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOHI1YlRQa1BRSWNxTUpiM1VVYzBaWTZ4WE1VVDdYU0xFZ1U1Z0w4cCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1757128132),
('YzsXobxvZmxGSTUAyCEFknTLKPoI6Ac3ctJJXwx4', NULL, '3.222.165.167', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ1dMdGptMEM3a2Z2b0MzVHN3Y3hFczRlUVhpSnM2am5LYlpmOFdCSCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1758694222),
('YzXy0oAOhoTPVcOS35ItsCRAcIQrtl7Qa1kHig6e', NULL, '34.141.130.179', 'Scrapy/2.12.0 (+https://scrapy.org)', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieTh5QUFZNmc0T1g3akpTRDJWZTlreWQ5MEh5Mll5UWk0V3RSdGlxSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vd3d3LmVjb21tZXJjZS1hcGkudGhlcHJldmlldy5saXZlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1757585803),
('zpvDP5Pg79uYQXJawW41chGURdTnP71SWKCZ65mO', NULL, '18.234.207.108', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/138.0.7204.23 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSUxxcXdERlI3c1NnZnl6ZUl6VUdIVHVkeU4ya0JaVklFbmdwNGtCYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vZWNvbW1lcmNlLWFwaS50aGVwcmV2aWV3LmxpdmUiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1756998083);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint UNSIGNED NOT NULL,
  `site_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_light` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_dark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `favicon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primary` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `secondary` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `map` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `header_script` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body_script` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `footer_script` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `site_name`, `logo_light`, `logo_dark`, `favicon`, `primary`, `secondary`, `phone1`, `phone2`, `email`, `address`, `map`, `facebook`, `instagram`, `twitter`, `linkedin`, `youtube`, `footer_description`, `header_script`, `body_script`, `footer_script`, `created_at`, `updated_at`) VALUES
(1, 'Admin Panel', 'setting/logo-black_3_1.png', 'setting/logo-black_3.png', 'setting/logo-black_3_2.png', '#51678f', '#090909', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-17 00:39:03', '2024-08-17 04:41:52');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_addresses`
--

CREATE TABLE `shipping_addresses` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telcode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zone_id` bigint UNSIGNED NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(2, 'Sales', NULL, '2025-05-02 15:25:59', '2025-05-02 15:25:59');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `profile`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Jean-Frédéric Dufour', 'CEO', NULL, NULL, NULL),
(2, 'Ronald tate', 'Co-Founder', NULL, NULL, NULL),
(3, 'Shaun Head', 'CFO', NULL, NULL, NULL),
(4, 'Steven Smith', 'Operations- Global', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `rating`, `designation`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Sia Sanders', 5, 'IT Analyst', NULL, '\"Owning a Rolex has been a lifelong dream, and it certainly lives up to its reputation. The craftsmanship and attention to detail are unmatched. Every time I wear it, I feel a sense of pride and sophistication. It’s not just a watch — it’s a statement of elegance and precision.\"', NULL, NULL),
(2, 'Sarah L.London', NULL, 'Entrepreneur', NULL, '\"I’ve had my Rolex Submariner for over a decade, and it still looks as flawless as the day I bought it. The durability and reliability are phenomenal. Whether I’m attending a formal event or exploring the outdoors, it’s the perfect companion.\"', NULL, NULL),
(3, 'David W.Toronto', NULL, 'Pianist', NULL, '\"My father passed down his Rolex to me, and it’s more than just a timepiece — it’s a family heirloom. The watch is a testament to Rolex’s enduring quality and style. I plan to pass it down to my son one day, knowing it will stand the test of time.\"', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Admin', 'admin@gmail.com', '2024-08-17 00:39:03', '$2y$12$P8ALxsuIBGd96y3hfVK7ge46t/s8pLKEzLnI5imIqwEU6uJpucysO', 'qGuoo22Trc', '2024-08-17 00:39:03', '2024-08-17 00:42:00', 1),
(2, 'kapil', 'kapil@gmail.com', NULL, '$2y$12$P8ALxsuIBGd96y3hfVK7ge46t/s8pLKEzLnI5imIqwEU6uJpucysO', NULL, '2025-04-01 04:11:18', '2025-04-01 04:11:18', 0),
(4, 'kapilaa', 'kapil@gmail.comaa', NULL, '$2y$12$4fOgKlHR3JBEoav.m5rpx.4IOUnnRlcROcEUKtq1hK0B.7IICaGka', NULL, '2025-04-01 14:49:11', '2025-04-01 14:49:11', 0),
(5, 'ronnald', 'ronnald@mail.com', NULL, '$2y$12$5GkYpR.Lm6mmkvK2wKBri.Jh8OcV3IBdQ69kkY0VMfhRrN5gwUhe6', NULL, '2025-04-01 15:17:24', '2025-04-01 15:17:24', 0),
(6, 'Test User', 'test@example.com', '2025-06-12 11:04:16', '$2y$12$HVQDlp2EmK1YGEIYelKhjuIMSBOSIhtBA7BfPMaOcxtwc90HfxDVK', 'ko3as0EMBs', '2025-06-12 11:04:17', '2025-06-12 11:04:17', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_permission`
--

CREATE TABLE `user_permission` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `permission_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_permission`
--

INSERT INTO `user_permission` (`id`, `user_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 1, 6, NULL, NULL),
(7, 1, 7, NULL, NULL),
(8, 1, 8, NULL, NULL),
(9, 1, 9, NULL, NULL),
(10, 1, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`id`, `name`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Color', '[{\"name\": \"Black\", \"value\": \"#000000\"}, {\"name\": \"White\", \"value\": \"#FFFFFF\"}, {\"name\": \"Red\", \"value\": \"#FF0000\"}, {\"name\": \"Blue\", \"value\": \"#0000FF\"}, {\"name\": \"Green\", \"value\": \"#008000\"}, {\"name\": \"Yellow\", \"value\": \"#FFFF00\"}, {\"name\": \"Orange\", \"value\": \"#FFA500\"}, {\"name\": \"Pink\", \"value\": \"#FFC0CB\"}, {\"name\": \"Purple\", \"value\": \"#800080\"}, {\"name\": \"Brown\", \"value\": \"#A52A2A\"}, {\"name\": \"Gray\", \"value\": \"#808080\"}, {\"name\": \"Navy Blue\", \"value\": \"#000080\"}, {\"name\": \"Sky Blue\", \"value\": \"#87CEEB\"}, {\"name\": \"Teal\", \"value\": \"#008080\"}, {\"name\": \"Maroon\", \"value\": \"#800000\"}, {\"name\": \"Olive\", \"value\": \"#808000\"}, {\"name\": \"Lime\", \"value\": \"#00FF00\"}, {\"name\": \"Beige\", \"value\": \"#F5F5DC\"}, {\"name\": \"Gold\", \"value\": \"#FFD700\"}, {\"name\": \"Silver\", \"value\": \"#C0C0C0\"}, {\"name\": \"Ivory\", \"value\": \"#FFFFF0\"}, {\"name\": \"Lavender\", \"value\": \"#E6E6FA\"}, {\"name\": \"Magenta\", \"value\": \"#FF00FF\"}, {\"name\": \"Cyan\", \"value\": \"#00FFFF\"}, {\"name\": \"Burgundy\", \"value\": \"#800020\"}, {\"name\": \"Charcoal\", \"value\": \"#36454F\"}, {\"name\": \"Mustard\", \"value\": \"#FFDB58\"}, {\"name\": \"Coral\", \"value\": \"#FF7F50\"}, {\"name\": \"Indigo\", \"value\": \"#4B0082\"}, {\"name\": \"Turquoise\", \"value\": \"#40E0D0\"}, {\"name\": \"Peach\", \"value\": \"#FFDAB9\"}, {\"name\": \"Mint Green\", \"value\": \"#98FF98\"}, {\"name\": \"Rose\", \"value\": \"#FF007F\"}, {\"name\": \"Dark Green\", \"value\": \"#006400\"}, {\"name\": \"Dark Blue\", \"value\": \"#00008B\"}, {\"name\": \"Light Gray\", \"value\": \"#D3D3D3\"}, {\"name\": \"Dark Gray\", \"value\": \"#A9A9A9\"}, {\"name\": \"Aqua\", \"value\": \"#00FFFF\"}, {\"name\": \"Fuchsia\", \"value\": \"#FF00FF\"}, {\"name\": \"Slate Gray\", \"value\": \"#708090\"}, {\"name\": \"Chocolate\", \"value\": \"#D2691E\"}, {\"name\": \"Crimson\", \"value\": \"#DC143C\"}, {\"name\": \"Plum\", \"value\": \"#DDA0DD\"}, {\"name\": \"Sienna\", \"value\": \"#A0522D\"}, {\"name\": \"Tan\", \"value\": \"#D2B48C\"}]', '2025-05-02 16:55:59', '2025-05-02 16:55:59'),
(2, 'Size', '[{\"name\": \"Extra Small\", \"value\": \"XS\"}, {\"name\": \"Small\", \"value\": \"S\"}, {\"name\": \"Medium\", \"value\": \"M\"}, {\"name\": \"Large\", \"value\": \"L\"}, {\"name\": \"Extra Large\", \"value\": \"XL\"}, {\"name\": \"2XL\", \"value\": \"2XL\"}, {\"name\": \"3XL\", \"value\": \"3XL\"}, {\"name\": \"4XL\", \"value\": \"4XL\"}, {\"name\": \"5XL\", \"value\": \"5XL\"}, {\"name\": \"6XL\", \"value\": \"6XL\"}]', '2025-05-19 15:48:22', '2025-05-19 15:48:28'),
(3, 'Gender', '[{\"name\": \"Male\", \"value\": \"M\"}, {\"name\": \"Female\", \"value\": \"F\"}, {\"name\": \"Other\", \"value\": \"O\"}]', '2025-05-19 15:49:38', '2025-05-19 15:49:38');

-- --------------------------------------------------------

--
-- Table structure for table `zones`
--

CREATE TABLE `zones` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `zones`
--

INSERT INTO `zones` (`id`, `country_id`, `name`, `code`, `created_at`, `updated_at`) VALUES
(1, 9, 'Buenos Aires Province', 'B', NULL, NULL),
(2, 9, 'Catamarca', 'K', NULL, NULL),
(3, 9, 'Chaco', 'H', NULL, NULL),
(4, 9, 'Chubut', 'U', NULL, NULL),
(5, 9, 'Buenos Aires (Autonomous City)', 'C', NULL, NULL),
(6, 9, 'Córdoba', 'X', NULL, NULL),
(7, 9, 'Corrientes', 'W', NULL, NULL),
(8, 9, 'Entre Ríos', 'E', NULL, NULL),
(9, 9, 'Formosa', 'P', NULL, NULL),
(10, 9, 'Jujuy', 'Y', NULL, NULL),
(11, 9, 'La Pampa', 'L', NULL, NULL),
(12, 9, 'La Rioja', 'F', NULL, NULL),
(13, 9, 'Mendoza', 'M', NULL, NULL),
(14, 9, 'Misiones', 'N', NULL, NULL),
(15, 9, 'Neuquén', 'Q', NULL, NULL),
(16, 9, 'Río Negro', 'R', NULL, NULL),
(17, 9, 'Salta', 'A', NULL, NULL),
(18, 9, 'San Juan', 'J', NULL, NULL),
(19, 9, 'San Luis', 'D', NULL, NULL),
(20, 9, 'Santa Cruz', 'Z', NULL, NULL),
(21, 9, 'Santa Fe', 'S', NULL, NULL),
(22, 9, 'Santiago del Estero', 'G', NULL, NULL),
(23, 9, 'Tierra del Fuego', 'V', NULL, NULL),
(24, 9, 'Tucumán', 'T', NULL, NULL),
(25, 13, 'Australian Capital Territory', 'ACT', NULL, NULL),
(26, 13, 'New South Wales', 'NSW', NULL, NULL),
(27, 13, 'Northern Territory', 'NT', NULL, NULL),
(28, 13, 'Queensland', 'QLD', NULL, NULL),
(29, 13, 'South Australia', 'SA', NULL, NULL),
(30, 13, 'Tasmania', 'TAS', NULL, NULL),
(31, 13, 'Victoria', 'VIC', NULL, NULL),
(32, 13, 'Western Australia', 'WA', NULL, NULL),
(33, 29, 'Acre', 'AC', NULL, NULL),
(34, 29, 'Alagoas', 'AL', NULL, NULL),
(35, 29, 'Amapá', 'AP', NULL, NULL),
(36, 29, 'Amazonas', 'AM', NULL, NULL),
(37, 29, 'Bahia', 'BA', NULL, NULL),
(38, 29, 'Ceará', 'CE', NULL, NULL),
(39, 29, 'Federal District', 'DF', NULL, NULL),
(40, 29, 'Espírito Santo', 'ES', NULL, NULL),
(41, 29, 'Goiás', 'GO', NULL, NULL),
(42, 29, 'Maranhão', 'MA', NULL, NULL),
(43, 29, 'Mato Grosso', 'MT', NULL, NULL),
(44, 29, 'Mato Grosso do Sul', 'MS', NULL, NULL),
(45, 29, 'Minas Gerais', 'MG', NULL, NULL),
(46, 29, 'Pará', 'PA', NULL, NULL),
(47, 29, 'Paraíba', 'PB', NULL, NULL),
(48, 29, 'Paraná', 'PR', NULL, NULL),
(49, 29, 'Pernambuco', 'PE', NULL, NULL),
(50, 29, 'Piauí', 'PI', NULL, NULL),
(51, 29, 'Rio Grande do Norte', 'RN', NULL, NULL),
(52, 29, 'Rio Grande do Sul', 'RS', NULL, NULL),
(53, 29, 'Rio de Janeiro', 'RJ', NULL, NULL),
(54, 29, 'Rondônia', 'RO', NULL, NULL),
(55, 29, 'Roraima', 'RR', NULL, NULL),
(56, 29, 'Santa Catarina', 'SC', NULL, NULL),
(57, 29, 'São Paulo', 'SP', NULL, NULL),
(58, 29, 'Sergipe', 'SE', NULL, NULL),
(59, 29, 'Tocantins', 'TO', NULL, NULL),
(60, 38, 'Alberta', 'AB', NULL, NULL),
(61, 38, 'British Columbia', 'BC', NULL, NULL),
(62, 38, 'Manitoba', 'MB', NULL, NULL),
(63, 38, 'New Brunswick', 'NB', NULL, NULL),
(64, 38, 'Newfoundland and Labrador', 'NL', NULL, NULL),
(65, 38, 'Northwest Territories', 'NT', NULL, NULL),
(66, 38, 'Nova Scotia', 'NS', NULL, NULL),
(67, 38, 'Nunavut', 'NU', NULL, NULL),
(68, 38, 'Ontario', 'ON', NULL, NULL),
(69, 38, 'Prince Edward Island', 'PE', NULL, NULL),
(70, 38, 'Quebec', 'QC', NULL, NULL),
(71, 38, 'Saskatchewan', 'SK', NULL, NULL),
(72, 38, 'Yukon', 'YT', NULL, NULL),
(73, 44, 'Arica y Parinacota', 'AP', NULL, NULL),
(74, 44, 'Tarapacá', 'TA', NULL, NULL),
(75, 44, 'Antofagasta', 'AN', NULL, NULL),
(76, 44, 'Atacama', 'AT', NULL, NULL),
(77, 44, 'Coquimbo', 'CO', NULL, NULL),
(78, 44, 'Valparaíso', 'VS', NULL, NULL),
(79, 44, 'Santiago Metropolitan', 'RM', NULL, NULL),
(80, 44, 'Libertador General Bernardo O’Higgins', 'LI', NULL, NULL),
(81, 44, 'Maule', 'ML', NULL, NULL),
(82, 44, 'Ñuble', 'NB', NULL, NULL),
(83, 44, 'Bío Bío', 'BI', NULL, NULL),
(84, 44, 'Araucanía', 'AR', NULL, NULL),
(85, 44, 'Los Ríos', 'LR', NULL, NULL),
(86, 44, 'Los Lagos', 'LL', NULL, NULL),
(87, 44, 'Aysén', 'AI', NULL, NULL),
(88, 44, 'Magallanes Region', 'MA', NULL, NULL),
(89, 45, 'Anhui', 'AH', NULL, NULL),
(90, 45, 'Beijing', 'BJ', NULL, NULL),
(91, 45, 'Chongqing', 'CQ', NULL, NULL),
(92, 45, 'Fujian', 'FJ', NULL, NULL),
(93, 45, 'Gansu', 'GS', NULL, NULL),
(94, 45, 'Guangdong', 'GD', NULL, NULL),
(95, 45, 'Guangxi', 'GX', NULL, NULL),
(96, 45, 'Guizhou', 'GZ', NULL, NULL),
(97, 45, 'Hainan', 'HI', NULL, NULL),
(98, 45, 'Hebei', 'HE', NULL, NULL),
(99, 45, 'Heilongjiang', 'HL', NULL, NULL),
(100, 45, 'Henan', 'HA', NULL, NULL),
(101, 45, 'Hubei', 'HB', NULL, NULL),
(102, 45, 'Hunan', 'HN', NULL, NULL),
(103, 45, 'Inner Mongolia', 'NM', NULL, NULL),
(104, 45, 'Jiangsu', 'JS', NULL, NULL),
(105, 45, 'Jiangxi', 'JX', NULL, NULL),
(106, 45, 'Jilin', 'JL', NULL, NULL),
(107, 45, 'Liaoning', 'LN', NULL, NULL),
(108, 45, 'Ningxia', 'NX', NULL, NULL),
(109, 45, 'Qinghai', 'QH', NULL, NULL),
(110, 45, 'Shaanxi', 'SN', NULL, NULL),
(111, 45, 'Shandong', 'SD', NULL, NULL),
(112, 45, 'Shanghai', 'SH', NULL, NULL),
(113, 45, 'Shanxi', 'SX', NULL, NULL),
(114, 45, 'Sichuan', 'SC', NULL, NULL),
(115, 45, 'Tianjin', 'TJ', NULL, NULL),
(116, 45, 'Xinjiang', 'XJ', NULL, NULL),
(117, 45, 'Tibet', 'YZ', NULL, NULL),
(118, 45, 'Yunnan', 'YN', NULL, NULL),
(119, 45, 'Zhejiang', 'ZJ', NULL, NULL),
(120, 48, 'Capital District', 'DC', NULL, NULL),
(121, 48, 'Amazonas', 'AMA', NULL, NULL),
(122, 48, 'Antioquia', 'ANT', NULL, NULL),
(123, 48, 'Arauca', 'ARA', NULL, NULL),
(124, 48, 'Atlántico', 'ATL', NULL, NULL),
(125, 48, 'Bolívar', 'BOL', NULL, NULL),
(126, 48, 'Boyacá', 'BOY', NULL, NULL),
(127, 48, 'Caldas', 'CAL', NULL, NULL),
(128, 48, 'Caquetá', 'CAQ', NULL, NULL),
(129, 48, 'Casanare', 'CAS', NULL, NULL),
(130, 48, 'Cauca', 'CAU', NULL, NULL),
(131, 48, 'Cesar', 'CES', NULL, NULL),
(132, 48, 'Chocó', 'CHO', NULL, NULL),
(133, 48, 'Córdoba', 'COR', NULL, NULL),
(134, 48, 'Cundinamarca', 'CUN', NULL, NULL),
(135, 48, 'Guainía', 'GUA', NULL, NULL),
(136, 48, 'Guaviare', 'GUV', NULL, NULL),
(137, 48, 'Huila', 'HUI', NULL, NULL),
(138, 48, 'La Guajira', 'LAG', NULL, NULL),
(139, 48, 'Magdalena', 'MAG', NULL, NULL),
(140, 48, 'Meta', 'MET', NULL, NULL),
(141, 48, 'Nariño', 'NAR', NULL, NULL),
(142, 48, 'Norte de Santander', 'NSA', NULL, NULL),
(143, 48, 'Putumayo', 'PUT', NULL, NULL),
(144, 48, 'Quindío', 'QUI', NULL, NULL),
(145, 48, 'Risaralda', 'RIS', NULL, NULL),
(146, 48, 'San Andrés & Providencia', 'SAP', NULL, NULL),
(147, 48, 'Santander', 'SAN', NULL, NULL),
(148, 48, 'Sucre', 'SUC', NULL, NULL),
(149, 48, 'Tolima', 'TOL', NULL, NULL),
(150, 48, 'Valle del Cauca', 'VAC', NULL, NULL),
(151, 48, 'Vaupés', 'VAU', NULL, NULL),
(152, 48, 'Vichada', 'VID', NULL, NULL),
(153, 53, 'Alajuela', 'CR-A', NULL, NULL),
(154, 53, 'Cartago', 'CR-C', NULL, NULL),
(155, 53, 'Guanacaste', 'CR-G', NULL, NULL),
(156, 53, 'Heredia', 'CR-H', NULL, NULL),
(157, 53, 'Limón', 'CR-L', NULL, NULL),
(158, 53, 'Puntarenas', 'CR-P', NULL, NULL),
(159, 53, 'San José', 'CR-SJ', NULL, NULL),
(160, 64, '6th of October', 'SU', NULL, NULL),
(161, 64, 'Al Sharqia', 'SHR', NULL, NULL),
(162, 64, 'Alexandria', 'ALX', NULL, NULL),
(163, 64, 'Aswan', 'ASN', NULL, NULL),
(164, 64, 'Asyut', 'AST', NULL, NULL),
(165, 64, 'Beheira', 'BH', NULL, NULL),
(166, 64, 'Beni Suef', 'BNS', NULL, NULL),
(167, 64, 'Cairo', 'C', NULL, NULL),
(168, 64, 'Dakahlia', 'DK', NULL, NULL),
(169, 64, 'Damietta', 'DT', NULL, NULL),
(170, 64, 'Faiyum', 'FYM', NULL, NULL),
(171, 64, 'Gharbia', 'GH', NULL, NULL),
(172, 64, 'Giza', 'GZ', NULL, NULL),
(173, 64, 'Helwan', 'HU', NULL, NULL),
(174, 64, 'Ismailia', 'IS', NULL, NULL),
(175, 64, 'Kafr el-Sheikh', 'KFS', NULL, NULL),
(176, 64, 'Luxor', 'LX', NULL, NULL),
(177, 64, 'Matrouh', 'MT', NULL, NULL),
(178, 64, 'Minya', 'MN', NULL, NULL),
(179, 64, 'Monufia', 'MNF', NULL, NULL),
(180, 64, 'New Valley', 'WAD', NULL, NULL),
(181, 64, 'North Sinai', 'SIN', NULL, NULL),
(182, 64, 'Port Said', 'PTS', NULL, NULL),
(183, 64, 'Qalyubia', 'KB', NULL, NULL),
(184, 64, 'Qena', 'KN', NULL, NULL),
(185, 64, 'Red Sea', 'BA', NULL, NULL),
(186, 64, 'Sohag', 'SHG', NULL, NULL),
(187, 64, 'South Sinai', 'JS', NULL, NULL),
(188, 64, 'Suez', 'SUZ', NULL, NULL),
(189, 65, 'Ahuachapán', 'SV-AH', NULL, NULL),
(190, 65, 'Cabañas', 'SV-CA', NULL, NULL),
(191, 65, 'Chalatenango', 'SV-CH', NULL, NULL),
(192, 65, 'Cuscatlán', 'SV-CU', NULL, NULL),
(193, 65, 'La Libertad', 'SV-LI', NULL, NULL),
(194, 65, 'La Paz', 'SV-PA', NULL, NULL),
(195, 65, 'La Unión', 'SV-UN', NULL, NULL),
(196, 65, 'Morazán', 'SV-MO', NULL, NULL),
(197, 65, 'San Miguel', 'SV-SM', NULL, NULL),
(198, 65, 'San Salvador', 'SV-SS', NULL, NULL),
(199, 65, 'San Vicente', 'SV-SV', NULL, NULL),
(200, 65, 'Santa Ana', 'SV-SA', NULL, NULL),
(201, 65, 'Sonsonate', 'SV-SO', NULL, NULL),
(202, 65, 'Usulután', 'SV-US', NULL, NULL),
(203, 89, 'Alta Verapaz', 'AVE', NULL, NULL),
(204, 89, 'Baja Verapaz', 'BVE', NULL, NULL),
(205, 89, 'Chimaltenango', 'CMT', NULL, NULL),
(206, 89, 'Chiquimula', 'CQM', NULL, NULL),
(207, 89, 'El Progreso', 'EPR', NULL, NULL),
(208, 89, 'Escuintla', 'ESC', NULL, NULL),
(209, 89, 'Guatemala', 'GUA', NULL, NULL),
(210, 89, 'Huehuetenango', 'HUE', NULL, NULL),
(211, 89, 'Izabal', 'IZA', NULL, NULL),
(212, 89, 'Jalapa', 'JAL', NULL, NULL),
(213, 89, 'Jutiapa', 'JUT', NULL, NULL),
(214, 89, 'Petén', 'PET', NULL, NULL),
(215, 89, 'Quetzaltenango', 'QUE', NULL, NULL),
(216, 89, 'Quiché', 'QUI', NULL, NULL),
(217, 89, 'Retalhuleu', 'RET', NULL, NULL),
(218, 89, 'Sacatepéquez', 'SAC', NULL, NULL),
(219, 89, 'San Marcos', 'SMA', NULL, NULL),
(220, 89, 'Santa Rosa', 'SRO', NULL, NULL),
(221, 89, 'Sololá', 'SOL', NULL, NULL),
(222, 89, 'Suchitepéquez', 'SUC', NULL, NULL),
(223, 89, 'Totonicapán', 'TOT', NULL, NULL),
(224, 89, 'Zacapa', 'ZAC', NULL, NULL),
(225, 96, 'Hong Kong Island', 'HK', NULL, NULL),
(226, 96, 'Kowloon', 'KL', NULL, NULL),
(227, 96, 'New Territories', 'NT', NULL, NULL),
(228, 99, 'Andaman and Nicobar Islands', 'AN', NULL, NULL),
(229, 99, 'Andhra Pradesh', 'AP', NULL, NULL),
(230, 99, 'Arunachal Pradesh', 'AR', NULL, NULL),
(231, 99, 'Assam', 'AS', NULL, NULL),
(232, 99, 'Bihar', 'BR', NULL, NULL),
(233, 99, 'Chandigarh', 'CH', NULL, NULL),
(234, 99, 'Chhattisgarh', 'CG', NULL, NULL),
(235, 99, 'Dadra and Nagar Haveli', 'DN', NULL, NULL),
(236, 99, 'Daman and Diu', 'DD', NULL, NULL),
(237, 99, 'Delhi', 'DL', NULL, NULL),
(238, 99, 'Goa', 'GA', NULL, NULL),
(239, 99, 'Gujarat', 'GJ', NULL, NULL),
(240, 99, 'Haryana', 'HR', NULL, NULL),
(241, 99, 'Himachal Pradesh', 'HP', NULL, NULL),
(242, 99, 'Jammu and Kashmir', 'JK', NULL, NULL),
(243, 99, 'Jharkhand', 'JH', NULL, NULL),
(244, 99, 'Karnataka', 'KA', NULL, NULL),
(245, 99, 'Kerala', 'KL', NULL, NULL),
(246, 99, 'Ladakh', 'LA', NULL, NULL),
(247, 99, 'Lakshadweep', 'LD', NULL, NULL),
(248, 99, 'Madhya Pradesh', 'MP', NULL, NULL),
(249, 99, 'Maharashtra', 'MH', NULL, NULL),
(250, 99, 'Manipur', 'MN', NULL, NULL),
(251, 99, 'Meghalaya', 'ML', NULL, NULL),
(252, 99, 'Mizoram', 'MZ', NULL, NULL),
(253, 99, 'Nagaland', 'NL', NULL, NULL),
(254, 99, 'Odisha', 'OR', NULL, NULL),
(255, 99, 'Puducherry', 'PY', NULL, NULL),
(256, 99, 'Punjab', 'PB', NULL, NULL),
(257, 99, 'Rajasthan', 'RJ', NULL, NULL),
(258, 99, 'Sikkim', 'SK', NULL, NULL),
(259, 99, 'Tamil Nadu', 'TN', NULL, NULL),
(260, 99, 'Telangana', 'TS', NULL, NULL),
(261, 99, 'Tripura', 'TR', NULL, NULL),
(262, 99, 'Uttar Pradesh', 'UP', NULL, NULL),
(263, 99, 'Uttarakhand', 'UK', NULL, NULL),
(264, 99, 'West Bengal', 'WB', NULL, NULL),
(265, 100, 'Aceh', 'AC', NULL, NULL),
(266, 100, 'Bali', 'BA', NULL, NULL),
(267, 100, 'Bangka–Belitung Islands', 'BB', NULL, NULL),
(268, 100, 'Banten', 'BT', NULL, NULL),
(269, 100, 'Bengkulu', 'BE', NULL, NULL),
(270, 100, 'Gorontalo', 'GO', NULL, NULL),
(271, 100, 'Jakarta', 'JK', NULL, NULL),
(272, 100, 'Jambi', 'JA', NULL, NULL),
(273, 100, 'West Java', 'JB', NULL, NULL),
(274, 100, 'Central Java', 'JT', NULL, NULL),
(275, 100, 'East Java', 'JI', NULL, NULL),
(276, 100, 'West Kalimantan', 'KB', NULL, NULL),
(277, 100, 'South Kalimantan', 'KS', NULL, NULL),
(278, 100, 'Central Kalimantan', 'KT', NULL, NULL),
(279, 100, 'East Kalimantan', 'KI', NULL, NULL),
(280, 100, 'North Kalimantan', 'KU', NULL, NULL),
(281, 100, 'Riau Islands', 'KR', NULL, NULL),
(282, 100, 'Lampung', 'LA', NULL, NULL),
(283, 100, 'Maluku', 'MA', NULL, NULL),
(284, 100, 'North Maluku', 'MU', NULL, NULL),
(285, 100, 'North Sumatra', 'SU', NULL, NULL),
(286, 100, 'West Nusa Tenggara', 'NB', NULL, NULL),
(287, 100, 'East Nusa Tenggara', 'NT', NULL, NULL),
(288, 100, 'Papua', 'PA', NULL, NULL),
(289, 100, 'West Papua', 'PB', NULL, NULL),
(290, 100, 'Riau', 'RI', NULL, NULL),
(291, 100, 'South Sumatra', 'SS', NULL, NULL),
(292, 100, 'West Sulawesi', 'SR', NULL, NULL),
(293, 100, 'South Sulawesi', 'SN', NULL, NULL),
(294, 100, 'Central Sulawesi', 'ST', NULL, NULL),
(295, 100, 'Southeast Sulawesi', 'SG', NULL, NULL),
(296, 100, 'North Sulawesi', 'SA', NULL, NULL),
(297, 100, 'West Sumatra', 'SB', NULL, NULL),
(298, 100, 'Yogyakarta', 'YO', NULL, NULL),
(299, 103, 'Carlow', 'CW', NULL, NULL),
(300, 103, 'Cavan', 'CN', NULL, NULL),
(301, 103, 'Clare', 'CE', NULL, NULL),
(302, 103, 'Cork', 'CO', NULL, NULL),
(303, 103, 'Donegal', 'DL', NULL, NULL),
(304, 103, 'Dublin', 'D', NULL, NULL),
(305, 103, 'Galway', 'G', NULL, NULL),
(306, 103, 'Kerry', 'KY', NULL, NULL),
(307, 103, 'Kildare', 'KE', NULL, NULL),
(308, 103, 'Kilkenny', 'KK', NULL, NULL),
(309, 103, 'Laois', 'LS', NULL, NULL),
(310, 103, 'Leitrim', 'LM', NULL, NULL),
(311, 103, 'Limerick', 'LK', NULL, NULL),
(312, 103, 'Longford', 'LD', NULL, NULL),
(313, 103, 'Louth', 'LH', NULL, NULL),
(314, 103, 'Mayo', 'MO', NULL, NULL),
(315, 103, 'Meath', 'MH', NULL, NULL),
(316, 103, 'Monaghan', 'MN', NULL, NULL),
(317, 103, 'Offaly', 'OY', NULL, NULL),
(318, 103, 'Roscommon', 'RN', NULL, NULL),
(319, 103, 'Sligo', 'SO', NULL, NULL),
(320, 103, 'Tipperary', 'TA', NULL, NULL),
(321, 103, 'Waterford', 'WD', NULL, NULL),
(322, 103, 'Westmeath', 'WH', NULL, NULL),
(323, 103, 'Wexford', 'WX', NULL, NULL),
(324, 103, 'Wicklow', 'WW', NULL, NULL),
(325, 106, 'Agrigento', 'AG', NULL, NULL),
(326, 106, 'Alessandria', 'AL', NULL, NULL),
(327, 106, 'Ancona', 'AN', NULL, NULL),
(328, 106, 'Aosta Valley', 'AO', NULL, NULL),
(329, 106, 'Arezzo', 'AR', NULL, NULL),
(330, 106, 'Ascoli Piceno', 'AP', NULL, NULL),
(331, 106, 'Asti', 'AT', NULL, NULL),
(332, 106, 'Avellino', 'AV', NULL, NULL),
(333, 106, 'Bari', 'BA', NULL, NULL),
(334, 106, 'Barletta-Andria-Trani', 'BT', NULL, NULL),
(335, 106, 'Belluno', 'BL', NULL, NULL),
(336, 106, 'Benevento', 'BN', NULL, NULL),
(337, 106, 'Bergamo', 'BG', NULL, NULL),
(338, 106, 'Biella', 'BI', NULL, NULL),
(339, 106, 'Bologna', 'BO', NULL, NULL),
(340, 106, 'South Tyrol', 'BZ', NULL, NULL),
(341, 106, 'Brescia', 'BS', NULL, NULL),
(342, 106, 'Brindisi', 'BR', NULL, NULL),
(343, 106, 'Cagliari', 'CA', NULL, NULL),
(344, 106, 'Caltanissetta', 'CL', NULL, NULL),
(345, 106, 'Campobasso', 'CB', NULL, NULL),
(346, 106, 'Carbonia-Iglesias', 'CI', NULL, NULL),
(347, 106, 'Caserta', 'CE', NULL, NULL),
(348, 106, 'Catania', 'CT', NULL, NULL),
(349, 106, 'Catanzaro', 'CZ', NULL, NULL),
(350, 106, 'Chieti', 'CH', NULL, NULL),
(351, 106, 'Como', 'CO', NULL, NULL),
(352, 106, 'Cosenza', 'CS', NULL, NULL),
(353, 106, 'Cremona', 'CR', NULL, NULL),
(354, 106, 'Crotone', 'KR', NULL, NULL),
(355, 106, 'Cuneo', 'CN', NULL, NULL),
(356, 106, 'Enna', 'EN', NULL, NULL),
(357, 106, 'Fermo', 'FM', NULL, NULL),
(358, 106, 'Ferrara', 'FE', NULL, NULL),
(359, 106, 'Florence', 'FI', NULL, NULL),
(360, 106, 'Foggia', 'FG', NULL, NULL),
(361, 106, 'Forlì-Cesena', 'FC', NULL, NULL),
(362, 106, 'Frosinone', 'FR', NULL, NULL),
(363, 106, 'Genoa', 'GE', NULL, NULL),
(364, 106, 'Gorizia', 'GO', NULL, NULL),
(365, 106, 'Grosseto', 'GR', NULL, NULL),
(366, 106, 'Imperia', 'IM', NULL, NULL),
(367, 106, 'Isernia', 'IS', NULL, NULL),
(368, 106, 'L’Aquila', 'AQ', NULL, NULL),
(369, 106, 'La Spezia', 'SP', NULL, NULL),
(370, 106, 'Latina', 'LT', NULL, NULL),
(371, 106, 'Lecce', 'LE', NULL, NULL),
(372, 106, 'Lecco', 'LC', NULL, NULL),
(373, 106, 'Livorno', 'LI', NULL, NULL),
(374, 106, 'Lodi', 'LO', NULL, NULL),
(375, 106, 'Lucca', 'LU', NULL, NULL),
(376, 106, 'Macerata', 'MC', NULL, NULL),
(377, 106, 'Mantua', 'MN', NULL, NULL),
(378, 106, 'Massa and Carrara', 'MS', NULL, NULL),
(379, 106, 'Matera', 'MT', NULL, NULL),
(380, 106, 'Medio Campidano', 'VS', NULL, NULL),
(381, 106, 'Messina', 'ME', NULL, NULL),
(382, 106, 'Milan', 'MI', NULL, NULL),
(383, 106, 'Modena', 'MO', NULL, NULL),
(384, 106, 'Monza and Brianza', 'MB', NULL, NULL),
(385, 106, 'Naples', 'NA', NULL, NULL),
(386, 106, 'Novara', 'NO', NULL, NULL),
(387, 106, 'Nuoro', 'NU', NULL, NULL),
(388, 106, 'Ogliastra', 'OG', NULL, NULL),
(389, 106, 'Olbia-Tempio', 'OT', NULL, NULL),
(390, 106, 'Oristano', 'OR', NULL, NULL),
(391, 106, 'Padua', 'PD', NULL, NULL),
(392, 106, 'Palermo', 'PA', NULL, NULL),
(393, 106, 'Parma', 'PR', NULL, NULL),
(394, 106, 'Pavia', 'PV', NULL, NULL),
(395, 106, 'Perugia', 'PG', NULL, NULL),
(396, 106, 'Pesaro and Urbino', 'PU', NULL, NULL),
(397, 106, 'Pescara', 'PE', NULL, NULL),
(398, 106, 'Piacenza', 'PC', NULL, NULL),
(399, 106, 'Pisa', 'PI', NULL, NULL),
(400, 106, 'Pistoia', 'PT', NULL, NULL),
(401, 106, 'Pordenone', 'PN', NULL, NULL),
(402, 106, 'Potenza', 'PZ', NULL, NULL),
(403, 106, 'Prato', 'PO', NULL, NULL),
(404, 106, 'Ragusa', 'RG', NULL, NULL),
(405, 106, 'Ravenna', 'RA', NULL, NULL),
(406, 106, 'Reggio Calabria', 'RC', NULL, NULL),
(407, 106, 'Reggio Emilia', 'RE', NULL, NULL),
(408, 106, 'Rieti', 'RI', NULL, NULL),
(409, 106, 'Rimini', 'RN', NULL, NULL),
(410, 106, 'Rome', 'RM', NULL, NULL),
(411, 106, 'Rovigo', 'RO', NULL, NULL),
(412, 106, 'Salerno', 'SA', NULL, NULL),
(413, 106, 'Sassari', 'SS', NULL, NULL),
(414, 106, 'Savona', 'SV', NULL, NULL),
(415, 106, 'Siena', 'SI', NULL, NULL),
(416, 106, 'Syracuse', 'SR', NULL, NULL),
(417, 106, 'Sondrio', 'SO', NULL, NULL),
(418, 106, 'Taranto', 'TA', NULL, NULL),
(419, 106, 'Teramo', 'TE', NULL, NULL),
(420, 106, 'Terni', 'TR', NULL, NULL),
(421, 106, 'Turin', 'TO', NULL, NULL),
(422, 106, 'Trapani', 'TP', NULL, NULL),
(423, 106, 'Trentino', 'TN', NULL, NULL),
(424, 106, 'Treviso', 'TV', NULL, NULL),
(425, 106, 'Trieste', 'TS', NULL, NULL),
(426, 106, 'Udine', 'UD', NULL, NULL),
(427, 106, 'Varese', 'VA', NULL, NULL),
(428, 106, 'Venice', 'VE', NULL, NULL),
(429, 106, 'Verbano-Cusio-Ossola', 'VB', NULL, NULL),
(430, 106, 'Vercelli', 'VC', NULL, NULL),
(431, 106, 'Verona', 'VR', NULL, NULL),
(432, 106, 'Vibo Valentia', 'VV', NULL, NULL),
(433, 106, 'Vicenza', 'VI', NULL, NULL),
(434, 106, 'Viterbo', 'VT', NULL, NULL),
(435, 108, 'Hokkaido', 'JP-01', NULL, NULL),
(436, 108, 'Aomori', 'JP-02', NULL, NULL),
(437, 108, 'Iwate', 'JP-03', NULL, NULL),
(438, 108, 'Miyagi', 'JP-04', NULL, NULL),
(439, 108, 'Akita', 'JP-05', NULL, NULL),
(440, 108, 'Yamagata', 'JP-06', NULL, NULL),
(441, 108, 'Fukushima', 'JP-07', NULL, NULL),
(442, 108, 'Ibaraki', 'JP-08', NULL, NULL),
(443, 108, 'Tochigi', 'JP-09', NULL, NULL),
(444, 108, 'Gunma', 'JP-10', NULL, NULL),
(445, 108, 'Saitama', 'JP-11', NULL, NULL),
(446, 108, 'Chiba', 'JP-12', NULL, NULL),
(447, 108, 'Tokyo', 'JP-13', NULL, NULL),
(448, 108, 'Kanagawa', 'JP-14', NULL, NULL),
(449, 108, 'Niigata', 'JP-15', NULL, NULL),
(450, 108, 'Toyama', 'JP-16', NULL, NULL),
(451, 108, 'Ishikawa', 'JP-17', NULL, NULL),
(452, 108, 'Fukui', 'JP-18', NULL, NULL),
(453, 108, 'Yamanashi', 'JP-19', NULL, NULL),
(454, 108, 'Nagano', 'JP-20', NULL, NULL),
(455, 108, 'Gifu', 'JP-21', NULL, NULL),
(456, 108, 'Shizuoka', 'JP-22', NULL, NULL),
(457, 108, 'Aichi', 'JP-23', NULL, NULL),
(458, 108, 'Mie', 'JP-24', NULL, NULL),
(459, 108, 'Shiga', 'JP-25', NULL, NULL),
(460, 108, 'Kyoto', 'JP-26', NULL, NULL),
(461, 108, 'Osaka', 'JP-27', NULL, NULL),
(462, 108, 'Hyogo', 'JP-28', NULL, NULL),
(463, 108, 'Nara', 'JP-29', NULL, NULL),
(464, 108, 'Wakayama', 'JP-30', NULL, NULL),
(465, 108, 'Tottori', 'JP-31', NULL, NULL),
(466, 108, 'Shimane', 'JP-32', NULL, NULL),
(467, 108, 'Okayama', 'JP-33', NULL, NULL),
(468, 108, 'Hiroshima', 'JP-34', NULL, NULL),
(469, 108, 'Yamaguchi', 'JP-35', NULL, NULL),
(470, 108, 'Tokushima', 'JP-36', NULL, NULL),
(471, 108, 'Kagawa', 'JP-37', NULL, NULL),
(472, 108, 'Ehime', 'JP-38', NULL, NULL),
(473, 108, 'Kochi', 'JP-39', NULL, NULL),
(474, 108, 'Fukuoka', 'JP-40', NULL, NULL),
(475, 108, 'Saga', 'JP-41', NULL, NULL),
(476, 108, 'Nagasaki', 'JP-42', NULL, NULL),
(477, 108, 'Kumamoto', 'JP-43', NULL, NULL),
(478, 108, 'Oita', 'JP-44', NULL, NULL),
(479, 108, 'Miyazaki', 'JP-45', NULL, NULL),
(480, 108, 'Kagoshima', 'JP-46', NULL, NULL),
(481, 108, 'Okinawa', 'JP-47', NULL, NULL),
(482, 115, 'Al Ahmadi', 'KW-AH', NULL, NULL),
(483, 115, 'Al Asimah', 'KW-KU', NULL, NULL),
(484, 115, 'Al Farwaniyah', 'KW-FA', NULL, NULL),
(485, 115, 'Al Jahra', 'KW-JA', NULL, NULL),
(486, 115, 'Hawalli', 'KW-HA', NULL, NULL),
(487, 115, 'Mubarak Al-Kabeer', 'KW-MU', NULL, NULL),
(488, 129, 'Johor', 'JHR', NULL, NULL),
(489, 129, 'Kedah', 'KDH', NULL, NULL),
(490, 129, 'Kelantan', 'KTN', NULL, NULL),
(491, 129, 'Kuala Lumpur', 'KUL', NULL, NULL),
(492, 129, 'Labuan', 'LBN', NULL, NULL),
(493, 129, 'Malacca', 'MLK', NULL, NULL),
(494, 129, 'Negeri Sembilan', 'NSN', NULL, NULL),
(495, 129, 'Pahang', 'PHG', NULL, NULL),
(496, 129, 'Penang', 'PNG', NULL, NULL),
(497, 129, 'Perak', 'PRK', NULL, NULL),
(498, 129, 'Perlis', 'PLS', NULL, NULL),
(499, 129, 'Putrajaya', 'PJY', NULL, NULL),
(500, 129, 'Sabah', 'SBH', NULL, NULL),
(501, 129, 'Sarawak', 'SWK', NULL, NULL),
(502, 129, 'Selangor', 'SGR', NULL, NULL),
(503, 129, 'Terengganu', 'TRG', NULL, NULL),
(504, 137, 'Aguascalientes', 'AGS', NULL, NULL),
(505, 137, 'Baja California', 'BC', NULL, NULL),
(506, 137, 'Baja California Sur', 'BCS', NULL, NULL),
(507, 137, 'Campeche', 'CAMP', NULL, NULL),
(508, 137, 'Chiapas', 'CHIS', NULL, NULL),
(509, 137, 'Chihuahua', 'CHIH', NULL, NULL),
(510, 137, 'Ciudad de Mexico', 'DF', NULL, NULL),
(511, 137, 'Coahuila', 'COAH', NULL, NULL),
(512, 137, 'Colima', 'COL', NULL, NULL),
(513, 137, 'Durango', 'DGO', NULL, NULL),
(514, 137, 'Guanajuato', 'GTO', NULL, NULL),
(515, 137, 'Guerrero', 'GRO', NULL, NULL),
(516, 137, 'Hidalgo', 'HGO', NULL, NULL),
(517, 137, 'Jalisco', 'JAL', NULL, NULL),
(518, 137, 'Mexico State', 'MEX', NULL, NULL),
(519, 137, 'Michoacán', 'MICH', NULL, NULL),
(520, 137, 'Morelos', 'MOR', NULL, NULL),
(521, 137, 'Nayarit', 'NAY', NULL, NULL),
(522, 137, 'Nuevo León', 'NL', NULL, NULL),
(523, 137, 'Oaxaca', 'OAX', NULL, NULL),
(524, 137, 'Puebla', 'PUE', NULL, NULL),
(525, 137, 'Querétaro', 'QRO', NULL, NULL),
(526, 137, 'Quintana Roo', 'Q ROO', NULL, NULL),
(527, 137, 'San Luis Potosí', 'SLP', NULL, NULL),
(528, 137, 'Sinaloa', 'SIN', NULL, NULL),
(529, 137, 'Sonora', 'SON', NULL, NULL),
(530, 137, 'Tabasco', 'TAB', NULL, NULL),
(531, 137, 'Tamaulipas', 'TAMPS', NULL, NULL),
(532, 137, 'Tlaxcala', 'TLAX', NULL, NULL),
(533, 137, 'Veracruz', 'VER', NULL, NULL),
(534, 137, 'Yucatán', 'YUC', NULL, NULL),
(535, 137, 'Zacatecas', 'ZAC', NULL, NULL),
(536, 151, 'Auckland', 'AUK', NULL, NULL),
(537, 151, 'Bay of Plenty', 'BOP', NULL, NULL),
(538, 151, 'Canterbury', 'CAN', NULL, NULL),
(539, 151, 'Chatham Islands', 'CIT', NULL, NULL),
(540, 151, 'Gisborne', 'GIS', NULL, NULL),
(541, 151, 'Hawke’s Bay', 'HKB', NULL, NULL),
(542, 151, 'Manawatū-Whanganui', 'MWT', NULL, NULL),
(543, 151, 'Marlborough', 'MBH', NULL, NULL),
(544, 151, 'Nelson', 'NSN', NULL, NULL),
(545, 151, 'Northland', 'NTL', NULL, NULL),
(546, 151, 'Otago', 'OTA', NULL, NULL),
(547, 151, 'Southland', 'STL', NULL, NULL),
(548, 151, 'Taranaki', 'TKI', NULL, NULL),
(549, 151, 'Tasman', 'TAS', NULL, NULL),
(550, 151, 'Waikato', 'WKO', NULL, NULL),
(551, 151, 'Wellington', 'WGN', NULL, NULL),
(552, 151, 'West Coast', 'WTC', NULL, NULL),
(553, 154, 'Abia', 'AB', NULL, NULL),
(554, 154, 'Federal Capital Territory', 'FC', NULL, NULL),
(555, 154, 'Adamawa', 'AD', NULL, NULL),
(556, 154, 'Akwa Ibom', 'AK', NULL, NULL),
(557, 154, 'Anambra', 'AN', NULL, NULL),
(558, 154, 'Bauchi', 'BA', NULL, NULL),
(559, 154, 'Bayelsa', 'BY', NULL, NULL),
(560, 154, 'Benue', 'BE', NULL, NULL),
(561, 154, 'Borno', 'BO', NULL, NULL),
(562, 154, 'Cross River', 'CR', NULL, NULL),
(563, 154, 'Delta', 'DE', NULL, NULL),
(564, 154, 'Ebonyi', 'EB', NULL, NULL),
(565, 154, 'Edo', 'ED', NULL, NULL),
(566, 154, 'Ekiti', 'EK', NULL, NULL),
(567, 154, 'Enugu', 'EN', NULL, NULL),
(568, 154, 'Gombe', 'GO', NULL, NULL),
(569, 154, 'Imo', 'IM', NULL, NULL),
(570, 154, 'Jigawa', 'JI', NULL, NULL),
(571, 154, 'Kaduna', 'KD', NULL, NULL),
(572, 154, 'Kano', 'KN', NULL, NULL),
(573, 154, 'Katsina', 'KT', NULL, NULL),
(574, 154, 'Kebbi', 'KE', NULL, NULL),
(575, 154, 'Kogi', 'KO', NULL, NULL),
(576, 154, 'Kwara', 'KW', NULL, NULL),
(577, 154, 'Lagos', 'LA', NULL, NULL),
(578, 154, 'Nasarawa', 'NA', NULL, NULL),
(579, 154, 'Niger', 'NI', NULL, NULL),
(580, 154, 'Ogun', 'OG', NULL, NULL),
(581, 154, 'Ondo', 'ON', NULL, NULL),
(582, 154, 'Osun', 'OS', NULL, NULL),
(583, 154, 'Oyo', 'OY', NULL, NULL),
(584, 154, 'Plateau', 'PL', NULL, NULL),
(585, 154, 'Rivers', 'RI', NULL, NULL),
(586, 154, 'Sokoto', 'SO', NULL, NULL),
(587, 154, 'Taraba', 'TA', NULL, NULL),
(588, 154, 'Yobe', 'YO', NULL, NULL),
(589, 154, 'Zamfara', 'ZA', NULL, NULL),
(590, 162, 'Bocas del Toro', 'PA-1', NULL, NULL),
(591, 162, 'Chiriquí', 'PA-4', NULL, NULL),
(592, 162, 'Coclé', 'PA-2', NULL, NULL),
(593, 162, 'Colón', 'PA-3', NULL, NULL),
(594, 162, 'Darién', 'PA-5', NULL, NULL),
(595, 162, 'Emberá', 'PA-EM', NULL, NULL),
(596, 162, 'Herrera', 'PA-6', NULL, NULL),
(597, 162, 'Guna Yala', 'PA-KY', NULL, NULL),
(598, 162, 'Los Santos', 'PA-7', NULL, NULL),
(599, 162, 'Ngöbe-Buglé', 'PA-NB', NULL, NULL),
(600, 162, 'Panamá', 'PA-8', NULL, NULL),
(601, 162, 'West Panamá', 'PA-10', NULL, NULL),
(602, 162, 'Veraguas', 'PA-9', NULL, NULL),
(603, 165, 'Amazonas', 'PE-AMA', NULL, NULL),
(604, 165, 'Ancash', 'PE-ANC', NULL, NULL),
(605, 165, 'Apurímac', 'PE-APU', NULL, NULL),
(606, 165, 'Arequipa', 'PE-ARE', NULL, NULL),
(607, 165, 'Ayacucho', 'PE-AYA', NULL, NULL),
(608, 165, 'Cajamarca', 'PE-CAJ', NULL, NULL),
(609, 165, 'El Callao', 'PE-CAL', NULL, NULL),
(610, 165, 'Cusco', 'PE-CUS', NULL, NULL),
(611, 165, 'Huancavelica', 'PE-HUV', NULL, NULL),
(612, 165, 'Huánuco', 'PE-HUC', NULL, NULL),
(613, 165, 'Ica', 'PE-ICA', NULL, NULL),
(614, 165, 'Junín', 'PE-JUN', NULL, NULL),
(615, 165, 'La Libertad', 'PE-LAL', NULL, NULL),
(616, 165, 'Lambayeque', 'PE-LAM', NULL, NULL),
(617, 165, 'Lima (Department)', 'PE-LIM', NULL, NULL),
(618, 165, 'Lima (Metropolitan)', 'PE-LMA', NULL, NULL),
(619, 165, 'Loreto', 'PE-LOR', NULL, NULL),
(620, 165, 'Madre de Dios', 'PE-MDD', NULL, NULL),
(621, 165, 'Moquegua', 'PE-MOQ', NULL, NULL),
(622, 165, 'Pasco', 'PE-PAS', NULL, NULL),
(623, 165, 'Piura', 'PE-PIU', NULL, NULL),
(624, 165, 'Puno', 'PE-PUN', NULL, NULL),
(625, 165, 'San Martín', 'PE-SAM', NULL, NULL),
(626, 165, 'Tacna', 'PE-TAC', NULL, NULL),
(627, 165, 'Tumbes', 'PE-TUM', NULL, NULL),
(628, 165, 'Ucayali', 'PE-UCA', NULL, NULL),
(629, 166, 'Abra', 'PH-ABR', NULL, NULL),
(630, 166, 'Agusan del Norte', 'PH-AGN', NULL, NULL),
(631, 166, 'Agusan del Sur', 'PH-AGS', NULL, NULL),
(632, 166, 'Aklan', 'PH-AKL', NULL, NULL),
(633, 166, 'Albay', 'PH-ALB', NULL, NULL),
(634, 166, 'Antique', 'PH-ANT', NULL, NULL),
(635, 166, 'Apayao', 'PH-APA', NULL, NULL),
(636, 166, 'Aurora', 'PH-AUR', NULL, NULL),
(637, 166, 'Basilan', 'PH-BAS', NULL, NULL),
(638, 166, 'Bataan', 'PH-BAN', NULL, NULL),
(639, 166, 'Batanes', 'PH-BTN', NULL, NULL),
(640, 166, 'Batangas', 'PH-BTG', NULL, NULL),
(641, 166, 'Benguet', 'PH-BEN', NULL, NULL),
(642, 166, 'Biliran', 'PH-BIL', NULL, NULL),
(643, 166, 'Bohol', 'PH-BOH', NULL, NULL),
(644, 166, 'Bukidnon', 'PH-BUK', NULL, NULL),
(645, 166, 'Bulacan', 'PH-BUL', NULL, NULL),
(646, 166, 'Cagayan', 'PH-CAG', NULL, NULL),
(647, 166, 'Camarines Norte', 'PH-CAN', NULL, NULL),
(648, 166, 'Camarines Sur', 'PH-CAS', NULL, NULL),
(649, 166, 'Camiguin', 'PH-CAM', NULL, NULL),
(650, 166, 'Capiz', 'PH-CAP', NULL, NULL),
(651, 166, 'Catanduanes', 'PH-CAT', NULL, NULL),
(652, 166, 'Cavite', 'PH-CAV', NULL, NULL),
(653, 166, 'Cebu', 'PH-CEB', NULL, NULL),
(654, 166, 'Cotabato', 'PH-NCO', NULL, NULL),
(655, 166, 'Davao Occidental', 'PH-DVO', NULL, NULL),
(656, 166, 'Davao Oriental', 'PH-DAO', NULL, NULL),
(657, 166, 'Compostela Valley', 'PH-COM', NULL, NULL),
(658, 166, 'Davao del Norte', 'PH-DAV', NULL, NULL),
(659, 166, 'Davao del Sur', 'PH-DAS', NULL, NULL),
(660, 166, 'Dinagat Islands', 'PH-DIN', NULL, NULL),
(661, 166, 'Eastern Samar', 'PH-EAS', NULL, NULL),
(662, 166, 'Guimaras', 'PH-GUI', NULL, NULL),
(663, 166, 'Ifugao', 'PH-IFU', NULL, NULL),
(664, 166, 'Ilocos Norte', 'PH-ILN', NULL, NULL),
(665, 166, 'Ilocos Sur', 'PH-ILS', NULL, NULL),
(666, 166, 'Iloilo', 'PH-ILI', NULL, NULL),
(667, 166, 'Isabela', 'PH-ISA', NULL, NULL),
(668, 166, 'Kalinga', 'PH-KAL', NULL, NULL),
(669, 166, 'La Union', 'PH-LUN', NULL, NULL),
(670, 166, 'Laguna', 'PH-LAG', NULL, NULL),
(671, 166, 'Lanao del Norte', 'PH-LAN', NULL, NULL),
(672, 166, 'Lanao del Sur', 'PH-LAS', NULL, NULL),
(673, 166, 'Leyte', 'PH-LEY', NULL, NULL),
(674, 166, 'Maguindanao', 'PH-MAG', NULL, NULL),
(675, 166, 'Marinduque', 'PH-MAD', NULL, NULL),
(676, 166, 'Masbate', 'PH-MAS', NULL, NULL),
(677, 166, 'Metro Manila', 'PH-00', NULL, NULL),
(678, 166, 'Misamis Occidental', 'PH-MSC', NULL, NULL),
(679, 166, 'Misamis Oriental', 'PH-MSR', NULL, NULL),
(680, 166, 'Mountain', 'PH-MOU', NULL, NULL),
(681, 166, 'Negros Occidental', 'PH-NEC', NULL, NULL),
(682, 166, 'Negros Oriental', 'PH-NER', NULL, NULL),
(683, 166, 'Northern Samar', 'PH-NSA', NULL, NULL),
(684, 166, 'Nueva Ecija', 'PH-NUE', NULL, NULL),
(685, 166, 'Nueva Vizcaya', 'PH-NUV', NULL, NULL),
(686, 166, 'Occidental Mindoro', 'PH-MDC', NULL, NULL),
(687, 166, 'Oriental Mindoro', 'PH-MDR', NULL, NULL),
(688, 166, 'Palawan', 'PH-PLW', NULL, NULL),
(689, 166, 'Pampanga', 'PH-PAM', NULL, NULL),
(690, 166, 'Pangasinan', 'PH-PAN', NULL, NULL),
(691, 166, 'Quezon', 'PH-QUE', NULL, NULL),
(692, 166, 'Quirino', 'PH-QUI', NULL, NULL),
(693, 166, 'Rizal', 'PH-RIZ', NULL, NULL),
(694, 166, 'Romblon', 'PH-ROM', NULL, NULL),
(695, 166, 'Samar', 'PH-WSA', NULL, NULL),
(696, 166, 'Sarangani', 'PH-SAR', NULL, NULL),
(697, 166, 'Siquijor', 'PH-SIG', NULL, NULL),
(698, 166, 'Sorsogon', 'PH-SOR', NULL, NULL),
(699, 166, 'South Cotabato', 'PH-SCO', NULL, NULL),
(700, 166, 'Southern Leyte', 'PH-SLE', NULL, NULL),
(701, 166, 'Sultan Kudarat', 'PH-SUK', NULL, NULL),
(702, 166, 'Sulu', 'PH-SLU', NULL, NULL),
(703, 166, 'Surigao del Norte', 'PH-SUN', NULL, NULL),
(704, 166, 'Surigao del Sur', 'PH-SUR', NULL, NULL),
(705, 166, 'Tarlac', 'PH-TAR', NULL, NULL),
(706, 166, 'Tawi-Tawi', 'PH-TAW', NULL, NULL),
(707, 166, 'Zambales', 'PH-ZMB', NULL, NULL),
(708, 166, 'Zamboanga Sibugay', 'PH-ZSI', NULL, NULL),
(709, 166, 'Zamboanga del Norte', 'PH-ZAN', NULL, NULL),
(710, 166, 'Zamboanga del Sur', 'PH-ZAS', NULL, NULL),
(711, 169, 'Azores', 'PT-20', NULL, NULL),
(712, 169, 'Aveiro', 'PT-01', NULL, NULL),
(713, 169, 'Beja', 'PT-02', NULL, NULL),
(714, 169, 'Braga', 'PT-03', NULL, NULL),
(715, 169, 'Bragança', 'PT-04', NULL, NULL),
(716, 169, 'Castelo Branco', 'PT-05', NULL, NULL),
(717, 169, 'Coimbra', 'PT-06', NULL, NULL),
(718, 169, 'Évora', 'PT-07', NULL, NULL),
(719, 169, 'Faro', 'PT-08', NULL, NULL),
(720, 169, 'Guarda', 'PT-09', NULL, NULL),
(721, 169, 'Leiria', 'PT-10', NULL, NULL),
(722, 169, 'Lisbon', 'PT-11', NULL, NULL),
(723, 169, 'Madeira', 'PT-30', NULL, NULL),
(724, 169, 'Portalegre', 'PT-12', NULL, NULL),
(725, 169, 'Porto', 'PT-13', NULL, NULL),
(726, 169, 'Santarém', 'PT-14', NULL, NULL),
(727, 169, 'Setúbal', 'PT-15', NULL, NULL),
(728, 169, 'Viana do Castelo', 'PT-16', NULL, NULL),
(729, 169, 'Vila Real', 'PT-17', NULL, NULL),
(730, 169, 'Viseu', 'PT-18', NULL, NULL),
(731, 172, 'Alba', 'AB', NULL, NULL),
(732, 172, 'Arad', 'AR', NULL, NULL),
(733, 172, 'Argeș', 'AG', NULL, NULL),
(734, 172, 'Bacău', 'BC', NULL, NULL),
(735, 172, 'Bihor', 'BH', NULL, NULL),
(736, 172, 'Bistriţa-Năsăud', 'BN', NULL, NULL),
(737, 172, 'Botoşani', 'BT', NULL, NULL),
(738, 172, 'Brăila', 'BR', NULL, NULL),
(739, 172, 'Braşov', 'BV', NULL, NULL),
(740, 172, 'Bucharest', 'B', NULL, NULL),
(741, 172, 'Buzău', 'BZ', NULL, NULL),
(742, 172, 'Caraș-Severin', 'CS', NULL, NULL),
(743, 172, 'Cluj', 'CJ', NULL, NULL),
(744, 172, 'Constanța', 'CT', NULL, NULL),
(745, 172, 'Covasna', 'CV', NULL, NULL),
(746, 172, 'Călărași', 'CL', NULL, NULL),
(747, 172, 'Dolj', 'DJ', NULL, NULL),
(748, 172, 'Dâmbovița', 'DB', NULL, NULL),
(749, 172, 'Galați', 'GL', NULL, NULL),
(750, 172, 'Giurgiu', 'GR', NULL, NULL),
(751, 172, 'Gorj', 'GJ', NULL, NULL),
(752, 172, 'Harghita', 'HR', NULL, NULL),
(753, 172, 'Hunedoara', 'HD', NULL, NULL),
(754, 172, 'Ialomița', 'IL', NULL, NULL),
(755, 172, 'Iași', 'IS', NULL, NULL),
(756, 172, 'Ilfov', 'IF', NULL, NULL),
(757, 172, 'Maramureş', 'MM', NULL, NULL),
(758, 172, 'Mehedinți', 'MH', NULL, NULL),
(759, 172, 'Mureş', 'MS', NULL, NULL),
(760, 172, 'Neamţ', 'NT', NULL, NULL),
(761, 172, 'Olt', 'OT', NULL, NULL),
(762, 172, 'Prahova', 'PH', NULL, NULL),
(763, 172, 'Sălaj', 'SJ', NULL, NULL),
(764, 172, 'Satu Mare', 'SM', NULL, NULL),
(765, 172, 'Sibiu', 'SB', NULL, NULL),
(766, 172, 'Suceava', 'SV', NULL, NULL),
(767, 172, 'Teleorman', 'TR', NULL, NULL),
(768, 172, 'Timiș', 'TM', NULL, NULL),
(769, 172, 'Tulcea', 'TL', NULL, NULL),
(770, 172, 'Vâlcea', 'VL', NULL, NULL),
(771, 172, 'Vaslui', 'VS', NULL, NULL),
(772, 172, 'Vrancea', 'VN', NULL, NULL),
(773, 173, 'Altai Krai', 'ALT', NULL, NULL),
(774, 173, 'Altai', 'AL', NULL, NULL),
(775, 173, 'Amur', 'AMU', NULL, NULL),
(776, 173, 'Arkhangelsk', 'ARK', NULL, NULL),
(777, 173, 'Astrakhan', 'AST', NULL, NULL),
(778, 173, 'Belgorod', 'BEL', NULL, NULL),
(779, 173, 'Bryansk', 'BRY', NULL, NULL),
(780, 173, 'Chechen', 'CE', NULL, NULL),
(781, 173, 'Chelyabinsk', 'CHE', NULL, NULL),
(782, 173, 'Chukotka Okrug', 'CHU', NULL, NULL),
(783, 173, 'Chuvash', 'CU', NULL, NULL),
(784, 173, 'Irkutsk', 'IRK', NULL, NULL),
(785, 173, 'Ivanovo', 'IVA', NULL, NULL),
(786, 173, 'Jewish', 'YEV', NULL, NULL),
(787, 173, 'Kabardino-Balkar', 'KB', NULL, NULL),
(788, 173, 'Kaliningrad', 'KGD', NULL, NULL),
(789, 173, 'Kaluga', 'KLU', NULL, NULL),
(790, 173, 'Kamchatka Krai', 'KAM', NULL, NULL),
(791, 173, 'Karachay-Cherkess', 'KC', NULL, NULL),
(792, 173, 'Kemerovo', 'KEM', NULL, NULL),
(793, 173, 'Khabarovsk Krai', 'KHA', NULL, NULL),
(794, 173, 'Khanty-Mansi', 'KHM', NULL, NULL),
(795, 173, 'Kirov', 'KIR', NULL, NULL),
(796, 173, 'Komi', 'KO', NULL, NULL),
(797, 173, 'Kostroma', 'KOS', NULL, NULL),
(798, 173, 'Krasnodar Krai', 'KDA', NULL, NULL),
(799, 173, 'Krasnoyarsk Krai', 'KYA', NULL, NULL),
(800, 173, 'Kurgan', 'KGN', NULL, NULL),
(801, 173, 'Kursk', 'KRS', NULL, NULL),
(802, 173, 'Leningrad', 'LEN', NULL, NULL),
(803, 173, 'Lipetsk', 'LIP', NULL, NULL),
(804, 173, 'Magadan', 'MAG', NULL, NULL),
(805, 173, 'Mari El', 'ME', NULL, NULL),
(806, 173, 'Moscow', 'MOW', NULL, NULL),
(807, 173, 'Moscow Province', 'MOS', NULL, NULL),
(808, 173, 'Murmansk', 'MUR', NULL, NULL),
(809, 173, 'Nizhny Novgorod', 'NIZ', NULL, NULL),
(810, 173, 'Novgorod', 'NGR', NULL, NULL),
(811, 173, 'Novosibirsk', 'NVS', NULL, NULL),
(812, 173, 'Omsk', 'OMS', NULL, NULL),
(813, 173, 'Orenburg', 'ORE', NULL, NULL),
(814, 173, 'Oryol', 'ORL', NULL, NULL),
(815, 173, 'Penza', 'PNZ', NULL, NULL),
(816, 173, 'Perm Krai', 'PER', NULL, NULL),
(817, 173, 'Primorsky Krai', 'PRI', NULL, NULL),
(818, 173, 'Pskov', 'PSK', NULL, NULL),
(819, 173, 'Adygea', 'AD', NULL, NULL),
(820, 173, 'Bashkortostan', 'BA', NULL, NULL),
(821, 173, 'Buryat', 'BU', NULL, NULL),
(822, 173, 'Dagestan', 'DA', NULL, NULL),
(823, 173, 'Ingushetia', 'IN', NULL, NULL),
(824, 173, 'Kalmykia', 'KL', NULL, NULL),
(825, 173, 'Karelia', 'KR', NULL, NULL),
(826, 173, 'Khakassia', 'KK', NULL, NULL),
(827, 173, 'Mordovia', 'MO', NULL, NULL),
(828, 173, 'North Ossetia-Alania', 'SE', NULL, NULL),
(829, 173, 'Tatarstan', 'TA', NULL, NULL),
(830, 173, 'Rostov', 'ROS', NULL, NULL),
(831, 173, 'Ryazan', 'RYA', NULL, NULL),
(832, 173, 'Saint Petersburg', 'SPE', NULL, NULL),
(833, 173, 'Sakha', 'SA', NULL, NULL),
(834, 173, 'Sakhalin', 'SAK', NULL, NULL),
(835, 173, 'Samara', 'SAM', NULL, NULL),
(836, 173, 'Saratov', 'SAR', NULL, NULL),
(837, 173, 'Smolensk', 'SMO', NULL, NULL),
(838, 173, 'Stavropol Krai', 'STA', NULL, NULL),
(839, 173, 'Sverdlovsk', 'SVE', NULL, NULL),
(840, 173, 'Tambov', 'TAM', NULL, NULL),
(841, 173, 'Tomsk', 'TOM', NULL, NULL),
(842, 173, 'Tula', 'TUL', NULL, NULL),
(843, 173, 'Tver', 'TVE', NULL, NULL),
(844, 173, 'Tyumen', 'TYU', NULL, NULL),
(845, 173, 'Tuva', 'TY', NULL, NULL),
(846, 173, 'Udmurt', 'UD', NULL, NULL),
(847, 173, 'Ulyanovsk', 'ULY', NULL, NULL),
(848, 173, 'Vladimir', 'VLA', NULL, NULL),
(849, 173, 'Volgograd', 'VGG', NULL, NULL),
(850, 173, 'Vologda', 'VLG', NULL, NULL),
(851, 173, 'Voronezh', 'VOR', NULL, NULL),
(852, 173, 'Yamalo-Nenets Okrug', 'YAN', NULL, NULL),
(853, 173, 'Yaroslavl', 'YAR', NULL, NULL),
(854, 173, 'Zabaykalsky Krai', 'ZAB', NULL, NULL),
(855, 189, 'Eastern Cape', 'EC', NULL, NULL),
(856, 189, 'Free State', 'FS', NULL, NULL),
(857, 189, 'Gauteng', 'GP', NULL, NULL),
(858, 189, 'KwaZulu-Natal', 'NL', NULL, NULL),
(859, 189, 'Limpopo', 'LP', NULL, NULL),
(860, 189, 'Mpumalanga', 'MP', NULL, NULL),
(861, 189, 'North West', 'NW', NULL, NULL),
(862, 189, 'Northern Cape', 'NC', NULL, NULL),
(863, 189, 'Western Cape', 'WC', NULL, NULL),
(864, 191, 'Busan', 'KR-26', NULL, NULL),
(865, 191, 'North Chungcheong', 'KR-43', NULL, NULL),
(866, 191, 'South Chungcheong', 'KR-44', NULL, NULL),
(867, 191, 'Daegu', 'KR-27', NULL, NULL),
(868, 191, 'Daejeon', 'KR-30', NULL, NULL),
(869, 191, 'Gangwon', 'KR-42', NULL, NULL),
(870, 191, 'Gwangju City', 'KR-29', NULL, NULL),
(871, 191, 'North Gyeongsang', 'KR-47', NULL, NULL),
(872, 191, 'Gyeonggi', 'KR-41', NULL, NULL),
(873, 191, 'South Gyeongsang', 'KR-48', NULL, NULL),
(874, 191, 'Incheon', 'KR-28', NULL, NULL),
(875, 191, 'Jeju', 'KR-49', NULL, NULL),
(876, 191, 'North Jeolla', 'KR-45', NULL, NULL),
(877, 191, 'South Jeolla', 'KR-46', NULL, NULL),
(878, 191, 'Sejong', 'KR-50', NULL, NULL),
(879, 191, 'Seoul', 'KR-11', NULL, NULL),
(880, 191, 'Ulsan', 'KR-31', NULL, NULL),
(881, 193, 'A Coruña', 'C', NULL, NULL),
(882, 193, 'Álava', 'VI', NULL, NULL),
(883, 193, 'Albacete', 'AB', NULL, NULL),
(884, 193, 'Alicante', 'A', NULL, NULL),
(885, 193, 'Almería', 'AL', NULL, NULL),
(886, 193, 'Asturias Province', 'O', NULL, NULL),
(887, 193, 'Ávila', 'AV', NULL, NULL),
(888, 193, 'Badajoz', 'BA', NULL, NULL),
(889, 193, 'Balears Province', 'PM', NULL, NULL),
(890, 193, 'Barcelona', 'B', NULL, NULL),
(891, 193, 'Burgos', 'BU', NULL, NULL),
(892, 193, 'Cáceres', 'CC', NULL, NULL),
(893, 193, 'Cádiz', 'CA', NULL, NULL),
(894, 193, 'Cantabria Province', 'S', NULL, NULL),
(895, 193, 'Castellón', 'CS', NULL, NULL),
(896, 193, 'Ceuta', 'CE', NULL, NULL),
(897, 193, 'Ciudad Real', 'CR', NULL, NULL),
(898, 193, 'Córdoba', 'CO', NULL, NULL),
(899, 193, 'Cuenca', 'CU', NULL, NULL),
(900, 193, 'Girona', 'GI', NULL, NULL),
(901, 193, 'Granada', 'GR', NULL, NULL),
(902, 193, 'Guadalajara', 'GU', NULL, NULL),
(903, 193, 'Gipuzkoa', 'SS', NULL, NULL),
(904, 193, 'Huelva', 'H', NULL, NULL),
(905, 193, 'Huesca', 'HU', NULL, NULL),
(906, 193, 'Jaén', 'J', NULL, NULL),
(907, 193, 'La Rioja Province', 'LO', NULL, NULL),
(908, 193, 'Las Palmas', 'GC', NULL, NULL),
(909, 193, 'León', 'LE', NULL, NULL),
(910, 193, 'Lleida', 'L', NULL, NULL),
(911, 193, 'Lugo', 'LU', NULL, NULL),
(912, 193, 'Madrid Province', 'M', NULL, NULL),
(913, 193, 'Málaga', 'MA', NULL, NULL),
(914, 193, 'Melilla', 'ML', NULL, NULL),
(915, 193, 'Murcia', 'MU', NULL, NULL),
(916, 193, 'Navarra', 'NA', NULL, NULL),
(917, 193, 'Ourense', 'OR', NULL, NULL),
(918, 193, 'Palencia', 'P', NULL, NULL),
(919, 193, 'Pontevedra', 'PO', NULL, NULL),
(920, 193, 'Salamanca', 'SA', NULL, NULL),
(921, 193, 'Santa Cruz de Tenerife', 'TF', NULL, NULL),
(922, 193, 'Segovia', 'SG', NULL, NULL),
(923, 193, 'Seville', 'SE', NULL, NULL),
(924, 193, 'Soria', 'SO', NULL, NULL),
(925, 193, 'Tarragona', 'T', NULL, NULL),
(926, 193, 'Teruel', 'TE', NULL, NULL),
(927, 193, 'Toledo', 'TO', NULL, NULL),
(928, 193, 'Valencia', 'V', NULL, NULL),
(929, 193, 'Valladolid', 'VA', NULL, NULL),
(930, 193, 'Biscay', 'BI', NULL, NULL),
(931, 193, 'Zamora', 'ZA', NULL, NULL),
(932, 193, 'Zaragoza', 'Z', NULL, NULL),
(933, 210, 'Amnat Charoen', 'TH-37', NULL, NULL),
(934, 210, 'Ang Thong', 'TH-15', NULL, NULL),
(935, 210, 'Bangkok', 'TH-10', NULL, NULL),
(936, 210, 'Bueng Kan', 'TH-38', NULL, NULL),
(937, 210, 'Buri Ram', 'TH-31', NULL, NULL),
(938, 210, 'Chachoengsao', 'TH-24', NULL, NULL),
(939, 210, 'Chai Nat', 'TH-18', NULL, NULL),
(940, 210, 'Chaiyaphum', 'TH-36', NULL, NULL),
(941, 210, 'Chanthaburi', 'TH-22', NULL, NULL),
(942, 210, 'Chiang Mai', 'TH-50', NULL, NULL),
(943, 210, 'Chiang Rai', 'TH-57', NULL, NULL),
(944, 210, 'Chon Buri', 'TH-20', NULL, NULL),
(945, 210, 'Chumphon', 'TH-86', NULL, NULL),
(946, 210, 'Kalasin', 'TH-46', NULL, NULL),
(947, 210, 'Kamphaeng Phet', 'TH-62', NULL, NULL),
(948, 210, 'Kanchanaburi', 'TH-71', NULL, NULL),
(949, 210, 'Khon Kaen', 'TH-40', NULL, NULL),
(950, 210, 'Krabi', 'TH-81', NULL, NULL),
(951, 210, 'Lampang', 'TH-52', NULL, NULL),
(952, 210, 'Lamphun', 'TH-51', NULL, NULL),
(953, 210, 'Loei', 'TH-42', NULL, NULL),
(954, 210, 'Lopburi', 'TH-16', NULL, NULL),
(955, 210, 'Mae Hong Son', 'TH-58', NULL, NULL),
(956, 210, 'Maha Sarakham', 'TH-44', NULL, NULL),
(957, 210, 'Mukdahan', 'TH-49', NULL, NULL),
(958, 210, 'Nakhon Nayok', 'TH-26', NULL, NULL),
(959, 210, 'Nakhon Pathom', 'TH-73', NULL, NULL),
(960, 210, 'Nakhon Phanom', 'TH-48', NULL, NULL),
(961, 210, 'Nakhon Ratchasima', 'TH-30', NULL, NULL),
(962, 210, 'Nakhon Sawan', 'TH-60', NULL, NULL),
(963, 210, 'Nakhon Si Thammarat', 'TH-80', NULL, NULL),
(964, 210, 'Nan', 'TH-55', NULL, NULL),
(965, 210, 'Narathiwat', 'TH-96', NULL, NULL),
(966, 210, 'Nong Bua Lam Phu', 'TH-39', NULL, NULL),
(967, 210, 'Nong Khai', 'TH-43', NULL, NULL),
(968, 210, 'Nonthaburi', 'TH-12', NULL, NULL),
(969, 210, 'Pathum Thani', 'TH-13', NULL, NULL),
(970, 210, 'Pattani', 'TH-94', NULL, NULL),
(971, 210, 'Pattaya', 'TH-S', NULL, NULL),
(972, 210, 'Phang Nga', 'TH-82', NULL, NULL),
(973, 210, 'Phatthalung', 'TH-93', NULL, NULL),
(974, 210, 'Phayao', 'TH-56', NULL, NULL),
(975, 210, 'Phetchabun', 'TH-67', NULL, NULL),
(976, 210, 'Phetchaburi', 'TH-76', NULL, NULL),
(977, 210, 'Phichit', 'TH-66', NULL, NULL),
(978, 210, 'Phitsanulok', 'TH-65', NULL, NULL),
(979, 210, 'Phra Nakhon Si Ayutthaya', 'TH-14', NULL, NULL),
(980, 210, 'Phrae', 'TH-54', NULL, NULL),
(981, 210, 'Phuket', 'TH-83', NULL, NULL),
(982, 210, 'Prachin Buri', 'TH-25', NULL, NULL),
(983, 210, 'Prachuap Khiri Khan', 'TH-77', NULL, NULL),
(984, 210, 'Ranong', 'TH-85', NULL, NULL),
(985, 210, 'Ratchaburi', 'TH-70', NULL, NULL),
(986, 210, 'Rayong', 'TH-21', NULL, NULL),
(987, 210, 'Roi Et', 'TH-45', NULL, NULL),
(988, 210, 'Sa Kaeo', 'TH-27', NULL, NULL),
(989, 210, 'Sakon Nakhon', 'TH-47', NULL, NULL),
(990, 210, 'Samut Prakan', 'TH-11', NULL, NULL),
(991, 210, 'Samut Sakhon', 'TH-74', NULL, NULL),
(992, 210, 'Samut Songkhram', 'TH-75', NULL, NULL),
(993, 210, 'Saraburi', 'TH-19', NULL, NULL),
(994, 210, 'Satun', 'TH-91', NULL, NULL),
(995, 210, 'Sing Buri', 'TH-17', NULL, NULL),
(996, 210, 'Si Sa Ket', 'TH-33', NULL, NULL),
(997, 210, 'Songkhla', 'TH-90', NULL, NULL),
(998, 210, 'Sukhothai', 'TH-64', NULL, NULL),
(999, 210, 'Suphanburi', 'TH-72', NULL, NULL),
(1000, 210, 'Surat Thani', 'TH-84', NULL, NULL),
(1001, 210, 'Surin', 'TH-32', NULL, NULL),
(1002, 210, 'Tak', 'TH-63', NULL, NULL),
(1003, 210, 'Trang', 'TH-92', NULL, NULL),
(1004, 210, 'Trat', 'TH-23', NULL, NULL),
(1005, 210, 'Ubon Ratchathani', 'TH-34', NULL, NULL),
(1006, 210, 'Udon Thani', 'TH-41', NULL, NULL),
(1007, 210, 'Uthai Thani', 'TH-61', NULL, NULL),
(1008, 210, 'Uttaradit', 'TH-53', NULL, NULL),
(1009, 210, 'Yala', 'TH-95', NULL, NULL),
(1010, 210, 'Yasothon', 'TH-35', NULL, NULL),
(1011, 225, 'Abu Dhabi', 'AZ', NULL, NULL),
(1012, 225, 'Ajman', 'AJ', NULL, NULL),
(1013, 225, 'Dubai', 'DU', NULL, NULL),
(1014, 225, 'Fujairah', 'FU', NULL, NULL),
(1015, 225, 'Ras al-Khaimah', 'RK', NULL, NULL),
(1016, 225, 'Sharjah', 'SH', NULL, NULL),
(1017, 225, 'Umm al-Quwain', 'UQ', NULL, NULL),
(1018, 226, 'British Forces', 'BFP', NULL, NULL),
(1019, 226, 'England', 'ENG', NULL, NULL),
(1020, 226, 'Northern Ireland', 'NIR', NULL, NULL),
(1021, 226, 'Scotland', 'SCT', NULL, NULL),
(1022, 226, 'Wales', 'WLS', NULL, NULL),
(1023, 227, 'Alabama', 'AL', NULL, NULL),
(1024, 227, 'Alaska', 'AK', NULL, NULL),
(1025, 227, 'American Samoa', 'AS', NULL, NULL),
(1026, 227, 'Arizona', 'AZ', NULL, NULL),
(1027, 227, 'Arkansas', 'AR', NULL, NULL),
(1028, 227, 'California', 'CA', NULL, NULL),
(1029, 227, 'Colorado', 'CO', NULL, NULL),
(1030, 227, 'Connecticut', 'CT', NULL, NULL),
(1031, 227, 'Delaware', 'DE', NULL, NULL),
(1032, 227, 'Washington DC', 'DC', NULL, NULL),
(1033, 227, 'Micronesia', 'FM', NULL, NULL),
(1034, 227, 'Florida', 'FL', NULL, NULL),
(1035, 227, 'Georgia', 'GA', NULL, NULL),
(1036, 227, 'Guam', 'GU', NULL, NULL),
(1037, 227, 'Hawaii', 'HI', NULL, NULL),
(1038, 227, 'Idaho', 'ID', NULL, NULL),
(1039, 227, 'Illinois', 'IL', NULL, NULL),
(1040, 227, 'Indiana', 'IN', NULL, NULL),
(1041, 227, 'Iowa', 'IA', NULL, NULL),
(1042, 227, 'Kansas', 'KS', NULL, NULL),
(1043, 227, 'Kentucky', 'KY', NULL, NULL),
(1044, 227, 'Louisiana', 'LA', NULL, NULL),
(1045, 227, 'Maine', 'ME', NULL, NULL),
(1046, 227, 'Marshall Islands', 'MH', NULL, NULL),
(1047, 227, 'Maryland', 'MD', NULL, NULL),
(1048, 227, 'Massachusetts', 'MA', NULL, NULL),
(1049, 227, 'Michigan', 'MI', NULL, NULL),
(1050, 227, 'Minnesota', 'MN', NULL, NULL),
(1051, 227, 'Mississippi', 'MS', NULL, NULL),
(1052, 227, 'Missouri', 'MO', NULL, NULL),
(1053, 227, 'Montana', 'MT', NULL, NULL),
(1054, 227, 'Nebraska', 'NE', NULL, NULL),
(1055, 227, 'Nevada', 'NV', NULL, NULL),
(1056, 227, 'New Hampshire', 'NH', NULL, NULL),
(1057, 227, 'New Jersey', 'NJ', NULL, NULL),
(1058, 227, 'New Mexico', 'NM', NULL, NULL),
(1059, 227, 'New York', 'NY', NULL, NULL),
(1060, 227, 'North Carolina', 'NC', NULL, NULL),
(1061, 227, 'North Dakota', 'ND', NULL, NULL),
(1062, 227, 'Northern Mariana Islands', 'MP', NULL, NULL),
(1063, 227, 'Ohio', 'OH', NULL, NULL),
(1064, 227, 'Oklahoma', 'OK', NULL, NULL),
(1065, 227, 'Oregon', 'OR', NULL, NULL),
(1066, 227, 'Palau', 'PW', NULL, NULL),
(1067, 227, 'Pennsylvania', 'PA', NULL, NULL),
(1068, 227, 'Puerto Rico', 'PR', NULL, NULL),
(1069, 227, 'Rhode Island', 'RI', NULL, NULL),
(1070, 227, 'South Carolina', 'SC', NULL, NULL),
(1071, 227, 'South Dakota', 'SD', NULL, NULL),
(1072, 227, 'Tennessee', 'TN', NULL, NULL),
(1073, 227, 'Texas', 'TX', NULL, NULL),
(1074, 227, 'Utah', 'UT', NULL, NULL),
(1075, 227, 'Vermont', 'VT', NULL, NULL),
(1076, 227, 'U.S. Virgin Islands', 'VI', NULL, NULL),
(1077, 227, 'Virginia', 'VA', NULL, NULL),
(1078, 227, 'Washington', 'WA', NULL, NULL),
(1079, 227, 'West Virginia', 'WV', NULL, NULL),
(1080, 227, 'Wisconsin', 'WI', NULL, NULL),
(1081, 227, 'Wyoming', 'WY', NULL, NULL),
(1082, 227, 'Armed Forces Americas', 'AA', NULL, NULL),
(1083, 227, 'Armed Forces Europe', 'AE', NULL, NULL),
(1084, 227, 'Armed Forces Pacific', 'AP', NULL, NULL),
(1085, 228, 'Artigas', 'UY-AR', NULL, NULL),
(1086, 228, 'Canelones', 'UY-CA', NULL, NULL),
(1087, 228, 'Cerro Largo', 'UY-CL', NULL, NULL),
(1088, 228, 'Colonia', 'UY-CO', NULL, NULL),
(1089, 228, 'Durazno', 'UY-DU', NULL, NULL),
(1090, 228, 'Flores', 'UY-FS', NULL, NULL),
(1091, 228, 'Florida', 'UY-FD', NULL, NULL),
(1092, 228, 'Lavalleja', 'UY-LA', NULL, NULL),
(1093, 228, 'Maldonado', 'UY-MA', NULL, NULL),
(1094, 228, 'Montevideo', 'UY-MO', NULL, NULL),
(1095, 228, 'Paysandú', 'UY-PA', NULL, NULL),
(1096, 228, 'Río Negro', 'UY-RN', NULL, NULL),
(1097, 228, 'Rivera', 'UY-RV', NULL, NULL),
(1098, 228, 'Rocha', 'UY-RO', NULL, NULL),
(1099, 228, 'Salto', 'UY-SA', NULL, NULL),
(1100, 228, 'San José', 'UY-SJ', NULL, NULL),
(1101, 228, 'Soriano', 'UY-SO', NULL, NULL),
(1102, 228, 'Tacuarembó', 'UY-TA', NULL, NULL),
(1103, 228, 'Treinta y Tres', 'UY-TT', NULL, NULL),
(1104, 232, 'Amazonas', 'VE-Z', NULL, NULL),
(1105, 232, 'Anzoátegui', 'VE-B', NULL, NULL),
(1106, 232, 'Apure', 'VE-C', NULL, NULL),
(1107, 232, 'Aragua', 'VE-D', NULL, NULL),
(1108, 232, 'Barinas', 'VE-E', NULL, NULL),
(1109, 232, 'Bolívar', 'VE-F', NULL, NULL),
(1110, 232, 'Carabobo', 'VE-G', NULL, NULL),
(1111, 232, 'Cojedes', 'VE-H', NULL, NULL),
(1112, 232, 'Delta Amacuro', 'VE-Y', NULL, NULL),
(1113, 232, 'Federal Dependencies', 'VE-W', NULL, NULL),
(1114, 232, 'Capital', 'VE-A', NULL, NULL),
(1115, 232, 'Falcón', 'VE-I', NULL, NULL),
(1116, 232, 'Guárico', 'VE-J', NULL, NULL),
(1117, 232, 'Vargas', 'VE-X', NULL, NULL),
(1118, 232, 'Lara', 'VE-K', NULL, NULL),
(1119, 232, 'Mérida', 'VE-L', NULL, NULL),
(1120, 232, 'Miranda', 'VE-M', NULL, NULL),
(1121, 232, 'Monagas', 'VE-N', NULL, NULL),
(1122, 232, 'Nueva Esparta', 'VE-O', NULL, NULL),
(1123, 232, 'Portuguesa', 'VE-P', NULL, NULL),
(1124, 232, 'Sucre', 'VE-R', NULL, NULL),
(1125, 232, 'Táchira', 'VE-S', NULL, NULL),
(1126, 232, 'Trujillo', 'VE-T', NULL, NULL),
(1127, 232, 'Yaracuy', 'VE-U', NULL, NULL),
(1128, 232, 'Zulia', 'VE-V', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `billing_addresses_order_id_foreign` (`order_id`),
  ADD KEY `billing_addresses_country_id_foreign` (`country_id`),
  ADD KEY `billing_addresses_zone_id_foreign` (`zone_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `category_variants`
--
ALTER TABLE `category_variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_variants_category_id_foreign` (`category_id`),
  ADD KEY `category_variants_variant_id_foreign` (`variant_id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collections_media_id_foreign` (`media_id`);

--
-- Indexes for table `collection_column_conditions`
--
ALTER TABLE `collection_column_conditions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collection_column_conditions_collection_id_foreign` (`collection_id`),
  ADD KEY `collection_column_conditions_column_condition_id_foreign` (`column_condition_id`),
  ADD KEY `collection_column_conditions_condition_id_foreign` (`condition_id`);

--
-- Indexes for table `column_conditions`
--
ALTER TABLE `column_conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `column_conditions_conditions`
--
ALTER TABLE `column_conditions_conditions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `column_conditions_conditions_column_id_foreign` (`column_id`),
  ADD KEY `column_conditions_conditions_condition_id_foreign` (`condition_id`);

--
-- Indexes for table `comment_media`
--
ALTER TABLE `comment_media`
  ADD KEY `comment_media_comment_id_foreign` (`comment_id`),
  ADD KEY `comment_media_media_id_foreign` (`media_id`);

--
-- Indexes for table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coupons_code_unique` (`code`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_country_id_foreign` (`country_id`),
  ADD KEY `customers_address_id_foreign` (`address_id`);

--
-- Indexes for table `customer_addresses`
--
ALTER TABLE `customer_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_addresses_customer_id_foreign` (`customer_id`),
  ADD KEY `customer_addresses_country_id_foreign` (`country_id`),
  ADD KEY `customer_addresses_zone_id_foreign` (`zone_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount_collections`
--
ALTER TABLE `discount_collections`
  ADD KEY `discount_collections_discount_id_foreign` (`discount_id`),
  ADD KEY `discount_collections_collection_id_foreign` (`collection_id`);

--
-- Indexes for table `discount_countries`
--
ALTER TABLE `discount_countries`
  ADD KEY `discount_countries_discount_id_foreign` (`discount_id`),
  ADD KEY `discount_countries_country_id_foreign` (`country_id`);

--
-- Indexes for table `discount_customers`
--
ALTER TABLE `discount_customers`
  ADD KEY `discount_customers_discount_id_foreign` (`discount_id`),
  ADD KEY `discount_customers_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `discount_get_collections`
--
ALTER TABLE `discount_get_collections`
  ADD KEY `discount_get_collections_discount_id_foreign` (`discount_id`),
  ADD KEY `discount_get_collections_collection_id_foreign` (`collection_id`);

--
-- Indexes for table `discount_get_products`
--
ALTER TABLE `discount_get_products`
  ADD KEY `discount_get_products_discount_id_foreign` (`discount_id`),
  ADD KEY `discount_get_products_product_id_foreign` (`product_id`);

--
-- Indexes for table `discount_products`
--
ALTER TABLE `discount_products`
  ADD KEY `discount_products_discount_id_foreign` (`discount_id`),
  ADD KEY `discount_products_product_id_foreign` (`product_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `flags`
--
ALTER TABLE `flags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `flags_comment_id_foreign` (`comment_id`),
  ADD KEY `flags_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `hics`
--
ALTER TABLE `hics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventories`
--
ALTER TABLE `inventories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventories_product_id_foreign` (`product_id`),
  ADD KEY `inventories_media_id_foreign` (`media_id`);

--
-- Indexes for table `inventory_variations`
--
ALTER TABLE `inventory_variations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_variations_inventory_id_foreign` (`inventory_id`),
  ADD KEY `inventory_variations_variant_id_foreign` (`variant_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metas`
--
ALTER TABLE `metas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_discount_id_foreign` (`discount_id`),
  ADD KEY `orders_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`);

--
-- Indexes for table `others`
--
ALTER TABLE `others`
  ADD PRIMARY KEY (`id`),
  ADD KEY `others_content_id_foreign` (`content_id`);

--
-- Indexes for table `other_media`
--
ALTER TABLE `other_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `product_collections`
--
ALTER TABLE `product_collections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_collections_collection_id_foreign` (`collection_id`),
  ADD KEY `product_collections_product_id_foreign` (`product_id`);

--
-- Indexes for table `product_comments`
--
ALTER TABLE `product_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_comments_product_id_foreign` (`product_id`),
  ADD KEY `product_comments_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `product_likes`
--
ALTER TABLE `product_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_likes_comment_id_foreign` (`comment_id`),
  ADD KEY `product_likes_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `product_media`
--
ALTER TABLE `product_media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_media_product_id_foreign` (`product_id`),
  ADD KEY `product_media_media_id_foreign` (`media_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shipping_addresses_order_id_foreign` (`order_id`),
  ADD KEY `shipping_addresses_country_id_foreign` (`country_id`),
  ADD KEY `shipping_addresses_zone_id_foreign` (`zone_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_name_unique` (`name`),
  ADD UNIQUE KEY `tags_slug_unique` (`slug`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_permission`
--
ALTER TABLE `user_permission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_permission_user_id_foreign` (`user_id`),
  ADD KEY `user_permission_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zones`
--
ALTER TABLE `zones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `zones_country_id_foreign` (`country_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `category_variants`
--
ALTER TABLE `category_variants`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `collection_column_conditions`
--
ALTER TABLE `collection_column_conditions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `column_conditions`
--
ALTER TABLE `column_conditions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `column_conditions_conditions`
--
ALTER TABLE `column_conditions_conditions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contents`
--
ALTER TABLE `contents`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=239;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `customer_addresses`
--
ALTER TABLE `customer_addresses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flags`
--
ALTER TABLE `flags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hics`
--
ALTER TABLE `hics`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `inventories`
--
ALTER TABLE `inventories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=174;

--
-- AUTO_INCREMENT for table `inventory_variations`
--
ALTER TABLE `inventory_variations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `metas`
--
ALTER TABLE `metas`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `others`
--
ALTER TABLE `others`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `other_media`
--
ALTER TABLE `other_media`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `product_collections`
--
ALTER TABLE `product_collections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `product_comments`
--
ALTER TABLE `product_comments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `product_likes`
--
ALTER TABLE `product_likes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_media`
--
ALTER TABLE `product_media`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user_permission`
--
ALTER TABLE `user_permission`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `zones`
--
ALTER TABLE `zones`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1129;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD CONSTRAINT `billing_addresses_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `billing_addresses_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `billing_addresses_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `category_variants`
--
ALTER TABLE `category_variants`
  ADD CONSTRAINT `category_variants_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `category_variants_variant_id_foreign` FOREIGN KEY (`variant_id`) REFERENCES `variants` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `collections`
--
ALTER TABLE `collections`
  ADD CONSTRAINT `collections_media_id_foreign` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `collection_column_conditions`
--
ALTER TABLE `collection_column_conditions`
  ADD CONSTRAINT `collection_column_conditions_collection_id_foreign` FOREIGN KEY (`collection_id`) REFERENCES `collections` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `collection_column_conditions_column_condition_id_foreign` FOREIGN KEY (`column_condition_id`) REFERENCES `column_conditions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `collection_column_conditions_condition_id_foreign` FOREIGN KEY (`condition_id`) REFERENCES `conditions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `column_conditions_conditions`
--
ALTER TABLE `column_conditions_conditions`
  ADD CONSTRAINT `column_conditions_conditions_column_id_foreign` FOREIGN KEY (`column_id`) REFERENCES `column_conditions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `column_conditions_conditions_condition_id_foreign` FOREIGN KEY (`condition_id`) REFERENCES `conditions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment_media`
--
ALTER TABLE `comment_media`
  ADD CONSTRAINT `comment_media_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `product_comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_media_media_id_foreign` FOREIGN KEY (`media_id`) REFERENCES `other_media` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `customer_addresses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `customers_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `customer_addresses`
--
ALTER TABLE `customer_addresses`
  ADD CONSTRAINT `customer_addresses_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `customer_addresses_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `customer_addresses_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discount_collections`
--
ALTER TABLE `discount_collections`
  ADD CONSTRAINT `discount_collections_collection_id_foreign` FOREIGN KEY (`collection_id`) REFERENCES `collections` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `discount_collections_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discount_countries`
--
ALTER TABLE `discount_countries`
  ADD CONSTRAINT `discount_countries_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `discount_countries_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discount_customers`
--
ALTER TABLE `discount_customers`
  ADD CONSTRAINT `discount_customers_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `discount_customers_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discount_get_collections`
--
ALTER TABLE `discount_get_collections`
  ADD CONSTRAINT `discount_get_collections_collection_id_foreign` FOREIGN KEY (`collection_id`) REFERENCES `collections` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `discount_get_collections_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discount_get_products`
--
ALTER TABLE `discount_get_products`
  ADD CONSTRAINT `discount_get_products_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `discount_get_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discount_products`
--
ALTER TABLE `discount_products`
  ADD CONSTRAINT `discount_products_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `discount_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `flags`
--
ALTER TABLE `flags`
  ADD CONSTRAINT `flags_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `product_comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `flags_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `inventories`
--
ALTER TABLE `inventories`
  ADD CONSTRAINT `inventories_media_id_foreign` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `inventories_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `inventory_variations`
--
ALTER TABLE `inventory_variations`
  ADD CONSTRAINT `inventory_variations_inventory_id_foreign` FOREIGN KEY (`inventory_id`) REFERENCES `inventories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `inventory_variations_variant_id_foreign` FOREIGN KEY (`variant_id`) REFERENCES `variants` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `others`
--
ALTER TABLE `others`
  ADD CONSTRAINT `others_content_id_foreign` FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_collections`
--
ALTER TABLE `product_collections`
  ADD CONSTRAINT `product_collections_collection_id_foreign` FOREIGN KEY (`collection_id`) REFERENCES `collections` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_collections_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_comments`
--
ALTER TABLE `product_comments`
  ADD CONSTRAINT `product_comments_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_comments_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_likes`
--
ALTER TABLE `product_likes`
  ADD CONSTRAINT `product_likes_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `product_comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_likes_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_media`
--
ALTER TABLE `product_media`
  ADD CONSTRAINT `product_media_media_id_foreign` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_media_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  ADD CONSTRAINT `shipping_addresses_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shipping_addresses_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shipping_addresses_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_permission`
--
ALTER TABLE `user_permission`
  ADD CONSTRAINT `user_permission_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_permission_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `zones`
--
ALTER TABLE `zones`
  ADD CONSTRAINT `zones_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
