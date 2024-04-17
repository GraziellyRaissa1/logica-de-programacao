Algoritmo "exercicioFaccat18"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : ler a data de nascimento e ano atual, calcular e dizer se pode votar ou não
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 17/04/2024
Var
   anoAtual, anoNascimento, resultado:inteiro

Inicio
   escreval("Digite o ano atual: ")
   leia(anoAtual)
   escreval("Digite o ano em que você nasceu: ")
   leia(anoNascimento)

   resultado <- anoAtual - anoNascimento

   se resultado >= 16 entao
      escreval("Voto Opcional!")
   senao
      se resultado >= 18 entao
         escreval("Voto Obrigatório!")
      senao
         se resultado > 70 entao
            escreval("Voto opcional!")
         senao
            escreval("Não pode votar")
         fimse
      fimse
   fimse

Fimalgoritmo