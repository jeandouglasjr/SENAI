import { Sequelize } from 'sequelize'

const conexao = new Sequelize(process.env.BANCO_DE_DADOS)

export { conexao}