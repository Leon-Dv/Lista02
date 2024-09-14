//8
//Criando o array dos filmes
let filmes = [
    {titulo: "Ilha do Medo", diretor: "Martin Scorsese", anoLancamento: "2010"},
    {titulo: "Um Sonho de Liberdade", diretor: "Frank Darabont", anoLancamento: "1995"},
    {titulo: "Anjos da Lei", diretor: "Phil Lord & Chris Miller", anoLancamento: "2012"},
    {titulo: "Guerra Mundial Z", diretor: "Marc Foster", anoLancamento: "2013"}
]

//Array para armazenar o titulo dos filmes
let movieTitle = []

//Usando forEach para iterar sobre cada filme e adicionar um título ao novo array
filmes.forEach(function(filme){
    movieTitle.push(filme.titulo)
})

console.log(movieTitle)