Algoritmo "exercicioFaccat25"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos
// Descrição   : Ler o saldo da conta, débito, Crédito somar e exibir se o valor e positivo ou negativo.
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 06/04/2024
Var
numeroconta,saldo,debito,credito, saldoatual:real

Inicio
Escreval("Por favor ,digite o número da sua conta: ")
leia(numeroconta)
Escreval("Digite o valor do saldo disponivél na conta: ")
leia(saldo)
Escreval("Digite o valor do débito dispónivel no cartão: ")
leia(debito)
Escreval("Digite o valor de créditos dispónovel no seu cartão: ")
saldoatual<- saldo - debito + credito
se saldoatual>=0 entao
Escreval("Saldo positivo")
senao
Escreval("Saldo Negátivo")
fimse
Fimalgoritmo
