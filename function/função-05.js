const prompt = require('prompt-sync')();

function somaAteN(n){
    let soma = 0;
    for (let i = 0; i <= n; i++){
        soma += i;
    }
    return soma;
}

function fatorial (n){
    let fat = 1;
    for (let i = 1; i <= n; i++){
        fat *= i;
    } 
    return fat;
}

let menu;

do {
    console.log("\n-----MENU FATORIAL-----");
    console.log("1. Soma de 0 até N");
    console.log("2. Fatorial de N");
    console.log("0. Sair");

menu = Number(prompt("Escolha uma opção: "));
    if (menu === 1) {
        let n = Number(prompt("Digite um número inteiro positivo: "));
        console.log(`Soma de 0 até ${n} = ${somaAteN(n)}`);
    } else if (menu === 2) {
        let n = Number(prompt("Digite um número inteiro positivo: "));
        console.log(`Fatorial de ${n} = ${fatorial(n)}`);
    } else if (menu === 0) {
        console.log("Saindo do programa...");
    } else {
        console.log("Opção inválida!");
    }

} while (menu !== 0);
    