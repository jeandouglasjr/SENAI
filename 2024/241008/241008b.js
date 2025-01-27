// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Recuperação - Exercício 2

// A prefeitura o contratou para criar um software que irá prever o tempo de viagem de acordo com o meio de
// transporte.
// Seu programa deve perguntar ao usuário qual a distância a ser percorrida na viagem e qual o meio de
// transporte a ser utilizado:
// Opção 1: Carro (100 km/h)
// Opção 2: Bicicleta (30 km/h)
// Opção 3: Ônibus (80 km/h)
// Opção 4: Avião (300 km/h)
// Após isso informe o tempo estimado da viagem. Sabendo que o tempo é obtido pela distância dividida pela
// velocidade.

let tempoTransporte
let distancia = Number(prompt(`Qual a distância será percorrida (em Km)?`))
while(distancia <= 0){
    distancia = Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQual a distância será percorrida (em Km)?`))
}
let modalTransporte = Number(prompt(`Qual o modal será utilizado [1 - Carro] [2 - Bicicleta] [3 - Ônibus] [4 - Avião]?`))
while(modalTransporte < 1 || modalTransporte > 4){
    modalTransporte = Number(prompt(`Digite um número válido (entre 1 e 4)!\nQual o modal será utilizado [1 - Carro] [2 - Bicicleta] [3 - Ônibus] [4 - Avião]?`))
}

switch(modalTransporte){
    case 1:
        tempoTransporte = distancia / 100
        alert(`TEMPO ESTIMADO DA VIAGEM\nCARRO: ${tempoTransporte.toFixed(1)} hora(s)`)
    break
    case 2:
        tempoTransporte = distancia / 30
        alert(`TEMPO ESTIMADO DA VIAGEM\nBICICLETA: ${tempoTransporte.toFixed(1)} hora(s)`)
    break
    case 3:
        tempoTransporte = distancia / 80
        alert(`TEMPO ESTIMADO DA VIAGEM\nÔNIBUS: ${tempoTransporte.toFixed(1)} hora(s)`)
    break
    default:
        tempoTransporte = distancia / 300
        alert(`TEMPO ESTIMADO DA VIAGEM\nAVIÃO: ${tempoTransporte.toFixed(1)} hora(s)`)
    break
}