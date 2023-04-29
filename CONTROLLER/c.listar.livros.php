<?php

require_once("../MODEL/dao.baralhos.php");

class ListarBaralhoController {
    private $livrosDAO;
    public function __construct() {
        $this->livrosDAO = new baralhosDAO();
        $this->criarTabela();
    }
    private function criarTabela() {
        $tb_baralhos = $this->livrosDAO->getBaralhos();
        if (empty($tb_baralhos)) {
            // echo "<p>Não há dados a serem exibidos.</p>";
            echo '<tr><td colspan="5" style="text-align: center;">Não há dados a serem exibidos.</td></tr>';
            echo "</tbody>
            </table>";
        } else {
                foreach ($tb_baralhos as $tb_baralho) {
                    // Verifica se "c_fav" é igual a 1
                    $iconClass = $this->checkFavIs($tb_baralho['c_fav']);

                    // echo $iconClass;
                    echo "
                    <div class='card'>
                        <div class='cardMedia'>
                            <img src='https://via.placeholder.com/300x150/FAFAFA/CCC?text=Imagem Exemplo %20%0A 300x150' alt='img'>
                            <input type='checkbox' class='in_checkBox' idBar='{$tb_baralho['idBar']}'>
                        </div>
                        <div class='cardHeader'>
                            <div >
                                <h2 class='titulo'>{$tb_baralho['c_bar']}</h2>
                                <p class='subtitulo'>{$tb_baralho['c_subTituloBar']}</p>
                            </div>
                        </div>
                        <div class='cardContent'>
                            <p class='supportingText'>{$tb_baralho['c_descr']}</p>
                        </div>
                        <div class='cardActions'>
                            <div class='leftActions'>
                                <a   class='action-anchor' href='#' rel='noopener noreferrer'>Ver</a>
                                <a class='action-anchor'  href='{$tb_baralho['idBar']}' rel='noopener noreferrer'>Editar</a>
                            </div>
                            <div class='rightActions'>
                                <button  class='btnFavorito action-icon' fav='{$tb_baralho['c_fav']}'  idBar='{$tb_baralho['idBar']}'><i class='icon-heart-fill {$iconClass}'></i></button>
                                <button class='btnCompartilhar action-icon' fav='{$tb_baralho['c_fav']}'><i class='icon-share-fill'></i></button>
                            </div>
                        </div>
                    </div>
                    ";
                ;
            }
        }
    }
    /* @mtd001
        @método checkFavIs(@parms)
        @Descrição Verificar se c_fav é igual a 1, então add a class icon à tag html 'i'
    */
    private function checkFavIs($c_fav) {
        return $c_fav == 1 ? 'icon-favorito' : '';
    }
}
?>


<!-- icon-favorito -->
<!-- https://via.placeholder.com/300x150/AAAAAA/FFFFFF?text=Imagem Exemplo %20%0A 300x150 -->