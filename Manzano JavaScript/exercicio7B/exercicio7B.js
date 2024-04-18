/*B)-Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de
conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let grausFahrenheitB;
let grausCelsiusB;
grausFahrenheitB = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
grausCelsiusB = (grausFahrenheitB - 32) * (5 / 9);
alert("A temperatura convertida em graus Celsius é: " + grausCelsiusB);