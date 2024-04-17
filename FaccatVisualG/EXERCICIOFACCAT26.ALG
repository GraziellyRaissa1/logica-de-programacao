Algoritmo "exercicioFaccat26"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descrição   : Ler a quantidade de bolinhos no estoque é dizer se e necessário fazer compras ou não
// Autor(a)    : Grazielly Raissa Pereira De Sozua
// Data atual  : 06/04/2024
Var
   quantidadeatualestoque , quantidademax:real
   quantidademin, quantidademedia:real


Inicio
   Escreval("Por favor,digite a quantidade atual de bolinhos no estoque:")
   leia(quantidadeatualestoque)
   Escreval("Por favor, Digite a quantidade máxima de bolinhos no estoque:")
   leia(quantidademax)
   Escreval("Por favor, digite a quantidade mínima de bolinhos no estoque")
   leia(quantidademin)
   quantidademedia<-  quantidademax + quantidademin / 2
   se quantidadeatualestoque >= quantidademedia entao
      Escreval("Não é necessário realizar compras!")
   senao
      Escreval("É necessário efetuar compras!")
      fimse
Fimalgoritmo