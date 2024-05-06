function addCidadeCard(event){
    let mainList = document.getElementsByTagName('main')[0];
    let newDocumentCard = document.createElement('div');
    let cityName = document.getElementById("txtCidade").value;
    newDocumentCard.classList.add("wheaterCard");
    newDocumentCard.id = cityName+"Card";
    newDocumentCard.innerHTML = '<header class="cardHeader"><h2>Tempo agora em<br><span class="cityName">Marília</span></h2></header><div class="cityData"><p class="temp">30.6&deg;</p><br ><p class="itemsCD condition"><span>Clima</span><span>Ensolarado</span></p><p class="itemsCD sensacao"><span>Sensação Térmica</span><span>31.0</span></p></div>';
    mainList.appendChild(newDocumentCard);
    buscarDadosCidade(cityName,apiKey)
}

function populaCard(event){
    let jsonResponde = JSON.parse(this.responseText);
    let cityCard = document.getElementById(jsonResponde.location.name + "Card");
    let cityName = cityCard.getElementsByClassName("cardHeader")[0];
    cityName = cityName.getElementsByClassName("cityName")[0];
    cityName.innerHTML = jsonResponde.location.name
    let cityData = cityCard.getElementsByClassName("cityData")[0];
    let temp = cityData.getElementsByClassName("temp")[0];
    temp.innerHTML = jsonResponde.current.temp_c + "&deg;";
    let condition = cityData.getElementsByClassName("condition")[0];
    condition.innerHTML = '<span>Clima</span><span>'+jsonResponde.current.condition.text+'</span>';
    let sensacao = cityData.getElementsByClassName("sensacao")[0];
    sensacao.innerHTML = '<span>Sensação Térmica</span><span>'+jsonResponde.current.feelslike_c+'&deg;</span>';
}

function buscarDadosCidade(cidade,apikey){
    let xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load',populaCard);
    xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key="+apikey+"&q="+cidade+"&aqi=no&lang=pt");
    xhttp.send();
}

var apiKey = 'a65dbb2240a449bd8e7183620242804';

function carregarSite(){
    let cidadesIniciais = document.getElementsByClassName("cityName");
    for (let i = 0;i < cidadesIniciais.length;i+=1){
        buscarDadosCidade(cidadesIniciais[i].innerHTML,apiKey);
    }
    document.getElementById("btnAddCity").addEventListener('click',addCidadeCard);
}