/*Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).*/

let prestacao;
let valor;
let taxa;
let tempo;

valor=parseFloat(prompt("Por favor, digite o valor da prestação:"));
taxa=parseFloat(prompt("Por favor, informe a taxa de juros da prestação apenas números:"));
tempo=parseFloat(prompt("Por favor, informe quantos meses a foi parcelado:"));
prestacao=valor + (valor*taxa/100)* tempo;
alert("O valor da prestação atualmente é de R$: " + prestacao + "reais")
