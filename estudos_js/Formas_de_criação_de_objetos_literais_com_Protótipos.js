/**
 * 
 *  A forma mais simples de criar um objeto que vai herdar valores de outro objeto e no modo literal
 *  
 * 
 * EX:
 */
/*const pessoa = {
genero: 'Masculino',
}

//const lucas = {
nome: 'Lucas',
    __proto__: pessoa
}*/


//console.log(lucas.genero)


/**
 * 
 * existe uma outra maneira usando o Object.create
 * 
 * EX:
 */


const pessoa = {
    genero: 'Masculino'
}

const lucas = Object.create(pessoa)  // com esse comando eu posso fazer o condigo livremente sem ser dentro de um escopo e mais facil mas ele fica mais solto no codigo

lucas.nome = 'Lucas'

lucas.genero = pessoa.genero  // aqui eu deixei um experimento igualitando que sempre que pedir o lucas.genero, ele ira buscar no objeto pessoa ja que eu coloquei que o genero de lucas e igual a de pessoa

console.log(lucas)