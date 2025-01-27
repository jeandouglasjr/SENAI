// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 6

// Faça um programa que simule um jogo de adivinhação. O computador escolheráum número aleatório entre 1 e 100,
// e o jogador deve adivinhar qual é o número. O jogador tem um número limitado de 10 tentativas. A cada
// tentativa, o programa deve informar se o número digitado é maior ou menor que o número escolhido pelo
// computador. No final, o programa deve informar se o jogador ganhou (adivinhou o número) ou perdeu (esgotou
// todas as tentativas).

let tentativas = Number(1)
let correto = Number(prompt(`[CONFIGURAÇÃO INICIAL]\nDigite o número que deverá ser adivinhado (entre 1 e 100):`))
while (correto <= 0 || correto > 100) {
    correto = Number(prompt(`[CONFIGURAÇÃO INICIAL]\nDigite um número válido (entre 1 e 100).\nDigite o número que deverá ser adivinhado (entre 1 e 100):`))
}
while (tentativas <= 10){
    let numero = Number(prompt(`[VEZ DO USUÁRIO]\nAdivinhe um número entre 1 e 100:`))
    while (numero <= 0 || numero > 100) {
        numero = Number(prompt(`[VEZ DO USUÁRIO]\nDigite um número válido (entre 1 e 100).\nAdivinhe um número entre 1 e 100.`))
    }
    if (numero === correto) {
        alert(`Você acertou o número ${correto} depois de ${tentativas} tentativas`)
        break
    }
    else if (numero > correto){        
        alert(`O número que você digitou é maior que o número correto.\nAinda lhe restam ${10 - tentativas} tentativas`)
    }
    else if (numero < correto){
        alert(`O número que você digitou é menor que o número correto.\nAinda lhe restam ${10 - tentativas} tentativas`)
    }
    tentativas++
}
if (tentativas > 10) {
    alert(`Você não acertou o número correto!`)
}