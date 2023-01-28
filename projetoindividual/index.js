//Use os comandos no terminal:
//npm init
//npm install readline-sync
//node index.js

import readlineSync from "readline-sync" //O readline é um módulo que fornece uma interface para ler dados sendo uma linha por vez. 
const prop = [];  
let input = "";  

console.log("Digite as propriedades CSS. Para finalizar digite 'SAIR'."); 

while (input.toLowerCase() !== "sair") {   // Este laço será computado até que o valor no input seja diferente de "SAIR". O texto é convertido para letra minúscula.
input = readlineSync.question("Insira uma propriedade: ");  // Esta mensagem será impressa enquanto o laço for válido. O "question" aguarda uma resposta.
if (input.toLowerCase() !== "sair") {  
prop.push(input);  // O método push adiciona as novas propriedades ao final do array, criando assim, a lista.
}
}

console.log("Lista ordenada de propriedades CSS:")
console.log(prop.sort().join("\n"));   // O método "sort()" ordena as strings e o "join()" retorna novas strings concatenando-as e "criando" um novo array ordenado.
