// linhas (2 a 15)
import fs from 'fs'
// linhas (19 a )
import readlineSync from 'readline'

//criar arquivo
fs.writeFileSync('texto.txt', '1ª linha: aula do dia 12/08/2025')

// ler arquivo de forma síncrona
const conteudo = fs.readFileSync('texto.txt', 'utf-8')
console.log('O conteúdo do arquivo é:', conteudo)

const novoConteudo = conteudo + '\n3ª linha: Mais conteúdos'

// adicionar conteúdo atualizando para o arquivo
fs.writeFileSync('texto.txt', novoConteudo)
console.log('O conteúdo do arquivo é:', novoConteudo)

// sintaxe para a instalação do pacore readline-sync
// npm i readline-sync

// o question aqui é semelhante ao prompt
const nome = readlineSync.question('Qual é o seu nome?')
console.log('Olá '+nome)