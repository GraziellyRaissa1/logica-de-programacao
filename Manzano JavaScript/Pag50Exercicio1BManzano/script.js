/*Elaborar um programa que apresente no final o somatório dos
valores pares existentes na faixa de 1 até 500. */
let cont = 1;
let presente = 0;
let passado = 0;
let validacao = 0;
do{
  validacao = cont % 2;
  if(validacao==0){
  passado = presente;
  presente = passado + cont;
  console.log(`${cont} + ${passado} = ${presente}`)}
  cont++;
} while(cont <= 500)