//Exercício 9 Faccat  

/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. */

var salarioAtual, reajuste, novoSalario;
 
alert("Vamos calcular o reajuste de salário do funcionário");
 
var salarioAtual=parseFloat(prompt("Digite o seu salário atual: "));
var reajuste=parseFloat(prompt("Digite a o reajuste em porcentagem que haverá no salário: "));
 
var novoSalario=parseFloat(salarioAtual * reajuste /100 + salarioAtual);
 
alert("Seu novo salário será: " +novoSalario);