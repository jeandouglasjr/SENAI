// responsável pela configuração da conexão com o banco de dados
// definição do servidor, porta, usuário, senha e o banco de dados

// pacote pg é o driver que conecta como banco PostgreSQL
const pg = require('pg')

// definir a conexão com o servidor do banco de dados supabase
const { Client } = pg
const conexao = new Client('postgresql://postgres.kttqnwooudakfeetylvg:SenhaFácil123@aws-1-us-west-1.pooler.supabase.com:6543/postgres')

// teste de conexão
conexao.connect((erro) => {
    if (erro) {
        console.log('Conexão com erro', erro)
    }
    else {
        console.log('Conectado com sucesso')
    }
})


// exportar a conexão
module.exports = conexao
