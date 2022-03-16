const cartas = [
  {
    nome: "Bulbasauro",
    imagem: "",
    atributos: {
      ataque: 7,
      defesa: 8,
      poder: 6,
    },
  },
  {
    nome: "Pikachu",
    imagem: "",
    atributos: {
      ataque: 10,
      defesa: 10,
      poder: 10,
    },
  },
  {
    nome: "Charizard",
    imagem: "",
    atributos: {
      ataque: 2,
      defesa: 8,
      poder: 10,
    },
  },
  {
    nome: "Squirtle",
    imagem: "",
    atributos: {
      ataque: 5,
      defesa: 3,
      poder: 6,
    },
  },
  {
    nome: "Caterpie",
    imagem: "",
    atributos: {
      ataque: 2,
      defesa: 5,
      poder: 3,
    },
  },
  {
    nome: "Pidgeot",
    imagem: "",
    atributos: {
      ataque: 8,
      defesa: 5,
      poder: 4,
    },
  },
];

const jogadores = [
  {
    nome: "jogador",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    imagem: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png",
  },
  {
    nome: "computador",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    imagem: "https://cdn-icons-png.flaticon.com/512/1720/1720126.png",
  },
];

let cartaMaquina;
let cartaJogador;

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina === numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  let divOpecoes = document.getElementById("opcoes");
  let opcoes = "";
  for (let atributo in cartaJogador.atributos) {
    opcoes += `<input type='radio' name='atributo' value='${atributo}' checked> ${atributo}`;
  }
  divOpecoes.innerHTML = opcoes;
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo")
    for(let i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked === true){
            return radioAtributos[i].value
        }
    }

}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  console.log(atributoSelecionado)
  let valorCartaDeJogador = cartaJogador.atributos[atributoSelecionado]
  console.log(valorCartaDeJogador)
  let valorCartaDaMaquina = cartaMaquina.atributos[atributoSelecionado]
  console.log(valorCartaDaMaquina)
  let elementoResultado = document.getElementById('resultado')

  if(valorCartaDeJogador > valorCartaDaMaquina){
    elementoResultado.innerHTML = `Você venceu :D`
  }else if (valorCartaDaMaquina > valorCartaDeJogador ){
    elementoResultado.innerHTML = `Você perdeu D:`
  } else{
    elementoResultado.innerHTML = `EMPATE`
  }
}
