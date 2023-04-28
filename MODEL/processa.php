<?php

    $termo1 = $_GET["t1"];
    $termo2 = $_GET["t2"];

    $resposta = $termo1 . " -- " . $termo2;
    // print $resposta;
    echo "<script>alert('O arquivo processa.php foi chamado.')</script>";
    echo $resposta;


?>