//Exercício 16 Faccat

/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra. */

var macas, calculo;
var macas=parseInt(prompt("Digite a quantidade de maças compradas: "));
if(macas < 12){
  calculo=macas*1.30
    alert("O valor das macas é " + " R$ " + calculo);
}

else if(macas >= 12){
    calculo=macas*1
    alert("O valor total das maças é " + " R$ " + calculo + ",00");
}