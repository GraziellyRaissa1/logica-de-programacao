/*37) Uma fruteira está vendendo frutas com a seguinte tabela de preços:
--------------------------------------------------
Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
--------------------------------------------------
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/



let morangosKG;
let macasKG;
let precoMorangos;
let taxaDesconto;
let precoMacas;
let quilosTotal;
let totalCompras;
let precoFinal;

morangosKG = parseFloat(prompt("Informe a quantidade de morangos em KG:"));
macasKG = parseFloat(prompt("Informe a quantidade de maças em KG:"));
if (morangosKG <= 5) {
    precoMorangos = morangosKG * 2.5;
    alert("O total a se pagar nos morangos são:" + "R$" + precoMorangos)
}
else {
    precoMorangos = morangosKG * 2.2;
    alert("O total a se pagar nas maças são:" + "R$" + precoMorangos);
}
if (macasKG <= 5) {
    precoMacas = macasKG * 1.8
    alert("O total a se pagar nas maças são" + "R$" + precoMacas)
}

else {
    precoMacas = macasKG * 1.5
    alert("O total a se pagar nas maças são" + "R$" + precoMacas)
}

quilosTotal = morangosKG + macasKG;
totalCompras = precoMacas + precoMorangos
alert("O preço total da compra é:" + "R$" + totalCompras)

if (quilosTotal > 8 || totalCompras > 25) {
    taxaDesconto = 0.10 * totalCompras
    precoFinal = totalCompras - taxaDesconto;
    alert("O preço total da compra com desconto: R$ " + precoFinal);
}