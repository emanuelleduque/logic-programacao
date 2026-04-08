const prompt = require('prompt-sync')();
const numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    const num = Number(prompt("Digite um número: "));
    numeros.push(num);
}

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Números: ", numeros);
console.log("Soma Total: ", soma);

