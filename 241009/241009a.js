// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 3

// Você é um colecionador de video games e resolveu ir a uma loja para comprar alguns jogos raros. Porém, você
// tem apenas R$2000 para gastar. Faça um programa que pergunte o nome do jogo e o valor, repetidamente. Caso o
// valor ultrapasse R$2000, encerrar (desconsiderando o último jogo).
// Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de jogos, o mais caro e o mais barato.

let saldo = Number(0)
while(saldo < 2000){
    let valor = Number(prompt(`Qual o valor do jogo?`))
    saldo = saldo + valor
    alert(`${saldo}`) // Saldo atual
    if (saldo > 2000){
        alert(`Saldo: ${saldo - valor}`)
    }
    else{
        alert(`Saldo: ${saldo}`)
    }
}