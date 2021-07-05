/* Faça um programa que busque pelo nome "Mayhhara" numa lista de nomes e 
imprima na tela o índice em que ele se encontra.
Caso nao encontre, imprima "nao encontrado".
 */

const nomes = ['Mayhhara', 'Carol', 'Clara', 'Fernanda']

let encontrado = false;

for(let i = 0; i < nomes.length; i++) {

    const nome = nomes[i];

    if (nome === "Mayhhara") {
        console.log(`Mayhhara está no indice ${i}`)
        encontrado = true;
        break
    }

}

if (!encontrado) {
    console.log("Não encontrado")
}