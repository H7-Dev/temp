// Adicionar evento de clique em todos os botões com classe .btnFavorito
document.querySelectorAll('.btnFavorito').forEach(function (button) {
  button.addEventListener('click', function () {
    var idBar = button.getAttribute('idBar');
    var fav = button.getAttribute('fav');

    // Atualizar o valor de fav
    fav = (fav == 1) ? 0 : 1;

    // Enviar solicitação AJAX para atualizar o registro no banco de dados
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../CONTROLLER/atualizar_favorito.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Atualizar o valor do atributo fav no botão
        button.setAttribute('fav', fav);

        // Atualizar a classe do ícone no botão
        button.querySelector('i').classList.toggle('icon-favorito');

        // Exibir o conteúdo HTML retornado pelo servidor
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          var html = response.html;
          // Criar um novo elemento div e definir o seu conteúdo HTML
          const popupx = `<div class="alert alert-success" role="alert">${html}</div>`;
          const alertElement = document.createRange().createContextualFragment(popupx);
          document.body.appendChild(alertElement);
        }
      } else {
        console.log('Erro ao atualizar registro');
      }
    };
    xhr.send('idBar=' + idBar + '&novoValor=' + fav);
  });
});



// const button = document.querySelector('.btnTesteXMLHttpRequest');
// // adiciona um evento de clique no botão
// button.addEventListener('click', function () {
//   // pega o valor do atributo "data-value" do botão
//   const value = button.getAttribute('data-value');
//   // cria a requisição
//   const xhr = new XMLHttpRequest();
//   // define o método e o arquivo PHP que irá processar a requisição
//   xhr.open('POST', './CONTROLLER/processa.php');
//   // define o cabeçalho da requisição
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   // define o que fazer quando a requisição for concluída
//   xhr.onload = function () {
//     // mostra o valor retornado pelo arquivo PHP no alert
//     alert(xhr.responseText);
//   }
//   // envia a requisição com o valor do atributo como parâmetro
//   xhr.send('value=' + value);
// })