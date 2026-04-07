const prompt = require('prompt-sync')();
const nomes = [];
const notas = [];

for (let i = 0; i < 1; i++){
    const nomeAluno = prompt("Nome do Aluno: ");
    nomes.push(nomeAluno);
}

for (let i = 0; i < 3; i++){
    const notaInserida = Number(prompt("Nota do Aluno: "));
    notas.push(notaInserida);

if (notaInserida >= 7){
    console.log(`${nomes[i]} está Aprovado(a)!`);
} else {
    console.log(`${nomes[i]} está Reprovado(a)!`);
    }
}

console.log(" - Resumo Final -");
console.log("Nome: ", nomes.join(', '));
console.log("Notas: ", notas.join(', '));





   