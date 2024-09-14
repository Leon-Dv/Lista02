//2
//Criando o objeto livro
let livro = {
    titulo: "A Divina Comédia",
    autor: "Dante Alighieri",
    anoPublicacao: 1862,
    genero: ["Poesia", "Drama"]
}

let editoraExiste = false

//Usando o for... in para iterar sobre o objeto livro
for (let propriedades in livro){
    //Checando se existe a categoria "Editora"
    if(propriedades === "editora") {
        editoraExiste = true
        //Interrompendo o loop
        break 
    }
}

//Se a propriedade editora não exisitir, adicionar ao objeto.
if (!editoraExiste){
    livro.editora = "Desconhecida"
}

console.log(livro)
