/*
  Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15.
  Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio.
  Observe que neste exercício não pode ser utilizado o operador de exponenciação do
  portuguol (^).
*/
 
let contadora = 0
let acumuladora = 1
 
while (contadora <= 15) {
  console.log(`3 ^ ${contadora} = ${acumuladora}`)
  acumuladora = acumuladora * 3
  contadora++
}
 
// 3 ** 0 = 1
// 3 ** 1 = 3  
// 3 ** 3 = 4
// 2 ** 2 = 8  
// ...
// 2 ** 15 = ?
