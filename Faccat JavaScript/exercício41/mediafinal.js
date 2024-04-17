/*41) Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
 N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
Média_de_Aproveitamento = ---------------------------------------------------------
7
A atribuição de conceitos obedece a tabela abaixo:
Média de Aproveitamento Conceito
> = 9,0 A
> = 7,5 e < 9,0 B
> = 6,0 e < 7,5 C
< 6,0 D */


let nota1;
let nota2;
let nota3;
let mediaExercicio;
let mediaAproveitamento;

nota1=parseFloat(prompt("Digite a nota da sua primeira avaliação:"));
nota2=parseFloat(prompt("Digite a nota da sua segunda avaliação:"));
nota3=parseFloat(prompt("Digite a nota da sua terceira avaliação:"));
mediaExercicio=(nota1+nota2+nota3)/3
mediaAproveitamento=(nota1+nota2 *2 + nota3 * 3 + mediaExercicio)/7
if(mediaAproveitamento>=9){
    alert("A")
}
else if(mediaAproveitamento>= 7.5 && mediaAproveitamento <9){
    alert("B")
}

else if(mediaAproveitamento>=6.0 && mediaAproveitamento<7.5){
    alert("C")
}

else{
    alert("D")
}