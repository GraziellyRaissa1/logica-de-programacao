/*Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
    seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
    que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.*/

let litrosVendidos;
let tipoCombustivel;
let total;
let valorLitrosG;
let valorLitrosA;
let total1;
let total2;

valorLitrosA = 2.90 - 2.90 / 100 * 3;
valorLitrosG = 3.30 - 3.30 / 100 * 4

alert("A- ÁLCOOL");
alert("G-GASOLINA");

litrosVendidos = (prompt("Digite o total de litros a pagar:"));
tipoCombustivel = (prompt("Informe o tipo de combústivel (A/G):"));


if (tipoCombustivel == "A") {
    if (litrosVendidos > 20) {
        valorLitrosA = 2.90 - 2.90 / 100 * 5
        total = litrosVendidos * valorLitrosA
        alert("O valor a ser pago é: " + "R$ " + total)
    }
    else {
        total = litrosVendidos * valorLitrosA
        alert("O valor a ser pago é: " + "R$ " + total)
    }
}

else {
    if (tipoCombustivel = "G") {
        if (litrosVendidos > 20) {
            valorLitrosG = 3.30 - 3.30 / 100 * 6
            total = litrosVendidos * valorLitrosG;
            alert("O valor a ser pago é: " + "R$ " + total)
        }
    }

    else {
        total1 = litrosVendidos * valorLitrosG;
        alert("O valor a ser pago é: " + "R$ " + total)
    }

}






