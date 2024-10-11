// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 4

// Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível
// apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar um número e informe se ele é primo. Depois implemente um
// laço de repetição para solicitar cinco números inteiros e mostre na tela se são primos ou não.

let contador = Number(1)
let soma = Number(0)
let numero = Number(prompt(`Digite um número qualquer:`))
while(numero <= 0){
    numero = Number(prompt(`Digite um número válido (positivo e acima de zero):\n`))
}
// verificar se o número é primo (pra ser primo precisará ser divisível por 1 e por ele mesmo)
while (contador <= numero)
resultado = numero % contador
soma = soma + resultado
contador++
if (soma > 1){
    console.log(`O número ${numero} é primo`)
}
else{
    console.log(`O número não é primo`)
}