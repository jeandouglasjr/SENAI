// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 1

// Crie um programa para calcular a média entre as notas digitadas:
// As notas devem ser solicitadas via prompt;
// Para parar de solicitar as notas deve ser digitado -1;
// Quando informado -1 esse valor não deve ser contabilizado;
// Deve ser exibido usando alert a média da notas;
// Deve ser utilizado while.
// Dicas:
// Crie variáveis fora do while para armazenar a soma acumulada e a quantidade de notas.
// Use o prompt dentro do while para solicitar a nota mais de uma vez e a cada novo valor digitado,
// aumente a variável da soma acumulada e também a quantidade de notas.

let nota = Number(prompt(`Qual a nota? [PARA SAIR DIGITE -1]`))
let soma = Number(nota)
while(nota != -1){
    nota = Number(prompt(`Qual a nota? [PARA SAIR DIGITE -1]`))
    if (nota != -1){
        soma = (soma + nota)
    }
    console.log(`A soma atual é : ${soma}`)
}