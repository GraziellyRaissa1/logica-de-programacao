/*42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:
 - Ter no mínimo 65 anos de idade.
 - Ter trabalhado no mínimo 30 anos.
 - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.*/

let codigofuncionario;
let anoNascimento;
let anoDeingresso;
let anoAtual;
let idade;
let tempotrabalho;
codigofuncionario = parseInt(prompt("Digite o seu código de identificação da empresa:"));
anoAtual = parseInt(prompt("Digite o ano que você está"));
anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));
anoDeingresso = parseInt(prompt("Digite o ano que você ingressou na empresa"));

idade = anoAtual - anoNascimento;
tempotrabalho = anoAtual - anoDeingresso;
if (idade > 64) {
    alert("Requer Aposentadoria!")
}

else if (tempotrabalho > 29) {
    alert("Requer Aposentadoria!")
}

else if (idade > 59 && tempotrabalho > 24) {
    alert("Requer Aposentadoria!")
}

else {
    alert("Não requer aposentadoria!")
}