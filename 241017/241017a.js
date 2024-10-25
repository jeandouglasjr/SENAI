// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 1

// Crie um programa que peça para o usuário digitar um número via prompt (lembre-se de transformar a resposta
// para número). Em seguida crie uma estrutura de repetição com for para somar os números inteiros de zero até
// o número digitado.
// Exemplo:
// Ao digitar 5, deve-se somar 0+1+2+3+4+5
// Ao digitar 14, deve-se somar 0+1+2+3+4+5+6+7+8+9+10+11+12+13+14Exiba o valor da soma em um alert.

let soma = Number(0)
let numero = Number(prompt(`Digite um número qualquer:`))
while (numero <=0){
    numero = Number(prompt(`Digite um número válido (positivo e maior que zero):`))
}
for (i = 1; i <= numero; i++){
    soma = soma + i
}
alert(`A soma dos números de 1 a ${numero} é ${soma}.`)