
/**
 * 
 * vamos ver como que funciona o operador 'new' :
 * 
 * sempre que usamo o operador new nos usamos em cima de uma funcao construtora
 * 
 * EX:
 */

function pessoa(nome, idade) {
    this.nome = nome       // usamos o this como uma variavel sem valor, damos o valor de nome, mas se fizermos um console.log com (pessoa.nome),
    this.idade = idade     // ele dara undefined, o this e para ser usado junto com o new ou com alguma variavel que de valor para ele pois so ele,
}                          // nao teria valor nenhum

console.log(new pessoa('Lucas', 27))  // aqui podemos ver que conseguimo usar o new diretamente no console.log sem precisar fazer uma variavel antes


/**
 * 
 * temos outros jeitos de usar new:
 * 
 * EX:
 */


function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome e: ${this.nome}`)
}

const lucas = new Pessoa('Lucas', 27)

lucas.falar()



/** <----------------------------------------------------//------------------------------------>
 * 
 *prototype e o objeto ou elemento que o meu objeto se baseia
 EX: */

 String.prototype.toPLang = function(){      // aqui nesse exemplo podemos ver que conseguimos mudar uma string usando o prototype,
    return `P ${this}`                       // modificando e acrescentando informacoes ao nosso codigo 
 }                                           // isso so nao e muito aconselhavel fazer pois se estragarmos a nossa cadeia de string isso pode acabar
                                             // atrapalhando todo o nosso codigo
 console.log('teste'.toPLang())