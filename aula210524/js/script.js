// Example starter JavaScript for disabling form submissions if there are invalid fields
function verificaInvalido(ev){
    if (this.checkValidity()){
        ev.preventDefault();
        ev.stopPropagation();
    }
    this.classList.add('was-validated')
}

function impededSubmissaoCamposInvalidos(){
    'use strict'
    let forms = document.querySelectorAll('.needs-validation');
    for (let i = 0; i < forms.length;i += 1){
        forms[i].addEventListener('submit',verificaInvalido)
    }
}
  