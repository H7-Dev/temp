<?php
    $termo1 = $_GET["t1"];
    $termo2 = $_GET["t2"];
    $resposta = $termo1 . " -- " . $termo2;
    $alerta = "O arquivo processa.php foi chamado.";
    $resultado = array('alerta' => $alerta, 'resposta' => $resposta);
    header('Content-Type: application/json');
    echo json_encode($resultado);
?>
