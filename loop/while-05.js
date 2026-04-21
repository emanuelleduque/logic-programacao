const prompt = require('prompt-sync')();
let saldoInicial = 1000.00;
let extrato = [];
let opcao = ''
let valorDeposito = [];

let qtdDeposito = 0;
let qtdSaques = 0;
let totalDepositado = 0;
let totalSacado = 0;


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

    if (deposito <= 0){
        console.log("Digite um valor válido!");
    } else {
        saldoInicial += deposito;
        extrato.push(`Depósito: +R$ ${deposito.toFixed(2)}`);
        console.log("Depósito realizado!");
        console.log("Saldo atual: R$", saldoInicial.toFixed(2));
    }

    if (deposito === 0){
        console.log("Digite um valor válido para continuar com o depósito!");
    }

} if (opcao === "3"){
    const saque = Number(prompt("Digite o valor desejado para saque: "));

    if (saque <= 0){
        console.log("Digite um valor válido!");
    }
    else if (saque > saldoInicial){
        console.log("Saldo insuficiente para realizar o saque!");
    }
    else {
        saldoInicial -= saque; 
        extrato.push(`Saque: -R$ ${saque.toFixed(2)}`);
        console.log("Saque realizado!");
        console.log("Saldo atual: R$", saldoInicial.toFixed(2));

    }

} if (opcao === "4"){
    console.log("\n--Extrato--");

    if (extrato.length === 0){
        console.log("Nenhuma movimentação realizada no momento.");
    } else {
        console.log("Extrato:", extrato);
    }

} if (opcao === "5"){
    console.log("\n--Saldo Final--");
    console.log(`Qtd. de Depósitos: ${qtdDeposito.length}`);
    console.log(`Qtd. de Saques: ${qtdSaques.length}`);
}


}
