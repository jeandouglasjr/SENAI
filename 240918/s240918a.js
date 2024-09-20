// ESTRUTURA IF / ELSE (SE / SENÃO)
// if (condição) {
// código a ser executado se a condição for verdadeira
// }
// else {
// código a ser executado se a condição for falsa
// }

// ESTRUTURA IF / ELSE IF / ELSE (SE / SENÃO SE / SENÃO)
// if (condição1) {
// código a ser executado se a condição1 for verdadeira
// }
// else if (condição2){
// código a ser executado se a condição2 for verdadeira
// else {
// código a ser executado se a condição for falsa
// }

// VAMOS TREINAR JUNTOS?

// Criar um código que verifique a situação eleitoral de umapessoa de acordo com a idade
// Regras:
// Deve ser solicitado via prompt a idade da pessoa
// O resultado deve ser exibido através de um alert
// Idades para validação:
// - Menor de 16 anos - Não pode votar;
// - Entre 16 e 17 ou 70 anos ou mais - Voto opcional;
// - Entre 18 e 69 anos - Obrigatório votar.
// Dica: Lembrar dos aprendizados de comparação (igual ==, maior ou igual >=)

// coleta de dados
let idade = Number(prompt("Qual a sua idade?"))

// verificando e exibindo resultados
if (idade < 16) { // menor que 16
    alert(`Não pode votar`)
}
else if (idade < 18 || idade > 69) { // maior ou igual a 16, menor que 18 e maior que 69
    alert(`Voto opcional`)
}
else {
    alert(`Obrigatório votar`) // exceção
}