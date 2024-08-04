/*Tipos de dados, Numbers, String e Symbol
Aprendendo Variáveis, Escopo e Tipos de dados no JavaScript

<----------------------------- // --------------------------------------->

Tipos de numbers: + Infinity, - Infinity e NaN
" tudo que tem numero etipos de numeros ele vao ser numbers"

"Double Precision 64-bit binary format IEEE754"
quase todas as liguagens que usamos eles sao baseados nesses dados numericos
mas pode ocorrer alguns erros pois oque o ser humano esta acostumado a usar e o formato decimal e os computadores usam o binario

exemplos: 
10+10 = 20 CORRETO

10-10 = 0 CORRETO

0.01 - 0.03 = 0.01999999999 ERRADOO

"isso daqui e mais ou menos a sujeira que e gerada durante a operacao binaria"

entao se tiver que fazer contas bem precisas, cientificas ou algo parecido que nao possa ocorrer falhas, temos que recorrer para outro tipo de representacao

esse site e bom dar uma olhada que ele fala mais ou menos sobre esse problema e mostra em varias linguagens que esse problema existe: */"$https://0.30000000000000004.com/" /*

umas das solucoes para nao ter esse problema e usando o Decimal.js */ "https://mikemcl.github.io/decimal.js/" /*


resumo dos Numbers: tudo e numero ate que se prove ao contrario, mais ou menos isso, mas temos que se cuidar com isso 
que ele baseia para fazer os calculos "Double Precision 64-bit binary format IEEE754", pois se prisarmos de precisao
sem ter essas falhas de arredondamentos por nos trabalhos em decimal e a maquina em binaria, temos que usar ferramentas para nao ter esse problema.



<---------------------------------------------- // --------------------------------------->

Tipos de Strings:

aspas duplas = "Texto"
aspas simples = 'Texto' 
craze = `Texto`

uma string basicaemnte e um conjunto de caracteres que formam um texte e junto com esse texto no java script pode ser represebtado pelas 3 formas
que estao a cima, mas qual e a diferenca entre um e outro?

quando queremos representar um html:
EX: '<div id="10">teste<div>' esse texto esta com aspas simples mas nao tem problema eu colocar aspas duplas dentro dele, mas se voce fizesse todo
o codigo com aspas duplas ia dar erro pois iria dividir o condigo no meio ja que ficaria assim,   EX: "<div id="       10        ">teste<div>"
                                                                                              essa parte do codigo               e essa outra parte

o 10 ficaria solto pois o computador ia entender que a aspas inicial iria se conctar com a aspas antes do 10 e a aspas depois do 10 iria se conectar
com a aspas do final do codigo


se fossemos fazer esse ID dinamico:

const id = 10

ao invez de colocar um console.log('<div id="10">teste<div>')

teriamos que colocar um console.log('<div id="' + id + '">teste<div>') fazendo assim uma cocatenacao e ele sempre dara o valor correto

tambem podemos fazer isso usando a craze ou aspas invertidas e usando isso e tambem acrescentando um template ("${}") podemos simplificar 
nosso condigo deixando assim      console.log('<div id="${id}">teste<div>') e tambem usando um template podemos fazer quebra de linha com o codigo
que mesmo assim ele ira funcionar


<--------------------------------------------------//-------------------------------------------------->

Synbol

Os Synbols sao objetos imutavel unico, sao formas da gente criar objetos unicos dentro da nossa estrutura, e muito dificil de ser usado mas eles sao bem interessante

Ex const x = Synbol('10');

se fosse fizer um console.log(x);

ele vai te retornar Synbol(10)


entao se eu fizer uma outra variavel com outro nome mas com o mesmo valor ele e perguntar se elas tem o mesmo valor, ele me retornara false,
porque usando o Synbol ele deixa o objeto unico mesmo tento outro objeto com o mesmo valor ele nao sera igual

isso e bom saco voce esteja trabalhando com um identificador de objetos dai desse jeito usando o Synbol ele deixa casa objeto unico

a unica maneira dele nao ser unico e se voce for compara com um objeto que esta mencionando ele

EX: const x = Synbol('10');
    const y = x;

    console.log(x === y);

    dessa forma a resposta seria true pois ele esta dizendo que o y e igual a x






*/