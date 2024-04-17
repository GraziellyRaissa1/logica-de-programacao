/*24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.*/ 

let salariofixo;
let totalvenda;
let salariototal;
let calculo;

salariofixo= parseFloat(prompt("Digite o seu salário Fixo: "));
totalvenda=parseInt(prompt("Digite o valor das vendas efetuadas:"));
if ( totalvenda <= 1.500){
    calculo= totalvenda* 0.03;
    salariototal= calculo + salariofixo

    alert("O seu salario total é: " + salariototal);
}

 else if (totalvenda > 1.500){
   calculo= (1500* 0.03) + ((totalvenda - 1.500) * 0.5)
   salariototal= calculo + salariofixo 
}

alert("O seu salario total é: " + salariototal)