Algoritmo "exercicioFaccat41"
// Disciplina   : [L�gica de programa��o com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descri��o   : Fa�a um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verifica��es e a m�dia dos
//               exerc�cios que fazem parte da avalia��o.
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 17/04/2024
Var
   Nota1, Nota2, Nota3, exercicio, Media: real
Inicio

   escreval("Digite a primeira nota da avalia��o")
   leia(Nota1)
   escreval("Digite a segunda nota da avalia��o")
   leia(Nota2)
   escreval("Digite a terceira nota da avalia��o")
   leia(Nota3)
   escreval("Digite a media dos exercicios")
   leia(exercicio)
   Media <- (Nota1 + Nota2 * 2 + Nota3 * 3 + exercicio) / 7
   se Media >= 9.0 entao
      escreval( Media, " Conceito: A")
   senao
      se (Media >= 7.5) e (Media < 9.0) entao
         escreval( Media , " Conceito: B")
      senao
         se (Media >= 6.0) e (Media < 7.5) entao
            escreval( Media , " Conceito: C")
         senao
            se Media  < 6.0  entao
               escreval( Media , " Conceito: D")
            fimse
         fimse
      fimse
   fimse

Fimalgoritmo