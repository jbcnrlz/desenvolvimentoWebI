var showing = 1;

function doSlide(event){
    $('.menuFilter').slideToggle();
    /*
    if (showing == 1){
        $('.menuFilter').slideUp();
        showing = 0;
    } else {
        $('.menuFilter').slideDown();
        showing = 1;
    }
    */
}

function hideCard(event){
    if ($(this).text() == "Café da tarde"){
        $('.cafeDaTarde').fadeIn();
        $('.almoco').fadeOut();
        $('.sobremesa').fadeOut();
    } else if ($(this).text() == "Almoço"){
        $('.cafeDaTarde').fadeOut();
        $('.almoco').fadeIn();
        $('.sobremesa').fadeOut();
    } else if ($(this).text() == "Sobremesa"){
        $('.cafeDaTarde').fadeOut();
        $('.almoco').fadeOut();
        $('.sobremesa').fadeIn();
    } else {
        if ($(this).text() == "Mostrar tudo"){
            $(this).text('Esconder tudo');
        } else {
            $(this).text('Mostrar tudo');
        }
        $('.cafeDaTarde').fadeToggle();
        $('.almoco').fadeToggle();
        $('.sobremesa').fadeToggle(); 
    }
}

function verificaInvalido(ev){
    if (!this.checkValidity()){
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
    $('#controlFilterBar').on('click',doSlide);
    $('.filterLink').on('click',hideCard);
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