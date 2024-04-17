Algoritmo "exercicioFaccat38"
// Disciplina   : [Lógica de programação com Javascript]
// Professor   :  Jailson Costa Dos Santos 
// Descrição   : Ler o código de acesso e ver se está correto, se sim vai para a senha, se não exibe um mensagem usuario e senha incorreta
// Autor(a)    : Grazielly Raissa Pereira De Souza
// Data atual  : 10/04/2024
Var
codigo,senha:inteiro
nome:caracter

Inicio
codigo<-0955
senha<-9999
Escreval("Digite seu nome de úsuario:")
leia(nome)
Escreval("Digite o código de acesso:")
leia(codigo)
se codigo = 0955 entao
Escreval("Digite a sua senha de acesso: ")
leia(senha)
senao
escreval("Usuario inválido, tente novamente ou crie uma conta!")
fimse
se senha = 9999 entao
escreval("Acesso liberado! bem vindo!" ":)")
senao
escreval("senha invalida! , tente novamente!")
fimse
Fimalgoritmo