Algoritmo "exercicioFaccat17"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descrição   : Ler duas notas e dar resultado aprovado ou reprovado e média
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 25/03/2024
Var
   // Seção de Declarações das variáveis
   avaliacao1, avaliacao2 , mediaAritsimples:real
   resultado:caractere
Inicio

   escreva("Digite a nota da sua primeira avaliação: ")
   leia(avaliacao1)
   escreva("Digite a nota da sua segunda avaliação: ")

   leia(avaliacao2)
   mediaAritSimples <- (avaliacao1 + avaliacao2) / 2
   se mediaAritSimples > 6 entao
      escreval("Aprovado")
   senao escreva("Reprovado")
   fimse
   escreval("A sua média foi: ", mediaAritSimples)
Fimalgoritmo