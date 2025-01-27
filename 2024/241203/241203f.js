// // SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 6 - Faça um programa que solicite ao usuário quantos números deseja digitar, solicite
// que digite cada número do array e após mostre os números ordenados do maior para menor.

let quantidade=Number(prompt(`Quantos números deseja digitar?`))
while(quantidade<=0){
    quantidade=Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantos números deseja digitar?`))
}
let numeros = []
for(i=0;i<quantidade;i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let temp;
for(let i = 1; i < quantidade; i++){ // Não aceitou o tamanho do array pelo numeros.length
    let j = i-1
    temp = numeros[i];
        while(j >= 0 && temp > numeros[j]){
            numeros[j+1] = numeros[j];
            j--
        }
    numeros[j+1] = temp
}
alert(`Números: [${numeros}]`)