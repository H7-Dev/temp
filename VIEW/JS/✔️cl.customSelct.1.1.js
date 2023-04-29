class customSelc {
    constructor({
        customSelc,
        btnOptsSelector,
        ulOptionsSelector,
        liOptsSelector,
        btnClear
    }) {
        this.customSelc = customSelc;
        this.btnOptsList = document.querySelectorAll(btnOptsSelector);
        this.ulOptionsList = document.querySelectorAll(ulOptionsSelector);
        this.btnClear = document.querySelectorAll(btnClear);
        this.liOptsSelector = liOptsSelector;

        // verifica se os elementos foram encontrados
        if (this.btnOptsList.length === 0) {
            console.error(`Nenhum elemento com o seletor '${btnOptsSelector}' foi encontrado.`);
        }
        if (this.ulOptionsList.length === 0) {
            console.error(`Nenhum elemento com o seletor '${ulOptionsSelector}' foi encontrado.`);
        }
        // console.log(this.ulOptionsList.length)
        // console.log(this.btnClear.length)
        if (this.btnClear.length === 0) {
            console.error(`Nenhum elemento com o seletor '${btnClear}' foi encontrado.`);
        }
        this.addDynamicListeners();

        this.btnOptsList.forEach((btnOpts, index) => {
            // console.log('✔️ btnOptsList ↓')
            const ulOptions = this.ulOptionsList[index]
            const btnClear = this.btnClear[index]

            // verifica se o elemento foi encontrado
            if (!ulOptions) {
                console.error(`Nenhum elemento ulOptions foi encontrado para o índice ${index}.`);
                return;
            }
            const liOptsList = ulOptions.querySelectorAll(this.liOptsSelector);

            // verifica se os elementos foram encontrados
            if (liOptsList.length === 0) {
                console.error(`Nenhum elemento liOpts foi encontrado para o índice ${index}.`);
                return;
            }
            // verifica se os elementos foram encontrados
            if (btnClear.length === 0) {
                console.error(`Nenhum elemento btnClear foi encontrado para o índice ${index}.`);
                return;
            }
            liOptsList.forEach((liOpts) => {
                liOpts.addEventListener("click", () => {
                    this.onOptionSelected(btnOpts, liOpts, ulOptions);
                });
            })
            btnOpts.addEventListener("click", () => {
                this.onButtonClicked(btnOpts, ulOptions);
            });

            btnClear.addEventListener("click", () => {
                console.log(btnClear);
                this.onClearClicked(btnClear)
            });

            document.addEventListener("click", (event) => {
                this.onDocumentClicked(event, btnOpts, ulOptions);
            });
        });

    }
    addDynamicListeners() {
        // console.trace('addDynamicListeners')
        this.btnOptsList.forEach((btnOpts, index) => {
            const ulOptions = this.ulOptionsList[index];

            // adiciona o ouvinte de evento "click" para cada nova "li" adicionada
            ulOptions.addEventListener("click", (event) => {
                const liOpts = event.target.closest(this.liOptsSelector);
                if (liOpts) {
                    this.onOptionSelected(btnOpts, liOpts, ulOptions);
                }
            })
        })
    }
    onClearClicked(btnClear) {
        console.clear()
        console.log("⚡ onClearClicked(btnClear)")
        const inputOpts = btnClear.closest(this.customSelc).querySelector('.in_opts');
        const btnOpts = btnClear.closest(this.customSelc).querySelector('.btnOpts');
        // const ulOptions = btnClear.closest(this.customSelc).querySelector('.ul_options');


        inputOpts.value = '';
        btnOpts.innerText = 'Selecione';
        // ulOptions.classList.remove('show');
        // btnOpts.classList.remove('active');
        btnOpts.closest(this.customSelc).classList.remove("activeCustonSelc")
    }
    onOptionSelected(btnOpts, liOpts, ulOptions) {
        // console.clear()
        console.trace('onOptionSelected')
        const selectedOption = liOpts.innerText;
        const inputOpts = btnOpts.closest(this.customSelc).querySelector('.in_opts');
        const btnText = btnOpts;

        inputOpts.value = liOpts.getAttribute("value");
        btnText.innerText = selectedOption;

        ulOptions.classList.remove("show");
        btnOpts.classList.remove("active");
        btnOpts.closest(this.customSelc).classList.add("activeCustonSelc")
    }


    // onButtonClicked(btnOpts, ulOptions) {
    //     console.clear()
    //     console.trace('onButtonClicked')
    //     // obtém a largura do botão
    //     const btnWidth = btnOpts.offsetWidth;

    //     if (ulOptions.classList.contains("show")) {
    //         ulOptions.classList.remove("show");
    //         btnOpts.classList.remove("active");
    //     } else {
    //         const btnRect = btnOpts.getBoundingClientRect();
    //             ulOptions.style.top = `${btnRect.bottom + 5}px`;
    //             ulOptions.style.left = `${btnRect.left}px`;
    //             ulOptions.style.width = `${btnWidth}px`;
    //             ulOptions.classList.add("show");
    //             btnOpts.classList.add("active");
    //         setTimeout(() => {
    //             const optionsRect = ulOptions.getBoundingClientRect();
    //             const isOptionsCut = optionsRect.bottom > window.innerHeight;
    //             console.log(isOptionsCut);
            
    //             if (isOptionsCut) {
    //               console.log("Options are being cut by the viewport!");
    //             }
    //            }, 100);
    //     }
    // }
    onButtonClicked(btnOpts, ulOptions) {
        console.clear()
        console.trace('onButtonClicked')
      
        const btnWidth = btnOpts.offsetWidth;
      
        if (ulOptions.classList.contains("show")) {
          ulOptions.classList.remove("show");
          btnOpts.classList.remove("active");
        } else {
          const btnRect = btnOpts.getBoundingClientRect();
          ulOptions.style.top = `${btnRect.bottom + 5}px`;
          ulOptions.style.left = `${btnRect.left}px`;
          ulOptions.style.width = `${btnWidth}px`;
          ulOptions.classList.add("show");
          btnOpts.classList.add("active");
      
          const optionsPromise = new Promise((resolve) => {
            ulOptions.addEventListener("transitionend", () => {
                
              resolve();
            });
          });
      
          optionsPromise.then(() => {
            const optionsRect = ulOptions.getBoundingClientRect();
            const isOptionsCut = optionsRect.bottom > window.innerHeight;
            console.log(isOptionsCut);
      
            if (isOptionsCut) {
                const optionsHeight = ulOptions.offsetHeight;
                const newTop = btnRect.top - optionsHeight - 5;
                ulOptions.style.top = `${newTop}px`;
            }
          });
        }
      }
      
      
    onDocumentClicked(event, btnOpts, ulOptions) {
        // console.clear()
        // console.log("⚡ onDocumentClicked")
        const isClickInside = btnOpts.contains(event.target) || ulOptions.contains(event.target);

        if (!isClickInside) {
            ulOptions.classList.remove("show");
            btnOpts.classList.remove("active");
        }
    }
}



// * istancia da class customSelc 
/* * Selecionar um opção (estilo menu dropdown) */
const myDropdown = new customSelc({
    customSelc: '.customSelc',
    btnOptsSelector: '.btnOpts',
    ulOptionsSelector: '.ulOptions',
    liOptsSelector: '.liOpts',
    btnClear: '.clearSelc'
})