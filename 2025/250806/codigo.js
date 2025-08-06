import fs from 'fs';

// const fs = require('fs');

//função assíncrona
fs.readFile('package.json', 'utf8', (erro, valor) => {
    if(erro){
        console.log('Erro ao ler')
    }
    else{
        console.log('Sucesso ao ler')
        console.log(valor.toString())
    }
})

console.log('Depois')

//função síncrona
fs.readFileSync('package.json', 'utf8', (erro, valor) => {
    if(erro){
        console.log('Erro ao ler')
    }
    else{
        console.log('Sucesso ao ler')
        console.log(valor.toString())
    }
})
console.log('Depois síncrono')

