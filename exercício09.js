//9
//Criando o array dos clientes
let clientes = [
    {nome: "Roberto", idade: 59, cidade: "Porto Alegre"},
    {nome: "Augusto", idade: 28, cidade: "Osasco"},
    {nome: "Clara", idade: 22, cidade: "Florianópolis"},
    {nome: "Patricia", idade: 17, cidade: "Copacabana"}

]

//Criando a variavel contador para contar quantos tem mais de 30 anos
let contador = 0

clientes.forEach(function(cliente){
    //Incrementando no contador caso o cliente tenha mais de 30 anos
    if(cliente.idade > 30){
        contador++
    }

})

console.log(`O total de clientes com mais de 30 anos é: ${contador}`)