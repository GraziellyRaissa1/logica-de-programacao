Algoritmo "exercicioFaccat11"
// Disciplina   : [Lógica de programação com javascript]
// Professor   : Jailson Costa dos Santos
// Descrição   : ler o salario fixo + comissão e retornar salario final
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 24/03/2024
Var
   carrosv,salariofixo, comissao, vendas, salariofinal:real
Inicio
   escreval("Digite o número de carros vendidos:")
   leia(carrosv)
   escreval("Digite o valor total de carros vendidos:")
    leia(vendas)
   escreval("Digite o salário fixo do funcionário:")
   leia(salariofixo)
   escreval("Digite o percentual da comissao")
   leia(comissao)

   salariofinal<- salariofixo + vendas * (comissao / 100)
   
   escreval("O salário final do vendedor ao vender " , carrosv)

   escreval("é de:" , " R$ " , salariofinal)

Fimalgoritmo