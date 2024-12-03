// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 11 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados em um array de números, encontre a moda, ou seja, o número que mais aparece no array, mostrando
// resultado ao final.

let quantidade = Number(prompt(`Qual a quantidade deseja digitar?`))
while (quantidade <= 0) {
    quantidade.push(Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a quantidade deseja digitar?`)))
}
let numeros = []
for (i = 0; i < quantidade; i++) {
    numeros.push(Number(`Digite o ${i+1}º número:`))
}
let temp = []
let num
let contador
for (i = 0; i < numeros.length; i++) {
    num = numeros[i]
    while (numeros[i] == num){
        contador++
    }
}