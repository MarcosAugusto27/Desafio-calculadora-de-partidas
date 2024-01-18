let nomeHeroi= prompt("Digte o seu nome Heroi: "); 
let qtdVitorias = prompt("Digite a sua quantidade de vitorias:");
let qtdVitorias_num = Number(qtdVitorias);
let qtdDerrotas = prompt("Digite a sua quantidade de derrotas:");
let qtdDerrotas_num = Number(qtdDerrotas);
let nivel;
let resultado;

resultado = calculoRank(qtdVitorias,qtdDerrotas);

function calculoRank (qtdVitorias,qtdDerrotas){
    let calculo;
    calculo = qtdVitorias - qtdDerrotas;
    return calculo;
}
if ( resultado>0 && resultado <=10) {
    nivel = "Ferro";
}
else if (resultado>=11 && resultado<=20) {
    nivel = "Broze";
}
else if (resultado>=21 && resultado<=50) {
    nivel = "Prata";
}
else if (resultado>=51 && resultado<=80) {
    nivel = "Ouro";
}
else if (resultado>=81 && resultado<=90) {
    nivel = "Diamante";
}
else if ( resultado>=91 && resultado<=100) {
    nivel = "Lendário";
} 
else{
    nivel = "Imortal ";
}
if (nivel) {
    console.log("O Herói "+ nomeHeroi + " tem o saldo de "+resultado+" e está no nível de "+ nivel);
    
}


//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**