// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 2

// Santa Catarina é um importante polo da indústria alimentícia, com empresas que fabricam desde produtos
// lácteos até conservas e carnes. Para garantir a segurança dos produtos antes de serem embalados, cada lote
// passa por uma análise de temperatura para verificar se está dentro da faixa segura de armazenamento.
// Se a temperatura estiver entre 2 e 6 graus Celsius, o lote é considerado dentro do padrão. Temperaturas fora
// dessa faixa exigem que o lote seja ajustado antes de seguir para a etapa de embalagem.
// Crie um sistema que ajude a monitorar a temperatura de 8 lotes consecutivos. Para cada lote, o sistema deve
// solicitar que o inspetor informe a temperatura registrada. Utilize um laço FOR para processar as leituras e
// verificar se a temperatura está dentro da faixa segura de 2 a 6 graus Celsius. Ao final, o sistema deve
// informar quantos lotes estavam dentro do padrão e quantos estavam fora.
// Entregas (0,25 pontos cada):
// 1. Inicialize as variáveis dentroDoPadrao e foraDoPadrao com o valor 0;
// 2. Crie um laço de repetição FOR que solicite a temperatura de cada lote, 8 vezes;
// 3. Dentro do laço, use IF/ELSE para incrementar dentroDoPadrao se a temperatura estiver entre 2 e 6 graus
// (inclusive), ou foraDoPadrao caso contrário;
// 4. Ao final, exiba em um alert a quantidade total de lotes dentro do padrão e fora do padrão.

let dentroDoPadrao = 0 // inicia com 0
let foraDoPadrao = 0 // inicia com 0
for(i = 0; i < 8; i++){ // valida condição enquanto menor que 8
    let temperatura = Number(prompt(`[${i+1}º LOTE] - Digite a temperatura:`)) // requer temperatura
    if(temperatura >= 2 && temperatura <= 6){ // valida temperatura entre maior ou igual a 2 e menor ou igual a 6
        dentroDoPadrao++ // incrementa dentro do padrão
    }
    else{
        foraDoPadrao++ // incrementa fora do padrão
    }
}
alert(`[RESULTADO]\nLotes Dentro do Padrão: ${dentroDoPadrao}\nLotes Fora do Padrão: ${foraDoPadrao}`) // exibe resultado