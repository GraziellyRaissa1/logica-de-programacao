/* 30)Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente. */
let minimo;
let numero1;
let numero2;
let numero3;
let maximo;
let meio;

numero1 = parseInt(prompt("Digite um número:"));
numero2 = parseInt(prompt("Digite um segundo número:"));
numero3 = parseInt(prompt("Digite um tereiro número:"));

minimo = Math.min(numero1, numero2, numero3);

maximo = Math.max(numero1, numero2, numero3);

meio = numero1 + numero2 + numero3 - maximo - minimo

alert("A sequência crescente é: " + minimo + ", " + meio + ", " + maximo);
