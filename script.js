Alert("Seja bem vindo");

let numero;
let chute;
let idade;
let nome;

console.log (numero);

prompt ("Digite seu nome");
console.log (nome);

let entrada = prompt("Digite um número inteiro:");
let numero = parseInt(entrada);

if (Number.isInteger(numero)){
    console.log("Obrigada, você digitou um inteiro");
}

else {
    console.log("Por favor digite um número válido");
}