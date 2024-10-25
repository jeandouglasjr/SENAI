// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 1

// Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa
// deve colocar os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório dos pontos e, caso
// os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let quantidade = Number(prompt(`Digite a quantidade de multas que cadastrará:`))
while (quantidade <= 0){
    quantidade = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nDigite a quantidade de multas que cadastrará:`))
}
let pontos = []
let soma = 0
for (i = 0; i < quantidade; i++){
    pontos.push(prompt(`Digite o número de pontos da ${i+1}ª multa:`))
    while (pontos[i] <= 0){
        pontos[i] = prompt(`Digite um número válido (positivo e maior que zero)!\nDigite o número de pontos da ${i+1}ª multa:`)
    }
}
for (i = 0; i < quantidade; i++){
    ponto = Number(pontos[i])
    soma = soma + ponto
}
if (ponto >= 21){
    console.log(`PONTOS: ${soma}\nVOCÊ ESTÁ IRREGULAR.`)
}
else {
    console.log(`PONTOS: ${soma}\nVOCÊ ESTÁ REGULAR.`)
}