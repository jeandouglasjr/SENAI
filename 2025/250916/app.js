import express from 'express'

//ativação do reconhecimento do dotenv (arquivo com variaveis de ambiente/credenciais)
import 'dotenv/config'

// importar conexao do database
import { conexao } from './database.js'
import { router } from './routes/herosRoute.js'

const app = express()

app.use(express.json())
app.use('/heros', router)

// testar a conexão
try {
    // await conexao.authenticate()
    await conexao.sync()
    console.log('Conectado com sucesso')
}
catch(erro) {
    console.log('Erro ao conectar')
}

app.listen(3000, () => console.log('Api iniciado'))