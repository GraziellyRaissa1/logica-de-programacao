//exercício 7 faccat
/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/ 

var anos , meses , dias, idade;
alert("Vamos calcular a sua idade em anos, meses e dias")

anos= parseInt(prompt("Digite a sua idade em anos:"));
meses= parseInt(prompt("Digite a quantidade de meses completos que passou do seu último aniverário:"));
dias= parseInt(prompt("Digite a quantidade de dias que passou do seu último aniversário:"));
idade= (anos* 365 + meses * 30 + dias);pa
alert("Você completou "  + idade +  " dias de vida")