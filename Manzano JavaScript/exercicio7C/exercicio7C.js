/*C)-Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume *Raio * Altura*/

let raio;
let altura;
let volume;

 raio=parseInt(prompt("Por favor, informe o raio da lata:"));
 altura=parseInt(prompt("Por favor, insira a altura da lata"));
 volume= 3.14*(raio**2)*altura;
 alert("O volume da lata é: " + volume);
