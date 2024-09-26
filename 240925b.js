// 25/09/24 - SENAI - Desenvolvimento de Sistemas
// Lógica de Programação - Aula 17
// Aluno: Jean Douglas Toledo Rodrigues Junior

// EXERCÍCIOS

// Exercício 4: Passa a grana.
// Desenvolva um programa que pergunta ao usuário o número da sua conta bancária e o tipo de operação a ser
// realizada:
// 1) Saldo;
// 2) Depósito;
// 3) Saque
// Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na
// tela. Na opção saldo, apenas mostrar o saldo atual na tela.
// Obs 1: Considere que um saque só poderá ser realizado caso haja saldo suficiente;
// Obs 2: Criar uma variável com um valor que represente o saldo inicial (500 por exemplo).

let saldo = 500
//Coletar dados
operacao = Number(prompt(`Qual operação será realizada?\n[1 - Saldo] [2 - Depósito] [3 - Saque]`))
// Validar dados
while (operacao < 1 || operacao > 3) {
    operacao = Number(prompt("Número inválido!\nEscolha uma operação válida...\n[1 - Saldo] [2 - Depósito] [3 - Saque]:"))
}
// Analisar dados
switch (operacao) {
    case 1:
        alert(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
    break
    case 2:
        valor = Number(prompt(`Valor: R$ `))
        while (valor <= 0) {
            valor = Number(prompt("Valor inválido!\nDigite um valor positivo:"))
        }
        saldo = saldo + valor
        alert(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
    break
    case 3:
        valor = Number(prompt(`Valor: R$ `))
        while (valor <= 0) {
            valor = Number(prompt("Valor inválido!\nDigite um valor positivo:"))
        }
        if (saldo < valor) {
            alert(`Saldo Insuficiente`)
        }
        else {
            saldo = saldo - valor
            alert(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
        }
        break
    default:
        alert(`Obrigado por utilizar FakeBank!`)
}