programa {
  funcao inicio() {
    cadeia pessoa1, pessoa2, pessoa3
    inteiro idade1, idade2, idade3, maior
    real media
    escreva("Qual o nome da 1ª pessoa? \n")
    leia(pessoa1)
    escreva("Qual a idade da 1ª pessoa? \n")
    leia(idade1)
    escreva("Qual o nome da 2ª pessoa? \n") 
    leia(pessoa2)
    escreva("Qual a idade da 2ª pessoa? \n")
    leia(idade2)
    escreva("Qual o nome da 3ª pessoa? \n")
    leia(pessoa3)
    escreva("Qual a idade da 3ª pessoa? \n")
    leia(idade3)
    media = (idade1 + idade2 + idade3) / 3
    se (idade1 > idade2) {
        escreva ("A média de idade é ", media, "e a maior idade é ", idade1)
    } senao {
      se (idade2 > idade3) {
        escreva("A média de idade é ", media, "e a maior idade é ", idade2)
      } senao {
        escreva("A média de idade é ", media, "e a maior idade é ", idade3)
      }
    }
  }
}