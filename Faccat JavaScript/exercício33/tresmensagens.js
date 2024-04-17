/*33) Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.*/ 

let numero1;
let numero2;

numero1=parseInt(prompt("Digite um número:"));
numero2=parseInt(prompt("Digite um segundo número:"));
if(numero1==numero2){
    alert("Números iguais!");
}
else if (numero1>numero2){
    alert("O primeiro é maior!");
}

if(numero2>numero1){
    alert("O segundo é maior!");
}