let resultado = 1

for (let contadora = 1; contadora <= 10; contadora++) {
    if (contadora % 2 == 1) {
        for (let contadora2 = 1; contadora2 < contadora+1; contadora2++) {
            resultado = contadora2 * resultado
        }
        console.log(`${contadora}! = ${resultado}`)
        resultado = 1
    }
}