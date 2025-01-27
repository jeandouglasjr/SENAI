// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 5

// A área de um terreno é uma medida que representa a superfície ocupada por um determinado terreno e pode
// variar de acordo com a forma e o tamanho desse espaço, geralmente expressa em metros quadrados (m²).
// Uma empresa catarinense de construção precisa calcular a área de diferentes terrenos destinados à ampliação
// das fábricas e galpões. Cada terreno tem diferentes dimensões e você precisa de uma função para calcular a
// área de cada um deles.
// Entregas (0,25 pontos cada):
// 1. Crie uma função chamada calcularArea que recebe a largura e a profundidade de um terreno como parâmetros;
// 2. Calcule a área com base nos valores recebidos como parâmetro e exiba o resultado em um alert dentro da
// função;
// 3. Execute essa função para um terreno com:
// Largura: 50m e Profundidade: 40m;
// 4. Execute essa função para um terreno com:
// Largura: 30m e Profundidade: 40m.

let largura = Number(prompt(`Qual a largura do terreno (em metros)?`)) // requer largura
while(largura <= 0){ //valida largura enquanto menor ou igual a 0
    largura = Number(prompt(`Digite um número válido (positivo e menor que zero)!\nQual a largura do terreno (em metros)?`)) // exibe alerta
}
let profundidade = Number(prompt(`Qual a profundidade do terreno (em metros)?`)) // requer profundidade
while(profundidade <= 0){ // validação profundidade enquanto menor ou igual a 0
    profundidade = Number(prompt(`Digite um número válido (positivo e menor que zero)!\nQual a profundidade do terreno (em metros)?`)) // exibe alerta
}

function calcularArea(largura, profundidade){
    let area = largura * profundidade // calcula a área
    alert(`[RESULTADO]\nA área total do terreno é de ${area} m².`) // exibe resultado
}
calcularArea(largura, profundidade) // chama a função