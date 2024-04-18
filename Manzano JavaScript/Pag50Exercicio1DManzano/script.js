/*Elaborar um programa que efetue o cálculo e no final apresente
o somatório do número de grãos de trigo que se pode obter num tabuleiro de
xadrez, obedecendo à seguinte regra: colocar um grão de trigo no primeiro
quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no
primeiro quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos
(neste momento têm-se 3 grãos), no terceiro quadro colocam-se 4 grãos
(tendo neste momento 7 grãos), no quarto colocam-se 8 grãos
(tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o) quadro.
Utilize variáveis do tipo real como acumuladores.*/
let grao = 1;
let grao_total;
let cont = 1;
do{
 grao_total = grao * 2 - 1;
  console.log(`numero casa: ${cont}`);
  console.log(`numero de grao adicionado: ${grao}`);
  console.log(`total: ${grao_total}`);
  console.log(``);
  cont++;
  grao = grao * 2;
}while(cont <= 64)