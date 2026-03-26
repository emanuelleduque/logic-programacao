// Filtragem: Números Pares

// Um vetor: [1, 2, 3, 4, 5, 6].
let numeros = [1, 2, 3, 4, 5, 6];
console.log("Números Gerais: " + numeros);

// Utilizar .filter() para selecionar apenas números pares.
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Números Pares: " + numerosPares);