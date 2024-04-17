//Exercício 13 Faccat

/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
                n1 * 2 + n2 * 3 + n3 * 5
 mediafinal = -----------------------------------
                          10 
 */

alert("Vamos ler 4 notas de um aluno e dar a nota final")
var nota1, nota2, nota3, soma;
var nota1=parseFloat(prompt("Digite a sua primeira nota:"));
var nota2=parseFloat(prompt("Digite a sua segunda nota: "));
var nota3=parseFloat(prompt("Digite a sua terceira nota: "));
soma= nota1 + nota2 + nota3;
alert("Sua nota final é: " + soma / 3)