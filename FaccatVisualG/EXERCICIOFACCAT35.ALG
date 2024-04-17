Algoritmo "exercicioFaccat35"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : Calcula desconto de Posto de Gasolina
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 10/04/2024
Var
   litrosVendidos:real
   tipoCombustivel: caractere

   total:real
   valorLitroG:real
   valorLitroA:real
Inicio
valorLitroA <- 2.90 - 2.90 / 100 * 3
valorLitroG <- 3.30 - 3.30 / 100 * 4

Escreval("A- ÁCOOL")
Escreval("G- GASOLINA")
   escreval ("Digite o total de litros a pagar: ")
   leia (litrosVendidos)
   escreval ("Tipo de Combustivel (A/G): ")
   leia (tipoCombustivel)
   se tipoCombustivel = "A" entao
      se litrosVendidos > 20 entao
         valorLitroA <- 2.90 - 2.90 / 100 * 5
         total <- litrosVendidos * valorLitroA
      senao
         total <- litrosVendidos * valorLitroA
      fimse
   fimse

   se tipoCombustivel = "G" entao
      se litrosVendidos > 20 entao
         valorLitroG <- 3.30 - 3.30 / 100 * 6
         total <- litrosVendidos * valorLitroG
      senao
         total <- litrosVendidos * valorLitroG
      fimse
   fimse

   escreval ("O total a ser Pago é: R$", total:2:2)
Fimalgoritmo