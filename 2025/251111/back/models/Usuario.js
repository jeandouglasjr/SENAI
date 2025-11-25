import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

// conexao.define('Nome da tabela', { objeto com as colunas da tabela e seus tipos })
const Usuario = conexao.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: "data_cadastro", // Criar coluna de criação com o nome 'data_cadastro'
    freezeTableName: true,
    updatedAt: true,
  }
);

Usuario.associate = (models) => {
  // Um usuário tem muitos endereços (1..*)
  Usuario.hasOne(models.Endereco, {
    foreignKey: "id_usuario",
    as: "enderecos", // Nome da chave no JSON de entrada
  });

  // Um usuário tem muitos contatos (1..*)
  Usuario.hasOne(models.Contato, {
    foreignKey: "id_usuario",
    as: "contatos", // Nome da chave no JSON de entrada
  });
};

export { Usuario };
