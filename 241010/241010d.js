// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 5

// Você está organizando um festival de música e precisa calcular o tempo total de reprodução de uma lista de
// músicas. Solicite ao usuário o nome decada música e a duração em minutos, repetidamente, até que ele não
// queira mais adicionar músicas. Em seguida, exiba o tempo total de reprodução da lista de músicas.
// Extra: Exiba a quantidade de horas e minutos separadamente.

let nomeMusica = []
let nomeMusic
let tempoMusica = []
let tempoMusic
let add = 1
let quantMusica = 0
let soma = Number(0)
let tempoMusical
let hora
let min
while (add != 2) {
    nomeMusic = prompt(`CADASTRO - Digite o nome da música:`)
    nomeMusica.push(nomeMusic)
    tempoMusic = Number(prompt(`CADASTRO - Digite o tempo da música:`))
    tempoMusica.push(tempoMusic)
    quantMusica++
    add = prompt(`CADASTRO - Continuar?\n[1 - SIM] [2 - NÃO]`)
}
for (i = 0; i < quantMusica; i++){
    tempoMusical = Number(tempoMusica[i])
    soma = soma + tempoMusical
    if (soma >= 60){
        hora = soma / 60
        min = soma % 60
    }
}
console.log(`Música: ${nomeMusica}`)
console.log(`Duração (em minutos): ${tempoMusica} min`)
console.log(`Duração Total (hh:mm): ${parseInt(hora)}:${min < 10 ? '0' + min : min}`)


alert(`Música: ${nomeMusica}
Duração (em minutos): ${tempoMusica} min
Duração Total (hh:mm): ${parseInt(hora)}:${min < 10 ? '0' + min : min}`)