const prompt = require('prompt-sync')();
let saldoInicial = 1000.00;
let extrato = [];
let opcao = ''
let valorDeposito = [];


while(opcao !=="5"){
    console.log("\n-----Caixa Eletrônico-----");
    console.log("1. Consultar Saldo");
    console.log("2. Realizar Depósito");
    console.log("3. Realizar Saque");
    console.log("4. Ver Extrato");
    console.log("5. Sair / Relatório Final");

    opcao = prompt("Escolha uma opção: ");

if (opcao == "1"){
    console.log("Saldo: R$", saldoInicial);
} 

if (opcao == "2"){
    const deposito = Number(prompt("Digite o valor desejado para depósito: "));
    console.log("Saldo: R$", saldoInicial + deposito);

    if (deposito === 0){
        console.log("Digite um valor válido para continuar com o depósito!")
    }
}

if (opcao === "3"){
    const saque = Number(prompt("Digite o valor desejado para saque: "));
    const saldoDisponivel = saldoInicial + deposito;

    if (saque < 0){
        console.log("Saldo Insuficiente");
    }
    else if (saque <= saldoDisponivel){
        console.log("Saldo: R$ ", deposito - saque);
        console.log("Extrato: R$ ", saque);
    }
    
}





























}