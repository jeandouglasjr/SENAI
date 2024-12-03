// SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 10 - Solicite ao usuário digitação um número, e crie um array contendo os primeiros 10 múltiplos
// de x, mostrando resultado ao final.

let numero = Number(prompt(`Digite um número para verificarmos seus múltiplos:`))
while (numero <=0) {
    numero = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nDigite um número para verificarmos seus múltiplos:`))
}
let multiplos = []
let temp
for (i=1; i<=10; i++) {
    temp = numero * i
    multiplos.push(temp)
}
alert(`Múltiplos de ${numero} são [${multiplos}]`)