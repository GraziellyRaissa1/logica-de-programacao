var numero1, numero2, diferenca;
var numero1= parseInt(prompt("Digite um número:"));
var numero2= parseInt(prompt("Digite um segundo número:"));
diferenca= numero1-numero2;
if(numero2>numero1){
    diferenca= numero2 - numero1
}

alert(`A diferença dos Valores é: ${diferenca}`);