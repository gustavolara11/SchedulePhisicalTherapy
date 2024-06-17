-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/06/2024 às 18:34
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pt_cp`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(140) NOT NULL,
  `birthday` date NOT NULL,
  `adress` varchar(240) NOT NULL,
  `city` varchar(140) NOT NULL,
  `phone` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `patients`
--

INSERT INTO `patients` (`id`, `name`, `birthday`, `adress`, `city`, `phone`) VALUES
(1, 'Luis Gustavo Ferreira Lara', '1988-01-26', 'Rua Araçatuba, 580', 'Londrina', '(43) 99816-03'),
(5, 'Ana Flávia Albuquerque Lara', '1996-04-04', 'Rua Araçatuba, 580', 'Londrina', '(43) 99694-97'),
(9, 'Arthur B Espirito Santo', '2001-11-05', 'Rua passos 312', 'londrina', '4398005725'),
(38, '', '0000-00-00', '', '', ''),
(39, '', '0000-00-00', '', '', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `schedule`
--

CREATE TABLE `schedule` (
  `ID` int(11) NOT NULL,
  `date` date NOT NULL,
  `Hour` time NOT NULL,
  `NameID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(30) NOT NULL,
  `Nome` varchar(140) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `NameID` (`NameID`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `schedule`
--
ALTER TABLE `schedule`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`NameID`) REFERENCES `patients` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
