/*
12/08/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Ruan
Discente: Jean Douglas Junior

Atividades (node fs)
Faça uma aplicação em node.js que permita:

*/

// linhas ()
import fs, { readdirSync } from 'fs'
// linhas ()
import readlineSync from 'readline-sync'

// 1º - Fazer a leitura de um arquivo de texto e exibir o resultado no console;
 
// criar arquivo de texto e seu conteúdo
fs.writeFileSync('atividadeA.txt', 'Resposta da Atividade A\n ')

// ler arquivo criado anteriormente de forma síncrona
const conteudo = fs.readFileSync('atividadeA.txt', 'utf-8')
console.log('1ª)', conteudo)

// 2º - Solicitar a entrada de um texto via terminal e inserir o texto no arquivo, mantendo o que já havia nele;

// Neste exercício é necessária a importação do pacote readline-sync, cuja sintaxe segue abaixo:
// npm i readline-sync

// O question aqui é semelhante ao prompt para inserção de texto do usuário:
const nome = readlineSync.question(' Qual é o seu nome?\n')
const novoConteudo = conteudo + nome

// adicionar conteúdo digitado pelo usuário no arquivo criado anteriormente, concatenando seu conteúdo
fs.writeFileSync('atividadeA.txt', novoConteudo)
console.log('2ª) Novo conteúdo concatenado do arquivo anterior:\n', novoConteudo)

// 3º - Perguntar um nome de arquivo via terminal e verificar se esse arquivo existe na pasta atual('.');
const nomeArquivo = readlineSync.question('Digite o nome do arquivo:\n')
const existencia = fs.existsSync(nomeArquivo)
if (!existencia){
    console.log('O arquivo ' + nomeArquivo + ' não existe!')
}
else{
    console.log('O arquivo ' + nomeArquivo + ' existe!')
}

// 4º - Exiba a lista de arquivos da pasta atual.

const diretorio = fs.readdirSync('.')
console.log('Arquivos da pasta: ', diretorio)
