//10
//Criando o array de vendas
let vendas = [
    {produto: "Computador", quantidade: 1, valor: 1200},
    {produto: "Notebook", quantidade: 2, valor: 750},
    {produto: "Smartphone", quantidade: 4, valor: 400},
    {produto: "Videogame", quantidade: 2, valor: 250}
]

//Variavel do valor total
let total = 0

//Usando o forEach para calcular o valor total das vendas
vendas.forEach(function(venda){
    total += venda.quantidade * venda.valor

})

console.log(`O valor total das compras é de: R$${total}`)