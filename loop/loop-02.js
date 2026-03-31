// Contar vezes que passou de 80°
// Exibir alerta crítico se > 90°
// Informar alerta de temperatura

let temperatura = [78, 82, 90, 85];
let contagem = 0;
let temperaturaCritica = 0;
let soma = 0;

for (let i = 0; i < temperatura.length; i++) {
    soma += temperatura[i]; 
} console.log("Total: " + soma);

    let media = soma / 3;
    console.log(media.toFixed(2));

if (temperatura[i] > 80) {
        temperaturaCritica++;
    console.log("Dias acima de 80°  : " + temperaturaCritica);   
} else {
    temperatura[i] > 90;
}
console.log("Alerta crítico: " + temperaturaCritica);


