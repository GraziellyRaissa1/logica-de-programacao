Algoritmo "exercicioFaccat10"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : escrever um algoritmo para ler o custo de fábrica de um carro,
//               calcular e escrever o custo final ao consumidor.
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 24/03/2024
Var
   fabrica, distribuidor , impostos, vconsumidor:real

Inicio
   Escreval("Digite o custo da Fabricação")
   leia(fabrica)
   
distribuidor<- fabrica * 0.28

impostos<- fabrica * 0.45

   vconsumidor<- fabrica +  distribuidor  + impostos
   
   escreval("o Valor final do carro para o consumidor é", vconsumidor)

Fimalgoritmo