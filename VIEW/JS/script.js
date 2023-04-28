function processa() {
    var t1 = document.getElementById("termo1").value;
    var t2 = document.getElementById("termo2").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("resposta").innerHTML = this.responseText;
    }
    xhttp.open("GET", "../MODEL/processa.php?t1="+t1+"&t2="+t2);
    xhttp.send();    
}      