import express from 'express'

// ativação do reconhecimento do dotenv (arquivo com variaveis de ambiente/credenciais)
import 'dotenv/config'
// importar conexao do database
import { conexao } from './database.js'

try{
    await conexao.sync()
}
catch(error){
    console.error(error)
}
// importar arquivo de rotas
import { routerUsuarios } from './routes/usuario.js'

const app = express()

// Permitir o uso de JSON no body
app.use(express.json())
// Indicar o uso do arquivo de rotas
app.use('/', routerUsuarios)

// Teste de conexão com o banco de dados
try {
    await conexao.authenticate()
    // Comando que adiciona novas colunas nas tabelas
    // await conexao.sync({ alter: true })
    // Comando que exclui a tabela e seus dados e cria a tabela sem dados
    // await conexao.sync({ force: true })
    console.log('Conectado com sucesso')
} catch(erro) {
    console.log('Deu erro na conexao')
}
const port = process.env.PORT;
app.listen(port, () => console.log(`http://localhost:${port}`))