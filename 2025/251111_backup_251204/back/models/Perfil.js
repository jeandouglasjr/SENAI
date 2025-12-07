import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

// conexao.define('Nome da tabela', { objeto com as colunas da tabela e seus tipos })
const Perfil = conexao.define(
  "Perfil",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  },
  {
    createdAt: "data_cadastro", // Criar coluna de criação com o nome 'data_cadastro'
    freezeTableName: true,
    updatedAt: true,
  }
);

export { Perfil };
