let valor = parseInt(prompt("Digite o valor da base:"))
let expoente = parseInt(prompt("Digite o valor do expoente:"))

let resultado = 1

for (let contadora=0;contadora<expoente;contadora++){
    resultado=resultado*valor
}

alert(`${valor} ^ ${expoente} = ${resultado}`)