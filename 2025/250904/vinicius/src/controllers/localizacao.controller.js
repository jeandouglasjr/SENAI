import localizacaoService from "../services/localizacao.service.js";

const findLocal = (req, res) => {
    try{
            const { cidade } = req.params;
            const vaga = localizacaoService.findLocalService(cidade);
    
            if(!vaga){
                return res.status(400).send({ msg: `Vaga não encontrada!`});
            }
    
            res.send(vaga);
            
        }
        catch(error){
            res.status(500).send({ msg: error.msg});
        }
};

export default { findLocal };