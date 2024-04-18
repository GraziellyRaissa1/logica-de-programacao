/*Apresentar todos os números divisíveis por 4 que sejam
menores que 200. Para verificar se o número é divisível por 4, efetuar
dentro da malha a verificação lógica desta condição com a instrução se,
perguntando se o número é divisível; sendo, mostre-o; não sendo, passe
para o próximo passo. A variável que controlará o contador deve ser
iniciada com o valor 1.*/
let cont = 1;
let validacao = 0;
do{validacao = cont % 4;
  if(validacao==0){
   console.log(`${cont} / 4 = ${cont/4}`); 
  }
  cont++;}
while(cont <=200)