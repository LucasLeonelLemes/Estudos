/*       Orientação a Protótipo com JavaScript


aqui vamos ver prototype

prototype e basicamente a base do objeto 
ou seja e onde o objeto se baseia 


*/

/*const pessoa = {
    genero: "Masculino"
}

const lucas = {
    nome: 'lucas',
    idade: 27,
     __proto__: pessoa
}



console.log(lucas.genero);*/


/* com o exemplo assim vemos que quando usamos "proto" dentro da variavel lucas, nos conseguimos herdar os valores que pediu no console.log 


a orientecao ao prototipo e basicamente o nosso objeto usando de base outro objeto para recolher valores que sao pedidos 



<-----------------------------------------------------------------//----------------------------------------------------------------->


Classes  na verdade sao funtions construtivas, sempre que fomos fazer ou ver uma functions que comeca com a letra maiuscula
*/

// EX:

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}


//const lucas = new Pessoa('Lucas', 27)


//console.log(lucas)

/*
quando fazemos functions construtivas nos podemos fazer variaveis e usar o "new" para adcionar novos valores nos this da function e quando voce fizer
console.log chamando a variavel ele vai te mostrar os valores e tambem da onde ele deriva as suas informacoes




podemos usar tambem uma opcao de prototype: 
EX: 

Pessoa.prototype.falar = function() {
    console.log(`Meu nome e: ${this.nome}`)
}



/*
usando o prototype ele adiciona novos valores na function construtora e quando voce chama a variavel ela passa pelo prototype e sai com os valores dele e 
com os valores das vareaveis pois tem um template no prototype






existe um outro jeito de chegar no mesmo resultado de cima usando class
EX:*/


class pessoas {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Meu nome e: ${this.nome}`)
    }
}

const lucas = new pessoas('Lucas', 27)


lucas.falar();
