// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 2 - Faça um programa que solicite ao usuário quantos números deseja digitar, solicite
// que digite cada número do array e mostre o inverso da ordem que o usuário digitou.

let quantidade=Number(prompt(`Quantos números deseja digitar?`))
while(quantidade<=0){
    quantidade=Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantos números deseja digitar?`))
}
let numeros = []
for(i=0;i<quantidade;i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let invertido = []
contador = quantidade
for(let i=0;i<quantidade;i++){
invertido[i] = numeros[contador-1]
contador--
}
alert(`Normal: [${numeros}]\nInvertidos: [${invertido}]`)