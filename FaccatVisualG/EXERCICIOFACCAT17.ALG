Algoritmo "exercicioFaccat17"
// Disciplina   : [L�gica de programa��o com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descri��o   : Ler duas notas e dar resultado aprovado ou reprovado e m�dia
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 25/03/2024
Var
   // Se��o de Declara��es das vari�veis
   avaliacao1, avaliacao2 , mediaAritsimples:real
   resultado:caractere
Inicio

   escreva("Digite a nota da sua primeira avalia��o: ")
   leia(avaliacao1)
   escreva("Digite a nota da sua segunda avalia��o: ")

   leia(avaliacao2)
   mediaAritSimples <- (avaliacao1 + avaliacao2) / 2
   se mediaAritSimples > 6 entao
      escreval("Aprovado")
   senao escreva("Reprovado")
   fimse
   escreval("A sua m�dia foi: ", mediaAritSimples)
Fimalgoritmo