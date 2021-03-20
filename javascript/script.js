
let validador = {
    handleSubmit:(Event)=>{
        Event.preventDefault();

        let send = true;

        let imput = document.querySelectorAll('input');

        for(let i=0; i<imput.length; i++){
            let input = imput[i];
            let checar = validador.checarInput(input);
            if(checar !== true){
                send = false
            }
        }
        send = false;
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
                    case 'rerquired':
                        if(input.value == ''){
                            return 'Campo não pode ser vazio';
                        }
                    break;
                    case 'min':
                        
                }
            }
        }

        return true;
    }
}

let form = document.querySelector('.validador');
form.addEventListener('submit',validador.handleSubmit);