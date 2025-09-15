import data from "../models/Vagas.js";

const Vaga = data.Vaga;
const vagas = data.vagas;

const createSevice = (body) => {
    const id = vagas.length + 1;

    const novaVaga = new Vaga(
        id,
        body.titulo,
        body.descricao,
        body.cargo,
        body.cidade,
        body.salario
    );

    vagas.push(novaVaga);
};

const findAllSevice = () => {
    return vagas;
};

const findByIdService = (id) => {
    const vaga = vagas.find((v) => v.id === Number(id));
    return vaga;
};

const updateService = (id, titulo, descricao, cargo, cidade, salario) => {
    const vaga = vagas.find((v) => v.id === Number(id));

    if(!vaga){
        return null;
    }

    if(titulo) vaga.titulo = titulo;
    if(descricao) vaga.descricao = descricao;
    if(cargo) vaga.cargo = cargo;
    if(cidade) vaga.cidade = cidade;
    if(salario) vaga.salario = salario;

    return vaga;
};

const removeService = (id) => {
    const vaga =  vagas.findIndex((v) => v.id === Number(id));
    vagas.splice(vaga, 1);
};

export default {
    createSevice,
    findAllSevice,
    findByIdService,
    updateService,
    removeService
};

