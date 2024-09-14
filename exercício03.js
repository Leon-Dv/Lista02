//3
//Criando o objeto produto
let produto = {
    nome: "Mouse",
    preço: 29.90,
    peso: 0.15,
    quantidade: 60,
    classificacao: 4.6
}


//Função para filtrar propriedades de um objeto com base em um valor específico
function filtrarPropriedades(obj, valorMinimo) {
    let novoObjeto = {}; //Criando um novo objeto para armazenar as propriedades filtradas

    for (let chave in obj) {
        //Verificando se o valor da propriedade é um número e se é maior que o valorMinimo
        if (typeof obj[chave] === 'number' && obj[chave] > valorMinimo) {
            novoObjeto[chave] = obj[chave]; //Adicionando a propriedade ao novo objeto
        }
    }

    return novoObjeto; //Retornando o novo objeto contendo apenas as propriedades filtradas
}

let resultado = filtrarPropriedades(produto, 0.3);

console.log(resultado);