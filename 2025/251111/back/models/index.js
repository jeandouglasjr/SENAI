// models/index.js

import { conexao } from "../database.js"; // Assumindo que você precisa da conexão
import { Usuario } from "./Usuario.js"; // Caminho para o seu arquivo Usuario.js
import { Endereco } from "./Endereco.js"; // Caminho para o seu arquivo Endereco.js
import { Contato } from "./Contato.js"; // Caminho para o seu arquivo Contato.js

// 1. Reúne todos os modelos em um único objeto (importante para a associação)
const models = {
  Usuario,
  Endereco,
  Contato,
  // Adicione qualquer outro modelo aqui
};

// 2. Executa a lógica de associação
// (Isto deve ser feito depois que todos os modelos foram inicializados)
Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

// 3. Exporta os modelos individualmente e o objeto models
export { Usuario, Endereco, Contato, models };
//         ^^^^^^^  ^^^^^^^^  ^^^^^^^
// ESSA LINHA GARANTE QUE SEU CONTROLLER POSSA USAR:
// import { Usuario, Endereco, Contato } from "../models/index.js";
