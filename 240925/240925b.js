// 25/09/24 - SENAI - Desenvolvimento de Sistemas
// Lógica de Programação - Aula 18
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
    // Saldo
    case 1:
        // Apresenta saldo via alert, com duas casas decimais
        alert(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
    break
    // Depósito
    case 2:
        // Coletar dados
        valor = Number(prompt(`Valor: R$ `))
        // Validar dados (Impede inserir valores negativos ou zero)
        while (valor <= 0) {
            // Coletar dados
            valor = Number(prompt("Valor inválido!\nDigite um valor positivo:"))
        }
        // Analisar dados
        saldo = saldo + valor
        // Apresentar saldo via alert, com duas casas decimais
        alert(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
    break
    // Saque
    case 3:
        valor = Number(prompt(`Valor: R$ `))
        // Validar dados (Impede inserir valores negativos ou zero)
        while (valor <= 0) {
            // Coletar dados
            valor = Number(prompt("Valor inválido!\nDigite um valor positivo:"))
        }
        // Validar dados (Impede sacar valores inferiores ao saldo)
         if (saldo < valor) {
            // Apresentar mensagem de erro
            alert(`Saldo Insuficiente`)
        }
        // Analisar dados
        else {
            saldo = saldo - valor
            // Apresentar saldo via alert, com duas casas decimais
            alert(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
        }
        break
    default:
        alert(`Obrigado por utilizar FakeBank!`)
}