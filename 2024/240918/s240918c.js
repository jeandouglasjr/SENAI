// EXERCÍCIOS

// Exercício 2: Calculadora de IMC

// Crie um algoritmo no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de
// massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de
// 18 a 30) ou acima do peso (IMC maior que 30). IMC = peso/(altura*2).

// coleta de dados
let altura = Number(prompt("Qual a sua altura?").replaceAll(",","."))
let peso = Number(prompt("Qual o seu peso?").replaceAll(",","."))
// análise  e exibição de resultados
let imc = peso / (altura ** 2)

if (imc < 18) {
    alert(`IMC ${imc.toFixed(2)} - Abaixo do peso`)
}
else if (imc <= 30) {
    alert(`IMC ${imc.toFixed(2)} - Faixa de peso ideal`)
}
else {
    alert(`IMC ${imc.toFixed(2)} - Acima do peso`)
}