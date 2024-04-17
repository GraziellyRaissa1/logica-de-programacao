Algoritmo "exercicioFaccat28"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : Ler 3 valores e mostrar os dois maiores
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 07/04/2024
Var
   numero1, numero2, numero3, maior1, maior2: Inteiro

Inicio
   Escreval("Digite o primeiro número: ")
   Leia(numero1)

   Escreval("Digite o segundo número: ")
   Leia(numero2)

   Escreval("Digite o terceiro número: ")
   leia(numero3)

   se (numero1 > numero2) e (numero1 > numero3) entao
      maior1 <- numero1
      Se numero2 > numero3 entao
         maior2 <- numero2
      senao
         maior2 <- numero3
      fimse
   senao
      se (numero2 > numero1) e (numero2 > numero3) entao
         maior1 <- numero2
         se numero1 > numero3 Então
            maior2 <- numero1
         senao
            maior2 <- numero3
         fimse
      senao
         maior1 <- numero3
         Se numero1 > numero2 entao
            maior2 <- numero1
         senao
            maior2 <- numero2
         fimse
      fimse
   fimse

   Escreval("os dois maiores números é: " , maior1 , maior2)
FimAlgoritmo