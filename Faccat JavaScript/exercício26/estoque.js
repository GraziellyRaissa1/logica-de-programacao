/*26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'.*/


let quantidadeatualestoque;
let quantidademaxima;
let quantidademinima;
let quantidademedia;

quantidadeatualestoque=parseInt(prompt("Por favor, digite a quantidade atual de bolinhos no estoque:"));
quantidademaxima= parseInt(prompt("Por favor, Digite a quantidade máxima de bolinhos no estoque:"));
quantidademinima= parseInt(prompt("Por favor, digite a quantidade mínima de bolinhos no estoque"));
quantidademedia= quantidademaxima + quantidademinima / 2;
if(quantidadeatualestoque >=quantidademedia){
    alert("Não é necessário fazer compras!");
}

else{
    alert("É necessário fazer compras!")
}