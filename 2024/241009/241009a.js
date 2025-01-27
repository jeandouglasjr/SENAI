// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 5

// Você é um colecionador de video games e resolveu ir a uma loja para comprar alguns jogos raros. Porém, você
// tem apenas R$2000 para gastar. Faça um programa que pergunte o nome do jogo e o valor, repetidamente. Caso o
// valor ultrapasse R$2000, encerrar (desconsiderando o último jogo).
// Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de jogos, o mais caro e o mais barato.

// Criar uma repetição que pega o valor de um jogo e realize uma soma acumulada, com limite de 2000
let somaAcumulada = 0
let quantidadeJogos = 0
let maiorValor 
let menorValor// Criar repetição com limite de soma em 2000
while (somaAcumulada < 2000) {
    // Perguntar o valor
    let valor = Number(prompt("Qual é o valor do jogo?"))
    // Verificar se vai passar de 2000, antes de somar
    if(somaAcumulada + valor > 2000){
        // Formar a parada
        break
    }
    // Somar valor e quantidade
    somaAcumulada = somaAcumulada + valor
    quantidadeJogos++
    // Analisar o maior e menor valor
    // 1- exceção: o primeiro jogo, sempre vai ser o maior e menor
    if(quantidadeJogos == 1){
        menorValor = valor
        maiorValor = valor
    } else {
        // Analisar se o jogo supera o maior
        if(valor > maiorValor){
            // Atualizar o maior valor
            maiorValor = valor
        }
        // Analisar se o jogo supera o menor
        if(valor < menorValor){
            // Atualizar o menor valor
            menorValor = valor
        }
    }
}

alert(`A soma dos jogos é R$ ${somaAcumulada.toFixed(2)} e quantidade é ${quantidadeJogos}`)
alert(`O jogo mais caro custa R$${maiorValor.toFixed(2)} e o mais barato custa R$ ${menorValor.toFixed(2)}`)