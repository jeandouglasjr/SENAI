// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Recuperação - Exercício 1

// Você foi contratado para desenvolver um programa para cobrança de entradas de cinema, no qual deve ser
// perguntado a quantidade de ingressos e informar o preço final a ser pago.
// A administradora do cinema disponibiliza um clube de descontos que oferece um desconto de R$5,00 no preço
// dos ingressos.
// Sabendo que o ingresso custa R$30,00 sem descontos, crie um programa que pergunte a quantidade de ingressos
// para o usuário e também se ele participa do clube de descontos, após isso informe o preço final a ser pago.

let precoIngressos = Number(30)
let valorFinal = Number
let quantIngressos = Number(prompt(`Qual a quantidade de ingressos desejada?`))
while(quantIngressos <= 0){
    quantIngressos = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a quantidade de ingressos desejada?`))
}
let clubeDescontos = Number(prompt(`É participante do Clube de Descontos [1 - SIM, 2 - NÃO]?`))
while(clubeDescontos < 1 || clubeDescontos > 2){
    clubeDescontos = Number(prompt(`Digite um número válido (entre 1 e 2)!\nÉ participante do Clube de Descontos [1 - SIM, 2 - NÃO]?`))
}
if (clubeDescontos === 1){
    valorFinal = (quantIngressos * precoIngressos) - (quantIngressos * 5)
    alert(`QUANTIDADE: ${quantIngressos}\nPARTICIPANTE CLUBE: Sim\nPREÇO: R$ ${valorFinal.toFixed(2)}`)
}
else{
    valorFinal = quantIngressos * precoIngressos
    alert(`QUANTIDADE: ${quantIngressos}\nPARTICIPANTE CLUBE: Sim\nPREÇO: R$ ${valorFinal.toFixed(2)}`)
}