// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 8 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados em um array de números, verifique se todos os números do array são positivos e informe se são ou
// não, mostrando resultado ao final.

let quantidade = Number(prompt(`Qual a quantidade deseja digitar?`))
while (quantidade <= 0) {
    quantidade.push(Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a quantidade deseja digitar?`)))
}
let numeros = []
for (i=0; i<quantidade; i++) {
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let positivos = []
let negativos = []
for (i=0; i<numeros.length; i++) {
    if (numeros[i]>=0){
        positivos.push(numeros[i])
    }
    else {
        negativos.push(numeros[i])
    }
}
alert(`Positivos: [${positivos}]\nNegativos: [${negativos}]`)