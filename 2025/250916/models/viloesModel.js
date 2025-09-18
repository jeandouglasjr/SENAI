import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

const Vilao = conexao.define("Vilao", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vitorias: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  derrotas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
    {
        freezeTableName: true
    }
);

export { Vilao };
