Algoritmo "exercicioFaccat20"
// Disciplina   :[Lógica de programação com Javascript]
// Professor   : Jailson Costa Dos Santos
// Descrição   : Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 17/04/2024
var
 numero1, numero2, troca: Inteiro

Inicio
   Escreval("Por Favor, digite três números diferesntes abaixo: " )
    Escreval("------------------------------------------------")
   Escreva("Digite o primeiro número: ")
   Leia(numero1)

   Escreva("Digite o segundo número: ")
   Leia(numero2)

   se numero1 > numero2 entao
      troca <- numero1
      numero1 <- numero2
      numero2 <- troca
   fimse
   se numero1 > numero2 entao
      troca <- numero1
      numero1 <- numero2
      numero2 <- troca
   fimse

   Escreva("Os números em ordem crescente são: ", numero1, ",", numero2 , ".")
FimAlgoritmo