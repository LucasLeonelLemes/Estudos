/*Aprendendo Variáveis, Escopo e Tipos de dados no JavaScript

"os objetos eles sao uma colecao dinamica de chave e valor no java script"



Variaveis:  

    const x = {

        nome: "Lucas",
        idade: 27 

    }

tambem posso acrescentar informacoes no meio do caminho do codigo


x.sobrenome = 'Leonel Lemes'


entao se eu der um console.log(x)

ele me retornara { nome: 'Lucas', idade: 27, sobrenome: 'Leonel Lemes' }


eu posso fazer a mesma variavel so que com string que tambem pode ajudar muito, uma das vantagens e que pode ser colocado um espaco entre as paravras
dentro de string

EX:     const x = {

        "nome": "Lucas",
        "idade": 27
        "teste teste": 10 

    }


e para acessar esse atributos separados? 

podemos fazer de duas formas:

console.log(x.nome)   se ele tiver como objeto simples sem aspas

console.log(x['nome']) e pode ser feito desse jeito com colchetes


podemos tambem rettribuir valores no objeto

EX:     x['nome'] = 'Jose' acrecentando esse codigo nos conseguimos modificar o objeto nome de Lucas para Jose, mas sempre lembrando que esse codigo 
        tem que estar sempre depois do objeto se nao ele nao ira funcionar



tamebme podemos declarar funcao nos objetos ou fora deles tambem


EX:      const x = {

        nome: "Lucas",
        idade: 27 

    }

    x.falar = function(){
        console.log("teste")
    }


    x.falar()

    isso me retornaria a o objeto que esta dentro das aspas que seria "teste"



outro exemplo seria dentro do objeto

EX:       const pessoa = {

        nome: "Lucas",
        idade: 27,
        falar = function(){
        console.log("teste")
        } 

    }


    pessoa.falar()

*/