//14
//Criando o objeto "empresa" com a propriedade departamentos
let empresa = {
    nome: "Google",
    departamentos: [
        {
            nome:"Desenvolvimento",
            funcionários: ["Jorge", "Kauã", "Luísa"]
        },
        {
            nome:"Marketing",
            funcionários: ["Amanada", "Bruno", "Carlos"]
        },
        {
            nome: "Recursos Humanos",
            funcionários: ["Eduardo", "Fernanda"]
        }
    ]
}

//Iterando sobre os departamentos e os funcionários com o for...in
for(let i in empresa.departamentos){
    //Acessando os departamentos
    let departamento = empresa.departamentos[i]


    console.log(`Departamento: ${departamento.nome}`)

    //Iterando sobre os funcionários de cada departamento
    for(let funcionario of departamento.funcionários){
        console.log(`Funcionário: ${funcionario}`)
    }
}