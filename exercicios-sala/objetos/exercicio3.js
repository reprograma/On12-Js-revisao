/* Ainda utilizando o objeto do exercicio anterior:
1-Imprima o nome do cliente
2-Imprima a idade do cliente
3-Modifique a idade do cliente
4-Imprima a nova idade do cliente
5-Imprima o nome do primeiro produto consumido
6-Imprima o preço unitário do último produto consumido por ele
 */

//1
console.log(comanda.nome)
//2
console.log(comanda.idade)
//3
comanda.idade = 22
//4
console.log(comanda.idade)
//5
console.log(comanda.produtos[0].nome)
//6
console.log(comanda.produtos[comanda.produtos.lenght - 1].precoUnit)

