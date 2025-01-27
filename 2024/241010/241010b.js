// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 7

// Em uma competição de saltos ornamentais, 5 (cinco) juízes informam notas reais variando de 0 a 10. A nota
// final do atleta deve excluir a maior e a menor nota dos juízes e é composta pela soma das três demais notas.
// Faça um programa que lê do usuário as cinco notas dos juízes e informa a nota final do atleta (a soma das
// notas excluindo a menor e a maior delas). Utilize uma estrutura de repetição.

contador = Number(1)
let soma = Number(0)
let maiorNota
let menorNota
while(contador <= 5){
    let nota = Number(prompt(`Qual a nota do ${contador}º juiz?`))
    while(nota < 0 || nota > 10) {
        nota = Number(prompt(`Digite uma nova válida (entre 0 e 10).\nQual a nota do ${contador}º juiz?`))
    }
    // Verificar se é a primeira nota pra atualizar maior e menor notas
    if(contador == 1){
        menorNota = nota
        maiorNota = nota
    // Verificar se é entre 2ª e 5ª notas pra comparar e atualizar maior e menor notas
    } else {
        if(nota > maiorNota){
            maiorNota = nota
        }
        if(nota < menorNota){
            menorNota = nota
        }
    }
    // somar totas as notas
    soma = soma + nota
    contador++
}
// subtrair a maior e a menor notas
soma = soma - maiorNota - menorNota
alert(`A maior nota é ${maiorNota}\nA menor nota é ${menorNota}\nA soma das notas intermediárias é ${soma}`)