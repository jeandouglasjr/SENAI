// Arrow Functions
// Consiste noutro jeito de utilizar funções:
// Sintaxe:

let variavel = () => {
    // executa o que estiver dentro deste bloco quando a função for invocada
}

// Exercício 1

let exibeSaudacao = (nome) => {
    console.log("Olá, " + nome)
}

// Local Storage
// Recurso para salvar dados no navegador, que persiste após o recarregamento da páginal ou ao fechar a aba;
// Capacidade máxima: 10Mb;
// Os dados são salvos no computador do usuário;
// Estes dados não possuem tempo de expiração, mas podem ser removidos;
// Os dados podem ser consultados na aba Application do Dev Tools.

/* let user, pass
user = prompt(`Digite o usuário: `)
pass = prompt(`Digite a senha: `)
localStorage.setItem("usuario", user)
localStorage.setItem("senha", pass)
Exercício 2 - Utilizando array no localStorage */

let user = []
let pass = []
if (localStorage.usuario){
    user = JSON.parse(localStorage.getItem('usuario'))
}
if (localStorage.senha){
    pass = JSON.parse(localStorage.getItem('senha'))
}
user.push(prompt(`Digite o usuário: `))
pass.push(prompt(`Digite a senha: `))

localStorage.usuario = JSON.stringify(user)
localStorage.senha = JSON.stringify(pass)