Algoritmo "exercicioFaccat21"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descrição   : Ler a hora de inicio e do fim do jogo e retornar o resultado de horas jogadas
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 25/03/2024
Var
   totalhora , terminoJogo, jogoinicio: inteiro


Inicio
   escreval ("Hora de inicio do Jogo: ")
   leia (jogoinicio)
   escreva ("Hora do Fim do Jogo: ")
   leia (terminojogo)
   totalhora <- terminojogo - jogoinicio

   se terminojogo = jogoinicio entao
      totalhora <- jogoinicio - terminojogo + 24
      escreval ("O jogo durou:", totalhora , "horas")
   senao
      se terminojogo < jogoinicio entao
         totalhora <- terminojogo - jogoinicio + 24
         escreval ("Duração do Jogo:", totalhora , "horas")
      senao
         escreval ("Duração do Jogo:", totalhora , "horas")
      fimse
   fimse
Fimalgoritmo