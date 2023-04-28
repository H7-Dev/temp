<?php
require_once("../model/dao.baralhos.php");

class editarController {

    private $editar;
    private $livrosDAO;

    private $livro;

    public function __construct($idBar) {
        $this->livrosDAO = new baralhosDAO();
        $this->livro = $this->livrosDAO->encontrarIDBaralho($idBar);

        // verifica se o formulário foi enviado
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
            $this->editarFormulario($_POST);
        }
    }
    public function editarFormulario($dados) {
        $c_bar = $dados['in_baralho'];
        $c_dt = $dados['in_dt'];
        $idBar = $dados['in_idBar'];


        try {
            $this->livrosDAO->atualizarBaralho($c_bar, $c_dt,$idBar);
            echo "<script>
                    alert('O livro:\\n ✔️ $c_bar foi atualizado com sucesso!');
                    document.location='../view/index.php'
                </script>";
        } catch (Exception $e) {
            echo "<script>
                    alert('⛔ Erro ao gravar registro: " . $e->getMessage() . "');
                    history.back()
                </script>";
        }
    }
    
    public function __get($coluna) {
        if (isset($this->livro[$coluna])) {
            return $this->livro[$coluna];
        }
        return null;
    }
}
$idBar = filter_input(INPUT_GET, 'in_idBar');
$editar = new editarController($idBar);

// echo "Nome do livro: " . $editar->c_bar . "<br>";
// echo "Autor do livro: " . $editar->c_dt . "<br>";
// echo "Quantidade em estoque: " . $editar->quantidade . "<br>";
// echo "Preço do livro: " . $editar->preco . "<br>";
// echo "Data de publicação: " . $editar->data . "<br>";
// echo "Flag do livro: " . $editar->flag . "<br>";
?>
