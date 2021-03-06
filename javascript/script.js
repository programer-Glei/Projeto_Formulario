
let validador = {
    handleSubmit:(event)=>{
        event.preventDefault();

        let send = true;

        let imput = form.querySelectorAll('input');

        validador.limpar();

        for(let i=0; i<imput.length; i++){
            let input = imput[i];
            let checar = validador.checarInput(input);
            if(checar !== true){
                send = false
                validador.showError(input, checar);
            }
        }

        if(send){
            form.submit();
        }
    },

    checarInput: (input) =>{
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo não pode ser vazio';
                        }
                    break;
                    case 'min':

                }
            }
        }

        return true;
    },

    showError:(input, error) =>{
        input.style.borderColor = '#ff0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },

    limpar:() =>{
        let inputs = form.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++){
            inputs[i].style = '';
        }

        let ElementosErros = document.querySelectorAll('.error');
        for(let i=0; i<ElementosErros.length;i++){
            ElementosErros[i].remove();
        }
    }
}

let form = document.querySelector('.validador');
form.addEventListener('submit',validador.handleSubmit);