// Seleciona todos os botões de favorito
const btnFavorito = document.querySelectorAll('.btnFavorito');

// Adiciona um ouvinte de eventos de clique a todos os botões de favorito
btnFavorito.forEach((btn) => {
  btn.addEventListener('click', () => {
    const idBar = btn.getAttribute('idBar');
    const fav = btn.getAttribute('fav');
    const novoFav = fav === '1' ? '0' : '1';

    // Envia uma solicitação AJAX para atualizar o valor de "c_fav" no banco de dados
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'CONTROLLER/atualizar_favorito.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Atualiza o atributo "fav" do botão clicado com o novo valor
        btn.setAttribute('fav', novoFav);

        // Alterna a classe CSS do ícone do botão de favorito
        const icon = btn.querySelector('i');
        icon.classList.toggle('icon-favorito');
        icon.classList.toggle('icon-heart');
      }
    }
    xhr.send(`idBar=${idBar}&fav=${novoFav}`);
  });
});


// função ajax para enviar solicitação ajax daqui -> VIEW/JS/ajax.js para o CONTROLLER/autualizar_favorito.php

// const button = document.querySelector('.btnTesteXMLHttpRequest');
// button.addEventListener('click', () => {
//     const value = button.getAttribute('data');
  
//   const xhr = new XMLHttpRequest();
// //   xhr.open('POST', './MODEL/processa.php');
//   xhr.open('POST', './CONTROLLER/atualizar_favorito.php');
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText);
//       alert(xhr.responseText);
//     } else {
//       console.error('Erro na requisição:', xhr.statusText);
//     }
//   };
  
//   xhr.onerror = () => {
//     console.error('Erro na requisição:', xhr.statusText);
//   };
  
//   xhr.send(`value=${value}`);
// });
// $(document).on('click', '.btnFavorito', function() {
//     var idBar = $(this).attr('idBar');
//     var fav = $(this).attr('fav');
//     var novoValor = fav == 1 ? 0 : 1;

//     $.ajax({
//         url: './CONTROLLER/atualizar_favorito.php',
//         type: 'POST',
//         data: {idBar: idBar, novoValor: novoValor},
//         success: function(data) {
//             if (data == 'success') {
//                 if (novoValor == 1) {
//                     $(this).attr('fav', 1);
//                     $(this).find('i').addClass('icon-favorito');
//                 } else {
//                     $(this).attr('fav', 0);
//                     $(this).find('i').removeClass('icon-favorito');
//                 }
//             } else {
//                 alert('Erro ao atualizar favorito');
//             }
//         },
//         error: function() {
//             alert('Erro ao atualizar favorito');
//         }
//     });
// });

// $(document).ready(function() {
//     $(".btnFavorito").click(function() {
//         var idBar = $(this).attr("idBar");
//         var fav = $(this).attr("fav");

//         $.ajax({
//             url: "./CONTROLLER/atualizar_favorito.php",
//             type: "POST",
//             data: {idBar: idBar, fav: fav},
//             dataType: "json"
//         })
//         .done(function(data) {
//             if (data.status == "success") {
//                 if (data.fav == 1) {
//                     $(".btnFavorito[idBar='" + idBar + "']").attr("fav", 1);
//                     $(".btnFavorito[idBar='" + idBar + "'] i").addClass("icon-favorito");
//                 } else {
//                     $(".btnFavorito[idBar='" + idBar + "']").attr("fav", 0);
//                     $(".btnFavorito[idBar='" + idBar + "'] i").removeClass("icon-favorito");
//                 }
//             } else {
//                 alert("Erro ao atualizar o favorito.");
//             }
//         })
//         .fail(function(jqXHR, textStatus, errorThrown) {
//             console.log("Erro ao atualizar o favorito: " + errorThrown);
//         });
//     });
// });

