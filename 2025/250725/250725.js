/*function validarCartao(numeroCartao){
    if(numeroCartao !== 16){
        // Não tem 16 dígitos.
    }
    if(numeroCartao.startsWith('0') || numeroCartao['0'] === '0'){
        // Começou com zero.
    }
    if(isNaN(numeroCartao)){
        // Não é alfabético, precisa ser número.
    }
    return "Cartão válido";
}*/

const duracoes = [100, 200, 300, 400, 500];

function duracaoMusicas (duracoes){
    for(let i=0; i <= duracoes.lenght; i++){
        let minutos
        let resto;
        let duracaoMedia = [];
        let somaMinutos;
        let somaSegundos;
        minutos = duracoes[i]/60;
        resto = duracoes[i]%60;
        duracaoMedia.push = [`${minutos}:${resto}`];
        somaMinutos = soma + minutos;
        somaSegundos = somaSegundos + resto;
        if(somaSegundos > 60){
            somaMinutos = somaMinutos + (somaSegundos/60);
            somaSegundos = somaSegundos%60;
        }
        alert(`Total: ${somaMinutos}:${somaSegundos}`);
    }
}
duracaoMusicas(duracoes);