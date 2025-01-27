// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 2

//  Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número
// digitado não for par, ao final não será mostradaa média e sim uma mensagem “Um dos números digitados era
// ímpar”.

let numero = []
let soma = 0
let media
for (i = 0; i < 5; i++){
    let num = Number(prompt(`Digite o ${i}º número:`))
    numero.push(num)
}
for (i = 0; i < 5; i++){
    let num = Number(numero[i])
    soma = soma + num
    media = soma / 5
}
console.log(numero)
console.log(media)

// pegou os 5 números, calculou a média, mas faltou verificar se é par ou ímpar pra apresentar o resultado
// correto.