Algoritmo "exercicioFaccat16"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descrição   : Ler a quantidade de maças e dar o total da compra
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 24/03/2024

var
   quanti_macas , preco_total:real

Inicio

   Escreval("Digite o número de maçãs compradas: ")

   Leia(quanti_macas)
       se quanti_macas <12 entao
         preco_total<- quanti_macas * 1.30
         Escreval("O custo total da compra é de R$", preco_total)
   senao
      se quanti_macas >12 entao
         preco_total<- quanti_macas * 1.00
         Escreval("O custo total da compra é de R$", preco_total)
      fimse
   fimse
FimAlgoritmo
