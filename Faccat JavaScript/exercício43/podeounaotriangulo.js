/*3) Seja o seguinte algoritmo:
inicio
ler a, b, c
se (a < b+c) e (b <a+c) e (c <a+b) então
se (a=b) e (b=c) então
mens  'Triângulo Equilátero'
senão
se (a=b) ou (b=c) ou (a=c) então
mens  'Triângulo Isósceles'
senão
mens  'Triângulo Escaleno'
 fim_se
 fim_se
senão
mens  'Não e possível formar um triângulo'
fim_se
escrever mens
fim
Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:
Variáveis
a b C Mens
1 2 3
3 4 5
2 2 4
4 4 4
5 3 3*/


let a;
let b;
let c;
a = parseInt(prompt("Digite o valor do primeiro lado do triangulo:"));
b = parseInt(prompt("Digite o valor do segundo lado do triangulo:"));
c = parseInt(prompt("Digite o valor do terceiro lado do triangulo:"));
if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
        alert("Triângulo Equilátero!")
    }
    else if (a == b || b==c || a == c) {
        alert("Triângulo Isósceles!")
    }
    else {
        alert("Triângulo Escaleno!")
    }
}

else {
    alert("Não é possível formar um triângulo!")
}
