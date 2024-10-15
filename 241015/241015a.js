let listaNumeros = [30, 40, 50, 30, 20]
listaNumeros.push(35)
listaNumeros.pop()
listaNumeros[3] = 10
console.log(listaNumeros)
let i;
for (i=0; i<10; i++){
    listaNumeros.push(i)
}
listaNumeros[5]=15
console.log(listaNumeros)