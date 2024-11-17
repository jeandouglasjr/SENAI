// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 1

// Utilize "%" para criar uma função para saber se um número é par ou ímpar

// Sem return
function parouimpar(){
    let numero = Number(prompt(`Digite um número:\nPara verificar se este número será par ou ímpar.`))
    let verificar = numero % 2
    if (verificar == 0){
        console.log(`O número ${numero} é par!`)
    }
    else{
        console.log(`O número ${numero} é ímpar!`)
    }
}

// Com return
function parouimparComRetorno(){
    let numero = Number(prompt(`Digite um número:\nPara verificar se este número será par ou ímpar.`))
    let verificar = numero % 2
    if (verificar == 0){
        return `O número ${numero} é par!`
    }
    else{
        return `O número ${numero} é ímpar!`
    }
}

let retornoFuncao = parouimparComRetorno()
console.log(retornoFuncao)