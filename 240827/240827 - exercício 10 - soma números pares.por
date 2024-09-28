programa {
  funcao inicio() {
    inteiro soma, numero1, resto1, numero2, resto2, numero3, resto3, numero4, resto4
    escreva("Digite o 1º número: \n")
    leia(numero1)
    escreva("Digite o 2º número: \n")
    leia(numero2)
    escreva("Digite o 3º número: \n")
    leia(numero3)
    escreva("Digite o 4º número: \n")
    leia(numero4)

    resto1 = numero1 % 2
    se (resto1 != 0){
      numero1 = 0
    }

    resto2 = numero2 % 2
    se (resto2 != 0){
      numero2 = 0
    }

    resto3 = numero3 % 2
    se (resto3 != 0){
      numero3 = 0
    }

    resto4 = numero4 % 2
    se (resto4 != 0){
      numero4 = 0
    }

    soma = numero1 + numero2 + numero3 + numero4
    escreva("A soma dos números pares é: ", soma)

  }
}
