class Vaga {
    constructor(id, titulo, descricao, cargo, cidade, salario){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.cargo = cargo;
        this.cidade = cidade;
        this.salario = salario;
    }
}

const vagas = [];

export default {Vaga, vagas};