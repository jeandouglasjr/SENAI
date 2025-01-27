// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 2

// Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento de 3% e que
// a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e
// escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país
// B.

let paisA = Number(80000)
let paisB = Number(200000)
let ano = Number(0)
while(paisA <= paisB){
    paisA = paisA * 1.03
    paisB = paisB * 1.015
    ano++
    console.log(`Ano: ${ano}\nPaís A: ${paisA.toFixed(2)}\nPaís B: ${paisB.toFixed(2)}`)
}