// 06/09/2024. 1ª fase - Desenvolvimento Sistemas SENAI - Aluno: Jean Douglas Toledo Rodrigues Junior
// Crie um algoritmo que informa quantos dias tem determinado mês (desconsiderando ano bissexto).
// Deve ser perguntado ao usuário o número do mês (1 a 12) e a resposta deve ser mostrar na tela:
// "O mês possui x dias".
// Dica: Aproveite a mesma resposta para todos os casos que se enquadrarem.

programa {
  funcao inicio() {
    //declarar variáveis
    inteiro mes, resto
    //coletar dados
    escreva("Qual o mês deve-se informar a quantidade de dias?\n")
    leia(mes)
    //validar entrada
    enquanto (mes <=0 ou mes >=13){
        escreva("Digite um valor válido: \n")      
        leia(mes)
    }
    //analisar e responder
    se (mes == 2){
      escreva("O mês possui 28 dias.\n")
    }
    senao se ((mes >= 1) e (mes <=7) e (mes != 2)){
      resto = mes % 2
      se (resto != 0){
        escreva("O mês possui 31 dias.\n")
      } senao {
          escreva("O mês possui 30 dias.\n")
        }
    }
    senao se ((mes >= 8) e (mes <=12) e (mes != 2)){
      resto = mes % 2
      se (resto != 0){
        escreva("O mês possui 30 dias.\n")
      } senao {
          escreva("O mês possui 31 dias.\n")
        }
    }
    senao se ((mes >= 4) e (mes <=11) e (mes != 2)){
      resto = mes % 2
      se (resto != 0){
        escreva("O mês possui 31 dias.\n")
      } senao {
          escreva("O mês possui 30 dias.\n")
        }
    }
  }
}