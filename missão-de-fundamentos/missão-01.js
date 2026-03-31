const prompt = require('prompt-sync')();
const nome = prompt("Digite 5 nomes: ");
const nomes = [nome];

for (let i = 0; i < 5; i++) {
  const nome = prompt(`Digite o nome: `);
} 

console.log("Nomes Digitados: ");
console.log(nomes);

