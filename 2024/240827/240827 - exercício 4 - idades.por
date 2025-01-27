programa {
  funcao inicio() {
    // Declara��o de vari�veis
    inteiro anoAtual, anoNascimento, idadeAnos, idadeMeses, idadeSemanas
    // Solicitar entradas de informa��o
    escreva("Em que ano voce nasceu?\n")
    leia(anoNascimento)
    escreva("Em que ano voce esta?\n")
    leia(anoAtual)
    // Processamentos: c�lculos das idades
    idadeAnos = anoAtual - anoNascimento
    idadeMeses = idadeAnos * 12
    idadeSemanas = idadeAnos * 52
    // Exibir as informa��es (sa�da)
    escreva("Sua idade em anos e ", idadeAnos)
    escreva("\nSua idade em meses e ", idadeMeses)
    escreva("\nSua idade em semanas e ", idadeSemanas)
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 620; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */