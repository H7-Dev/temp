-- exclui a tabela "tb_baralhos" criada anteriormente
-- DROP TABLE tb_baralhos;
USE db_flashCardBar;

-- *Criar tb_marcadores
CREATE TABLE IF NOT EXISTS tb_marca (
    idMarcador VARCHAR(255) NOT NULL,
    c_dtc DATE NOT NULL DEFAULT DATE(NOW()),
    c_dtMod TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (idMarcador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabela de marcadores para a tb_baralhos. Abreviação tb_marca';


SELECT * FROM tb_marca;
SHOW COLUMNS FROM tb_marca;
DESC tb_marca;

INSERT INTO tb_marca 
    (idMarcador) 
VALUES 
    ('Marcador E');

UPDATE tb_marca 
SET idMarcador = 'Marcador A' 
WHERE idMarcador = 'Marcador AXX';

ALTER TABLE tb_marca MODIFY c_dtc DATE  NULL;
ALTER TABLE tb_marca MODIFY c_dtc DATE NOT NULL DEFAULT DATE(NOW());

-- remove coluna não mais necessária
ALTER TABLE tb_marca DROP COLUMN idMarca;
