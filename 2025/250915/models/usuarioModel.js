import { DataTypes } from 'sequelize'
import { conexao } from '../database.js'

const Usuario = conexao.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
//  {
    // createdAt: 'criacao',
    // updatedAt: 'false',
    // timestamps: 'false' // exclui ambas as colunas de criação e atualização
// }

)

export { Usuario }