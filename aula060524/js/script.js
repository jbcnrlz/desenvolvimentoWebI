var imgs = [
    ['imgs/img1.jpg','imgs/img3.jpg','imgs/img2.jpg'],
    ['imgs/img2.jpg','imgs/img1.jpg','imgs/img3.jpg']
];

var currImage = null;
var acertos = 0;


function imageClique(ev){
    let imageCurrent = this.querySelector("img").src.split('/');
    imageCurrent = imageCurrent[imageCurrent.length - 1];
    console.log(imageCurrent);
    if (imageCurrent == 'costas.jpg'){
        let idDiv = this.id.split('_');
        let imCurr = imgs[parseInt(idDiv[1])][parseInt(idDiv[2])];
        this.querySelector("img").src = imCurr;
        if ((currImage != null) && (currImage == imCurr)){
            acertos += 1;
            if (acertos == 3){
                alert('GANHOU!!!!!');
            }
            currImage = null;
        } else if(currImage != null) {
            document.querySelector('img[src="'+currImage+'"]').src = 'imgs/costas.jpg';
            this.querySelector("img").src = 'imgs/costas.jpg';
            currImage = null;            
        } else {
            currImage = imCurr;
        }
    }
}

function registerClickEvent(){
    let divs = document.querySelectorAll('#board div');
    divs.forEach(element => {
        element.addEventListener('click',imageClique);
    });
}