Algoritmo "exercicioFaccat7"
// Disciplina   : [Lógica de Programação com javascript]
// Professor   : Jailson Costa Santos
// Descrição   : ler a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
//               dessa pessoa expressa apenas em dias.
// Autor(a)    : Grazielly Raissa
// Data atual  : 11/03/2024
Var
   // Seção de Declarações das variáveis

   dia, mes, ano , total_dia:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...


   Escreval ("Escreva quantos anos completos você tem:")

   leia(ano)

   Escreval ("Escreva quantos meses já passaram após seu aniversário:")

   Leia(mes)

   Escreval ("Escreva o dia que você está:")

   leia(dia)

   total_dia<- ano * 365 + mes * 30 + dia

   Escreval ("Você tem", total_dia , "dias" )

Fimalgoritmo