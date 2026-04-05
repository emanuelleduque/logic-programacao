const prompt = require('prompt-sync')();
let opcao = ' ';

while (opcao !== "3") {
    console.log("\n========== MENU ==========");
    console.log("1. Cadastra Aluno");
    console.log("2. Listar Alunos");
    console.log("3. Sair");
    opcao = prompt("Opção: ");
}