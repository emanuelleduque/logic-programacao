const prompt = require('prompt-sync')();
let opcao = ' ';
<<<<<<< HEAD
let nomes = [];
const notas = [];

while (opcao !== "3") {
    console.log("\n-- MENU --");
    console.log("1. Cadastrar Aluno"); 
    console.log("2. Listar Aluno"); 
    console.log("3. Sair"); 

opcao = prompt("Escolha uma opção: ");
  
    if (opcao === "1") {
    let nome = prompt("Digite o nome: ");
    const nota = Number(prompt("Nota: "));
   
    nomes.push(nome);
    notas.push(nota);

if (nota >= 7){
    console.log("Aluno Aprovado(a)!")
} else { 
    console.log("Aluno Reprovado(a)!")
    }

} else if (opcao === "2") {
    console.log("\n-- Lista de Alunos -- ");

for (let i = 0; i < nomes.length; i++) {
    console.log(`${nomes[i]} - Nota: ${notas[i]}`);
}
   

} else if (opcao === "3"){
    console.log("Saindo...");
} else {
    console.log("Opção Inválida");
}
}

    
   




=======

while (opcao !== "3") {
    console.log("\n========== MENU ==========");
    console.log("1. Cadastra Aluno");
    console.log("2. Listar Alunos");
    console.log("3. Sair");
    opcao = prompt("Opção: ");
}
>>>>>>> b06d30bc4c3f1ea1d43b8599858a8a8c8672e16b
