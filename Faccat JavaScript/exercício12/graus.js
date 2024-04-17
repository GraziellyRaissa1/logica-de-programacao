//Exercício 12 Faccat

/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
     C          F - 32
 ---------- = -----------
     5            9        
 */


alert("Vamos transformar a temperatura fahrenheit para graus Celsius! Vamos lá?")

var celsius, fahrenheit;

var fahrenheit=parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
celsius=(fahrenheit -32) * (5 / 9);
alert("A temperatura transformada em Graus Celsius é: " + celsius + "°C");