const prompt = require('prompt-sync')();
const nomes = [];

for (let i = 0; i < 5; i++) {
  const nome = prompt(`Digite o nome: `);
  nomes.push(nome);
}

console.log("Nomes Digitados: " + nomes);
console.log(nomes);

