// Responsável pela configuração da conexão com o banco de dados
// Definição do servidor, porta, usuário, senha, banco de dados
// Pacote pg é o driver que conecta com banco PostgreSQL
const pg = require('pg')
// Definir a conexão com o servidor do supabase (banco de dados)
const { Client } = pg
const conexao = new Client('COLE SUA CONEXAO AQUI')
// Teste de conexão
conexao.connect((erro) => {
    if(erro) {
        console.log('Conexão com erro:', erro)
    } else {
        console.log('Conectado com sucesso')
    }
})

// Exportar a conexão
module.exports = conexao