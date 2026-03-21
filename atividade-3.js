let idade = 13;
let temAutorizacao = true;

if(idade >=18){
    console.log('Acesso Liberado');
} else if (idade >=16 && temAutorizacao){
    console.log('Acesso Liberado');
} else {
    console.log('Acesso Negado');
}