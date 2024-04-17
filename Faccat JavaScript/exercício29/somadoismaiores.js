/*29Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores. */
let numero1;
let numero2;
let numero3;
let maximo1;
let maximo2;
let soma;
numero1 = parseFloat(prompt("Insira o primeiro número:"));
numero2 = parseFloat(prompt("Insira o segundo número:"));
numero3 = parseFloat(prompt("Insira o terceiro número:"));

if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    alert("Por favor, insira três números diferentes.");
} else {
    maximo1 = Math.max(numero1, numero2, numero3);
    maximo2
    maximo1 = Math.max(numero1, numero2, numero3);
    maximo2 = (numero1 + numero2 + numero3) - maximo1 - Math.min(numero1, numero2, numero3);

    soma = maximo1 + maximo2;

    alert("A soma dos dois maiores números é: " + soma);
}