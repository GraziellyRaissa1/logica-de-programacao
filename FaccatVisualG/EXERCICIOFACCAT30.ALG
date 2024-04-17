Algoritmo "exercicioFaccat30"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descrição   : Ler 3 valores e coloca-lós em ordem crescente
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 07/04/2024
Var
   numero1, numero2, numero3, troca: Inteiro

Inicio
   Escreval("Por Favor, digite três números diferesntes abaixo: " )
    Escreval("------------------------------------------------")
   Escreva("Digite o primeiro número: ")
   Leia(numero1)

   Escreva("Digite o segundo número: ")
   Leia(numero2)

   Escreva("Digite o terceiro número: ")
   Leia(numero3)

   se numero1 > numero2 entao
      troca <- numero1
      numero1 <- numero2
      numero2 <- troca
   fimse

   se numero2 > numero3 entao
      troca <- numero2
      numero2 <- numero3
      numero3 <- troca
   fimse

   se numero1 > numero2 entao
      troca <- numero1
      numero1 <- numero2
      numero2 <- troca
   fimse

   Escreva("Os números em ordem crescente são: ", numero1, ", ", numero2, ", ", numero3)
FimAlgoritmo