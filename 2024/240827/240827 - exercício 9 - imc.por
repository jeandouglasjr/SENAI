programa {
  funcao inicio() {
    real h2, altura, massa, imc
    escreva("Qual a altura?")
    leia(altura)
    escreva("Qual a massa?")
    leia(massa)
    h2 = altura * altura
    imc = massa / h2
    escreva("O IMC é: ", imc)

  }
}
