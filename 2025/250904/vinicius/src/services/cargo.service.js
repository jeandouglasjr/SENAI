import data from "../models/Vagas.js";

const Vaga = data.Vaga;
const vagas = data.vagas;

const findCargoService = (cargo) => {


    return vagas.filter(vaga => vaga.cargo.toLowerCase() === cargo.toLowerCase());

}

export default { findCargoService };
