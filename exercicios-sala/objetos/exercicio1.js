/* Declare uma variável que armazena um objeto contendo as seguintes propriedades: nome, idade, altura, temCNH e apelidos.

Depois, faça um programa que imprime na tela o belo texto abaixo, substituindo os dados pessoais pelos dados do objeto:

"Mayhhara tem 20 anos, 1.58m de altura, possui CNH e os seguintes apelidos:
May
Ma
Lili"
 */

const pessoa = {
    nome: "Mayhhara",
    idade: 20,
    altura: 1.58,
    temCNH: true,
    apelidos: ["May", "Ma", "Lili"]
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} m de altura,
${textoCNH} CNH e os seguintes apelidos: `)
for (apelido of pessoa.apelidos) {
    console.log(`-${apelido}`)
}