let resultado = 0
let valor = 1

for (let contadora=0;contadora<=14;contadora++){
    resultado=resultado+valor
    valor=resultado-valor
    console.log(`${resultado}`)
}