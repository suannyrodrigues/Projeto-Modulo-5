import readlineSync from "readline-sync"
const properties = [];
let input = "";

console.log("Digite as propriedades CSS. Para finalizar digite 'SAIR'.");

while (input.toLowerCase() !== "sair") {
input = readlineSync.question("Insira uma propriedade: ");
if (input.toLowerCase() !== "sair") {
properties.push(input);
}
}

console.log("Lista ordenada de propriedades CSS:")
console.log(properties.sort().join("\n"));