// 02/10/24 - SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Prova Objetiva - Exercício 2
// Aluno: Jean Douglas Toledo Rodrigues Junior

// Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um
// alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo.
// Crie um programa, utilizando a estrutura condicional switch/case, que pergunte a pontuação de cada arremesso
// e ao final mostre o resultado (soma dos pontos) e a classificação:
// Deus da peteca - 15 pontos
// Petequeiro profissa - 10 a 14 pontos
// Petequeiro de final de semana - 5 a 9 pontos
// Pseudo-petequeiro - 1 a 4 pontos
// Portugol das petecas - 0 pontos

let arremesso1 = Number(prompt(`Qual a pontuação do 1º arremesso?`))
while(arremesso1 < 0 || arremesso1 > 5){
    arremesso1 = Number(prompt(`Digite um valor válido (entre 0 a 5).\n Qual a pontuação do 1º arremesso?`))    
}
let arremesso2 = Number(prompt(`Qual a pontuação do 2º arremesso?`))
while(arremesso2 < 0 || arremesso2 > 5){
    arremesso2 = Number(prompt(`Digite um valor válido (entre 0 a 5).\n Qual a pontuação do 2º arremesso?`))    
}
let arremesso3 = Number(prompt(`Qual a pontuação do 3º arremesso?`))
while(arremesso3 < 0 || arremesso3 > 5){
    arremesso3 = Number(prompt(`Digite um valor válido (entre 0 a 5).\n Qual a pontuação do 3º arremesso?`))    
}
let arremessoTotal = arremesso1 + arremesso2 + arremesso3
switch(arremessoTotal){
    case 0:
        alert(`${arremessoTotal} PONTOS\nPortugol das petecas`)
        break
    case 1:
    case 2:
    case 3:
    case 4:
        alert(`${arremessoTotal} PONTOS\nPseudo-petequeiro`)
        break
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        alert(`${arremessoTotal} PONTOS\nPetequeiro de final de semana`)
        break
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
        alert(`${arremessoTotal} PONTOS\nPetequeiro profissional`)
        break
    case 15:
        alert(`${arremessoTotal} PONTOS\nDeus da peteca`)
        break
}