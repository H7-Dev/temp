<?php 
    // * 
    include("./INCL/head.php");
    include("./COMPONENTS/menu.php");

    // * Instanciar a class 
    require_once("../CONTROLLER/c.edt.baralhos.php");
    $id = filter_input(INPUT_GET, 'id');
    $editar = new editarController($id);
?>
<div class="row">
    <form method="post" action="../CONTROLLER/c.edt.baralhos.php" id="form" name="form" class="col-10">
        <div class="campos" style="display: grid; padding: 10px; justify-items: start; ">
            <label for="in_baralho">
                <span>Baralho</span>
                <input class="form-control" type="text" id="in_baralho" name="in_baralho" value="<?php echo $editar->c_bar ?>" required autofocus>
            </label>
            <label for="in_dt"></label>
            <input class="form-control" type="date" id="in_dt" name="in_dt" value="<?php echo $editar->c_dt  ?>" required="">
            <br>
            <button type="submit" class="" id="editar" name="submit" value="editar">Editar </button>
            <input type="hidden" name="in_idBar" id="in_idBar" value="<?php echo $editar->idBar; ?>">
        </div>
    </form>
</div>
