/*
- De modo geral, função é um "subprograma" 
que pode ser chamdo por um código externo 
à função
- Uma função é composta por um conjunto 
de instruções que executam uma tarefa
- Valores podem ser passados para uma 
função, que por sua vez retorna um 
valor resposta

A montagem geral de uma função, 
consiste no uso da palavra 'function', 
seguida por:

- Nome da função
- Lista de argumentos para função,entre 
parênteses e separados por vírgulas;
- Conjunto de instruções que definem
a função, entre chaves{}
*/

function quadrado(n) {
    var quad = n * n;
    return quad;
}
var valor = 5;
var result = quadrado(valor);
alert(result);

