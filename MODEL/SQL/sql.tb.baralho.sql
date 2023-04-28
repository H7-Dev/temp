-- exclui a tabela "tb_baralhos" criada anteriormente
 DROP TABLE tb_baralhos;
 CREATE DATABASE IF NOT EXISTS db_flashCardBar CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE db_flashCardBar;

-- tb_baralhos

CREATE TABLE IF NOT EXISTS tb_baralhos (
    idBar VARCHAR(255) NOT NULL,
    c_bar VARCHAR(255) NOT NULL,
    c_dt DATE NOT NULL,
    c_dtc DATE NOT NULL DEFAULT DATE(NOW()),
    c_dtMod TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (idBar)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabela de usuários do sistema';

SELECT * FROM tb_baralhos; -- seleciona todos os registro de um tabel
SHOW COLUMNS FROM tb_baralhos; -- mostra as colunas a partir da tabela selecionada
DESC tb_baralhos;
SET SQL_SAFE_UPDATES = 0;
SET SQL_SAFE_UPDATES = 1;

DELETE FROM tb_baralhos WHERE idBar = 8; -- deleta um registro de um tabela 

SELECT * FROM tb_baralhos;
SELECT * FROM tb_baralhos order by c_bar;
INSERT INTO tb_baralhos 
    (idBar, c_bar, c_dt) 
    VALUES 
    (1, 'Baralho #001', '2023-01-01');


SELECT * FROM tb_baralhos;
INSERT INTO tb_baralhos 
    (idBar, c_bar, c_dt, c_descr) 
    VALUES 
    (12, 'Baralho #012', '2023-01-10', 'Meu décimo segundo baralho');



SELECT * FROM tb_baralhos;
UPDATE tb_baralhos
SET 
  c_bar = 'Baralho #010',
  c_dt = '2022-04-10',
  c_descr = 'Meu Primeiro Baralho',
  fk_marcador = 'Marcador A'
WHERE idBar = 10;



-- modifica as propriedade de uma  coluna selecionada c_descr
ALTER TABLE tb_baralhos MODIFY c_descr varchar(1545)  NULL;
ALTER TABLE tb_baralhos MODIFY c_dtc DATE  NULL;
ALTER TABLE tb_baralhos MODIFY c_dtc DATE  NULL DEFAULT DATE(NOW());


-- adiciona coluna à tb_baralhos, após um determinda coluna
ALTER TABLE tb_baralhos ADD c_descr VARCHAR(1545) NULL AFTER c_dt;


-- adiciona coluna para chave estrangeira
ALTER TABLE tb_baralhos ADD fk_marcador VARCHAR(255) NULL AFTER c_dtMod;

--  cria chave estrangeira
ALTER TABLE tb_baralhos ADD CONSTRAINT fk_tb_marca
FOREIGN KEY (fk_marcador) REFERENCES tb_marca(idMarcador)
ON DELETE SET NULL
ON UPDATE CASCADE;



-- INSERT INTO tb_baralhos 
--     (idBar, c_bar, c_dt, c_descr, fk_Marcador) 
--     VALUES 
--     (1, 'Baralho #001', '2023-01-01', 'Meu primeiro Baralho', 'Marcador A'),
--     (2, 'Baralho #002', '2023-01-02', 'Meu segundo Baralho', NULL),
--     (3, 'Baralho #003', '2023-01-03', 'Meu terceiro Baralho', 'Marcador A'),
--     (4, 'Baralho #004', '2023-01-04', 'Meu quarto Baralho', 'Marcador A'),
--     (5, 'Baralho #005', '2023-01-05', 'Meu quinto Baralho', 'Marcador B'),
--     (6, 'Baralho #006', '2023-01-06', 'Meu sexto Baralho', 'Marcador B'),
--     (7, 'Baralho #007', '2023-01-07', 'Meu setimo Baralho', 'Marcador C');

ALTER TABLE tb_baralhos DROP COLUMN fk_Marcador;
-- ALTER TABLE tb_baralhos DROP FOREIGN KEY idMarcador;


SELECT tb_baralhos.*, tb_marca.*
FROM tb_baralhos
LEFT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador;


SELECT tb_baralhos.*, tb_marca.*
FROM tb_baralhos
LEFT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.c_bar = 'Baralho #001';


SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
LEFT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador;

SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
inner JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador;


SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
LEFT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
-- WHERE tb_baralhos.c_bar = 'Baralho #001';
 WHERE tb_baralhos.c_bar = 'Baralho #002';

SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
LEFT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.fk_Marcador = '';

SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
INNER JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.fk_Marcador = 'Marcador A';

SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
LEFT JOIN tb_marca ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.fk_Marcador = 'Marcador A' OR tb_baralhos.fk_Marcador = '';

SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
LEFT JOIN tb_marca ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.fk_Marcador = 'Marcador A' OR tb_baralhos.fk_Marcador IS NULL OR tb_baralhos.fk_Marcador = '';

SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
LEFT JOIN tb_marca ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.fk_Marcador LIKE '%_%';




-- RIGHT JOIN 
SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
RIGHT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador;



SELECT tb_baralhos.idBar, tb_baralhos.c_bar, tb_baralhos.fk_Marcador, tb_marca.idMarcador
FROM tb_baralhos
RIGHT JOIN tb_marca
ON tb_baralhos.fk_Marcador = tb_marca.idMarcador
WHERE tb_baralhos.fk_Marcador = 'Marcador A';





