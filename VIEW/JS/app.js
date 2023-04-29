/* ====================== @FUNC ====================== */
// $(document).on('click', '.btnFavorito', function (e) {
//   e.preventDefault();
//   console.log(this)

//   // Verifica a URL da solicitação AJAX
//   if (!/^..\/MODEL\/atualizar_favorito\.php$/.test(url)) {
//     console.error('URL inválida.');
//     return;
//   }

//   // Verifica as permissões do usuário
//   if (!hasPermissions()) {
//     console.error('Usuário não tem permissão para atualizar o valor de c_fav.');
//     return;
//   }

//   // Obtenha o ID do baralho e o valor de fav do botão
//   var idBar = $(this).attr('idBar');
//   var fav = $(this).attr('fav');

//   // Determine o novo valor de fav
//   var novoFav = fav == 1 ? 0 : 1;
//   console.log(`idBar..: ${idBar}`);
//   console.log(`fav....: ${fav}`);
//   console.log(`novoFav: ${novoFav}`);

//   // Faça uma solicitação AJAX para atualizar o valor de c_fav no banco de dados
//   $.ajax({
//     url: './../../../MODEL/atualizar_favorito.php',
//     method: 'POST',
//     data: {
//       idBar: idBar,
//       fav: novoFav
//     },
//     success: function (response) {
//       // Verifica se a resposta é válida
//       if (!isValidResponse(response)) {
//         console.error('Resposta inválida do servidor.');
//         return;
//       }

//       // Atualize o valor de fav no botão e no cartão
//       $(this).attr('fav', novoFav);
//       $(this).find('i').toggleClass('icon-favorito');
//     },
//     error: function (xhr, status, error) {
//       // Trate erros de solicitação AJAX
//       console.error(error);
//     }
//   });
// });

// function hasPermissions() {
//   // Verifica as permissões do usuário
//   return true; // Implemente sua verificação de permissões aqui
// }

// function isValidResponse(response) {
//   // Verifica se a resposta é válida
//   return true; // Implemente sua verificação de resposta aqui
// }

// Adicione um evento de clique no botão btnFavorito
// $(document).on('click', '.btnFavorito', function (e) {
//   e.preventDefault();
//   console.log(this)

//   // Obtenha o ID do baralho e o valor de fav do botão
//   var idBar = $(this).attr('idBar');
//   var fav = $(this).attr('fav');

//   // Determine o novo valor de fav
//   var novoFav = fav == 1 ? 0 : 1;
//   console.log(`idBar..: ${idBar}`);
//   console.log(`fav....: ${fav}`);
//   console.log(`novoFav: ${novoFav}`);

//   // Faça uma solicitação AJAX para atualizar o valor de c_fav no banco de dados
//   $.ajax({
//     url: '../MODEL/atualizar_favorito.php',
//     method: 'POST',
//     data: {
//       idBar: idBar,
//       fav: novoFav
//     },
//     success: function (response) {
//       // Atualize o valor de fav no botão e no cartão
//       $(this).attr('fav', novoFav);
//       $(this).find('i').toggleClass('icon-favorito');
//     },
//     error: function (xhr, status, error) {
//       // Trate erros de solicitação AJAX, se necessário
//       console.log(error);
//     }
//   });
// });



/**  
  @fn003
  @func altClassAnimeInOut()
  @Descrição Função mostrar/ocultar elemento selecionado com animação inOut e responsividade
*/
function altClassAnimeInOut({
  _classMain,
  _mediaQuery,
  _activeFlex,
  _animIn,
  _animOut,
  _animInR,
  _animOutR,
}) {
  // const filtros = document.querySelector(".filtros");
  // const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (!_mediaQuery.matches) {
    console.log(`mediaQuery.matches: ${_mediaQuery.matches}`)

    _classMain.forEach((_classMain) => {
      if (!_classMain.classList.contains(_activeFlex)) {
        _classMain.classList.add(_activeFlex, _animIn);
        console.log(`As classes ${_activeFlex} e ${_animIn} foram adicionadas com sucesso!`);
      } else {
        _classMain.classList.add(_animOut);
        console.log(`A classe ${_animOut} foi adicionada com sucesso!`);

        // Adicionando o event listener para o evento animationend
        _classMain.addEventListener("animationend", function (event) {
          // Verifica se a animação que terminou é a _animOut
          if (event.animationName === _animOut) {
            _classMain.classList.remove(_activeFlex, _animIn, _animOut, _animInR, _animOutR);
            console.log(`As classes ${_activeFlex}, ${_animIn} e ${_animOut} foram removidas com sucesso!`);
          }
        })
      }
    });

  }
  if (_mediaQuery.matches) {
    console.log(`_mediaQuery.matches: ${mediaQuery.matches}`)
    _classMain.forEach((_classMain) => {
      if (!_classMain.classList.contains(_activeFlex)) {
        _classMain.classList.add(_activeFlex, _animInR);
        console.log(`A classe ${_animInR} foram adicionadas com sucesso!`);
      } else {
        _classMain.classList.add(_animOutR);
        console.log(`A classe ${_animOutR} foram adicionadas com sucesso!`);

        // Adicionando o event listener para o evento animationend
        _classMain.addEventListener("animationend", function (event) {
          // Verifica se a animação que terminou é a _animOutR
          if (event.animationName === _animOutR) {
            // _classMain.classList.remove(_animOutR, _animOutR);
            console.log(`A classe ${_animOutR} terminou a animação`);
            _classMain.classList.remove(_activeFlex, _animOutR);
            _classMain.classList.remove(_animInR);
          }
        });
      }
    });

  }
}

/**  
  @fn002
  @func hiddenElementClickOut()
  @Descrição Função que ocultar um aside, quando clicado fora dela ou do button que aa exibi.
*/
function hiddenElementClickOut({
  mainElement,
  mediaQuery,
  elementClasses,
  xClass,
  classEffectOut
}) {
  console.clear();
  console.trace("A função hiddenElementClickOut() foi chamada.");

  // adicione o manipulador de eventos 'click' à tela
  document.addEventListener('click', (event) => {
    // verifique se a largura da tela é menor ou igual a 768 pixels e o elemento principal tem a classe 'xClass'
    if (mediaQuery.matches && mainElement.classList.contains(xClass)) {
      // verifique se o elemento clicado não é o elemento principal nem um dos elementos a serem ignorados
      const isIgnoredElement = elementClasses.some((elementClass) => {
        return event.target.closest(`.${elementClass}`);
      });
      if (!isIgnoredElement) {
        // adicione a classe 'classEffectOut'
        mainElement.classList.add(classEffectOut);
        // remova a classe 'xClass' após o término da animação classEffectOut
        mainElement.addEventListener('animationend', () => {
          console.log('Clicou em um elemento fora do elemento principal e dos elementos ignorados');
          mainElement.classList.remove(xClass);
          mainElement.classList.remove(classEffectOut);
        }, {
          once: true
        });
      }
    }
  });
}

/**  
  @fn001
  @func toggleHiddenAside()
  @Descrição Função que alterna a visibilidade de um elemento com animação CSS.
*/
function toggleHiddenAside({
  elementSelector,
  showClass,
  hiddenClass,
  animeEndCallback
}) {
  console.clear();
  console.trace("A função toggleHiddenAside() foi chamada.");

  const myAside = document.querySelector(elementSelector);
  console.log(myAside);

  if (!myAside.classList.contains(showClass) && !myAside.classList.contains(animeEndCallback)) {
    myAside.classList.add(showClass);
  }

  myAside.addEventListener('animationend', () => {
    console.log(`A animação da classe --${showClass} terminou.`);

    myAside.classList.add(animeEndCallback);
    console.log(`A animação da classe --${animeEndCallback} foi adicionada.`);

    myAside.addEventListener('animationend', () => {
      console.log(`A animação da classe --${animeEndCallback} terminou.`);
      myAside.classList.remove(showClass);
    }, {
      once: true
    });
  }, {
    once: true
  });
  const ANIMATION_CLASSES = [showClass, hiddenClass];
  if (myAside.classList.contains(animeEndCallback) && !ANIMATION_CLASSES.some(c => myAside.classList.contains(c))) {
    myAside.classList.add(hiddenClass);

    myAside.addEventListener('animationend', () => {
      console.log(`A animação da classe --${hiddenClass} terminou.`);
      myAside.classList.remove(hiddenClass);
      myAside.classList.remove(animeEndCallback);

    }, {
      once: true
    });
  }
  if (myAside.classList.contains(animeEndCallback) && !ANIMATION_CLASSES.some(c => myAside.classList.contains(c))) {
    myAside.classList.add(hiddenClass);
    console.log('A class foi adicionada slideInRight');

    myAside.addEventListener('animationend', () => {
      console.log(`A animação da classe --${hiddenClass} terminou.`);

      myAside.classList.remove(hiddenClass, animeEndCallback);
      console.log('As classes slideInRight e shake estão removidas');

    }, {
      once: true
    });
  }
}

/* ====================== @CALLS ====================== */
// @fn001
const myButton = document.querySelector('.btnShowAside');
myButton.addEventListener('click', () => {
  toggleHiddenAside({
    elementSelector: 'aside',
    showClass: 'slideInLeft',
    hiddenClass: 'slideInRight',
    animeEndCallback: 'shake',
  })
})
// @fn002
const mediaQuery = window.matchMedia('(max-width: 768px)');
const asideMain = document.querySelector('aside.main')
hiddenElementClickOut({
  mainElement: asideMain,
  mediaQuery: mediaQuery,
  elementClasses: ['clickOutIgnore'],
  xClass: 'shake',
  classEffectOut: 'slideInRight'
});

// @fn003
const filtros = document.querySelectorAll(".filtros");
const mediaQueryX = window.matchMedia('(max-width: 768px)');
const btnFiltrosBar = document.querySelector('.btnFiltrosBar')
btnFiltrosBar.addEventListener('click', () => {
  altClassAnimeInOut({
    _classMain: filtros, //  elemento principal onde será tratado mostrar/ocultar e animações inOut
    _mediaQuery: mediaQueryX, // adiciona responsividade à toda dyn de ativa e, animar, tanto in quanto out. Em outras palavras comportamentos diferentes em telas diferentes
    _activeFlex: 'activeFlex', // class para tratar especificamente o estado do display do elemento
    _animIn: 'fadeIn', // class para adicionar animação ao mostrar o elemento
    _animOut: 'fadeOut', // class para adicionar animação ao mostrar o elemento
    _animInR: 'fadeInUpXBottom', // class para adicionar animação ao mostrar o elemento (r é de responsivo)
    _animOutR: 'fadeInDownXBottom', // class para adicionar animação ao mostrar o elemento (r é de responsivo)
  })
})
// @fn003
const checkBoxs = document.querySelectorAll("body > div.pagA > div.main > div > div > div.cardMedia > input.in_checkBox");
console.log(checkBoxs)
const btnSelc = document.querySelector('body > div.pagA.tabAside.actvGrid > footer > div.actions > button.btnSelc')
btnSelc.addEventListener('click', () => {
  altClassAnimeInOut({
    _classMain: checkBoxs, //  elemento principal onde será tratado mostrar/ocultar e animações inOut
    _mediaQuery: mediaQueryX, // adiciona responsividade à toda dyn de ativa e, animar, tanto in quanto out. Em outras palavras comportamentos diferentes em telas diferentes
    _activeFlex: 'activeFlex', // class para tratar especificamente o estado do display do elemento
    _animIn: 'fadeIn', // class para adicionar animação ao mostrar o elemento
    _animOut: 'fadeOut', // class para adicionar animação ao mostrar o elemento
    _animInR: 'fadeInUpXBottom', // class para adicionar animação ao mostrar o elemento (r é de responsivo)
    _animOutR: 'fadeInDownXBottom', // class para adicionar animação ao mostrar o elemento (r é de responsivo)
  })
})