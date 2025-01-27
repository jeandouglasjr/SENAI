// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 6 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados em um array de números, crie um novo array com o quadrado de cada número, mostrando resultado ao
// final.

let quantidade = Number(prompt(`Qual a quantidade de números deseja digitar?`))
while (quantidade <=0){
    quantidade = Number(prompt(`Digite um número váliddo (positivo e maior que zero)!\nQual a quantidade de números deseja digitar?`))
}
let numeros = []
for (i=0; i<quantidade; i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let quadrado = []
for (i=0; i<quantidade; i++){
    quadrado[i] = numeros[i]**2
}
alert(`Números: [${numeros}]\nQuadrado: [${quadrado}]`)