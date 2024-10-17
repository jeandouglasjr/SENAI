// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Exercício 9

// Em uma eleição presidencial, existem 3 candidatos. Os votos foram registrados em fichas. Cada ficha contém
// um dos códigos relacionados abaixo: 1, 2, 3: Voto para os respectivos candidatos
// 4: Voto nulo
// 5: Voto em branco
// Construa um algoritmo que:
// A. Leia as fichas (a última ficha contém o valor 0 (zero) que indica o fim do processamento);
// B. Calcule o total de votos de cada candidato;
// C. Calcule o total de votos nulos e o total de votos em branco;
// D. Determine o candidato vencedor

let candidatoA=0, candidatoB=0, candidatoC=0, brancos=0, nulos=0, soma=0
let votos = Number(prompt(`QUAL O SEU VOTO?\n[1 - CANDIDATO A]\n[2 - CANDIDATO B]\n[3 - CANDIDATO C]\n[4 - BRANCO]\n[5 OU OUTROS - NULO]\n[0 - SAIR]`))

while (votos != 0) {
    switch(votos){
        case 1:
            candidatoA = candidatoA + 1
            break
        case 2:
            candidatoB = candidatoB + 1
            break
        case 3:
            candidatoC = candidatoC + 1
            break
        case 4:
            brancos = brancos + 1
            break
        default:
            nulos = nulos + 1
            break
        }
    votos = Number(prompt(`QUAL O SEU VOTO?\n[1 - CANDIDATO A]\n[2 - CANDIDATO B]\n[3 - CANDIDATO C]\n[4 - BRANCO]\n[5 OU OUTROS - NULO]\n[0 - SAIR]`))
}
soma = candidatoA + candidatoB + candidatoC + brancos + nulos
if (candidatoA > candidatoB && candidatoA > candidatoC){
    console.log(`TOTAL: ${soma}\nCANDIDATO A: ${candidatoA}\nCANDIDATO B: ${candidatoB}\nCANDIDATO C: ${candidatoC}\nBRANCOS: ${brancos}\nNULOS: ${nulos}`)
    console.log(`O VENCEDOR É O CANDIDATO A COM ${candidatoA} VOTOS!`)
}
else if (candidatoB > candidatoA && candidatoB > candidatoC){
    console.log(`TOTAL: ${soma}\nCANDIDATO A: ${candidatoA}\nCANDIDATO B: ${candidatoB}\nCANDIDATO C: ${candidatoC}\nBRANCOS: ${brancos}\nNULOS: ${nulos}`)
    console.log(`O VENCEDOR É O CANDIDATO B COM ${candidatoB} VOTOS!`)
}
else if (candidatoC > candidatoA && candidatoC > candidatoB){
    console.log(`TOTAL: ${soma}\nCANDIDATO A: ${candidatoA}\nCANDIDATO B: ${candidatoB}\nCANDIDATO C: ${candidatoC}\nBRANCOS: ${brancos}\nNULOS: ${nulos}`)
    console.log(`O VENCEDOR É O CANDIDATO C COM ${candidatoC} VOTOS!`)
}
else{
    console.log(`HOUVE EMPATE ENTRE OS CANDIDATOS!`)
    console.log(`TOTAL: ${soma}\nCANDIDATO A: ${candidatoA}\nCANDIDATO B: ${candidatoB}\nCANDIDATO C: ${candidatoC}\nBRANCOS: ${brancos}\nNULOS: ${nulos}`)
}