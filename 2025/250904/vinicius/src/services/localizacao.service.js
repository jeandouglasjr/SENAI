import data from "../models/Vagas.js";

const Vaga = data.Vaga;
const vagas = data.vagas;

const findLocalService = (cidade) => {


    return vagas.filter(vaga => vaga.cidade.toLowerCase() === cidade.toLowerCase());

}

export default { findLocalService };