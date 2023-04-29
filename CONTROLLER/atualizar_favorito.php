    <?php
    require_once("../model/dao.baralhos.php");


    class FavoritoController {

        private $baralhosDAO;
    
        public function __construct() {
            $this->baralhosDAO = new BaralhosDAO();
        }
    
        public function atualizarFavorito($dados) {
            try {
                $this->baralhosDAO->atualizarFavorito($dados['idBar'], $dados['novoValor']);
                echo json_encode(['success' => true, 'message' => 'Favorito atualizado com sucesso.']);
            } catch (Exception $e) {
                echo json_encode(['success' => false, 'message' => 'Erro ao atualizar favorito: ' . $e->getMessage()]);
            }
        }
    
    }

    $dados = [
        'idBar' => 2,
        'novoValor' => 1
    ];
    
    $favoritoController = new FavoritoController();
    $favoritoController->atualizarFavorito($dados);

    ?>
