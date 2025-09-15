import cargoService from "../services/cargo.service.js";

const findCargo = (req, res) => {
    try{
            const { cargo } = req.params;
            const vaga = cargoService.findCargoService(cargo);
    
            if(!vaga){
                return res.status(400).send({ msg: `Vaga não encontrada!`});
            }
    
            res.send(vaga);
            
        }
        catch(error){
            res.status(500).send({ msg: error.msg});
        }
};

export default { findCargo };