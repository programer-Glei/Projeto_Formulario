
let validador = {
    handleSubmit:(Event)=>{
        Event.preventDefault();
    }
}

let form = document.querySelector('.validador');
form.addEventListener('submit',validador.handleSubmit);