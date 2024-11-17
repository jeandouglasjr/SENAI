// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 3

// Crie uma função que utilize laço for para somar números no intervalo de "numeroA" a "numeroB".


function laco() {
    let numeroA, numeroB, soma = 0
    numeroA = Number(prompt(`Digite o 1º número:`))
    numeroB = Number(prompt(`Digite o 2º número:`))
    while (numeroB < numeroA) {
        numeroB = Number(prompt(`Digite um número válido (maior que ${numeroA})!\nDigite o 2º número:`))
    }
    for (i = numeroA; i <= numeroB; i++) {
        soma = soma + i
    }
    alert(`A soma entre os números ${numeroA} e ${numeroB} é ${soma}`)
}
laco()