// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 2

// Utilize seus conhecimentos de Javascript para criar funções que convertam a temperatura:
// Conversão de:
// Celsius > Fahrenheit > °F = °C x 1,8 + 32
// Fahrenheit > Celsius > °C = (°F - 32)/1,8
// Celsius > Kelvin > K = °C + 273,15
// Kelvin > Celsius > °C = K - 273,15

function converter(){
    let temperatura, indice, temperaturaInicial
    indice = Number(prompt(`ESCOLHA A CONVERSÃO:\n[1] - Celsius (°C) > Fahrenheit (°F)\n[2] - Fahrenheit (°F) > Celsius (°C)\n[3] - Celsius (°C) > Kelvin (K)\n[4] - Kelvin (K) > Celsius (°C)`))
    while(indice < 1 || indice > 4){
        indice = prompt(Number(`Digite um número válido (entre 1 e 4)!\n[1] - Celsius (°C) > Fahrenheit (°F)\n[2] - Fahrenheit (°F) > Celsius (°C)\n[3] - Celsius (°C) > Kelvin (K)\n[4] - Kelvin (K) > Celsius (°C)`))
    }
    temperaturaInicial = Number(prompt(`Digite o valor da temperatura a converter:`))
    switch(indice){
        case 1:
            temperatura = (temperaturaInicial * 1.8)+32
            alert(`A temperatura ${temperaturaInicial} °C equivale a ${temperatura.toFixed(2)} °F.`)
        break
        case 2:
            temperatura = (temperaturaInicial - 32)/1.8
            alert(`A temperatura ${temperaturaInicial} °F equivale a ${temperatura.toFixed(2)} °C.`)
        break
        case 3:
            temperatura = temperaturaInicial + 273.15
            alert(`A temperatura ${temperaturaInicial} °C equivale a ${temperatura.toFixed(2)} K.`)
        break
        case 4:
            temperatura = temperaturaInicial - 273.15
            alert(`A temperatura ${temperaturaInicial} K equivale a ${temperatura.toFixed(2)} °C.`)
        break
    }
}
converter()