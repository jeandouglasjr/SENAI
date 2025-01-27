// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 1 – Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números digitados em um
// array de números, calcule a soma de todos os seus elementos, mostrando resultado ao final.

let quantidade = Number(prompt(`Qual a quantidade de números deseja digitar?`))
while (quantidade <=0){
    quantidade = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a quantidade de números deseja digitar?`))
}
let soma = Number(0)
for (i=0; i<quantidade; i++){
    let numeros = []
    numeros.push(prompt(`Digite o ${i+1}º número:`))
    let temp = Number(numeros)
    soma = soma + temp
}
alert(`Quantidade: ${quantidade}\nSoma: ${soma}`)