<!DOCTYPE HTML>
<html>
<?php include("./INCL/head.php") ?>

<body>
    <?php include("./COMPONENTS/menu.php") ?>
    <div class="row">
        <form method="post" action="../CONTROLLER/c.inserir.baralho.php" id="form" name="form" onsubmit="validar(document.form); return false;" class="col-10">
            <div class="campos form-group">
                <h1>Cadastrar Baralho</h1>
                <br>
                <label for="in_baralho">
                    <span>Nome Do Baralho</span>
                    <input class="form-control" type="text" id="in_baralho" name="in_baralho" placeholder="Nome do Livro" required autofocus>
                </label>
                <br>
                <label for="">
                    <span>Data</span>
                    <input class="form-control" type="date" id="in_dt" name="in_dt" placeholder="Data de Pulicação" >
                </label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success" id="cadastrar">Salvar</button>
            </div>
        </form>
    </div>

   
</body>

</html>
