// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 2 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados um array de números, encontre o maior número presente, mostrando resultado ao final.

let quantidade = Number(prompt(`Qual a quantidade de números deseja digitar?`))
while (quantidade <=0){
    quantidade = Number(prompt(`Digite um número váliddo (positivo e maior que zero)!\nQual a quantidade de números deseja digitar?`))
}
let numeros = []
for (i=0; i<quantidade; i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
console.log(numeros)
let maiorNumero = numeros[0]
for (i=1; i < quantidade; i++){
    if(maiorNumero<numeros[i]){
        maiorNumero = numeros[i]
    }
}
console.log(`Maior Número: ${maiorNumero}`)