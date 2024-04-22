function calculo(opRealizar,val1,val2){
    let resultFinal = 0;
    if (opRealizar == '+'){
        resultFinal = val1 + val2;
    } else if (opRealizar == '-'){
        resultFinal = val1 - val2;
    } else if (opRealizar == '*'){
        resultFinal = val1 * val2;
    } else{
        resultFinal = val1 / val2;
    }
    return resultFinal;
}

function efetuarOperacao(){
    let v1 = parseFloat(document.getElementById("v1").value);
    let v2 = parseFloat(document.getElementById("v2").value);
    let op = document.querySelector("input[name=op]:checked");
    if (op != null){
        op = op.value;
        let result = 0;
        result = calculo(op,v1,v2);
        document.getElementById("resultFinal").innerHTML = "Resultado = " + result;    
    }
    return false;
}

document.getElementById("btnClicar").addEventListener("click",efetuarOperacao);