// Um vendedor registrou o valor de suas vendas nos últimos 7 dias. A empresa quer entender o desempenho.
// Calcular total vendido, média diária, contar dias > R$ 100,00 e Identificar o maior valor vendido.

let vendas = [180.00, 80.00, 120.00, 90.00, 200.00, 50.00, 130.00];
let totalVendido = 0;
let diasAcima100 = 0;
let maiorValor = vendas[0];

// Total Vendido
for (let i = 0; i < vendas.length; i++) {
    totalVendido += vendas[i];
}
console.log("Total Vendido: R$ " +  totalVendido);

// Média Diária
let mediaDiaria = totalVendido / vendas.length;
console.log("Média Diária: R$ " + mediaDiaria);

// Contar dias > R$ 100,00
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > 100) {
        diasAcima100++; }
    }
    console.log("Dias com vendas acima de R$ 100,00: " + diasAcima100);    
    
// Identificar o maior valor vendido
let maiorVenda = Math.max(...vendas);

console.log("O maior valor é: R$" + maiorVenda);