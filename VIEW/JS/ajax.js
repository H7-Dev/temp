
function processa() {
    var t1 = document.getElementById("termo1").value;
    var t2 = document.getElementById("termo2").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var respostaJSON = JSON.parse(this.responseText);
        var alerta = respostaJSON.alerta;
        var resposta = respostaJSON.resposta;
        alert(alerta);
        document.getElementById("resposta").innerHTML = resposta;
    }
    xhttp.open("GET", "./MODEL/processa.php?t1="+t1+"&t2="+t2);
    xhttp.send();    
}