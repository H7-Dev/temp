SET SQL_SAFE_UPDATES = 0;
USE db_flashCardBar;
SELECT * FROM tb_baralhos;
SHOW COLUMNS FROM tb_baralhos;
ALTER TABLE tb_baralhos ADD c_subTituloBar VARCHAR(100) NULL AFTER c_bar;
ALTER TABLE tb_baralhos MODIFY c_subTituloBar VARCHAR(100) NULL DEFAULT '';

SELECT * FROM tb_baralhos order by c_bar;

UPDATE tb_baralhos 
SET 
    c_subTituloBar = 'Medicina II'
WHERE idBar = 5;

INSERT INTO tb_baralhos
    (idBar, c_bar, c_dt, c_descr, fk_marcador) 
    VALUES 
    (13, 'Baralho #13', '2023-04-27', 'Meu décimo terceiro baralho', 'Marcador A');
    
    
    
    
    