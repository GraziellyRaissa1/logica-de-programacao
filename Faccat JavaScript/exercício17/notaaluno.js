//Exercício 17 Faccat

/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada*/

var primeiraavaliacao, segundaavaliacao, mediaaritmetica;
alert("Vamos calcular sua nota e dizer se está aprovado ou reprovado!")
var primeiraavaliacao=parseInt(prompt("Digite a nota da sua primeira avaliação: "));
var segundaavaliacao=parseInt(prompt("Digite a nota da sua segunda  avaliação: "));
mediaaritmetica=parseFloat(primeiraavaliacao+segundaavaliacao) /2;
if(mediaaritmetica >= 6){
    alert("A sua nota final é " + mediaaritmetica)
    alert("Parabéns, você foi aprovado! :)");
}
else{
    alert("Infelizmente, você foi reprovado! :(")
}