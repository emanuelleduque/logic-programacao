const prompt = require('prompt-sync')();
const diasPrioridade = [];
const diasPrazo = [];
const quantidade = [];
const produto = [];
const setor = [];
let opcao = ' ';
let zonaVermelha = 0; zonaLaranja = 0; zonaAmarela = 0; zonaVerde = 0;


while(opcao !=="5"){
    console.log("\n-----Menu de Pedidos-----");
    console.log("1. Cadastrar Pedido");
    console.log("2. Listar Pedidos");
    console.log("3. Resumo Gerencial dos Pedidos");
    console.log("4. Buscar Pedido");
    console.log("5. Sair");

    opcao = prompt("Escolha uma opção: ");

 if (opcao === "1"){
    let pedido = prompt("Nome do Produto: ");
    console.log("Produto Cadastrado!")
    console.log("PED"+produto.length);

    produto.push(produto);


} if (opcao === "2"){
    console.log("\n--Lista de Pedidos--");































} if (opcao === "5"){
    console.log("Saindo...");


}
}
