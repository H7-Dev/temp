<?php

require_once("../MODEL/dao.baralhos.php");

if (isset($_POST['idBar']) && isset($_POST['fav'])) {
  $idBar = $_POST['idBar'];
  $fav = $_POST['fav'];

  $dao = new baralhosDAO();
  $dao->atualizarFavorito($idBar, $fav);
}

?>
