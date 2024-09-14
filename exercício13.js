//13
//Criando o objeto "carrinho"
let carrinho = {
    itens: [
        {nome: 'Doritos', quantidade: 3, preçoUnitario: 7.90},
        {nome: 'Refrigerante', quantidade: 2, preçoUnitario: 5},
        {nome: 'Pizza', quantidade: 1, preçoUnitario: 20},
        {nome: 'Sorvete', quantidade: 1, preçoUnitario: 20}
    ]
}

//Variavel para armazenar o valor total
let total = 0

//Usando o forEach para calcular o valor total do carrinho
carrinho.itens.forEach(function(item){
    total += item.quantidade * item.preçoUnitario
})

console.log(`O valor total do carrinho é de: R$${total}`)