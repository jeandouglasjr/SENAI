import { DataTypes } from "sequelize";
import { conexao } from "../database.js";
import { Hero } from "./herosModel.js";
import { Vilao } from "./viloesModel.js";

const Batalha = conexao.define(
  "Batalha",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    },
  },
  {
    freezeTableName: true,
  }
);

// associações
Hero.hasMany(Batalha, { foreignKey: "id_heroi" });
Vilao.hasMany(Batalha, { foreignKey: "id_vilao" });
Batalha.belongsTo(Hero, { foreignKey: "id_heroi" });
Batalha.belongsTo(Vilao, { foreignKey: "id_vilao" });

export { Batalha };
