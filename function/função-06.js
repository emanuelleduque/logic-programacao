const prompt = require('prompt-sync')();
let vetor = [];

console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

function somarVetor (vetor){
    let soma = 0;
    for (let i = 0; i <= vetor.length; i++){
        soma += vetor[i];
    } return soma;
}

function multiplicarVetor (vetor){
     let multiplicacao = 1;
    for (let i = 0
        ; i <= vetor.length; i++){
        multiplicacao *= i;
    } 
    return multiplicacao;
}

function multiplicarPorCinco (vetor){

}

function mudarElemento (vetor){

}

function ordenarVetor (vetor){

}

function inverterVetor (vetor){

}

function mostrarVetor (vetor){

}

let opcao = " ";
do {
    console.log("\n== MENU ==");
    console.log("1. Soma do vetor");
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao){
        case 1: 
        console.log
    }
} while (opcao !==0);

