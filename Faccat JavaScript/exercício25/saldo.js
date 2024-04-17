/*25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. */

let numeroconta;
let saldo;
let debito;
let credito;
let saldoatual;

numeroconta=(prompt("Digite o número da sua conta: "));
saldo= parseFloat(prompt("Digite o total de saldo disponível na conta"));
debito= parseFloat(prompt("Digite o valor de debito disponível:"));
credito=parseFloat(prompt("Digite o valor de crédito disponível:"));
saldoatual= saldo - debito + credito;
if(saldoatual>=0){
    alert("Saldo positivo")
}
else{
    alert("Saldo negativo")
}