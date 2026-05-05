const prompt = require('prompt-sync')();

function calcularSalarioBruto(horasTrabalhadas, valorHora){
    return horasTrabalhadas * valorHora;
} 

function bonus(salarioBruto){
    if (salarioBruto < 2000){
     return salarioBruto + 200;
    } else {
        return salarioBruto;
    }
    
}

const nome = prompt("Nome: ");
let horasTrabalhadas = Number(prompt("Horas Trabalhadas: "));
let valorHora = Number(prompt("Valor da Hora: "));

console.log(calcularSalarioBruto(valorHora, horasTrabalhadas));
let sal = calcularSalarioBruto(valorHora, horasTrabalhadas);
console.log(bonus(sal));


