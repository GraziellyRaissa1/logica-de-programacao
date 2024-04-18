/*d)-Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a
distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula
LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a
quantidade de litros (LITROS_USADOS) utilizada na viagem.*/


let tempo;
let velocidade;
let distancia;
let litrosUsados;

tempo=parseFloat(prompt("Por favor, informe qual foi o tempo gasto na viagem:"));
velocidade=parseInt(prompt("Por favor, informe a velocidade média que foi ultilizada:"));
distancia= tempo * velocidade;
litrosUsados=distancia /12; 
alert("Nesta viagem, o tempo gasto foi: " + tempo + " h");
alert("A velocidade média foi de: " + velocidade + " Km/h");
alert("A distância foi de " + distancia + " Km");
alert("A quantidade de litros gastos foi de: " + litrosUsados + " L")