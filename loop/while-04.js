const prompt = require('prompt-sync')();
const diasPrazo = [];
const quantidade = [];
const produto = [];
const setor = [];
let opcao = ' ';
let zonaVermelha = "Urgente!", zonaLaranja = "Alta", zonaAmarela = "Média", zonaVerde = "Baixa"


while(opcao !=="5"){
    console.log("\n-----Menu de Pedidos-----");
    console.log("1. Cadastrar Pedido");
    console.log("2. Listar Pedidos");
    console.log("3. Resumo Gerencial dos Pedidos");
    console.log("4. Buscar Pedido");
    console.log("5. Sair");

    opcao = prompt("Escolha uma opção: ");

// CADASTRAR PEDIDOS
 if (opcao === "1"){
    let pedido = prompt("Nome do Produto: ");
    console.log("Produto Cadastrado!")
    console.log(`PED${produto.length}`);

    produto.push(pedido);

// LISTAR PEDIDOS
} if (opcao === "2"){
    console.log("\n--Lista de Pedidos--");

if (produto.length === 0) {
        console.log("Nenhum pedido cadastrado no momento.");
} else {
    for (let i = 0; i < produto.length; i++) {
    console.log(`PED${i} | Produto: ${produto[i]}`);}
} 
} if (opcao === "3"){
    console.log("\n--Resumo Gerencial de Pedidos--");

    while(true){
    let diasPrioridade = parseInt(prompt("Prazo(Dias): "));
    if(diasPrioridade<0){
        break;
    }
    if (diasPrioridade <= 2){
        console.log("Prioridade ", zonaVermelha); 
    } else if (diasPrioridade <= 5){
        console.log("Prioridade: ", zonaLaranja);
    } else if (diasPrioridade <= 10){
      console.log("Prioridade: ", zonaAmarela);
    } else {
        console.log("Prioridade: ", zonaVerde);
    } break;
}

































} if (opcao === "5"){
    console.log("Saindo...");


}

}

