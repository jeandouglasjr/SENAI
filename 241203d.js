// // SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 4 - Faça um programa que solicite ao usuário quantos números deseja digitar, solicite
// que digite cada número do array e mostre a soma total dos números.

let quantidade=Number(prompt(`Quantos números deseja digitar?`))
while(quantidade<=0){
    quantidade=Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantos números deseja digitar?`))
}
let numeros = []
for(i=0;i<quantidade;i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let soma=Number(0)
let num=Number(0)
for(i=0;i<numeros.length;i++){
    num = numeros[i]
    soma=soma+num
}
alert(`Soma: ${soma}`)