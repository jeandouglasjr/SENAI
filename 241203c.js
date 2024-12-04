// // SENAI - Desenvolvimento de Sistemas
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 3 - Faça um programa que solicite ao usuário quantos números deseja digitar, solicite
// que digite cada número do array e mostre ao usuário qual foi o maior e qual foi o menor número digitado.

let quantidade=Number(prompt(`Quantos números deseja digitar?`))
while(quantidade<=0){
    quantidade=Number(prompt(`Digite um número válido (positivo e maior que zero)!\nQuantos números deseja digitar?`))
}
let numeros = []
for(i=0;i<quantidade;i++){
    numeros.push(Number(prompt(`Digite o ${i+1}º número:`)))
}
let maiorNumero
let menorNumero
for(i=0;i<numeros.length;i++){
    if(i==0){
        maiorNumero = numeros[i]
        menorNumero = numeros[i]
    }
    if(i>0){
        if(maiorNumero<numeros[i]){
            maiorNumero = numeros[i]
        }
        else if (menorNumero>numeros[i]){
            menorNumero = numeros[i]
        }
    }
}
alert(`Maior Número: ${maiorNumero}\nMenor Número: ${menorNumero}`)