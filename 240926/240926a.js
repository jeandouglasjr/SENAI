// 25/09/24 - SENAI - Desenvolvimento de Sistemas
// Lógica de Programação - Aula 19
// Aluno: Jean Douglas Toledo Rodrigues Junior

// EXERCÍCIOS

// Exercício 5: E-commerce
// Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possuibenefícios
// para assinantes em três categorias:
// 1)Assinante Premium, ganha 20% de desconto e frete grátis
// 2)Assinante Gold, ganha 20% de desconto mas paga frete
// 3)Assinante Silver, ganha 10% de desconto mas paga frete.
// 4)Não assinante, sem benefícios.
// Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela
// o valor da compra de acordo com a opção escolhida.

// Declarar variáveis
let valor, desc, beneficio, frete = Number(12.50)
let nomeBeneficio
// Coletar dados
valor = Number(prompt(`Qual o valor da compra? R$ `))
// Validar dados (válidos somente positivos, maiores que 0)
while (valor <= 0) {
    valor = Number(prompt(`Número inválido!\nDigite um valor positivo: R$ `))
}
// Coletar dados
beneficio = Number(prompt(`Qual benefício será aplicado?\n[1 - Premium] [2 - Gold] [3 - Silver] [4 - Nenhum]`))
// Validar dados (válidos somente entre 1 e 4)
while (beneficio < 1 || beneficio > 4) {
    beneficio = Number(prompt("Número inválido!\nEscolha um benefício válido...\n[1 - Premium] [2 - Gold] [3 - Silver] [4 - Nenhum]:"))
}
// Escolher benefício
switch (beneficio) {
    // Premium
    case 1:
        nomeBeneficio = 'Premium'
        desc = 0.8 // 20% desconto
        frete = 0 // Frete grátis
        // Analisar dados
        valor = (valor * desc) + frete
        // Apresentar mensagem - Benefício e valor com 2 casas decimais
        alert(`Benefício: ${nomeBeneficio}\nTotal a pagar: R$ ${valor.toFixed(2)}`)
        break;
    // Gold
    case 2:
        nomeBeneficio = 'Gold'
        desc = 0.8 // 20% desconto
        // Analisar dados
        valor = (valor * desc) + frete
        // Apresentar mensagem - Benefício e valor com 2 casas decimais
        alert(`Benefício: ${nomeBeneficio}\nTotal a pagar: R$ ${valor.toFixed(2)}`)
        break;
    // Silver
    case 3:
        nomeBeneficio = 'Silver'
        desc = 0.9 // 10% desconto
        // Analisar dados
        valor = (valor * desc) + frete
        // Apresentar mensagem - Benefício e valor com 2 casas decimais
        alert(`Benefício: ${nomeBeneficio}\nTotal a pagar: R$ ${valor.toFixed(2)}`)
        break;
    // Nenhum
    case 4:
        nomeBeneficio = 'Nenhum'
        desc = 1 // 0% desconto
        // Analisar dados
        valor = (valor * desc) + frete
        // Apresentar mensagem - Benefício e valor com 2 casas decimais
        alert(`Benefício: ${nomeBeneficio}\nTotal a pagar: R$ ${valor.toFixed(2)}`)
        break;
}