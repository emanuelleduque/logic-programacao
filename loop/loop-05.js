let consumo = [30, 90, 45, 66];
let total = 0;
let diasAltos = 0;

for (let i = 0; i < consumo.length; i++) {
    total += consumo[i];

    if (consumo[i] > 50) {
        diasAltos++;
    } 
} 