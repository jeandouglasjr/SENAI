import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

const Batalha = conexao.define("Batalha", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_vilao: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
          id_heroi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome_vencedor: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
    {
        freezeTableName: true
    }
);

export { Batalha };
