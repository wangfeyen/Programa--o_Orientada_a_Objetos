//Crie uma classe chamada "Pessoa" que tenha atributos "nome" e "idade".
//em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade
class Pessoa{
    constructor(nome,idade){
        this.nome=nome;
        this.idade = idade;
    }

//* Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
//uma mensagem com o nome e a idade da pessoa.
    apresentar(){
        console.log(pessoa1);
    }
}
const pessoa1 = new Pessoa("Jádna",95);

//pessoa1.apresentar()

//* Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
//A classe "Aluno" deve ter um atributo adicional chamado "matricula".
//Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.
class Aluno extends Pessoa{
    constructor(nome,idade,matricula){
        super(nome,idade)
        this.matricula=matricula;
    }
}
const alun = new Aluno("oi",10,23456123)
console.log(alun);
//* Modifique a classe "Pessoa" para que o atributo "idade" seja privado.
//Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento.
class Pessoa2{
    constructor(nome,idade){
       this.nome = nome ;
       //let idd = idade;
       this.getidade = function(){
            return idade
       }
       this.setidade = function(nova_idade){
            idade = nova_idade
       }
    }
}
pess = new Pessoa2("Yen",35);
console.log(pess.getidade())
pess.setidade(27)
console.log(pess.getidade())
//* Crie uma classe chamada "Animal" com um método chamado "falar".
//Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.)
//e sobrescrevam o método "falar" para exibir o som característico de cada animal.

class Animal{
    constructor(){
        this.Respira = "Oxigênio";
        this.Meio;
        this.Voa;
        this.Patas;
    }
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.Meio="terrestre";
        this.Patas=4;
        this.Voa = false;
    }
    falar(){
        console.log("au,au!")
    }
}

class Gato extends Animal{
    constructor(){
        super()
        this.Meio="terrestre";
        this.Patas=4;
        this.Voa = false;
    }
    falar(){
        console.log("miauuu!")
    }
}

class Pato extends Animal{
    constructor(){
        super()
        this.Meio = "terrestre";
        this.Patas = 2;
        this.Voa = true
    }
    falar(){
        console.log("Quack!!")
    }
}

const Rupia = new Cachorro()
Rupia.falar()
console.log(Rupia)

const Leite = new Gato()
Leite.falar()
console.log(Leite)

const Gesonel = new Pato()
Gesonel.falar()
console.log(Gesonel)
