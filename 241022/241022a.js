// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 1

// PARTE 1 - Criar um Array: Crie um array com 5 números inteiros e imprima cada número no console;
// PARTE 2 - Soma dos Elementos: Dado um array de números, escreva uma função que retorne a soma de todos os
// elementos.
// PARTE 3 - Média dos Elementos: Crie uma função que calcule a média dos números em um array.
// PARTE 4 - Maior e Menor Número: Escreva uma função que receba um array e retorne o maior e o menor número.
// PARTE 5 - Contar Ocorrências: Dado um array com números, conte quantas vezes um número específico aparece no
// array.

// PARTE 1
let listaNumeros = [10, 20, 30, 40, 50]
console.log(listaNumeros)
// PARTE 2
let soma = 0;
for (let i = 0; i<5; i++){
    soma = soma + listaNumeros[i]
}
console.log(soma)
// PARTE 3
let media
media = soma / 5
console.log(media)
// PARTE 4
let contador = Number(prompt(`Quantos números você deseja listar?`))
let listarNumeros = []
let maiorNumero, menorNumero
for (let i = 0; i < contador; i++){
    listarNumeros.push(prompt(`Digite o ${i+1}º número:`))
    if (i == 0){
        maiorNumero = listarNumeros[i]
        menorNumero = listarNumeros[i]
    }
    if (listarNumeros[i] > maiorNumero) {
        maiorNumero = listarNumeros[i]
    }
    if (listarNumeros[i] < menorNumero) {
        menorNumero = listarNumeros[i]
    }
}
console.log(`Array: ${listarNumeros}`)
console.log(`Maior Número: ${maiorNumero}`)
console.log(`Menor Número: ${menorNumero}`)
// PARTE 5
let numero = Number(prompt(`Qual o número quer verificar a quantidade de vezes que aparece?`))
let quantidade = 0
for (let i = 0; i < contador; i++){
    if (listarNumeros[i] == numero){
    quantidade = quantidade + 1
    }
}
console.log(`Quantidade de repetições do número ${numero}: ${quantidade} vezes.`)