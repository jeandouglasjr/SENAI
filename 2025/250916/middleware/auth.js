import jwt from 'jsonwebtoken';
const secret = process.env.SECRET;

const login = async (req, res) => {
    const { user, password } = req.body
    if (user === 'ruan' && password === '123'){
      const nivelPermissao = 'administrador'
      const token = jwt.sign({ nivelPermissao }, secret, { expiresIn: 120 })
      res.status(201).send({ message: 'Login', token })
    }
    else {
        res.status(500).send({ message: 'Credenciais Inválidas' })
    }
}

const verificarToken = (req, res, next) => {
  const tokenUsuario = req.headers.autorization
  const secret = process.env.SECRET
  const verificacao = jwt.verify(tokenUsuario, secret)
  if(verificacao.nivelPermissao){
    req.nivel = verificacao.nivelPermissao
    // Depois dee validar o token e salvar o nível na requisição, libera para o controller
    next()
  }
  else {
    res.status(400).json({ auth: false, message: 'Token inválido' })
  }
}

export { login, verificarToken };