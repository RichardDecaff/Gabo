-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2018 a las 20:39:42
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_sistema`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_agenda`
--

CREATE TABLE `tabla_agenda` (
  `agenda_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `titulo` varchar(35) NOT NULL,
  `notas` varchar(200) NOT NULL,
  `fecha_creada` datetime NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `visibilidad` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `resultado` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tabla_agenda`
--

INSERT INTO `tabla_agenda` (`agenda_id`, `usuario_id`, `titulo`, `notas`, `fecha_creada`, `ubicacion`, `visibilidad`, `cliente_id`, `resultado`) VALUES
(1, 1, 'Titulo', 'Estas son notas de la cita', '2018-03-12 00:00:00', 'En ningun lugar.', 1, 1, 'Agendado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_cliente`
--

CREATE TABLE `tabla_cliente` (
  `cliente_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tabla_cliente`
--

INSERT INTO `tabla_cliente` (`cliente_id`, `nombre`, `telefono`, `estado`, `fecha_registro`) VALUES
(1, 'Señor Hipotetico', '22222222', 1, '2018-03-12 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_usuario`
--

CREATE TABLE `tabla_usuario` (
  `usuario_id` int(11) NOT NULL,
  `correo` varchar(35) NOT NULL,
  `login` varchar(25) NOT NULL,
  `nivel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tabla_usuario`
--

INSERT INTO `tabla_usuario` (`usuario_id`, `correo`, `login`, `nivel`) VALUES
(1, 'ricardorafaelmares@gmail.com', 'password', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla_agenda`
--
ALTER TABLE `tabla_agenda`
  ADD PRIMARY KEY (`agenda_id`),
  ADD KEY `creado_por` (`usuario_id`),
  ADD KEY `cliente_agendado` (`cliente_id`);

--
-- Indices de la tabla `tabla_cliente`
--
ALTER TABLE `tabla_cliente`
  ADD PRIMARY KEY (`cliente_id`);

--
-- Indices de la tabla `tabla_usuario`
--
ALTER TABLE `tabla_usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla_agenda`
--
ALTER TABLE `tabla_agenda`
  MODIFY `agenda_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tabla_cliente`
--
ALTER TABLE `tabla_cliente`
  MODIFY `cliente_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tabla_usuario`
--
ALTER TABLE `tabla_usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tabla_agenda`
--
ALTER TABLE `tabla_agenda`
  ADD CONSTRAINT `tabla_agenda_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `tabla_usuario` (`usuario_id`),
  ADD CONSTRAINT `tabla_agenda_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `tabla_cliente` (`cliente_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
