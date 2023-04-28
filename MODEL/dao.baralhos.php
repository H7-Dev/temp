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
    public function setBaralho($id, $c_bar, $c_dt) {
        $stmt = $this->mysqli->prepare("INSERT INTO tb_baralhos (`idBar`, `c_bar`, `c_dt`) VALUES (?,?,?)");
        $stmt->bind_param('sss', $id, $c_bar, $c_dt);
        if( $stmt->execute() == TRUE){
            return true ;
        }else{
            return false;
        }
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
    
    public function deleteLivro($idBar) {
        if($this->mysqli->query("DELETE FROM `tb_baralhos` WHERE `idBar` = '".$idBar."';")== TRUE){
            return true;
        }else{
            return false;
        }
    }
    public function encontrarIDBaralho($idBar) {
        $result = $this->mysqli->query("SELECT * FROM tb_baralhos WHERE idBar='$idBar'");
        return $result->fetch_array(MYSQLI_ASSOC);
    }
    public function atualizarBaralho($c_bar,$c_dt,$idBar) {
        $stmt = $this->mysqli->prepare(
            "UPDATE `tb_baralhos` 
            SET 
              `c_bar` = ?, 
              `c_dt` = ?
            WHERE 
            `idBar` = ?"
          );
        $stmt->bind_param("sss",$c_bar,$c_dt,$idBar);
        if($stmt->execute()==TRUE){
            return true;
        }else{
            return false;
        }
    }
    public function verificaRegistroExistente($nomeTabela, $nomeColuna, $valor) {
        $stmt = $this->mysqli->prepare("SELECT * FROM $nomeTabela WHERE $nomeColuna = ?");
        $stmt->bind_param("s", $valor);
        $stmt->execute();
        $stmt->store_result();
        $num_of_rows = $stmt->num_rows;
        $stmt->close();
        if ($num_of_rows > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function getQuantidadeLinhas() {
        $result = $this->mysqli->query("SELECT COUNT(*) as count FROM tb_baralhos");
        $row = $result->fetch_array(MYSQLI_ASSOC);
        return $row['count'];
    }
    public function criarIDdyn($prefixo) {
        $id = "bar" . $prefixo. "_" . uniqid();
        return $id;
    }
    
    
    
    
    
}


class Cadastro {
    private $c_bar;
    private $c_dt;

    public function setBaralho(string $c_bar): void {
        $this->c_bar = $c_bar;
    }
    public function setDt(string $c_dt): void {
        $this->c_dt = $c_dt;
    }
    public function incluir(): bool {
        $livrosDAO = new baralhosDAO();
        $num_linhas = $livrosDAO->getQuantidadeLinhas();
        echo "Número de linhas: " . $num_linhas . "<br>";
        
        $id = $livrosDAO->criarIDdyn($num_linhas);
    
        if ($livrosDAO->verificaRegistroExistente('tb_baralhos', 'c_bar', $this->c_bar)) {
            return false; // Já existe um registro com o mesmo c_bar
        }
        return $livrosDAO->setBaralho($id, $this->c_bar, $this->c_dt);
    }
    
    
}
?>

