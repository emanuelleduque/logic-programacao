// Escrever programas que mostrem todos os números múltiplos de 6 que estejam entre 11 e 210. Ao final, além dos números mostrados, dizer qual a média entre eles. (fazer um usando repetição FOR e outro usando repetição WHILE) 


let i = 11;
let somaMultplos6 = 0;
let qtdMultiplos6 = 0;

while(i<=210){
    if(i % 6 === 0){
        console.log(i, " ");
        somaMultplos6 = somaMultplos6 + i;
        qtdMultiplos6++;
    }
    i++;
}
console.log("Média: ", somaMultplos6/qtdMultiplos6);

// Usando o for:
// for(let i = 11; i<=210; i++){ if (i % 6 === 0)}