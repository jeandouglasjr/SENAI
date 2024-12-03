// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 7 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados em um array de números, crie um novo array contendo apenas os números ímpares, mostrando resultado
// ao final.

let quantidade = Number(prompt(`Qual a quantidade deseja digitar?`))
while(quantidade <= 0){
    quantidade = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a quantidade deseja digitar?`))
}
let numeros = []
for (i=0; i < quantidade; i++) {
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let impares = []
for (i=0; i < numeros.length; i++) {
    let num = Number(numeros[i])
    let verificar = num % 2
    if(verificar != 0) {
        impares.push(numeros[i])
    }
}
alert(`Números: [${numeros}]\nÍmpares: [${impares}]`)