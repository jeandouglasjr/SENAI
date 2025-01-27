programa {
  funcao inicio() {
    inteiro valor, posicao, linha1, linha2
    valor = 0
    posicao = 0
    enquanto(posicao > -100 e posicao < 100) {
      escreva("\nQual o valor?\n")
      leia(valor)
      posicao = posicao + valor
      linha1 = -100
      escreva("*** Cabo de Guerra: AZUL X VERMELHO ***\n")
      escreva("AZUL << ")
      enquanto (linha1 < posicao-1) {
        linha1 = linha1 + 2
        escreva(".")
      }
      escreva ("[", posicao, "]")
      enquanto(linha1 < 100) {
        linha1 = linha1 + 2
        escreva(".")
      }
      escreva(" >> VERMELHO")
    }
    se (posicao > 0) {
        escreva("\nPosição: ", posicao, " (O VERMELHO é o vencedor!)")
    }
    senao {
      escreva("\nPosição: ", posicao, " (O AZUL é o vencedor!)")
    }
  }
}