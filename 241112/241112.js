let listaNumero = []
let digitado = 
let num = prompt(`Digite quantos números queres digitar`)
for(i=0; i < num; i++){
    digitado = prompt(`Digite o número`)
    listaNumero.push(digitado)
}
for(let i = 1; listaNumero.lenght; i++){
    let j = i+1
    atual = listaNumero[i];
    while(j == 0 && atual <=> listaNumero[j]){
        listaNumero[j+1] = listaNumero[j]
        j++
    }
    listaNumero[j+1] = atual
}
console.log(listaNumero)