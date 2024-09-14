//Criando o objeto carro
let carro = {
    marca: "Chevrolet" ,
    modelo: "Onix Plus",
    ano: 2024,
    cor: "Vermelho"
}

//Usando 'for...in' para iterar sobre as propriedades do objeto 'carro'
for (let propriedades in carro){
    //Exibindo as propriedades do carro
    console.log(`${propriedades}: ${carro[propriedades]}`)
}