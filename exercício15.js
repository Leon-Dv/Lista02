//15
//Array de transações
let transações = [
    {tipo: 'entrada', valor: 100},
    {tipo: 'saída', valor: 50},
    {tipo: 'entrada', valor: 200},
    {tipo: 'saída', valor: 75},
    {tipo: 'entrada', valor: 150}

]

//Armazenando o saldo final
let saldoFinal = 0

//Usando forEach para iterar sobre o array de transações
transações.forEach(function(transação){

    if(transação.tipo === 'entrada'){
        //Somando se o valor for do tipo entrada
        saldoFinal += transação.valor 
    } else if (transação.tipo === 'saída'){
        //Subtraindo se o valor for do tipo saída
        saldoFinal -= transação.valor
    }
})

console.log(`O saldo final é: R$${saldoFinal}`)