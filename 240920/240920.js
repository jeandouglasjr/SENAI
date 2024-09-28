// 21/09/24 - SENAI - Desenvolvimento de Sistemas
// Lógica de Programação - Tutoria - Exercício
// Aluno: Jean Douglas Toledo Rodrigues Junior
// 
// VAMOS TREINAR JUNTOS?
//
// Vamos criar um código para exibir os nomes dos meses.
// Regras:
// Deve ser solicitado via prompt o mês em forma de número;
// O resultado deve ser exibido em um alert
// Caso seja informado um mês entre 1 e 12 deve ser exibido o nome do mês correspondente.
// Exemplo: informou 1 deve exibir janeiro;
// Caso seja informado um valor diferente de 1 e 12 deve ser exibido mês inválido;
// Deve ser usado switch.
// Importante: Lembre-se de usar o break em cada case.

// Coletar dados
let numero = Number(prompt("Escolha um número para representar o mês: "))
// Validar dados
while (numero < 1 || numero > 12) {
    numero = Number(prompt("Número inválido!\nEscolha um número válido para representar o mês...\nEntre 1 e 12:"))
}
// Analisar dados
switch (numero) {
    case 1:
        mes = "Janeiro"
    break
    case 2:
        mes = "Fevereiro"
    break
    case 3:
        mes = "Março"
    break
    case 4:
        mes = "Abril"
    break
    case 5:
        mes = "Maio"
    break
    case 6:
        mes = "Junho"
    break
    case 7:
        mes = "Julho"
    break
    case 8:
        mes = "Agosto"
    break
    case 9:
        mes = "Setembro"
    break
    case 10:
        mes = "Outubro"
    break
    case 11:
        mes = "Novembro"
    break
    default:
        mes = "Dezembro"
}
// Exibir resultado
alert(`O mês escolhido foi ${mes}`)