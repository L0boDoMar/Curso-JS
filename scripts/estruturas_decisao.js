var idade;
idade = prompt("Digite sua idade: ");

if (idade>=18){
    var maioridade = true;
}else{
    var maioridade =false;
}

if (maioridade==true){
    document.write("Já pode dirigir!");
}else {
    document.write("Não pode dirigir!");
}