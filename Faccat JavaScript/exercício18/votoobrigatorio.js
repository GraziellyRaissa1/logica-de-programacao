//Exercício 18 Faccat

/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).*/ 

var anoatual, anonascimento, idade;
var anonascimento=parseInt(prompt("Digite o seu ano de nascimento:"));
var anoatual=parseInt(prompt("Digite o ano que você está:"));
idade=anoatual- anonascimento;
if(idade<16){
    alert("Você ainda não pode votar!");
}
else{
    alert("Voto obrigatório!")
}
