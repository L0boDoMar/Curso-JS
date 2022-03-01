/*
Valores que retornam false

- false
- undefined
- null
- 0
- NaN
- string vazia ("")

Todos os outros valores, incluindo todos os objetos, 
são avaliados como verdadeiros quando passados para 
uma declaração condicional
*/

cargo = prompt("Digite seu cargo: ");
salario = 2000;

switch (cargo) {
    case "gerente":
        salario *= 1.15; //salario = salario * 1.15
        break;
    case "supervisor":
        salario *= 1.10; //salario = salario * 1.10
        break;
    default:
        salario *= 1.05; //salario = salario * 1.05
}

document.write("Salário do " + cargo + ": " + salario);