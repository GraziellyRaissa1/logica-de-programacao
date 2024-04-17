Algoritmo "exercicioFaccat24"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : Ler o total de vendas de um vendedor é dar a porcentagem de comissao
// Autor(a)    : Grazielly Raissa Pereira De Souza.
// Data atual  : 11/04/2024
Var
   salariofixo, totalvenda, salariototal, calculo:real

Inicio
   Escreval("Digite o seu salario fixo: ")
   leia(salariofixo)

   escreval("Digite o seu valor das vendas efetuadas: ")
   leia(totalvenda)

   se totalvenda <= 1.500 entao
      calculo <- totalvenda * 0.03

      salariototal <- calculo + salariofixo

      escreval("O seu salario total é:" , salariototal)
   senao

      se totalvenda > 1.500 entao
         calculo <- totalvenda * 0.05

         salariototal <- calculo + salariofixo

         escreval("O seu salario total é:" , salariototal)
      fimse
   fimse
Fimalgoritmo