programa
{
	
	funcao inicio()
	{
	inteiro vencimento, pagamento
  real valoratual, valor, multa
  valor = 150
  multa = 0.08
  escreva("Qual o dia do vencimento? \n")
  leia(vencimento)
	escreva("Qual o dia do pagamento? \n")
	leia(pagamento)
	se (pagamento <= vencimento) {
	escreva ("O valor do boleto é R$ ", valor)
	}
	senao{
    valoratual = valor + (valor * multa)
	  escreva ("O valor do boleto atualizado é R$ ", valoratual)
	}
	}
}