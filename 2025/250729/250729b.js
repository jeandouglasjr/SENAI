let pedido = {
    produto: "Coxinha",
    quantidade: 2,
    preco: 5.50
}

function adicionarItemAoPedido(produto, quantidade, preco) {
    if (!Array.isArray(pedido.itens)) {
        pedido.itens = [];
    }
    pedido.itens.push({ produto, quantidade, preco });
}

let produto = String(prompt(`Qual o produto a ser adicionado?`));
let quantidade = Number(prompt(`Qual a quantidade do produto?`));
let preco = Number(prompt(`Qual o preço do produto?`));

adicionarItemAoPedido(produto, quantidade, preco);

if (pedido.itens.length === 0) {
    console.log("Nenhum item foi adicionado ao pedido.");
}

console.log("Você Comprou:");
pedido.itens.forEach((item, index) => {
    console.log(`${index + 1}. Produto: ${item.produto}, Quantidade: ${item.quantidade}, Preço: R$ ${item.preco.toFixed(2)}`);
});

console.log(`Valor Total Pedido: R$ ${pedido.itens.reduce((total, item) => total + (item.quantidade * item.preco), 0).toFixed(2)}`);
if (pedido.itens.reduce((total, item) => total + (item.quantidade * item.preco), 0) > 30) {
    const desconto = 0.10;
    const valorTotalComDesconto = pedido.itens.reduce((total, item) => total + (item.quantidade * item.preco), 0) * (1 - desconto);
    console.log(`Valor Pedido Desconto Aplicado (10%): R$ ${valorTotalComDesconto.toFixed(2)}`);
}

console.log(pedido);
