
<?php
require_once("../model/dao.baralhos.php");

class Deleta {
    private $deleta;

    public function __construct($idBar) {
        $this->deleta = new BaralhosDAO();
        
        // Verifica se o usuário confirmou a exclusão
        if (isset($_POST['confirmar']) && $_POST['confirmar'] == 'Sim') {
            if ($this->deleta->deleteLivro($idBar) == true) {
                echo "<script>alert('Registro deletado com sucesso!');document.location='../view/index.php'</script>";
            } else {
                echo "<script>alert('Erro ao deletar registro!');history.back()</script>";
            }
        } else {
            // Renderiza a página de confirmação de exclusão
            $baralho = $this->deleta->encontrarIDBaralho($idBar);
            $titulo = "Confirmação de Exclusão";
            // include "../view/header.php";
?>
            <h1>Tem certeza que deseja excluir este registro?</h1>
            <p>Baralho: <?php echo $baralho['c_bar']; ?></p>
            <form method="post">
                <input type="submit" name="confirmar" value="Sim">
                <input type="button" value="Não" onclick="history.back()">
            </form>
<?php
            // include "../view/footer.php";
        }
    }
}

new Deleta($_GET['id']);
?>

