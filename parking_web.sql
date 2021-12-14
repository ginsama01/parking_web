-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 14, 2021 lúc 04:15 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `parking_web`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `address`, `phone`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'user1', 'Huy25082001', 'Nguyễn Quang ', 'Huyyy', 'ginsama2002@gmail.com', 'Bắc Ninh', '0962922713', '729040', '2021-12-06 07:28:26', '2021-12-14 14:25:08'),
(2, 'user2', 'Parkingweb123', 'Nguyễn Thị', 'Thư', 'thumomm10@gmail.com', 'Thị trấn Thứa', '0963224945', NULL, '2021-12-06 07:30:08', '2021-12-06 07:30:08'),
(3, 'owner1', 'Parkingweb123', 'Nguyễn Thanh', 'Huyền', 'huyento2k1@gmail.com', 'Dĩnh Trì, Bắc Giang', '0352956958', NULL, '2021-12-06 07:30:47', '2021-12-06 07:30:47'),
(5, 'admin1', '123456', 'Nguyễn Quang', 'Huy', 'ginsama2001@gmail.com', 'Viêm Xá, Hòa Long', '0962922713', NULL, '2021-12-06 08:32:33', '2021-12-06 08:32:33'),
(14, 'user3', 'Parkingweb123', 'Nguyễn Quang', 'Huy', 'ginsama2001@gmail.com', NULL, NULL, NULL, '2021-12-14 15:08:23', '2021-12-14 15:08:23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`admin_id`, `description`, `createdAt`, `updatedAt`) VALUES
(5, NULL, '2021-12-06 08:34:05', '2021-12-06 08:34:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banlist`
--

CREATE TABLE `banlist` (
  `ban_email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `banlist`
--

INSERT INTO `banlist` (`ban_email`, `createdAt`, `updatedAt`) VALUES
('ginsama2003@gmail.com', '2021-12-13 05:26:06', '2021-12-13 05:26:06'),
('ginsama2004@gmail.com', '2021-12-14 12:57:43', '2021-12-14 12:57:43'),
('ginsama2005@gmail.com', '2021-12-14 13:10:26', '2021-12-14 13:10:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `car`
--

CREATE TABLE `car` (
  `number_plate` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `cartype` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `user1_id` int(11) NOT NULL,
  `user2_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `cmt_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`cmt_id`, `rela_id`, `rating`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, 5, 'Rất tốt', '2021-12-06 10:15:11', '2021-12-06 10:15:11'),
(2, 1, 4, 'aaaa', '2021-12-07 13:00:19', '2021-12-07 13:00:19'),
(4, 1, 5, 'Good', '2021-12-08 06:06:47', '2021-12-08 06:06:47'),
(5, 1, 1, '1111', '2021-12-08 06:20:24', '2021-12-08 06:20:24'),
(6, 1, 4, 'a', '2021-12-08 06:30:14', '2021-12-08 06:30:14'),
(7, 1, 5, 'abcd', '2021-12-08 07:07:00', '2021-12-08 07:07:00'),
(8, 3, 5, 'goood', '2021-12-08 07:13:59', '2021-12-08 07:13:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite`
--

CREATE TABLE `favorite` (
  `flist_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `favorite`
--

INSERT INTO `favorite` (`flist_id`, `rela_id`, `createdAt`, `updatedAt`) VALUES
(3, 4, '2021-12-08 17:04:07', '2021-12-08 17:04:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `owner`
--

CREATE TABLE `owner` (
  `own_id` int(11) NOT NULL,
  `isactivated` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `owner`
--

INSERT INTO `owner` (`own_id`, `isactivated`, `createdAt`, `updatedAt`) VALUES
(3, 0, '2021-12-06 07:30:47', '2021-12-06 07:30:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `park`
--

CREATE TABLE `park` (
  `park_id` int(11) NOT NULL,
  `own_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_space` int(11) NOT NULL,
  `total_in` int(11) DEFAULT 0,
  `open_time` varchar(255) NOT NULL,
  `isActivated` tinyint(4) NOT NULL DEFAULT 0,
  `location` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `hasCamera` tinyint(4) NOT NULL,
  `hasRoof` tinyint(4) NOT NULL,
  `allowOvernight` tinyint(4) NOT NULL,
  `allowBooking` tinyint(4) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `park`
--

INSERT INTO `park` (`park_id`, `own_id`, `name`, `total_space`, `total_in`, `open_time`, `isActivated`, `location`, `price`, `hasCamera`, `hasRoof`, `allowOvernight`, `allowBooking`, `description`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Bãi gửi xe công viên Thủ Lệ', 100, 0, '09:00 - 23:00', 1, 'Công viên Thủ Lệ', 10000, 1, 1, 0, 1, 'Bãi đỗ xe dành cho những người tham quan công viên Thủ Lệ và những khu vực xung quanh.', 'images/park-image-1-1.jpg,images/park-image-1-2.jpg,images/park-image-1-3.jpg,images/park-image-1-4.jpg', '2021-12-06 08:41:14', '2021-12-14 13:40:13'),
(3, 3, 'Bãi đỗ sinh viên', 100, 1, '06:00 - 23:00', 1, '144 Xuân Thủy, Cầu Giấy, Hà Nội', 10000, 0, 1, 0, 0, 'Bãi đỗ phục vụ cán bộ, giảng viên, sinh viên các trường xung quanh khu đại học Quốc Gia Hà Nội ở Xuân Thủy, giá cả bình dân.', 'images/park-image-3-3.jpg,images/park-image-3-4.jpg,images/park-image-3-1.jpg,images/park-image-3-2.jpg', '2021-12-06 08:49:30', '2021-12-09 15:55:46'),
(4, 3, 'Bãi đỗ Buồn Đời', 500, 0, 'Cả ngày', 1, 'Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội', 3000, 1, 1, 1, 1, 'Bãi đỗ bên bờ sông Hồng', 'images/park-image-4-4.jpg,images/park-image-4-2.jpg,images/park-image-4-3.jpg,images/park-image-4-5.jpg,images/park-image-4-6.jpg', '2021-12-06 08:49:30', '2021-12-14 04:51:06'),
(5, 3, 'Bãi đỗ sông Hồng', 500, 0, '18:28 - 09:30', 1, 'Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội', 30000, 1, 1, 1, 1, 'Bãi đỗ bên bờ sông Hồng', 'images/park-image-5-1.jpg,images/park-image-5-2.jpg', '2021-12-09 06:30:51', '2021-12-13 06:22:43'),
(15, 3, 'Tạo thử', 5000, 0, 'Cả ngày', 0, '{\"name\":\"Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam\",\"location\":{\"lat\":21.027964,\"lng\":105.8510132}}', 100000, 1, 1, 1, 1, 'Nothing', NULL, '2021-12-14 13:16:13', '2021-12-14 13:16:13'),
(16, 3, 'Tạo thử next', 400, 0, '2021-12-14T00:30:00.000Z - 2021-12-14T13:40:00.000Z', 0, 'Hạ Long, Quảng Ninh, Việt Nam', 10011, 0, 1, 0, 1, 'Nothing', 'images/park-image-16-1.jpg', '2021-12-14 13:25:08', '2021-12-14 13:38:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parking`
--

CREATE TABLE `parking` (
  `parking_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `parking`
--

INSERT INTO `parking` (`parking_id`, `rela_id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Hoàn thành', '2021-12-08 18:13:28', '2021-12-08 18:13:28'),
(2, 3, 'Hoàn thành', '2021-12-08 18:15:00', '2021-12-08 18:15:00'),
(4, 3, 'Đang đỗ xe', '2021-12-09 16:43:14', '2021-12-09 16:43:14'),
(5, 5, 'Đang đỗ xe', '2021-12-14 08:39:51', '2021-12-14 08:39:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `park_user`
--

CREATE TABLE `park_user` (
  `rela_id` int(11) NOT NULL,
  `park_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `park_user`
--

INSERT INTO `park_user` (`rela_id`, `park_id`, `user_id`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, NULL, '2021-12-06 10:15:11', '2021-12-06 10:15:11'),
(3, 1, 1, NULL, '2021-12-08 07:13:59', '2021-12-08 07:13:59'),
(4, 4, 1, NULL, '2021-12-08 17:04:07', '2021-12-08 17:04:07'),
(5, 1, 2, NULL, '2021-12-09 17:03:11', '2021-12-09 17:03:11'),
(8, 5, 1, NULL, '2021-12-10 10:04:26', '2021-12-10 10:04:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pending`
--

CREATE TABLE `pending` (
  `pending_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `time_start` datetime NOT NULL,
  `status` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `pending`
--

INSERT INTO `pending` (`pending_id`, `rela_id`, `time_start`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2021-12-08 18:19:52', 'Đang đặt trước', '2021-12-08 18:19:52', '2021-12-14 12:49:48'),
(3, 3, '2021-12-08 18:22:08', 'Đã hoàn thành', '2021-12-08 18:22:08', '2021-12-09 16:43:13'),
(4, 5, '2021-12-09 17:04:47', 'Đã hoàn thành', '2021-12-09 17:04:47', '2021-12-14 08:39:51'),
(5, 5, '2021-12-18 14:53:29', 'Chủ bãi hủy', '2021-12-10 14:55:52', '2021-12-14 12:43:45'),
(7, 3, '2021-12-14 13:51:17', 'Đang đặt trước', '2021-12-14 12:52:20', '2021-12-14 12:55:10'),
(8, 3, '2021-12-17 13:46:36', 'Đang đặt trước', '2021-12-14 13:46:51', '2021-12-14 13:46:51'),
(9, 3, '2021-12-14 15:04:00', 'Đang đặt trước', '2021-12-14 14:34:00', '2021-12-14 14:34:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `report`
--

CREATE TABLE `report` (
  `report_id` int(11) NOT NULL,
  `rela_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `search`
--

CREATE TABLE `search` (
  `search_id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `timein` datetime DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `parks` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`parks`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `search`
--

INSERT INTO `search` (`search_id`, `address`, `timein`, `lat`, `lng`, `parks`, `createdAt`, `updatedAt`) VALUES
(1, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 08:34:28', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 08:34:30', '2021-12-11 08:34:30'),
(2, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 08:43:38', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 08:43:40', '2021-12-11 08:43:40'),
(3, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 08:43:38', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 08:45:00', '2021-12-11 08:45:00'),
(4, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 08:43:38', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 08:45:33', '2021-12-11 08:45:33'),
(5, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 08:43:38', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 08:49:10', '2021-12-11 08:49:10'),
(6, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-16 09:18:06', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 09:18:07', '2021-12-11 09:18:07'),
(7, 'Ha Noi Garden City, Thạch Bàn, Long Biên, Long Biên Hà Nội, Việt Nam', '2021-12-08 09:24:37', 21.0193, 105.92, '[]', '2021-12-11 09:24:39', '2021-12-11 09:24:39'),
(8, 'Ha Noi Garden City, Thạch Bàn, Long Biên, Long Biên Hà Nội, Việt Nam', '2021-12-08 09:24:37', 21.0193, 105.92, '[{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"13.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"15.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"15.6 km\"}]', '2021-12-11 09:25:40', '2021-12-11 09:25:40'),
(9, 'Sân Vận Động Mỹ Đình, Mỹ Đình 1, Từ Liêm, Hà Nội, Việt Nam', '2021-12-15 09:34:30', 21.0205, 105.765, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.8 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7 m\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"4.7 km\"}]', '2021-12-11 09:34:32', '2021-12-11 09:34:32'),
(10, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 09:45:14', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 09:45:17', '2021-12-11 09:45:17'),
(11, 'Mỹ Đình, Từ Liêm, Hà Nội, Việt Nam', '2021-12-14 09:59:19', 21.0235, 105.773, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"4.0 km\"}]', '2021-12-11 09:59:20', '2021-12-11 09:59:20'),
(12, 'Bắc Ninh, Việt Nam', '2021-12-04 10:22:51', 21.1782, 106.071, '[]', '2021-12-11 10:22:52', '2021-12-11 10:22:52'),
(13, 'Bắc Ninh, Việt Nam', '2021-12-14 13:05:43', 21.1782, 106.071, '[]', '2021-12-11 13:05:45', '2021-12-11 13:05:45'),
(14, 'Bắc Ninh, Việt Nam', '2021-12-10 13:07:19', 21.1782, 106.071, '[]', '2021-12-11 13:07:20', '2021-12-11 13:07:20'),
(15, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:08:24', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:08:25', '2021-12-11 13:08:25'),
(16, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:08:24', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:09:10', '2021-12-11 13:09:10'),
(17, 'Bắc Ninh, Việt Nam', '2021-12-14 13:08:24', 21.1782, 106.071, '[]', '2021-12-11 13:09:19', '2021-12-11 13:09:19'),
(18, 'Hạ Long, Quảng Ninh, Việt Nam', '2021-12-14 13:08:24', 20.9712, 107.045, '[]', '2021-12-11 13:09:26', '2021-12-11 13:09:26'),
(19, 'Hạ Long, Quảng Ninh, Việt Nam', '2021-12-15 13:13:42', 20.9712, 107.045, '[]', '2021-12-11 13:13:43', '2021-12-11 13:13:43'),
(20, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:17:12', '2021-12-11 13:17:12'),
(21, 'Bac ninh, tt. Chờ, Yên Phong, Bắc Ninh, Việt Nam', '2021-12-15 13:13:42', 21.2005, 105.952, '[]', '2021-12-11 13:18:16', '2021-12-11 13:18:16'),
(22, 'Mỹ Đình, Từ Liêm, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 21.0235, 105.773, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"4.0 km\"}]', '2021-12-11 13:18:34', '2021-12-11 13:18:34'),
(23, 'Hạ Long, Quảng Ninh, Việt Nam', '2021-12-15 13:13:42', 20.9712, 107.045, '[]', '2021-12-11 13:18:42', '2021-12-11 13:18:42'),
(24, 'Thành phố Hồ Chí Minh, Việt Nam', '2021-12-15 13:13:42', 10.8231, 106.63, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,721 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,722 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"1,722 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"}]', '2021-12-11 13:18:50', '2021-12-11 13:18:50'),
(25, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:20:01', '2021-12-11 13:20:01'),
(26, 'Bắc Ninh, Việt Nam', '2021-12-15 13:13:42', 21.1782, 106.071, '[]', '2021-12-11 13:20:11', '2021-12-11 13:20:11'),
(27, 'Thành phố Hồ Chí Minh, Việt Nam', '2021-12-15 13:13:42', 10.8231, 106.63, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,721 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,722 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"1,722 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"}]', '2021-12-11 13:20:19', '2021-12-11 13:20:19'),
(28, 'Thành phố Hồ Chí Minh, Việt Nam', '2021-12-15 13:13:42', 10.8231, 106.63, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,721 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,722 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"1,722 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,710 km\"}]', '2021-12-11 13:21:10', '2021-12-11 13:21:10'),
(29, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"}]', '2021-12-11 13:22:08', '2021-12-11 13:22:08'),
(30, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:02', '2021-12-11 13:24:02'),
(31, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:09', '2021-12-11 13:24:09'),
(32, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:11', '2021-12-11 13:24:11'),
(33, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:11', '2021-12-11 13:24:11'),
(34, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:12', '2021-12-11 13:24:12'),
(35, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:26', '2021-12-11 13:24:26'),
(36, 'Học viện báo chí tuyên truyền, Phố Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội, Việt Nam', '2021-12-15 13:13:42', 20.9972, 105.846, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.4 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"5.0 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"4.6 km\"}]', '2021-12-11 13:24:29', '2021-12-11 13:24:29'),
(37, 'Bắc Giang, Việt Nam', '2021-12-11 13:24:57', 21.282, 106.197, '[]', '2021-12-11 13:24:59', '2021-12-11 13:24:59'),
(38, 'Công viên Hòa Bình, Phạm Văn Đồng, phường Xuân Đỉnh, Bắc Từ Liêm, Hà Nội, Việt Nam', '2021-12-08 13:25:27', 21.063, 105.788, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.5 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"5.4 km\"}]', '2021-12-11 13:26:04', '2021-12-11 13:26:04'),
(39, 'Công viên Hòa Bình, Phạm Văn Đồng, phường Xuân Đỉnh, Bắc Từ Liêm, Hà Nội, Việt Nam', '2021-12-08 13:25:27', 21.063, 105.788, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"7.5 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"5.4 km\"}]', '2021-12-11 13:26:35', '2021-12-11 13:26:35'),
(40, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-08 13:25:27', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"}]', '2021-12-11 13:26:43', '2021-12-11 13:26:43'),
(41, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-10 13:27:01', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"}]', '2021-12-11 13:27:03', '2021-12-11 13:27:03'),
(42, 'Bắc Ninh, Việt Nam', '2021-12-14 13:27:12', 21.1782, 106.071, '[]', '2021-12-11 13:27:13', '2021-12-11 13:27:13'),
(43, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-14 13:27:12', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"}]', '2021-12-11 13:27:22', '2021-12-11 13:27:22'),
(44, 'Công viên Hòa Bình, Nguyễn Chí Thanh, Phường 9 (Quận 5), Quận 5, Thành phố Hồ Chí Minh, Việt Nam', '2021-12-14 13:27:12', 10.7607, 106.674, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,714 km\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1,715 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"1,715 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,703 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,703 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"1,703 km\"}]', '2021-12-11 13:27:40', '2021-12-11 13:27:40'),
(45, 'Sông Hồng Thủ Đô, Tích Sơn, Vĩnh Yên, Vĩnh Phúc, Việt Nam', '2021-12-14 13:27:12', 21.3021, 105.585, '[]', '2021-12-11 13:27:50', '2021-12-11 13:27:50'),
(46, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:27:12', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:29:15', '2021-12-11 13:29:15'),
(47, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:27:12', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:38:19', '2021-12-11 13:38:19'),
(48, 'Bắc Ninh, Việt Nam', '2021-12-14 13:27:12', 21.1782, 106.071, '[]', '2021-12-11 13:38:26', '2021-12-11 13:38:26'),
(49, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:27:12', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:38:35', '2021-12-11 13:38:35'),
(50, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-10 13:42:01', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:42:03', '2021-12-11 13:42:03'),
(51, 'Bắc Ninh, Việt Nam', '2021-12-11 13:42:19', 21.1782, 106.071, '[]', '2021-12-11 13:42:21', '2021-12-11 13:42:21'),
(52, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 13:44:53', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-11 13:44:55', '2021-12-11 13:44:55'),
(53, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-12 13:46:37', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":2,\"name\":\"Mỹ Đình park\",\"image\":\"images/park-image-2.jpg\",\"price\":40000,\"location\":\"Sân vận động quốc gia Mỹ Đình, Nam Từ Liêm, Hà Nội\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.4 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"}]', '2021-12-11 13:46:40', '2021-12-11 13:46:40'),
(54, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 07:20:26', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-12 07:20:28', '2021-12-12 07:20:28'),
(55, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-10 07:55:37', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-12 07:55:39', '2021-12-12 07:55:39'),
(56, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 08:05:39', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-12 08:05:41', '2021-12-12 08:05:41'),
(57, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-10 10:13:23', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-12 10:13:26', '2021-12-12 10:13:26'),
(58, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 16:36:51', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-12 16:36:53', '2021-12-12 16:36:53'),
(59, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 01:43:54', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 01:43:57', '2021-12-13 01:43:57'),
(60, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 07:54:07', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 07:54:09', '2021-12-13 07:54:09'),
(61, 'Ha Noi Garden City, Thạch Bàn, Long Biên, Long Biên Hà Nội, Việt Nam', '2021-12-11 08:02:07', 21.0193, 105.92, '[]', '2021-12-13 08:02:09', '2021-12-13 08:02:09'),
(62, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-10 08:30:49', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 08:30:52', '2021-12-13 08:30:52');
INSERT INTO `search` (`search_id`, `address`, `timein`, `lat`, `lng`, `parks`, `createdAt`, `updatedAt`) VALUES
(63, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 08:38:15', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 08:38:17', '2021-12-13 08:38:17'),
(64, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 10:12:02', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 10:12:03', '2021-12-13 10:12:03'),
(65, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 10:51:21', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 10:51:24', '2021-12-13 10:51:24'),
(66, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 13:40:35', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.4 km\"}]', '2021-12-13 13:40:38', '2021-12-13 13:40:38'),
(67, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 05:51:46', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"},{\"id\":6,\"name\":\"Bãi đỗ xàm xí\",\"image\":\"images/park-image-6-1.jpg\",\"price\":10000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":0,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"}]', '2021-12-14 05:51:51', '2021-12-14 05:51:51'),
(68, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-11 12:31:13', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"}]', '2021-12-14 12:31:15', '2021-12-14 12:31:15'),
(69, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-18 12:32:24', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"}]', '2021-12-14 12:32:28', '2021-12-14 12:32:28'),
(70, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:50:07', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"}]', '2021-12-14 12:50:24', '2021-12-14 12:50:24'),
(71, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-14 13:51:17', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"}]', '2021-12-14 12:51:23', '2021-12-14 12:51:23'),
(72, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-17 13:46:36', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"},{\"id\":15,\"name\":\"Tạo thử\",\"image\":\"\",\"price\":100000,\"location\":\"{\\\"name\\\":\\\"Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam\\\",\\\"location\\\":{\\\"lat\\\":21.027964,\\\"lng\\\":105.8510132}}\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"5.1 km\"}]', '2021-12-14 13:46:42', '2021-12-14 13:46:42'),
(73, 'Công viên Thủ Lệ, Đường Bưởi, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', '2021-12-17 13:46:36', 21.0306, 105.806, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"1 m\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"2.5 km\"},{\"id\":15,\"name\":\"Tạo thử\",\"image\":\"\",\"price\":100000,\"location\":\"{\\\"name\\\":\\\"Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam\\\",\\\"location\\\":{\\\"lat\\\":21.027964,\\\"lng\\\":105.8510132}}\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"5.1 km\"}]', '2021-12-14 13:46:44', '2021-12-14 13:46:44'),
(74, 'Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam', '2021-12-17 14:29:16', 21.028, 105.851, '[{\"id\":1,\"name\":\"Bãi gửi xe công viên Thủ Lệ\",\"image\":\"images/park-image-1-1.jpg\",\"price\":10000,\"location\":\"Công viên Thủ Lệ\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":0,\"rate\":\"5.0000\",\"numOfRate\":1,\"distance\":\"6.1 km\"},{\"id\":3,\"name\":\"Bãi đỗ sinh viên\",\"image\":\"images/park-image-3-3.jpg\",\"price\":10000,\"location\":\"144 Xuân Thủy, Cầu Giấy, Hà Nội\",\"hasCamera\":0,\"hasRoof\":1,\"allowBooking\":0,\"allowOvernight\":0,\"rate\":\"4.0000\",\"numOfRate\":6,\"distance\":\"8.2 km\"},{\"id\":4,\"name\":\"Bãi đỗ Buồn Đời\",\"image\":\"images/park-image-4-4.jpg\",\"price\":3000,\"location\":\"Số 3 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.7 km\"},{\"id\":5,\"name\":\"Bãi đỗ sông Hồng\",\"image\":\"images/park-image-5-1.jpg\",\"price\":30000,\"location\":\"Số 1 Trần Thủ Độ, quận Hoàng Mai, Hà Nội\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"8.3 km\"},{\"id\":15,\"name\":\"Tạo thử\",\"image\":\"\",\"price\":100000,\"location\":\"{\\\"name\\\":\\\"Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam\\\",\\\"location\\\":{\\\"lat\\\":21.027964,\\\"lng\\\":105.8510132}}\",\"hasCamera\":1,\"hasRoof\":1,\"allowBooking\":1,\"allowOvernight\":1,\"rate\":0,\"numOfRate\":0,\"distance\":\"1 m\"}]', '2021-12-14 14:29:22', '2021-12-14 14:29:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `isactivated` tinyint(4) NOT NULL,
  `penalty` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `isactivated`, `penalty`, `createdAt`, `updatedAt`) VALUES
(1, 1, 4, '2021-12-06 07:28:26', '2021-12-14 12:49:48'),
(2, 1, 0, '2021-12-06 07:30:08', '2021-12-06 07:30:08'),
(14, 1, 0, '2021-12-14 15:08:23', '2021-12-14 15:09:28');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Chỉ mục cho bảng `banlist`
--
ALTER TABLE `banlist`
  ADD PRIMARY KEY (`ban_email`);

--
-- Chỉ mục cho bảng `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`number_plate`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`cmt_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`flist_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`own_id`);

--
-- Chỉ mục cho bảng `park`
--
ALTER TABLE `park`
  ADD PRIMARY KEY (`park_id`),
  ADD KEY `own_id` (`own_id`);

--
-- Chỉ mục cho bảng `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`parking_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `park_user`
--
ALTER TABLE `park_user`
  ADD PRIMARY KEY (`rela_id`),
  ADD KEY `park_id` (`park_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `pending`
--
ALTER TABLE `pending`
  ADD PRIMARY KEY (`pending_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `rela_id` (`rela_id`);

--
-- Chỉ mục cho bảng `search`
--
ALTER TABLE `search`
  ADD PRIMARY KEY (`search_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `cmt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `favorite`
--
ALTER TABLE `favorite`
  MODIFY `flist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `park`
--
ALTER TABLE `park`
  MODIFY `park_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `parking`
--
ALTER TABLE `parking`
  MODIFY `parking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `park_user`
--
ALTER TABLE `park_user`
  MODIFY `rela_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `pending`
--
ALTER TABLE `pending`
  MODIFY `pending_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `search`
--
ALTER TABLE `search`
  MODIFY `search_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `car_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `owner`
--
ALTER TABLE `owner`
  ADD CONSTRAINT `owner_ibfk_1` FOREIGN KEY (`own_id`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `park`
--
ALTER TABLE `park`
  ADD CONSTRAINT `park_ibfk_1` FOREIGN KEY (`own_id`) REFERENCES `owner` (`own_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `parking`
--
ALTER TABLE `parking`
  ADD CONSTRAINT `parking_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `park_user`
--
ALTER TABLE `park_user`
  ADD CONSTRAINT `park_user_ibfk_1` FOREIGN KEY (`park_id`) REFERENCES `park` (`park_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `park_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `pending`
--
ALTER TABLE `pending`
  ADD CONSTRAINT `pending_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`rela_id`) REFERENCES `park_user` (`rela_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
