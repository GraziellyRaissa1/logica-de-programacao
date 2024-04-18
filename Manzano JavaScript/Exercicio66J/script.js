let celsius = 0
let fahrenheit = 0

for (let contadora=0;contadora<10;contadora++){
    celsius = celsius + 10
    fahrenheit = (9*celsius+160)/5
    console.log(`Graus celsius: ${celsius} / em fahrenheit: ${fahrenheit}`)
}