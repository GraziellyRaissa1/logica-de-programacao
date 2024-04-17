/*40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
 - Se quantidade <= 5 o desconto será de 2%
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 - Se quantidade > 10 o desconto será de 5% */

let produto;
let quantidade;
let precounitario;
let total;
let desconto;

produto=(prompt("Digite o nome do produto que deseja comprar:"));
quantidade=parseInt(prompt("Digite a quantidade do produto que será comprado:"));
precounitario=parseFloat(prompt("Digite o preço do produto que deseja comprar:"));
total= quantidade * precounitario;
if(quantidade<=5){
desconto= total * 0.02;
alert(" O preço total com desconto é: R$" + (total - desconto));
}
else if(quantidade> 5 && quantidade <=10){
    desconto= total  * 0.03;
    alert(" O preço total com desconto é: R$" + (total - desconto));
}

else{
    desconto= total * 0.05;
    alert(" O preço total com desconto é: R$" + (total - desconto));
}