// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 8

// Faça um programa que solicite ao usuário para digitar valores numéricos inteiros positivos. Encerre a
// entrada de dados quando for digitado um número negativo ou zero. Calcule a média dos números positivos
// digitados.

// let contador = 1, soma = 0, media = 0
// let numero = Number(prompt(`Digite o ${contador}º número:`))
// while (numero > 0){
//     soma = soma + numero
//     media = soma/contador
//     numero = Number(prompt(`Digite o ${contador}º número:`))
//     contador++
// }
// console.log(`Contador: ${contador - 1}`)
// console.log(`Soma: ${soma}`)
// console.log(`Média: ${media}`)

let contador = 1, soma = 0, media = 0
let numero = 1
while (numero > 0){
    numero = Number(prompt(`Digite o ${contador}º número:`))
    if(numero <= 0){
        break
    }
    soma = soma + numero
    contador++
}
media = soma/contador
console.log(`Contador: ${contador}`)
console.log(`Soma: ${soma}`)
console.log(`Média: ${media}`)