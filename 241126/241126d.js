// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 4 - Solicite ao usuário digitação de quantos números ele deseja digitar e inclua os números
// digitados, peça para digitar um número após conclusão do preenchimento do array e Verifique se o número
// específico existe dentro de um array, mostrando resultado ao final.

let quantidade = Number(prompt(`Qual a quantidade de números deseja digitar?`))
while (quantidade <=0){
    quantidade = Number(prompt(`Digite um número váliddo (positivo e maior que zero)!\nQual a quantidade de números deseja digitar?`))
}
let numeros = []
for (i=0; i<quantidade; i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let ok = false
verificar = parseInt(prompt(`Pesquisar:`))
for (i=0; i<quantidade; i++){
    if (verificar == numeros[i]){
        ok = true
    }
}
alert(`Verificar: ${ok}`)