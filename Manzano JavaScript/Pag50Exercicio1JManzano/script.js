/*Elaborar um programa que apresente o resultado inteiro da
divisão de dois números quaisquer. Para a elaboração do programa, não
utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução
deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no
dividendo.*/
let cont = 0;
let dividendo = Number(prompt("Digite o dividendo:"))
let divisor = Number(prompt("Digite o divisor:"))
let resto = dividendo
do {
  resto = resto - divisor;
  cont++;
} while (resto >= divisor)
if (cont > 1) {
  alert(`O divisor foi repetido ${cont} vezes \nO resto e ${resto}`)
} else {
  alert(`O divisor foi repetido ${cont} vezes \nO resto e ${resto}`)
}

