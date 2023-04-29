    <?php
    require_once("../model/dao.baralhos.php");


    class FavoritoController {

        private $baralhosDAO;
    
        public function __construct() {
            $this->baralhosDAO = new BaralhosDAO();
        }
    
        public function atualizarBaralhoFavorito($dados) {
            // Validação dos dados de entrada
            if (!isset($dados['novoValor']) || !isset($dados['idBar'])) {
                echo json_encode(['success' => false, 'message' => 'Dados de entrada incompletos.'],JSON_UNESCAPED_UNICODE);
                return;
            }
        
            $novoValor = $dados['novoValor'];
            $idBar = $dados['idBar'];
        
            // Verificação se o baralho com o ID fornecido existe na tabela
            $baralho = $this->baralhosDAO->getBaralhoById($idBar);
            if (!$baralho) {
                echo json_encode(['success' => false, 'message' => 'Baralho não encontrado.'], JSON_UNESCAPED_UNICODE);
                return;
            }
        
            // Verificação se o novo valor é um caractere numérico dentro do intervalo permitido
            if (!is_numeric($novoValor) || $novoValor < 0 || $novoValor > 1) {
                echo json_encode(['success' => false, 'message' => 'Novo valor inválido. O favorito deve ser um número de 0 a 1.'], JSON_UNESCAPED_UNICODE);
                return;
            }
        
            // Execução da atualização
            try {
                $this->baralhosDAO->atualizarCampoFavorito($novoValor, $idBar);
                echo json_encode(['success' => true, 'message' => 'Favorito atualizado com sucesso.'], JSON_UNESCAPED_UNICODE);
                return; 
            } catch (Exception $e) {
                echo json_encode(['success' => false, 'message' => 'Erro ao atualizar favorito: ' . $e->getMessage()], JSON_UNESCAPED_UNICODE);
                return ;
            }
        }
    }
    $dados = [
        'idBar' => 3,
        'novoValor' => '2'
    ];
    $favoritoController = new FavoritoController();
    $favoritoController->atualizarBaralhoFavorito($dados);

    ?>
