// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 3 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados um array de números, conte quantos números são positivos (maiores que zero), mostrando resultado
// ao final.

let quantidade = Number(prompt(`Qual a quantidade de números deseja digitar?`))
while (quantidade <=0){
    quantidade = Number(prompt(`Digite um número váliddo (positivo e maior que zero)!\nQual a quantidade de números deseja digitar?`))
}
let numeros = []
let positivos = []
for (i=0; i<quantidade; i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let total = 0
for (i=0; i<quantidade; i++){
    if(numeros[i]>=0){
        total++
    }
}
alert(`Total: ${total} números positivos`)