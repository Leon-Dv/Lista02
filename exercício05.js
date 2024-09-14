//5
//Criando o array dos objetos alunos
let alunos = [
    {nome: "Roberto", nota1: 7 ,nota2: 6},
    {nome: "Augusto", nota1: 8, nota2: 8},
    {nome: "Clara", nota1: 9, nota2: 8},
    {nome: "Patricia", nota1: 6, nota2: 7}

]

//Iterando o array com o 'for...of'
for (let aluno of alunos){
    //Calculando a média
    let media = (aluno.nota1 + aluno.nota2) / 2

    console.log(`Aluno: ${aluno.nome}, Média: ${media}`)
}
