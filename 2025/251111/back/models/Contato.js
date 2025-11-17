import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

// conexao.define('Nome da tabela', { objeto com as colunas da tabela e seus tipos })
const Contato = conexao.define(
  "Contato",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fone: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    email: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuario",
        key: "id",
      },
    },
  },
  {
    createdAt: "data_cadastro", // Criar coluna de criação com o nome 'data_cadastro'
    freezeTableName: true,
    updatedAt: true,
  }
);

export { Perfil };
