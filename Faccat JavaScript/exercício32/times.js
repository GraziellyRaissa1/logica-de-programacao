/* Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.*/

let time1 = prompt("Digite o nome do primeiro time:");
let golsTime1 = parseInt(prompt(`Quantos gols o time ${time1} marcou?`));

let time2 = prompt("Digite o nome do segundo time:");
let golsTime2 = parseInt(prompt(`Quantos gols o time ${time2} marcou?`));



if (golsTime1 > golsTime2) {
    alert(`O time vencedor é: ${time1}`);
} else if (golsTime2 > golsTime1) {
    alert(`O time vencedor é: ${time2}`);
} else {
    alert("EMPATE");
}



