programa {
  funcao inicio() {
    inteiro numero, multiplicacao, resto
	escreva("Escreva um número qualquer: ")
	leia(numero)

		se (numero >= 0) {
			resto = numero % 2
			se (resto > 0) {
			escreva("Este número é impar e maior que zero")
			}
			senao {
				escreva("Este número é par e maior que zero")
			}
		}
		senao {
			resto = numero % 2
			se (resto < 0) {
				escreva("Este número é impar e menor que zero")
			}
			senao{
				escreva("Este número é par e menor que zero")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 143; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */