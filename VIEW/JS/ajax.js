// seleciona o botão
const button = document.querySelector('.btnEnviar');
// adiciona um evento de clique no botão
button.addEventListener('click', function () {
    // pega o valor do atributo "data-value" do botão
    const value = button.getAttribute('data-value');
    // cria a requisição
    const xhr = new XMLHttpRequest();
    // define o método e o arquivo PHP que irá processar a requisição
    xhr.open('POST', './MODEL/processa.php');
    // define o cabeçalho da requisição
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // define o que fazer quando a requisição for concluída
    xhr.onload = function () {
        // mostra o valor retornado pelo arquivo PHP no alert
        alert(xhr.responseText);
    }
    // envia a requisição com o valor do atributo como parâmetro
    xhr.send('value=' + value);
})