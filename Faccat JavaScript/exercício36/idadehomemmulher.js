/*36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
    dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
    das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
    novo com a mulher mais velha.*/ 
 
 let homem1;
 let homem2;
 let mulher1;
 let mulher2;
 let soma;
 let multiplicacao;


 homem1=parseInt(prompt("Por favor, Digite a idade do primeiro homem:"));
 homem2=parseInt(prompt("Por favor, Digite a idade do segundo homem:"));
 mulher1=parseInt(prompt("Por favor, Digite a idade da primeira mulher:"));
 mulher2=parseInt(prompt("Por favor, Digite a idade da segunda mulher:"));
if (homem1>homem2 && mulher1>mulher2){
soma= homem1+mulher2
multiplicacao=homem2*mulher1
alert(soma + " , " + multiplicacao)
}

else{
    soma= homem2+mulher1
multiplicacao=homem1*mulher2
alert(soma + " , " + multiplicacao)
}