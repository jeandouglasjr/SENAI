// Declarar uma variável com var e let
// Exercício 1

let idade
if (10 > 5) {
    idade = 28 // escopo local
}
if (true) {
    console.log(`Exercício 1 - Idade: ${idade}`)
}

// Declarar uma variável com const
// Exercício 2

const PI = 3.1415
console.log(`Exercício 2 - PI: ${PI}`)

// Condicional if/else

// O if toma uma decisão baseado na resposta de uma 'pergunta' realizada que pode resultar em VERDADEIRO ou FALSO.
// Se verdadeiro, o Código que está no bloco do if é executado.
// Se falso, o código executado será o que se encontra no 'else' (opcional).

// Código para verificar se a variável número é par ou ímpar:
// Exercício 3
let numero = 40
if (numero % 2 == 0) {
    console.log(`Exercício 3 - O número ${numero} é: par`)
}
else {
    console.log(`Exercício 3 - O número ${numero} é: ímpar`)
}

// Exercício 4

let media = 5.0
let resultado
if (media >= 7) {
    resultado = 'aprovado'
}
else if (media >= 3) {
    resultado = 'em recuperação'
} else {
    resultado = 'reprovado'
}
console.log(`Exercício 4 - O aluno está ${resultado}`)

// Utilizando Element(&&) lógico para verificar a situação do aluno:
// Para exibir o que está no if ou no else if, as duas condições devem ser verdadeiras.
// Exercício 5

if (media >= 7 && media <= 10) {
    resultado = 'aprovado'
    console.log(`Exercício 5 - ${resultado}`)
}
else if (media >= 3 && media < 7) {
    resultado = 'em recuperação'
    console.log(`Exercício 5 - O aluno ${resultado}`)
}
else {
    resultado = 'reprovado'
    console.log(`Exercício 5 - O aluno ${resultado}`)
}

// Operador ternário
// Exercício 6

let age
age = Number(prompt(`Digite a idade: `))
if (age <= 0) {
    age = Number(prompt(`Digite um número válido (Maior que zero)!\nDigite a idade: `))
}
let result
result = age >= 18 ? "Maior de idade" : "Menor de idade"
alert(`${result}`)

// Switch case
// Para escolher
// Exercício 7

let diaSemana
let res = Number(prompt(`Digite o dia da semana:\n[1 - Domingo]\n[2 - Segunda]\n[3 - Terça]\n[4 - Quarta]\n[5 - Quinta]\n[6 - Sexta]\n[7 - Sábado]\n`))
if (res <= 0 || res >7) {
    res = Number(prompt(`Digite um número válido (Maior que zero)!\nDigite a idade: `))
}
switch (res) {
    case 1:
        diaSemana = "Domingo"
        break
    case 2:
        diaSemana = "Segunda"
        break
    case 3:
        diaSemana = "Terça"
        break
    case 4:
        diaSemana = "Quarta"
        break
    case 5:
        diaSemana = "Quinta"
        break
    case 6:
        diaSemana = "Sexta"
        break
    case 7:
        diaSemana = "Sábado"
        break
}
alert(diaSemana)