// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 1

// Santa Catarina possui uma economia diversificada, com indústrias que vão desde a produção têxtil até a de
// metalurgia e tecnologia. No entanto, a concentração industrial em determinadas áreas pode contribuir para
// níveis elevados de poluição do ar, o que exige monitoramento constante para garantir a qualidade do ambiente
// e a saúde da população. Dada a importância de manter a qualidade do ar dentro de padrões saudáveis, a
// Associação de Monitoramento Ambiental de Santa Catarina contratou você para desenvolver um sistema que
// auxilie no monitoramento dos níveis de poluição atmosférica em cidades com forte atividade industrial.
// Sua tarefa é criar um sistema que conte quantas vezes a qualidade do ar foi considerada "Ruim" em um
// conjunto de amostras. A qualidade do ar é considerada "Ruim" quando o índice de poluição registrado é
// superior a 100. Você deve programar o sistema para coletar dados de amostras e calcular quantas vezes esses
// valores indicam qualidade "Ruim".
// Entregas (0,25 pontos cada):
// 1. Inicializar a variável diasRuins com 0;
// 2. Criar um laço de repetição com WHILE que solicita o índice de poluição do ar 10 vezes;
// 3. Dentro do laço, incrementar diasRuins cada vez que o valor for superior a 100;
// 4. Ao final, exibir a quantidade de vezes que a qualidade do ar foi considerada "Ruim" usando alert.

let diasRuins = 0 // início com 0
let contador = 1 // início com 1
while(contador <= 10){ // valida condição enquanto menor ou igual a 10
    let indice = Number(prompt(`[${contador}º DIA] - Qual o índice de poluição do ar?`)) // requer índice de poluição
    while(indice <=0){ // valida condição enquanto menor ou igual a zero
        indice = Number(prompt(`Digite um número válido (positivo e maior que zero)!\n[${contador}º DIA] - Qual o índice de poluição do ar?`)) // exibe alerta
    }
    if(indice > 100){ // valida condição se mais de 100
        diasRuins++ // incrementa contador
    }
    contador++ // incrementa contador
}
alert(`[RESULTADO]\nA qualidade do ar foi considerada ruim ${diasRuins} vezes.`) // exibe resultado