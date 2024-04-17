let soma = 0

for (let contadora = 0; contadora <= 500; contadora++) {
    if (contadora % 2 == 0) {
        soma = soma + contadora
    }
}

alert(`Soma dos 500 primeiros números pares inteiros: ${soma}`)