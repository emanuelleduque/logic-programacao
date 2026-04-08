let notas = [7, 8, 5, 6, 9];
let aprovados = 0;
let reprovados = 0;
let soma = 0;
let maiorNota = notas[0];

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];

    if (notas[i] >= 7) {
        aprovados++;
    } else {
        reprovados++;
    }

    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }   
}
 let media = soma / notas.length;
 console.log("Média: " + media.toFixed(2));
 console.log("Aprovados: " + aprovados);
 console.log("Reprovados: " + reprovados);
 console.log("Maior Nota: " + maiorNota);        