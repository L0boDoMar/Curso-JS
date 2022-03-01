/*
Um vetor (array) é um tipo de dado estruturado
onde se tem um número fixo de componentes. 
Geralmente armazena várias variáveis do mesmo tipo,
porém, em JavaScript, é possível armazenar tipos
 diferentes em um mesmo vetor.
*/

var vet = new Array(1, 2, 3);

var tam = vet.length;

for (var i = 0; i < tam; i++) {

    document.write(vet[i]);
    document.write("</br>");

}