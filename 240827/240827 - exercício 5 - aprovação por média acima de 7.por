programa {
  funcao inicio() {
    // Declara��o de variaveis
    real nota1, nota2, media
    // Solicita��o de entrada de dados
    escreva("Digite a primeira nota\n")
    leia(nota1)
    escreva("Digite a segunda nota\n")
    leia(nota2)
    // Processamentos: calcular a m�dia e informar situa��o
    media = (nota1 + nota2)/2
    se(media > 7){
      escreva("\nVoce est� aprovado com media ", media)
    } senao {
      escreva("\nVoce est� reprovado com media ", media)
    }
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 322; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */