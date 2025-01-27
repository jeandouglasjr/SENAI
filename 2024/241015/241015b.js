// Exercício 1
// Crie um programa onde pergunte quantos dias de temperatura de uma cidade ele quer digitar, depois disso
// mostre a média, maior e menor temperatura.

let indice = Number(prompt(`Quantas temperaturas serão analisadas?`))
while (indice <= 0){
    indice = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantas temperaturas serão analisadas?`))
}
let listaTemp = []
let temp, i, maiorTemp, menorTemp, media, soma = 0
for (i = 0; i < indice; i++){
    let temp = Number(prompt(`Qual a ${i + 1}ª temperatura?`))
    listaTemp.push(temp)
    if (i == 0) {
        maiorTemp = temp
        menorTemp = temp
    }
    if (temp > maiorTemp){
        maiorTemp = temp
    }
    if (temp < maiorTemp){
        menorTemp = temp
    }
    soma = soma + temp
    media = soma/indice
}
console.log(`Lista Temperatura:`, listaTemp)
console.log(`Soma: ${soma}`)
console.log(`Média: ${media}`)
console.log(`Maior: ${maiorTemp}`)
console.log(`Menor: ${menorTemp}`)