/*  Ainda utilizando o objeto do exercicio anterior:
Faça um programa que imprime uma mensagem amigável (que inclui chamar o cliente pelo nome) 
que informa o valor que ele deve pagar. */

//explicação
//ele precisa percorrer esse array, ver o valor de cada item e depois somar todos. 
//usaremos o for of

let totalAPagar = 0
for(let item of comanda.produtos) {
  totalAPagar = totalAPagar +( item.quantidade * item.precoUnit)
  //outra forma de fazer
  // total =+ item.quantidade * item.precoUnit;
}

console.log(`Olá sra ${comanda.nome}, o valor total é de {totalAPagar/100}`)
// dividido por 100 porque o valor está em centavos, dividindo por cem daremos o valor em real.