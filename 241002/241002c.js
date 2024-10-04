// 02/10/24 - SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Prova Objetiva - Exercício 3
// Aluno: Jean Douglas Toledo Rodrigues Junior

// Com o aumento das preocupações sobre a sustentabilidade e a eficiência energética, é essencial que as
// pessoas tomem decisões informadas sobre o consumo de energia em suas casas. Um algoritmo pode ajudar a
// classificar o consumo de energia em três categorias: baixo, médio e alto, com base em um valor fornecido
// pelo usuário.
// Crie um programa que:
// Solicite ao usuário a quantidade de energia consumida (em kWh).
// Utilize uma estrutura if/else para classificar o consumo:
// "Baixo" se for menor que 100 kWh.
// "Médio" se estiver entre 100 e 300 kWh.
// "Alto" se for maior que 300 kWh.
// Exiba uma mensagem correspondente à classificação do consumo

let consumo = Number(prompt(`Qual a quantidade de energia consumida (em KWh)?`))
while(consumo < 0){
    consumo = Number(prompt(`Digite um valor válido (positivo).\n Qual a quantidade de energia consumida (em KWh)?`))    
}
if (consumo < 100){
    alert(`Classificação do consumo:\nBAIXO (${consumo} KWh)`)
}
else if(consumo >= 100 && consumo <= 300){
    alert(`Classificação do consumo:\nMÉDIO (${consumo} KWh)`)
}
else {
    alert(`Classificação do consumo:\nALTO (${consumo} KWh)`)
}