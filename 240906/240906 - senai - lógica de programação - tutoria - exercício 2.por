// 06/09/2024. 1ª fase - Desenvolvimento Sistemas SENAI - Aluno: Jean Douglas Toledo Rodrigues Junior
// Crie um algoritmo que leia 6 números inteiros e calcule a soma dos que forem par.
programa {
  funcao inicio() {
    //declarar variáveis
    inteiro soma=0, indice=1, numero, resto
    //inserir e analisar dados
    enquanto(indice <= 6) {
      escreva("Qual o ", indice, "º número?\n")
      leia(numero)
      resto = numero % 2
      se (resto != 0){
        numero = 0
      }
      soma = soma + numero
      //escrever resultado
      escreva("A soma dos números pares é: ", soma, "\n\n")
      indice++
    }
  }
}