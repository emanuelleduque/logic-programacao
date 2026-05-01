const prompt = require('prompt-sync')();


function verificarvalor(valor){
if (valor >= 0){
    return true;
}
else {
  return false;
}

}


let valor = Number(prompt("Digite um valor: "));
if(verificarvalor(valor)){

    console.log("Número positivo. ");
}else {

        console.log("Número negativo. ");

}

