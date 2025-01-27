// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 4

// Crie uma função que receba um array como parâmetro e encontre a média dos números nesse array, utilize o
// método length.


let array = [2,3,4,5,6]

function media(array){
    let soma = 0, media
    let tamanhoArray = array.length
    for(i=0; i < tamanhoArray; i++){
        soma = soma + array[i]
    }
    media = soma / tamanhoArray
    return media
}
alert(media(array))