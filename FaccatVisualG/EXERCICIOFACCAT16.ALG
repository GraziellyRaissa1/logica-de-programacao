Algoritmo "exercicioFaccat16"
// Disciplina   : [L�gica de programa��o com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descri��o   : Ler a quantidade de ma�as e dar o total da compra
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 24/03/2024

var
   quanti_macas , preco_total:real

Inicio

   Escreval("Digite o n�mero de ma��s compradas: ")

   Leia(quanti_macas)
       se quanti_macas <12 entao
         preco_total<- quanti_macas * 1.30
         Escreval("O custo total da compra � de R$", preco_total)
   senao
      se quanti_macas >12 entao
         preco_total<- quanti_macas * 1.00
         Escreval("O custo total da compra � de R$", preco_total)
      fimse
   fimse
FimAlgoritmo
