Algoritmo "exercicioFaccat31"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : Ler os valores A,B,C é informar se Forma ou não um triangulo
// Autor(a)    : Grazielly Raiss Pereira De Souza
// Data atual  : 03/04/2024
Var
   lado_a, lado_b, lado_c, soma_ab, soma_bc, soma_ac: inteiro

Inicio
   Escreva("Atribua um valor ao lado A: ")
   leia(lado_a)

   Escreva("Atribua um valor ao lado B: ")
   leia(lado_b)

   Escreva("Atribua um valor ao lado C: ")
   leia(lado_c)

   soma_ab <- lado_a + lado_b
   soma_bc <- lado_b + lado_c
   soma_ac <- lado_a + lado_c

   se (soma_ab > lado_c) e (soma_bc > lado_a) e (soma_ac > lado_b) entao
      Escreva("Pode formar um triângulo")
   senao
      Escreva("Nao pode formar um triângulo")
   fimse
FimAlgoritmo