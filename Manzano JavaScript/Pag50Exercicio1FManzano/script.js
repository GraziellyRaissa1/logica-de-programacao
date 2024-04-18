/*Elaborar um programa que efetue a leitura sucessiva de      
valores numéricos e apresente no final o total do somatório, a média       
aritmética e o total de valores lidos. O programa deve fazer as leituras   
dos valores enquanto o usuário estiver fornecendo valores positivos.       
Ou seja, o programa deve parar quando o usuário fornecer um valor negativo.
Não se esqueça que o usuário pode entrar como primeiro número um número    
negativo, portanto, cuidado com a divisão por zero no cálculo da média.*/
let cont = 0;
let soma = 0;
let numero;
let media;
let converter;
do {
  numero = parseFloat(prompt("Digite um numero: "));
  soma = soma + numero;
  if (numero < 0) {
    converter = numero * (-1)
    soma = soma + converter;
  } cont++;
} while (numero > 0)
cont--;
media = soma / cont;
alert(`A soma dos numeros e: ${soma} \nA media dos numeros e: ${media} \nA quantidade de numeros foram: ${cont}`)