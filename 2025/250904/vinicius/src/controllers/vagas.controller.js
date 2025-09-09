import vagasService from "../services/vagas.service.js";

const create = (req, res) => {
    try{

        const {titulo, descricao, cargo, cidade, salario} = req.body;

        if(!titulo || !descricao || !cargo || !cidade || !salario){
            return res.status(400).send({ msg: `Preencher todos os campos para criar uma vaga!`});
        }

        const vaga = vagasService.createSevice(req.body);

        return res.status(200).send({ msg: "Vaga Criada com sucesso!", vaga });
    }
    catch(error){
        res.status(500).send({ msg: error.msg});
    }
};

const findAll = (req, res) => {
    try{
        const vaga = vagasService.findAllSevice();

        if(!vaga){
            return res.status(400).send({ msg: `Vaga não encontrada!`});
        }

        res.send(vaga);

    }
    catch(error){
        res.status(500).send({ msg: error.msg});
    }
};

const findById = (req, res) => {
    try{
        const { id } = req.params;
        const vaga = vagasService.findByIdService(Number(id));

        if(!vaga){
            return res.status(400).send({ msg: `Vaga não encontrada!`});
        }

        res.send(vaga);
        
    }
    catch(error){
        res.status(500).send({ msg: error.msg});
    }
};

const update = (req, res) => {
    try{
        const {titulo, descricao, cargo, cidade, salario} = req.body;

        if(!titulo && !descricao && !cargo && !cidade && !salario){
            return res.status(404).send({ msg: `Nenhum dado enviado para atualização`});
        }

        const { id } = req.params;

        const vaga = vagasService.updateService(id, titulo, descricao, cargo, cidade, salario);

        res.status(202).send({ msg: `Vaga atualizada com sucesso`, vaga });
    }
    catch(error){
        res.status(500).send({ msg: error.msg});
    }
};

const remove = (req, res) => {
    try{
        const { id } = req.params;
        const vaga =  vagasService.removeService(Number(id));

        res.status(202).send({ msg: `Vaga deletada com sucesso`});
    }
    catch(error){
        res.status(500).send({ msg: error.msg});
    }
};

export default { create, findAll, findById, update, remove };