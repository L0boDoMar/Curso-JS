/*
Uma matriz (array bidimensional) é um 
tipo de dado estruturado onde se tem um 
número fixo de componentes em duas dimensões.

EX:

var matint = [
    [3, 6, 9],
    [2, 4, 6],
    [1, 2, 3]
];

for (let lin = 0; lin < 3; lin++) {
    for (let col = 0; col < 3; col++) {
        document.write(matint[lin][col] + " ");
    }
    document.write("<br />");
}
*/

var notas = [
    [4.5, 6.5, 8.7], //notas João
    [8.5, 9.7, 9.9] //notas maria
];

var colunas = notas[0].length;

var acu = 0;

for (let i = 0; i < colunas; i++) {
    acu = acu + notas[1][i];
}

var media = acu / colunas;

document.write("A média de Maria é: " + media);