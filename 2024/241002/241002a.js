// 02/10/24 - SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Prova Objetiva - Exercício 1
// Aluno: Jean Douglas Toledo Rodrigues Junior

// A densidade demográfica é uma medida importante para entender a distribuição populacional, sendo calculada
// pela fórmula:
// Densidade Demográfica = População Total / Área em km
// Podemos classificar a densidade demográfica em categorias de acordo com o seu valor:
// Densidade Alta: maior que 100 habitantes por km²
// Densidade Média: entre 25 e 100 habitantes por km²
// Densidade Baixa: menor que 25 habitantes por km²
// Sabendo disso, crie um programa que:
// Solicite ao usuário a população total da região.
// Solicite ao usuário a área da região em metros quadrados.
// Calcule a densidade demográfica em habitantes por quilômetro quadrado.
// Classifique e exiba, utilizando if/else, uma mensagem correspondente à densidade demográfica calculada:
// "Densidade Alta" se for maior que 100.
// "Densidade Média" se estiver entre 25 e 100.
// "Densidade Baixa" se for menor que 25.

let populacaoTotal = Number(prompt(`Qual a população total da região?`))
while(populacaoTotal <= 0){
    populacaoTotal = Number(prompt(`Digite um número válido, positivo e maior que zero.\nQual a população total da região?`))
}
let areaKm = Number(prompt(`Qual a área da região (em metros quatrados)?`))
areaKm = areaKm * 0.001 // Convertendo metros em quilômetros
while(areaKm < 0){
    areaKm = Number(prompt(`Digite um número válido, positivo e maior que zero.\nQual a área da região (em metros quadrados)?`))
}
let densDemografica = populacaoTotal / areaKm
if(densDemografica > 100){
    alert(`Densidade Alta: ${densDemografica} habitante(s) por km²`)
}
else if(densDemografica >= 25){
    alert(`Densidade Média: ${densDemografica} habitante(s) por km²`)
}
else{
    alert(`Densidade Baixa: ${densDemografica} habitante(s) por km²`)
}