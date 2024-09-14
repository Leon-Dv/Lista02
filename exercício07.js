//7
//Criando o array dos produtos
let produtos = [
    {nome: "Mesa", preço: 630, desconto: 0},
    {nome: "Sofá", preço: 999, desconto: 0},
    {nome: "Geladeira", preço: 1200, desconto: 0},
    {nome: "TV", preço: 2100, desconto: 0}
]

//Usando o forEach para aplicar 10% de desconto
produtos.forEach(function(produto){
    //Aplicando 10% de desconto
    produto.desconto = produto.preço * 0.10

    //Calculando o preço final
    let calc = produto.preço - produto.desconto

    console.log(`Produto: ${produto.nome} | Preço original: R$${produto.preço} | Preço com desconto: R$${calc}`)

})