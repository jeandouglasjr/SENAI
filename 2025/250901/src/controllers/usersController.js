const Users = require('../models/userModel');

exports.listar = (_, res) => {
    return res.json(Users.findAll());
};

exports.buscarPorId = (req, res) => {
    const id = Number(req.params.id);
    const user = Users.findById(id);
    if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' });
    return res.json(user);
}

exports.cadastrar = (req, res) => {
    const erro = validar(res, req.body);
    if (erro) return res.status(400).json( { erro });
    const criado = Users.create(req.body);
    res.status(201).json(criado);
};

exports.atualizar = (req, res) => {
    const erro = validar(res, req.body);
    if (erro) return res.status(404).json({ erro });
    const id = Number(req.params.id);
    const atualizado = Users.update(id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.status(200).json(atualizado);
};

exports.deletar = (req, res) => {
    const id = Number(req.params.id);
    const ok = Users.remove(id);
    if (!ok) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.status(204).send();
};

// Validação simples conforme enunciado
function validar(res, body) {

    const { name, email, password } = body;

    // name: obrigatório no POST; mínimo 2 caracteres.
    if (typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ erro: 'nome é obrigatório e com pelo menos 2 caracteres' })
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ erro: 'email inválido' })
    }

    /* PAREI AQUI - VALIDAÇÃO EMAIL DUPLICADO
    const NewEmail = Number(req.params.email);
    const userEmail = Users.findByEmail(NewEmail);
    if (email === userEmail) {
        return res.status(400).json({ erro: 'email duplicado' })
    }
    */
    
    if (password.trim().length < 7) {
        return res.status(400).json({ erro: 'senha é obrigatório e com pelo menos 6 caracteres' })
    }
    return null;
}