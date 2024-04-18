let valor = 3
let contadora = 0
let resultado = 1

console.log(`${valor} ^ ${contadora} = ${resultado}`)

for (contadora = 1; contadora <= 15; contadora++) {
    resultado = resultado * valor
    console.log(`${valor} ^ ${contadora} = ${resultado}`)
}