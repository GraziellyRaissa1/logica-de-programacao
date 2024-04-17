//Exercício 11 Faccat

/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.*/

var totalvendas, salariofixo, salariofinal=parseFloat;
var carrosvendidos=parseInt;

alert("Vamos calcular o salário de um vendedor de carros");
var salariofixo= parseFloat(prompt("Digite o salário fixo do fúncionario: "));
var carrosvendidos= parseInt(prompt("Digite a quantidade de carros vendidos pelo funcionário: "));
var totalvendas= parseFloat(prompt("Digite o valor total dos carros vendidos: "));
var salariofinal= salariofixo + totalvendas * 5/100;
alert("O salário final do funcionario após as vendas é " + salariofinal );