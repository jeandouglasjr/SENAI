// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Recuperação - Exercício 3

// Com a popularidade das plataformas de streaming, como Netflix, HBO Plus e Amazon Prime, as séries se
// tornaram um entretenimento essencial para todos. As séries podem ser classificadas de acordo com a sua
// avaliação em estrelas:
// Avaliação Baixa: 1 a 2 estrelas
// Avaliação Média: 3 a 4 estrelas
// Avaliação Alta: 5 estrelas
// Sabendo disso, crie um programa que:
// Solicite ao usuário a avaliação de sua série favorita em estrelas (número inteiro entre 1 e 5).
// Classifique e exiba a avaliação utilizando a estrutura switch/case..
// Exiba a mensagem "Avaliação Baixa", "Avaliação Média" ou "Avaliação Alta", dependendo do valor informado.
// Informe caso seja informada uma avaliação inválida.

let avaliacao = Number(prompt(`Qual a avaliação de sua séria favorita (1 a 5 estrelas)?`))
while(avaliacao < 1 || avaliacao > 5){
    avaliacao = Number(prompt(`Digite um valor válido (entre 1 a 5)!\nQual a avaliação de sua séria favorita (1 a 5 estrelas)?`))
}
switch(avaliacao){
    case 1:
    case 2:
        alert(`AVALIAÇÃO BAIXA`)
    break
    case 3:
    case 4:
        alert(`AVALIAÇÃO MÉDIA`)
    break
    default:
        alert(`AVALIAÇÃO ALTA`)
    break
}