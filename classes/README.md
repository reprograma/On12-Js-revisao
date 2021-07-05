# Classes

## O que é uma Classe?

Classe é uma especificação, um tipo novo de objeto da sua aplicação. Por exemplo, uma classe Pessoa (inicie classes sempre com letra maiúscula e no singular) irá definir propriedades e funções comuns a pessoas da sua aplicação. Assim, quando for criar pessoas usando esta classe, elas sempre possuirão a mesma estrutura. <br>

Eai, vamo tentar? <br>

Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe (aqui "Cliente").

    class Cliente {
        // aqui dentro você define os membros da classe, como os métodos, ou os construtores.
    }

O construtor dessa classe, uma função especial que inicializa um objeto deste tipo, usando argumentos e processamentos internos para definir as suas propriedades.

    class Cliente {

        constructor(nome, idade, email) {
            this.nome = nome;
            this.idade = idade;
            this.email = email;
            this.dataCadastro = new Date();
        }
    }

Esse construtor acima espera nome, idade e e-mail e os utiliza para definir as propriedades homônimas de todo cliente criado a partir dessa classe. Internamente, o construtor repassa esses valores para as propriedades do objeto, iniciadas com ‘this.’. Variáveis precedidas por ‘this.’ são propriedades do objeto e serão replicadas em todas variáveis que instanciarmos como Cliente mais tarde. <br>

Note também que ele inicializa uma propriedade dataCadastro, de maneira automática e transparente, pegando a data e hora atuais. Esse tipo de processamento pode ser realizado no construtor inclusive para validar e transformar dados passados como argumento. <br>

O uso da palavra reservada constructor somente pode ser usada nessa função e ela é disparada automaticamente quando criamos um novo objeto Cliente usando a keyword new, como em outras linguagens orientadas a objeto (Java, C#, etc). <br>

Toda classe é composta de propriedades e funções. Essas funções, por uma questão de organização, devem ser sempre relativas à responsabilidade da classe em si, e geralmente manipulam ou utilizam as propriedades do objeto em questão. Assim, uma classe cliente terá funções que usam ou manipulam as propriedades do objeto cliente. <br>

Declarar uma função de classe (chamada de método em outras linguagens OO) é feita dentro do escopo da mesma (abre e fecha chaves mais externas). Não há necessidade da palavra function tradicionalmente usada, mas o restante segue a mesma lógica de functions tradicionais. <br>

    class Cliente {
        //propriedades e funções da classe aqui
        constructor(nome, idade, email) {
            this.nome = nome;
            this.idade = idade;
            this.email = email;
            this.dataCadastro = new Date();
        }

        //repare que aqui apenas declaramos a funcao, nao usamos o function isAdult() ou function getFirstName()

        isAdult(){
            return this.idade >= 18;
        }
    
        getFirstName(){
            return this.nome.split(" ")[0];
        }
    }


* Métodos <br>
1- Métodos Protótipos <br>
Um exemplo de método protótipo é o get, ele vincula uma propriedade de objeto a uma função que será chamada quando essa propriedade for pesquisada. <br>
Por exemplo:

        class Retangulo {
            constructor(altura, largura) {
            this.altura = altura; this.largura = largura;
            }
        //Getter
            get area() {
                return this.calculaArea()
            }

            calculaArea() {
                return this.altura * this.largura;
            }
        }

        const quadrado = new Retangulo(10, 10);
        console.log(quadrado.area);

[Aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) voce encontra mais informações sobre métodos protótipos. <br>

 2- Métodos estáticos <br>
A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação. <br>
Por exemplo:

        class Ponto {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static distancia(a, b) {
                const dx = a.x - b.x;
                const dy = a.y - b.y;

                return Math.hypot(dx, dy);
            }
        }

        const p1 = new Ponto(5, 5);
        const p2 = new Ponto(10, 10);

        p1.distancia; //undefined
        p2.distancia; //undefined

        console.log(Ponto.distancia(p1, p2));

Além de várias outras palavras chaves que você pode conferir na [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes). <br>

Existem muitos outros conceitos relacionados à orientação à objetos presentes na linguagem JavaScript moderna e consequentemente no Node.js, mas por ora, os conceitos mais importantes ligados a classes em JS estão apresentados aqui.
