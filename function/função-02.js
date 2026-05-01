const prompt = require('prompt-sync')();
let altura = Number(prompt("Sua Altura: "));
let suaSombra = Number(prompt("Sua Sombra: "));
let sombraPredio = Number(prompt("Sombra do Prédio: "));

function calcularalturaPredio(sombraPredio, suaSombra, altura) {
    let alturaPredio = (sombraPredio * altura / suaSombra);
    return alturaPredio;
}

console.log(calcularalturaPredio(sombraPredio, suaSombra, altura));