//Exercício 10 faccat

/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor. */

var taxatotal, valorveiculo, custodefabrica;




alert("Vamos ler o custo de fábrica de um veículo e exibir para o consumidor!");
var custodefabrica=parseFloat(prompt("Digite o custo de fábrica do veículo:"));
taxatotal=(73 / 100);
valorveiculo=(custodefabrica * taxatotal + custodefabrica)
alert("O custo do veículo para o consumidor será: " + valorveiculo);