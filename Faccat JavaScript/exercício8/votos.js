//Exercício 8 faccat

/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. */

var totalEleitores, votosBrancos, votosNulos, votosValidos, porcentagemValidos, porcentagemBrancos;
var porcentagemNulos;
 
alert("Vamos ler o total de Eleitores e apresentar a porcentagem de cada um dos tipos de voto");
 
var totalEleitores=parseInt(prompt("Digite o total de eleitores:"));
var votosBrancos=parseInt(prompt("Digite o total de Votos Brancos: "));
var votosNulos=parseInt(prompt("Digite o total de Votos Nulos: "));
var votosValidos=parseInt(prompt("Digite o total de Votos Válidos: "));
 
var porcentagemBrancos=(votosBrancos / totalEleitores * 100);
var porcentagemNulos=(votosNulos / totalEleitores * 100);
var porcentagemValidos=(votosValidos / totalEleitores * 100);
 
alert("Porcentagem de Votos brancos: " +porcentagemBrancos+ "%");
alert("Porcentagem de votos Nulos: " +porcentagemNulos+ "%");
alert("Porcentagem de votos Válidos: " + porcentagemValidos+ "%");