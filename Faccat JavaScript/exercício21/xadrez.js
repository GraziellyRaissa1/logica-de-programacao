//Exercício 21 Faccat

/*Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
    minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
    de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte*/

    var horainicio,horafim, totaldehoras;
    var horainicio=(prompt("Digite a hora de inicio do jogo: "));
    var horafim=(prompt("Digite a hora do fim jogo: "));
    totaldehoras= horafim - horainicio
    
    if(horafim==horainicio){
        totaldehoras= horainicio - horafim + 24
        alert("O jogo durou: " + totaldehoras + " Horas")
    }

else if(horafim < horainicio){
    totaldehoras= horafim - horainicio + 24
    alert("A duração do jogo foi de: " + totaldehoras + " Horas")
}
else{
    alert("A duração do jogo foi de: " + totaldehoras + " Horas")
}