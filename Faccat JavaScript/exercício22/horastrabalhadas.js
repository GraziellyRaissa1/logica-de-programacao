//Exercício 22 Faccat

/*A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).*/


let jornadaMinima;
let horasExtras;
let horasTrabalhadas;
let salarioHora;
let salarioTotal;
 jornadaMinima= 40 * 4
 horasTrabalhadas=parseInt(prompt("Digite o número de horas trabalhadas em um mês: "));
 salarioHora=parseFloat(prompt("Digite o salário por hora: "));

 if(horasTrabalhadas > jornadaMinima){
    horasExtras= horasTrabalhadas - jornadaMinima 
    salarioTotal= salarioHora * jornadaMinima + horasExtras * ( salarioHora + ( salarioHora *0.5))
 }

 else{
    salarioTotal= salarioHora * horasTrabalhadas
}

alert("O salário do Funcionário é: R$ " + salarioTotal)