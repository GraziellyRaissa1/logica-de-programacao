Algoritmo "litros"
// Disciplina   : [L�gica de programa��o com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descri��o   : Ler o tempo gasto de viagem, velocidade e dar a quantidade de litros gastos
// Autor(a)    : Grazielly Raissa Pereira De Souza!
// Data atual  : 16/04/2024
Var
   _tempo:inteiro
   velocidade:real
   distancia:real
   litros_usados:real
Inicio
   escreval("Qual o tempo gasto da viagem?")
   leia (_tempo)
   escreval ("Qual a velocidade m�dia que foi utilizada?")
   leia (velocidade)
   distancia <- _tempo * velocidade
   litros_usados <- distancia / 12
   escreval("Nesta viagem, o tempo gasto foi de:", _tempo, "h")
   escreval("A velocidade m�dia foi de:", velocidade, "km/h")
   escreval("A dist�ncia foi de:", distancia, "km")
   escreval("A quantidade de litros gastos foi de", litros_usados, "L")
Fimalgoritmo