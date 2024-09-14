//12
//Criando o array de estoque
let estoque = [
    { produto: 'Mochila', quantidade: 5, minimo: 10 },
    { produto: 'Notebook', quantidade: 15, minimo: 10 },
    { produto: 'Bolsa', quantidade: 7, minimo: 12 },
    { produto: 'Smartphone', quantidade: 3, minimo: 5 }
]

//Atualizando os produtos que estão abaixo da quantia minima
estoque.forEach(function(item){
    //Verificando se a quantidade de um item for menor que o minimo
    if(item.quantidade < item.minimo){
        //Duplicando o item
        item.quantidade *= 2
    }
})

console.log(estoque)