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
        forms[i].addEventListener('submit',verificaInvalido);
    }
    loadEstados();
}

function mudaEstado(ev){
    loadCity($('#txtUF').find(":selected").val());
}

function sucessoLoadEstados(result){
    for (let i = 0;i < result.length;i+=1){
        let opcao = $("<option></option>");
        opcao.val(result[i].sigla);
        opcao.text(result[i].nome);
        $("#txtUF").append(opcao);
        $("#txtUF").on("change",mudaEstado);
    }
}

function loadEstados(){
    let requisicao = $.ajax({
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    });
    requisicao.done(sucessoLoadEstados);
}

function loadCity(uf){
    $('#selectCidadeContainer').html('<div class="spinner-border text-primary" role="status"></div>');
    let requisicao = $.ajax({
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios"
    });
    requisicao.done(sucessoLoadcity);
}

function sucessoLoadcity(result){
    let selectTag = $("<select></select>");
    selectTag.addClass("form-select");
    selectTag.attr("id","txtCidade");
    selectTag.attr("name","txtCidade");
    for (let i = 0;i < result.length;i+=1){
        let opcao = $("<option></option>");
        opcao.val(result[i].nome);
        opcao.text(result[i].nome);
        selectTag.append(opcao);
    }
    $('#selectCidadeContainer').html('');
    $('#selectCidadeContainer').append(selectTag);
}
$(document).ready(impededSubmissaoCamposInvalidos);