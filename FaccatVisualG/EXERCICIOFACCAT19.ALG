Algoritmo "exercicioFaccat19"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 17/04/2024
Var
   numero1,numero2,maior: inteiro


Inicio
   Escreval("Digite um número")
   leia(numero1)
   Escreval("Digite um outro número")
   leia(numero2)

   se (numero1 > numero2) entao
      maior<- numero1
   senao
      se (numero2 > numero1)entao
         maior<- numero2
         fimse
      fimse
   Escreval("O maior número é",maior)

Fimalgoritmo