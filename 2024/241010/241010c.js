// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 4

// Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número
// primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para
// digitar um número e informe se ele é primo. Depois implemente um laço de repetição para solicitar cinco
// números inteiros e mostre na tela se são primos ou não.

let numero = Number(prompt(`Digite um número inteiro, positivo e maior que zero:`))
while (numero <=0){
    numero = Number(prompt(`Você digitou um número inválido...\nDigite um número inteiro, positivo e maior que zero:`))
}
let resto, contador = 1, soma=0
while(contador <= numero){
    if (numero % contador === 0){
        soma++
    }
    contador++
}
if (soma == 2){
    console.log(`O NÚMERO ${numero} É PRIMO`)
}
else{
    console.log(`O NÚMERO ${numero} NÃO É PRIMO`)
}