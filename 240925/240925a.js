// 25/09/24 - SENAI - Desenvolvimento de Sistemas
// Lógica de Programação - Aula 17
// Aluno: Jean Douglas Toledo Rodrigues Junior

// EXERCÍCIOS

// Exercício 3: Quantos dias tem?
// Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissesto). Deve ser
// perguntado ao usuário o mês e a respota deve ser numérica.

//Coletar dados
let mes = Number(prompt("Informe o número do mês [de 1 a 12]:\n"))
// Validar dados
while (mes < 1 || mes > 12) {
    mes = Number(prompt("Número inválido!\nEscolha um número válido para representar o mês...\n[Entre 1 e 12]:"))
}
// Analisar dados
switch (mes) {
    case 1:
        mes = "Janeiro"
        dias = 31
    break
    case 2:
        mes = "Fevereiro"
        dias = 28
    break
    case 3:
        mes = "Março"
        dias = 31
    break
    case 4:
        mes = "Abril"
        dias = 30
    break
    case 5:
        mes = "Maio"
        dias = 31
    break
    case 6:
        mes = "Junho"
        dias = 30
    break
    case 7:
        mes = "Julho"
        dias = 31
    break
    case 8:
        mes = "Agosto"
        dias = 31
    break
    case 9:
        mes = "Setembro"
        dias = 30
    break
    case 10:
        mes = "Outubro"
        dias = 31
    break
    case 11:
        mes = "Novembro"
        dias = 30
    break
    default:
        mes = "Dezembro"
        dias = 31
}
// Exibir resultado
alert(`O mês escolhido foi ${mes} e tem ${dias} dias`)