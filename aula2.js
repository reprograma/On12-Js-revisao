/* const palavra = "Mayhhara"

let encontrado = false 

for(let letra of palavra) {
    if (letra === "h"){
        encontrado = true
        console.log("Tem letra H")
        break;
    }
}
    if (!encontrado) {
        console.log("Nao tem H")
    }
 */
    /// Faça um programa que conte quantas letras 
    // "a" (apenas minusculas mesmo) têm numa determinada palavra.
/* 
    const nome = "Mayhhara"
    const idade = 20
    const altura = 1.58
    const temCNH = true
    const apelidos = ["May","Ma","Lili"]
 */
/*     const carro = {
        marca: "Toyota",
        modelo: "Etios",
        ano: 2017,
        potencia: 80,
    }

    const pessoa = {
        nome: "Mayhhara",
        idade : 20,
        altura : 1.58,
        temCNH : true,
        apelidos : ["May","Ma","Lili"],
        carro
    }
 */
/*     let textoCNH = ""
    if(pessoa.temCNH === true) {
        textoCNH = "possui"
    } else {
        textoCNH = "não possui"
    }


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} m de altura, 
${pessoa.temCNH} CNH e os seguintes apelidos:`)
for (let apelido of pessoa.apelidos) {
    console.log(apelido)
} */

/* Imprima o nome do cliente
Imprima a idade do cliente
Modifique a idade do cliente
Imprima a nova idade do cliente
Imprima o nome do primeiro produto consumido
Imprima o preço unitário do último produto consumido por ele

 */
const comanda = {
    nome: "May",
    idade:"20",
    produtos: [
        {
            nomeProduto: "batata",
            precoUnit: 300,
            quantidade: 10
        },
        {
            nomeProduto: "salsisinha",
            precoUnit: 500,
            quantidade: 5
        },
        {
            nomeProduto: "pipoca",
            precoUnit: 200,
            quantidade: 3
        }
    ]
}
console.log(comanda.nome);
comanda.idade = 30;
console.log(comanda.idade);
console.log(comanda.produtos[0].nomeProduto)
console.log(comanda.produtos[comanda.produtos.length - 1].precoUnit)
