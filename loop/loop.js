// Crie um vetor com 5 números e mostre todos usando for.
let numeros = [2, 4, 6, 8, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

// Calcule a soma de todos os valores.
for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

console.log("Soma dos Valores: " +soma);