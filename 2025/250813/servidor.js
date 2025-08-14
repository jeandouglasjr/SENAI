/*
13/08/25
SENAI - Análise e Desenvolvimento de Sistemas
Desenvolvimento de Sistemas
Docente: Ruan
Discente: Jean Douglas Junior
*/

// Importar pacote para criar srevidor http
import http from 'http'

//
const dados = []

// criar uma constante servidor que recebe o servidor
const servidor = http.createServer(
    // criar uma função arrow que receberá dois parâmetros, sendo o primeiro a requisição do servidor e o segundo a resposta desta requisição
    (requisicao, resposta) => {
        // criar uma constante metodo que recebe o método da requisição
        const metodo = requisicao.method
        // comparar se o método que veio na requisição é GET, POST ou DELETE (exemplos de dados que vêm da requisição)
        if (metodo === 'GET') {
            // se o método for GET, então ele vai dar um final (end) de resposta em formato de objeto (neste caso uma lista transformada em String que veio de dados)
            resposta.end(JSON.stringify(dados))
        }
        // caso contrário, se o método for POST
        else if (metodo === 'POST') {
            // cria uma variável url que recebe a requisição específica da url (tirando a barra como resposta, substituindo pelo valor que é informado após a barra)
            const url = requisicao.url.replace('/', '')
            // verifica se o valor da URL é válido (não é null, false, undefined ou '')
            console.log(url)
            // se a url existe
            if (url) {
                // adicionar a url na lista de dados
                dados.push(url)
                // finaliza (end) uma resposta em formato de objeto (neste caso uma lista transformada em String que veio de dados)
                resposta.end(JSON.stringify(dados))
            }
            // senão
            else {
                // finaliza (end) uma resposta pré definida (frase)
                resposta.end('Requisição inválida')
            }
        }
        // senão
        else {
            // Opcionalmente podemos informar um status para cada resposta
            resposta.writeHead(404)
            // finaliza (end) uma resposta pré definida (frase)
            resposta.end('Conexão encerrada')
        }
    }
)

// Definir a porta que o servidor utilizará
// servidor.listen(3000)