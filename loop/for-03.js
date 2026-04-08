let Estoque = [10, 0, 5, 4, 3, 0, 8];
let produtoSemEstoque = 0;
let estoqueBaixo = 0;

for (let i = 0; i < Estoque.length; i++) {
    if (Estoque[i] === 0) {
        produtoSemEstoque++;
    } else if (Estoque[i] < 5) {
        estoqueBaixo++;
    }
}
let reposicao = produtoSemEstoque + estoqueBaixo;
console.log("Produtos sem estoque: " + produtoSemEstoque);
console.log("Produtos com estoque baixo: " + estoqueBaixo);
console.log("Total de produtos a repor: " + reposicao);