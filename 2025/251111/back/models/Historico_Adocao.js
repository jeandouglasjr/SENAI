import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

// conexao.define('Nome da tabela', { objeto com as colunas da tabela e seus tipos })
const Historico_Adocao = conexao.define(
  "Historico_Adocao",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_resgate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data_adocao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacoes: {
      type: DataTypes.STRING,
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
    id_animal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Animal",
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

export { Historico_Adocao };
