<?php
// require_once("./../MODEL/banco.php");
require_once("../init.php");
class baralhosDAO {
    protected $mysqli;
    public function __construct() {
        $this->conexao();
    }
    private function conexao() {
        $this->mysqli = new mysqli(BD_SERVIDOR, BD_USUARIO , BD_SENHA, BD_BANCO);
    }
    /** @func001
        * @Função que seleciona todos os baralhos de tb_baralhos
        *
        * @param $order será aplicado no futura para ordernar as linhas da tb_baralhos
    */
    public function getBaralhos() {
        $result = $this->mysqli->query("SELECT * FROM tb_baralhos ORDER BY CAST(idBar AS UNSIGNED)");
        
        if ($result->num_rows > 0) {
            $array = array();
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $array[] = $row;
            }
            return $array;
        } else {
            return array();
        }
    }
    public function getBaralhoById($idBar) {
        $result = $this->mysqli->query("SELECT * FROM tb_baralhos WHERE idBar='$idBar'");
        return $result->fetch_array(MYSQLI_ASSOC);
    }
    /** @func00
        * @Função que soma dois números inteiros.
        *
        * @param strign $c_fav valor do campo a ser atualizado.
        * @param strign $idBar id do baralho que será atualizado.
    */
    public function atualizarCampoFavorito($c_fav, $idBar) {
        $stmt = $this->mysqli->prepare(
            "UPDATE `tb_baralhos` 
            SET 
              `c_fav` = ?
            WHERE 
            `idBar` = ?"
          );
        $stmt->bind_param("ss",$c_fav,$idBar);
        if($stmt->execute()==TRUE){
            return true;
        }else{
            return false;
        }
    }
}
?>

