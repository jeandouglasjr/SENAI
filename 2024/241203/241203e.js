// // SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 5 - Faça um programa que solicite ao usuário quantos números deseja digitar, solicite
// que digite cada número do array e mostre quantos números são acima de 18 e quantos abaixo de 3.

let quantidade=Number(prompt(`Quantos números deseja digitar?`))
while(quantidade<=0){
    quantidade=Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantos números deseja digitar?`))
}
let numeros = []
for(i=0;i<quantidade;i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let acima = 0
let abaixo = 0
for(i=0;i<numeros.length;i++){
    if(numeros[i]>18){
        acima++
    }
    if(numeros[i]<3){
        abaixo++
    }
}
alert(`Acima: ${acima}\nAbaixo: ${abaixo}`)