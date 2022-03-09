/*
Um vetor (array) é um tipo de dado estruturado
onde se tem um número fixo de componentes. 
Geralmente armazena várias variáveis do mesmo tipo,
porém, em JavaScript, é possível armazenar tipos
 diferentes em um mesmo vetor.



 MÉTODOS IMPORTANTES NA MANIPULAÇÃO DE VETORES

 push: adiciona uma informação no final do vetor
 pop: remove o ultimo elemento do array
 unshift: adiciona um ou mais elementos no começo do array
 shift: remove o primeiro elemento do vetor
 splice: remove ou alterna um ou mais elementos do vetor
 slice: retorna uma faixa de elementos de um vetor
 sort: ordena os dados de um vetor
 reverse: inverte as posições dos valores em um vetor
 concat: junta um ou mais vetores
 join: junta os valores de um vetor com um caractere de separador

 */

var meses = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul"
];
var dolar = [
    4.56,
    4.89,
    4.93,
    5.23,
    5.45,
    5.75,
    5.00
];

meses.push("ago"); //coloca um informação no final do vetor
dolar.push("5.95");

document.write("<u>VARIAÇÃO DO DOLAR</u><br>");

for (var i = 0; i < dolar.length; i++) {

    document.write("<br>");
    document.write(meses[i] + ": R$" + dolar[i]);

}