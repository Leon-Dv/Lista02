//6
//Criando o array do objeto funcionários
let funcionários = [
    {nome: "Roberto", profissão: "Médico", salário: 5000},
    {nome: "Augusto", profissão: "Engenheiro", salário: 5000},
    {nome: "Clara", profissão: "Influenciadora Digital", salário: 3000},
    {nome: "Patricia", profissão: "Atriz", salário: 3000},
    {nome: "João", profissão:  "Sem profissão", salário: 0}

]

//Variável de valor
let valor = 0

//Usando o for...of para exibir os funcionários, profissão e salários
for (let funcionario of funcionários){
    
    if (funcionario.salário >= valor){
        console.log(`Nome: ${funcionario.nome}, Profissão: ${funcionario.profissão}, Salário: R$ ${funcionario.salário}`)
    }
}