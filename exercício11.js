//11
//Criando o array dos pedidos
let pedidos = [
    {cliente: "Roberto", produto: "Mochila", quantidade: 1},
    {cliente: "Augusto", produto: "Notebook", quantidade: 2},
    {cliente: "Clara", produto: "Bolsa", quantidade: 1},
    {cliente: "Patrícia", produto: "Smartphone", quantidade: 3}
]

//Armazenando o total de produtos por clientes
let totalCliente = {}

pedidos.forEach(function(pedido){

    //Verificando se o cliente já existe no totalCliente
    if(totalCliente[pedido.cliente]){
        //Se existe, soma a quantidade do produto ao valor atual
        totalCliente[pedido.cliente] += pedido.quantidade
    }else{
        //Se não existe, cria para um cliente e adiciona a quantidade
        totalCliente[pedido.cliente] = pedido.quantidade
    }

})

console.log(totalCliente)