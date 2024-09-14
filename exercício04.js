//4
//Array do objeto "pessoas"
let pessoas = [
    {nome: "Roberto", idade: 59, profissão: "Médico"},
    {nome: "Augusto", idade: 28, profissão: "Engenheiro"},
    {nome: "Clara", idade: 22, profissão: "Influenciadora Digital"},
    {nome: "Patricia", idade: 17, profissão: "Atriz"},
    {nome: "João", idade: 17, profissão:  "Sem profissão"}

]

//Iterando o array com o 'for...of'
for(let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade}`)
    console.log(`Profissão: ${pessoa.profissão}`)
    console.log("===========================")
}