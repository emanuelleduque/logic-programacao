// Histórico de Ações: Remoção do Último Registro

// Um vetor com ações: ["Login", "Visualizar", "Logout"].
let acoes = ["Login", " Visualizar", " Logout"];
console.log("Ações: " + acoes);
 
// Utilizar .pop() para remover a ação mais recente.
let acoesPop = acoes.pop();

// Ação removida ("Logout") e vetor com as ações restantes
console.log("Ações Restantes: " + acoes);
console.log("Ação Removida:" + acoesPop);


