class doguinho{
    /*
    * Atributos / características da classe
    */
    constructor(nome, data_nascimento, pelagem, porte) {
        this.nome = nome; 
        this.data_nascimento = data_nascimento;
        this.pelagem = pelagem;
        this.porte = porte;
    }
    /*
    *  Métodos dos atributos
    */
    get getNome() {
        return this.nome;
    }

    get getDataNascimento(){
        return this.data_nascimento;
    }

    get getPelagem() {
        return this.pelagem;
    }

    get getPorte(){
        return this.porte;
    }
    /*
    *  Métodos da classe / funcionalidades
    */
    meuNome()
    {
        return this.getNome;
    }

    minhaDataNascimento()
    {
        return this.getDataNascimento;
    }

    minhaPelagem()
    {
        return this.getPelagem;
    }

    meuPorte()
    {
        return this.getPorte;
    }

} // fim classe doguinho