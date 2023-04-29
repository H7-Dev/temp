<?php
// require_once("./../MODEL/banco.php");
require_once("./init.php");
class baralhosDAO {
    protected $mysqli;
    public function __construct() {
        $this->conexao();
    }
    private function conexao() {
        $this->mysqli = new mysqli(BD_SERVIDOR, BD_USUARIO , BD_SENHA, BD_BANCO);
    }
    public function atualizarFavorito($idBar, $novoValor) {
        $query = "UPDATE tb_baralhos SET c_fav = :novoValor WHERE idBar = :idBar";
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(":novoValor", $novoValor, PDO::PARAM_INT);
        $stmt->bindParam(":idBar", $idBar, PDO::PARAM_INT);
        $stmt->execute();
    }
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
}
?>

