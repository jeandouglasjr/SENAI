// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 1 - Faça um programa que solicite ao usuário quantos números deseja digitar, solicite
// que digite cada número do array e mostre os números digitados.

let quantidade = Number(prompt(`Quantos números deseja digitar?`))
while(quantidade <= 0) {
    quantidade = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantos números deseja digitar?`))
}
let numeros = []
for (i=0; i<quantidade; i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
for(i=0;i<quantidade;i++){
    console.log(`[${numeros[i]}]`)
}