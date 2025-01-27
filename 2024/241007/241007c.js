// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 3

// Você é um colecionador de video games e resolveu ir a uma loja para comprar alguns jogos raros. Porém, você
// tem apenas R$2000 para gastar. Faça um programa que pergunte o nome do jogo e o valor, repetidamente. Caso o
// valor ultrapasse R$2000, encerrar (desconsiderando o último jogo).
// Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de jogos, o mais caro e o mais barato.

let valorJogo = Number(0)
let soma = Number(valorJogo)
let orcamento = Number(2000)
let nomeJogo = prompt(`Qual o nome do Jogo?`)
valorJogo = Number(prompt(`Qual o valor do Jogo?`))
console.log(`Nome Jogo: ${nomeJogo}\nValor Jogo: R$ ${valorJogo}\nSoma R$ ${soma}`)
while(soma <= orcamento){
    nomeJogo = prompt(`Qual o nome do Jogo?`)
    valorJogo = Number(prompt(`Qual o valor do Jogo?`))
    if (soma <= orcamento){
        soma = soma + valorJogo
    }
    console.log(`Nome Jogo: ${nomeJogo}\nValor Jogo: R$ ${valorJogo}\nSoma R$ ${soma}`)
}