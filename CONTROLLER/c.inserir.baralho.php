<?php
require_once("../model/dao.baralhos.php");
class InseirBaralhoController{

    private $cadastro;

    public function __construct(){
        $this->cadastro = new Cadastro();
        $this->incluir();
    }

    private function incluir(){
        $this->cadastro->setBaralho($_POST['in_baralho']);
        $this->cadastro->setDt($_POST['in_dt']);
        $result = $this->cadastro->incluir();
      
          if ($result >= 1) {
            echo "<script>
                   if (confirm('Registro foi incluído com sucesso! \\nO baralho: " . $_POST['in_baralho'] . "\\nData: " . $_POST['in_dt'] . "\\n Deseja ir para a página inicial?')) {
                     window.location.href = './../VIEW/index.php';
                   } else {
                     history.back();
                   }
                 </script>";
        } else {
            echo "<script>alert('Erro ao gravar registro! Verifique se o baralho não está duplicado.');history.back()</script>";
        }
        
          
    }
    
}
new InseirBaralhoController();
