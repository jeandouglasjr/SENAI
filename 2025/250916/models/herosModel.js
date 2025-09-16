import { DataTypes } from 'sequelize'
import { conexao } from '../database.js'

const Hero = conexao.define('Hero', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    poder: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vitorias: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    derrotas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}
//  {
//    createdAt: 'heros',
    // updatedAt: 'false',
    // timestamps: 'false' // exclui ambas as colunas de criação e atualização
// }

)

export { Hero }