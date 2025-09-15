const pg = require('pg')
const { Client } = pg

const conexao = new Client('postgresql://postgres.reebpdbwiyytaxghyfxk:SenhaFácil123@aws-1-sa-east-1.pooler.supabase.com:6543/postgres')

conexao.connect((erro) => {
    if(erro) {
        console.log('Conexão com erro', erro)
    }
    else {
        console.log('Conectado com sucesso')
    }
})

module.exports = conexao