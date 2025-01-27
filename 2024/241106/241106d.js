// SENAI - Desenvolvimento de Sistemas - Lógica de Programação
// Aluno: Jean Douglas Toledo Rodrigues Junior
// Avaliação - Exercício 4

// No setor têxtil catarinense, muitas empresas precisam gerenciar grandes volumes de produtos, como tecidos e
// roupas, e é essencial garantir que o estoque esteja sempre adequado para atender a demanda dos clientes. Uma
// empresa do setor está com uma demanda relacionada a esse controle e lhe acionou para que crie uma função que
// verifique se a quantidade de um determinado produto em estoque é suficiente para atender uma demanda mínima.
// Entregas (0,2 pontos cada):
// 1. Crie uma função chamada verificarEstoque que receba como parâmetro a quantidade de unidades de um produto
// em estoque;
// 2. A função deve retornar "Estoque suficiente" se a quantidade for maior ou igual a 100 unidades;
// 3. A função deve retornar "Estoque baixo" caso esteja entre 0 e 99;
// 4. A função deve retornar "Estoque inválido" caso seja menor que zero;
// 5. Realize 3 chamadas para a função, testando os casos dos itens 2, 3 e 4.

function verificarEstoque(){ // cria função
    let quantidade = Number(prompt(`Qual a quantidade em estoque?`)) // requer quantidade
    if(quantidade >= 100){ // valida quantidade maior ou igual a 100
        alert(`[RESULTADO]\nEstoque suficiente!`) // exibe resultado
    }
    else if(quantidade >= 0 && quantidade <= 99){ // valida quantidade entre maior ou igual a zero e menor ou igual a 99
        alert(`[RESULTADO]\nEstoque baixo!`) // exibe resultado
    }
    else{
        alert(`[RESULTADO]\nEstoque inválido!`) // exibe resultado
    }
}
verificarEstoque() // chama função