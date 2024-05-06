function esconde(event){
    let ditados = document.getElementsByClassName('ditadosximira');
    let idxElement = 0;
    while (idxElement < ditados.length){
        if (ditados[idxElement].style.display == "none"){
            ditados[idxElement].style.display = "block";
        }else{
            ditados[idxElement].style.display = "none";
        }
        idxElement += 1;
    }
}

function hideDitados(){
    document.getElementById('clkEsconder').addEventListener('click',esconde);
}




function enterMouse(event){
    this.classList.add("mouseInAulas");
}

function leaveMouse(event){
    this.classList.remove("mouseInAulas");
}

function vincEvent(){
    let elementos = document.getElementsByClassName('aulaCard');
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].addEventListener('mouseenter',enterMouse);
        elementos[index].addEventListener('mouseleave',leaveMouse);
    }
}