/*Elaborar um programa que efetue a leitura de 15 valores  
numéricos inteiros e no final apresente o total do                      
somatório da fatorial de cada valor lido.*/
let cont = 0;
let fatorial = 1;
let numero = 1;
let passado;
let soma = 0;
do {
  numero++;
  passado = fatorial;
  fatorial = numero * fatorial;
  soma = soma + fatorial;
  console.log(`${passado} * ${numero} = ${fatorial}`);
  cont++;
} while (cont < 14)
console.log(`A soma dos fatoriais é ${soma}`)



