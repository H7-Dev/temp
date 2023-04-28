---= cria um banco de dados chamado "db_flashCardBar" com codificação de caracteres "utf8mb4" e formato de ordenação "utf8mb4_unicode_ci", caso ele ainda não exista
CREATE DATABASE IF NOT EXISTS db_flashCardBar CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- seleciona o banco de dados criado
USE db_flashCardBar;

-- cria uma tabela chamada "tb_baralhos" com cinco colunas
-- "idBar" (inteiro não nulo), 
-- "c_bar" (texto não nulo),
-- "c_dt" (data não nula), 
-- "c_dtc" (data não nula com valor padrão igual à data atual)
-- "c_dtMod" (marca de data/hora não nula com valor padrão igual ao momento atual e atualização automática em caso de alterações futuras)
-- ❗ define a chave primária da tabela como a coluna "idBar"
-- ❗ especifica que a tabela será criada no mecanismo de armazenamento InnoDB com formato de caracteres "utf8mb4" e formato de ordenação "utf8mb4_unicode_ci"

-- *Criar tb_baralhos
CREATE TABLE IF NOT EXISTS tb_baralhos (
    idBar VARCHAR(255) NOT NULL,
    c_bar VARCHAR(255) NOT NULL,
    c_dt DATE NOT NULL,
    c_dtc DATE NOT NULL DEFAULT CURRENT_DATE,
    c_dtMod TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (idBar)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabela de usuários do sistema';

-- realiza uma consulta para exibir todos os dados da tabela "tb_baralhos", que ainda estará vazia neste momento
SELECT * FROM tb_baralhos;

-- insere um registro na tabela "tb_baralhos" com o valor "2" na coluna "idBar",
-- "Meu segundo baralho" na coluna "c_bar" e "2023-04-10" na coluna "c_dt"
INSERT INTO tb_baralhos (idBar, c_bar, c_dt) VALUES (2, 'Meu segundo baralho', '2023-04-10');

-- exclui a tabela "tb_baralhos" criada anteriormente
-- DROP TABLE tb_baralhos;

ALTER TABLE tb_baralhos
ADD c_descr VARCHAR(255) NULL AFTER c_dt;


-- *Criar tb_marcadores
CREATE TABLE IF NOT EXISTS tb_marca (
    idMarca VARCHAR(255) NOT NULL,
    c_marcador VARCHAR(255) NOT NULL,
    c_dtc DATE NOT NULL DEFAULT CURRENT_DATE,
    c_dtMod TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (idMarca)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabela de marcadores para a tb_baralhos. Abreviação tb_marca';


SELECT * FROM tb_marca;

