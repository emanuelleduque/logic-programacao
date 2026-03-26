//  Filtragem: Nomes com Mais de 4 Letras

//  Um vetor: ["Ana", "Bruno", "Carlos", "Eva"].
let nomes = ["Ana", "Bruno", "Carlos", "Eva"];
console.log("Nomes Gerais: " + nomes);

//  Utilizar .filter() para selecionar strings com tamanho maior que 4.
let nomesFiltrados = nomes.filter(nomes => nomes.length > 4);
console.log("Nomes com Mais de 4 Letras: " + nomesFiltrados);