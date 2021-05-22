-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Maio-2021 às 21:42
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `backend_hospital`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `condicoesfisicas`
--

CREATE TABLE `condicoesfisicas` (
  `id` int(11) NOT NULL,
  `peso` decimal(10,0) NOT NULL,
  `altura` decimal(10,0) NOT NULL,
  `tipo_sanguineo` varchar(255) NOT NULL,
  `uso_medicamentos` varchar(255) NOT NULL,
  `consume_cigarro` char(1) NOT NULL,
  `consume_alcool` char(1) NOT NULL,
  `pratica_exercicios` char(1) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `condicoesfisicas`
--

INSERT INTO `condicoesfisicas` (`id`, `peso`, `altura`, `tipo_sanguineo`, `uso_medicamentos`, `consume_cigarro`, `consume_alcool`, `pratica_exercicios`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, '90', '170', 'A', 'Não', '0', '0', '1', 1, '2021-05-15 17:38:01', '2021-05-15 17:38:01'),
(2, '81', '176', 'B', 'Não', '0', '0', '0', 2, '2021-05-15 17:38:29', '2021-05-15 17:38:29'),
(3, '81', '176', 'O', 'Não', '0', '0', '0', 3, '2021-05-15 17:38:29', '2021-05-15 17:38:29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `numero` int(18) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `cep` varchar(14) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `endereco`
--

INSERT INTO `endereco` (`id`, `logradouro`, `numero`, `cidade`, `bairro`, `estado`, `cep`, `created_at`, `updated_at`) VALUES
(1, 'Rua Guaianazes', 781, 'Praia Grande', 'Tupi', 'SP', '11703-160', '2021-05-15 17:27:53', '2021-05-15 17:27:53'),
(2, 'Rua Mogi Mirim', 73, 'Santo André', 'Santa Maria', 'SP', '09071-320', '2021-05-15 17:27:53', '2021-05-15 17:27:53'),
(3, 'Rua Canastra', 156, 'São Paulo', 'Jardim Marisa', 'SP', '05108-040', '2021-05-15 17:27:53', '2021-05-15 17:27:53');

-- --------------------------------------------------------

--
-- Estrutura da tabela `estadocivil`
--

CREATE TABLE `estadocivil` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estadocivil`
--

INSERT INTO `estadocivil` (`id`, `descricao`, `created_at`, `updated_at`) VALUES
(1, 'casado(a)', '2021-05-15 17:25:26', '2021-05-15 17:25:26'),
(2, 'solteiro(a)', '2021-05-15 17:25:26', '2021-05-15 17:25:26'),
(3, 'divorciado(a)', '2021-05-15 17:25:26', '2021-05-15 17:25:26');

-- --------------------------------------------------------

--
-- Estrutura da tabela `historicomedico`
--

CREATE TABLE `historicomedico` (
  `id` int(11) NOT NULL,
  `fraturamentos` varchar(255) NOT NULL,
  `acidentes` varchar(255) NOT NULL,
  `cirurgias` varchar(255) NOT NULL,
  `doencas_cronicas` varchar(255) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `historicomedico`
--

INSERT INTO `historicomedico` (`id`, `fraturamentos`, `acidentes`, `cirurgias`, `doencas_cronicas`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, 'Não', 'Sim - Moto', 'Não', 'Não', 1, '2021-05-15 17:44:03', '2021-05-15 17:44:03'),
(2, 'Não', 'Não', 'Não', 'Não', 2, '2021-05-15 17:44:03', '2021-05-15 17:44:03'),
(3, 'Não', 'Não', 'Não', 'Não', 3, '2021-05-15 17:44:43', '2021-05-15 17:44:43');

-- --------------------------------------------------------

--
-- Estrutura da tabela `historicovacina`
--

CREATE TABLE `historicovacina` (
  `id` int(11) NOT NULL,
  `covid` char(1) NOT NULL,
  `febreamarela` char(1) NOT NULL,
  `sarampo` char(1) NOT NULL,
  `caxumba` char(1) NOT NULL,
  `catapora` char(1) NOT NULL,
  `rubeula` char(1) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `historicovacina`
--

INSERT INTO `historicovacina` (`id`, `covid`, `febreamarela`, `sarampo`, `caxumba`, `catapora`, `rubeula`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, '1', '1', '0', '0', '0', '0', 1, '2021-05-15 17:47:24', '2021-05-15 17:47:24'),
(2, '0', '1', '0', '1', '0', '0', 2, '2021-05-15 17:47:24', '2021-05-15 17:47:24'),
(3, '1', '0', '0', '1', '0', '0', 3, '2021-05-15 17:47:24', '2021-05-15 17:47:24');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1618872118398, 'createEstadocivil1618872118398'),
(2, 1618873403463, 'createNivel1618873403463'),
(3, 1618873512610, 'createSus1618873512610'),
(4, 1618873598723, 'createEndereco1618873598723'),
(5, 1618875554517, 'createUsuario1618875554517'),
(6, 1618878336631, 'createTelefone1618878336631'),
(7, 1621035693145, 'createHistoricovacina1621035693145'),
(8, 1621037920924, 'createHistoricomedico1621037920924'),
(9, 1621086910494, 'createCondicoesfisicas1621086910494');

-- --------------------------------------------------------

--
-- Estrutura da tabela `nivel`
--

CREATE TABLE `nivel` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `nivel`
--

INSERT INTO `nivel` (`id`, `descricao`, `created_at`, `updated_at`) VALUES
(1, 'usuário', '2021-05-15 17:19:20', '2021-05-15 17:19:20'),
(2, 'funcionário', '2021-05-15 17:19:37', '2021-05-15 17:19:37');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sus`
--

CREATE TABLE `sus` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `sus`
--

INSERT INTO `sus` (`id`, `descricao`, `created_at`, `updated_at`) VALUES
(1, '195853349430002', '2021-05-15 17:26:43', '2021-05-15 17:26:43'),
(2, '172443759360009', '2021-05-15 17:26:43', '2021-05-15 17:26:43'),
(3, '915627678922003', '2021-05-15 17:26:43', '2021-05-15 17:26:43');

-- --------------------------------------------------------

--
-- Estrutura da tabela `telefone`
--

CREATE TABLE `telefone` (
  `id` int(11) NOT NULL,
  `descricao` varchar(20) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `telefone`
--

INSERT INTO `telefone` (`id`, `descricao`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, '(14) 99726-5072', 1, '2021-05-15 18:43:20', '2021-05-15 18:43:20'),
(2, '(11) 99726-5072', 2, '2021-05-15 18:43:20', '2021-05-15 18:43:20'),
(3, '(31) 99726-5072', 3, '2021-05-15 18:43:20', '2021-05-15 18:43:20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `rg` varchar(15) NOT NULL,
  `dataNasc` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sexo` varchar(10) NOT NULL,
  `id_endereco` int(11) NOT NULL,
  `id_sus` int(11) NOT NULL,
  `id_estadocivil` int(11) NOT NULL,
  `id_nivel` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `password`, `nome`, `cpf`, `rg`, `dataNasc`, `sexo`, `id_endereco`, `id_sus`, `id_estadocivil`, `id_nivel`, `created_at`, `updated_at`) VALUES
(1, 'rodp80@hotmail.com', '$2b$08$EfmvrNSw87D9WIphhNAFmeYsAY06C528UI/gDV1a25h4ouVEP6At.', 'Rodrigo Pereira Costa e Silva', '728.373.888-66', '46.858.187-X', '2021-05-15 17:28:53', 'Masculino', 1, 1, 1, 2, '2021-05-15 17:28:15', '2021-05-15 17:28:15'),
(2, 'limaandamanda87@gmail.com', '$2b$08$EfmvrNSw87D9WIphhNAFmeYsAY06C528UI/gDV1a25h4ouVEP6At.', 'Amanda Lima de Andrade', '180.675.638-29', '33.555.700-4', '0000-00-00 00:00:00', 'Feminino', 2, 2, 2, 1, '2021-05-15 17:29:35', '2021-05-15 17:29:35'),
(3, 'gflopes71@gmail.com', '$2b$08$EfmvrNSw87D9WIphhNAFmeYsAY06C528UI/gDV1a25h4ouVEP6At.', 'Geraldo Roberto Ferreira Lopes', '536.197.058-10', '27.748.223-9', '0000-00-00 00:00:00', 'Masculino', 3, 3, 3, 1, '2021-05-15 17:29:52', '2021-05-15 17:29:52');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `condicoesfisicas`
--
ALTER TABLE `condicoesfisicas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_condicoes_fk` (`id_usuario`);

--
-- Índices para tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `estadocivil`
--
ALTER TABLE `estadocivil`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `historicomedico`
--
ALTER TABLE `historicomedico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_medico_fk` (`id_usuario`);

--
-- Índices para tabela `historicovacina`
--
ALTER TABLE `historicovacina`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_vacina_fk` (`id_usuario`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sus`
--
ALTER TABLE `sus`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `telefone`
--
ALTER TABLE `telefone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_telefone_fk` (`id_usuario`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UQ_2863682842e688ca198eb25c124` (`email`),
  ADD KEY `usuario_endereco_fk` (`id_endereco`),
  ADD KEY `sus_usuario_fk` (`id_sus`),
  ADD KEY `estadocivil_usuario_fk` (`id_estadocivil`),
  ADD KEY `nivel_usuario_fk` (`id_nivel`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `condicoesfisicas`
--
ALTER TABLE `condicoesfisicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `estadocivil`
--
ALTER TABLE `estadocivil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `historicomedico`
--
ALTER TABLE `historicomedico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `historicovacina`
--
ALTER TABLE `historicovacina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `nivel`
--
ALTER TABLE `nivel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `sus`
--
ALTER TABLE `sus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `telefone`
--
ALTER TABLE `telefone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `condicoesfisicas`
--
ALTER TABLE `condicoesfisicas`
  ADD CONSTRAINT `usuario_condicoes_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historicomedico`
--
ALTER TABLE `historicomedico`
  ADD CONSTRAINT `usuario_medico_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historicovacina`
--
ALTER TABLE `historicovacina`
  ADD CONSTRAINT `usuario_vacina_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `telefone`
--
ALTER TABLE `telefone`
  ADD CONSTRAINT `usuario_telefone_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `estadocivil_usuario_fk` FOREIGN KEY (`id_estadocivil`) REFERENCES `estadocivil` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nivel_usuario_fk` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sus_usuario_fk` FOREIGN KEY (`id_sus`) REFERENCES `sus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_endereco_fk` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
