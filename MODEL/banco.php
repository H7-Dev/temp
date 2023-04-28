<?php

require_once("../init.php");
class Banco{
    protected $mysqli;
    public function __construct(){
        $this->conexao();
    }
    private function conexao(){
        $this->mysqli = new mysqli(BD_SERVIDOR, BD_USUARIO , BD_SENHA, BD_BANCO);
    }
}
?>
