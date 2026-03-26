//  Filtragem: Valores Maiores que 10

// Um vetor: [5, 12, 8, 20, 3].
let numeros = [5, 12, 8, 20, 3];
console.log("Números Gerais: " + numeros);

// Utilizar .filter() para extrair valores maiores que 10.
let numerosFiltrados = numeros.filter(numeros => numeros > 10);
console.log("Números Maiores que 10: " + numerosFiltrados);