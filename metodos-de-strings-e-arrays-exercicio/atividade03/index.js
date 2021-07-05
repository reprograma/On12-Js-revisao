//Tente fazer sozinha, resposta para conferência.

function urlAmigavel (text){
    let urlFormatada = text.toLowerCase();
    while(urlFormatada.includes(" ")){
        urlFormatada = urlFormatada.replace(" ", "-");
    }
    console.log(urlFormatada);
}
const texto = "Aprenda programar do zero aqui na Reprograma";
urlAmigavel(texto);