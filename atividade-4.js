let valorFrete;
let valorPedido = 60;
let bairro = "Brotas";

if (valorPedido >= 80) {
    console.log("Frete grátis! Pedido: R$" + valorPedido);
} else {
    if (bairro === "Centro") {
        valorFrete = 5;
    } else if (bairro === "Brotas") {
        valorFrete = 8;
    } else if (bairro === "Itapuã") {
        valorFrete = 12;
    } else {
        valorFrete = 15;
    }

    let total = valorFrete + valorPedido;
    console.log("Frete: R$" + valorFrete + " | Pedido: R$" + valorPedido + " | Total: R$" + total);
}