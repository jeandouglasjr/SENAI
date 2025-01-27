// EXERCÍCIOS

// EXERCÍCIO 1: MÉDIA

// Crie um algoritmo que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média
// e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado" e a média. Caso seja menor que 7,
// mostre uma mensagem "Reprovado" e a média.

// coleta de dados
let nota1 = Number(prompt("Qual a 1ª nota?"))
let nota2 = Number(prompt("Qual a 2ª nota?"))
let nota3 = Number(prompt("Qual a 3ª nota?"))
// análise e exibição de resultados
media = (nota1 + nota2 + nota3)/3
if (media >= 7) {
    alert(`Aprovado! Média: ${media.toFixed(2)}`)
}
else {
    alert(`Reprovado! Média: ${media.toFixed(2)}`)
}