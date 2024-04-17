/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados. */

let ladoa;
let ladob;
let ladoc;
let somaab;
let somabc;
let somaac;
ladoa= parseInt(prompt("Digite um valor para o lado A:"));
ladob= parseInt(prompt("Digite um valor para o lado B:"));
ladoc= parseInt(prompt("Digite um valor para o lado C:"));
somaab= ladoa + ladob;
somabc= ladob + ladoc;
somaac= ladoa + ladoc;
if(somaab> ladoc && somabc > ladoa && somaac > ladob){
    alert("Pode formar um triângulo!")
}
else{
    alert("Não pode formar um triângulo!")
}