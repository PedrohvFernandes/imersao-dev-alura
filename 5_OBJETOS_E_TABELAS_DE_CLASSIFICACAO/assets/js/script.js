var rafa = {nome:"Rafa", vitorias:2, empates:1, derrota:1, pontos: 0}
var paulo = {nome:"Paulo", vitorias:2, empates:1, derrota:1, pontos: 0}



var resultadoDosPontos = calculaPontos(rafa)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  console.log(pontos)
  return pontos
}