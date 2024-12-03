// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 9 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados em um array de números, remova todos os números negativos, mostre array no final da operação,
// mostrando resultado ao final.

let quantidade = Number(prompt(`Qual a quantidade deseja digitar?`))
while (quantidade <= 0) {
    quantidade.push(Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a quantidade deseja digitar?`)))
}
let numeros = []
for (i=0; i<quantidade; i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let temp = []
let verificar
for (i=0; i<numeros.length; i++) {
    verificar = numeros[i]
    if (verificar >= 0){
        temp.push(numeros[i])
    }
}
numeros = temp
alert(`O resultado final é [${numeros}]`)