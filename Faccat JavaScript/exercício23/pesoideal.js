
let altura;
let sexo;
let pesoideal= parseFloat

sexo=(prompt("Digite seu sexo (M = masculino / F = feminino): "));
altura=parseFloat(prompt("Digite a sua altura: "));
if(sexo = "M"){
    pesoideal= (72.7 * altura) -58;
}
else{
pesoideal=(62.1 * altura) -44.7;
}

alert("Seu peso ideal é: " + pesoideal);

