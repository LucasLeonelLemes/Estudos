/** Orientação a Protótipo com JavaScript
 * 
 * 
 *
 * vamos ver como funciona a sobre escrita de uma funcao, objeto e etc...
 *  
*/

//  EX:

                const pessoa = {         //esse sera nosso objeto base para o exemplo
                    idade: 18

                }


                const lucas = {
                    nome: 'Lucas',
                    __proto__: pessoa              // para usar as informacoes do objeto base nos sempre usamos o "proto", nesse exemplo queremos buscar a pessoa
                }



                console.log(lucas.idade)   // aqui no console.log colocamos o nome do sujeito e oque queremos buscar via proto, que aqui seria a idade
/**
 * 
 * E como que ele consegue buscar o valor da idade se nao esta dentro do objeto lucas?
 * 
 * ele ira buscar dentro do objeto lucas e se nao achar ele ira para dentro do objeto pessoa ja que temos o "proto" dentro do objeto lucas,
 * esse e uns dos pontos positivos de usar proto, digamos que dentro do objeto lucas ja tem um valor para idade, o codigo entao ira mostrar
 * o valor que econtrou primeiro que serio o que esta dentro do objeto lucas que vai ser o primeiro que ele vai buscar ja que nos chamamos 
 * esse objeto no console.log
 */