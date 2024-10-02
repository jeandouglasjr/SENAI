let numero = prompt(`Digite o número para saber sua tabuada: `)
let fatorMultiplicacao = prompt(`Qual o fator máximo de multiplicação?`)
function tabuada(numero, fatorMultiplicacao){
    for(i = 1; i <= fatorMultiplicacao; i++){
        let num = i * numero
        console.log(`${numero} X ${i} = ${num}\n`);
    }
}
tabuada(numero, fatorMultiplicacao)

// como utilizar sem a variável global? exemplo
// mais informações sobre o return
// repetir explicação das 2 funções