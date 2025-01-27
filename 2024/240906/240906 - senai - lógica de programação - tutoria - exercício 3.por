// 06/09/2024. 1ª fase - Desenvolvimento Sistemas SENAI - Aluno: Jean Douglas Toledo Rodrigues Junior
// Leia um número e exiba o resultado do fatorial deste número.
// Exemplo:
// Número: 5
// Resultado: 5 * 4 * 3 * 2 * 1 = 120
programa {
  funcao inicio() {
    //declarar variáveis
    inteiro fatorial, numero
    //coletando dados
    escreva("Digite o número para descobrir seu fatorial:\n")
    leia(numero)
    //validando dados
    enquanto(numero <= 0){
      escreva("Digite um número válido (inteiro e maior que zero).")
      leia(numero)
    }
    //analisando e escrevendo resultado
    escreva("Resultado: ", numero)
    fatorial = numero
    enquanto(numero>1){
      fatorial = fatorial * (numero-1)
      numero--
    escreva(" * ", numero)
    }
    escreva(" = ")
    escreva(fatorial)
  }
}