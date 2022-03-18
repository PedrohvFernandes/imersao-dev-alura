const cartasJogador = [
  {
    nome: "Bulbasauro",
    imagem:
      "https://i.gifer.com/origin/fe/fe4ebd8a9c0547e94000a9c759acf591.gif",
    atributos: {
      ataque: 7,
      defesa: 8,
      poder: 6,
    },
  },

  {
    nome: "nidorino",
    imagem: "https://professorlotus.com/Sprites/Nidorino.gif",
    atributos: {
      ataque: 10,
      defesa: 8,
      poder: 8,
    },
  },
  {
    nome: "nidoking",
    imagem: "https://professorlotus.com/Sprites/Nidoking.gif",
    atributos: {
      ataque: 15,
      defesa: 13,
      poder: 10,
    },
  },

  {
    nome: "poliwag",
    imagem: "https://professorlotus.com/Sprites/Poliwag.gif",
    atributos: {
      ataque: 4,
      defesa: 4,
      poder: 6,
    },
  },
  {
    nome: "poliwhirl",
    imagem: "https://professorlotus.com/Sprites/Poliwhirl.gif",
    atributos: {
      ataque: 7,
      defesa: 7,
      poder: 9,
    },
  },
  {
    nome: "poliwrath",
    imagem: "https://professorlotus.com/Sprites/Poliwrath.gif",
    atributos: {
      ataque: 12,
      defesa: 12,
      poder: 14,
    },
  },

  {
    nome: "machop",
    imagem: "https://professorlotus.com/Sprites/Machop.gif",
    atributos: {
      ataque: 9,
      defesa: 6,
      poder: 8,
    },
  },
  {
    nome: "machoke",
    imagem: "https://professorlotus.com/Sprites/Machoke.gif",
    atributos: {
      ataque: 12,
      defesa: 9,
      poder: 11,
    },
  },
  {
    nome: "machamp",
    imagem: "https://professorlotus.com/Sprites/Machamp.gif",
    atributos: {
      ataque: 17,
      defesa: 14,
      poder: 16,
    },
  },
];
const cartasMaquina = [
  {
    nome: "Bulbasauro",
    imagem:
      "https://i.gifer.com/origin/fe/fe4ebd8a9c0547e94000a9c759acf591.gif",
    atributos: {
      ataque: 7,
      defesa: 8,
      poder: 6,
    },
  },

  {
    nome: "nidorino",
    imagem: "https://professorlotus.com/Sprites/Nidorino.gif",
    atributos: {
      ataque: 10,
      defesa: 8,
      poder: 8,
    },
  },
  {
    nome: "nidoking",
    imagem: "https://professorlotus.com/Sprites/Nidoking.gif",
    atributos: {
      ataque: 15,
      defesa: 13,
      poder: 10,
    },
  },

  {
    nome: "poliwag",
    imagem: "https://professorlotus.com/Sprites/Poliwag.gif",
    atributos: {
      ataque: 4,
      defesa: 4,
      poder: 6,
    },
  },
  {
    nome: "poliwhirl",
    imagem: "https://professorlotus.com/Sprites/Poliwhirl.gif",
    atributos: {
      ataque: 7,
      defesa: 7,
      poder: 9,
    },
  },
  {
    nome: "poliwrath",
    imagem: "https://professorlotus.com/Sprites/Poliwrath.gif",
    atributos: {
      ataque: 12,
      defesa: 12,
      poder: 14,
    },
  },

  {
    nome: "machop",
    imagem: "https://professorlotus.com/Sprites/Machop.gif",
    atributos: {
      ataque: 9,
      defesa: 6,
      poder: 8,
    },
  },
  {
    nome: "machoke",
    imagem: "https://professorlotus.com/Sprites/Machoke.gif",
    atributos: {
      ataque: 12,
      defesa: 9,
      poder: 11,
    },
  },
  {
    nome: "machamp",
    imagem: "https://professorlotus.com/Sprites/Machamp.gif",
    atributos: {
      ataque: 17,
      defesa: 14,
      poder: 16,
    },
  },
];

console.log(cartasMaquina);
console.log(cartasJogador);
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * cartasMaquina.length);
  cartaMaquina = cartasMaquina[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * cartasJogador.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartasJogador.length);
  }
  cartaJogador = cartasJogador[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  //   exibirOpcoes();
  // exibirCartaJogador();
  exbibirCarta("jogador");
  resetMaquina();
  resetResultado();

  let audio = document.getElementById("player");
  audio.play();
}

function exbibirCarta(jogador) {
  if (jogador === "jogador") {
    exibirCartaJogador();
  } else if (jogador === "maquina") {
    exibirCartaMaquina();
  }
}

// function exibirOpcoes() {
//   let divOpcoes = document.getElementById("opcoes");
//   let opcoesTexto = "";

//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto +=
//       "<input type='radio' name='atributo' value='" +
//       atributo +
//       "'>" +
//       atributo;
//   }
//   divOpcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

let vitoria = 100;
let derrota = 100;

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  let elementoResultado = document.getElementById("resultado");
  let elementoResultadoParitda = document.getElementById("resultado-partida");
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  let lifeJogador = document.getElementById("life-jogador");
  let lifeMaquina = document.getElementById("life-maquina");

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `<p class='resultado-final'>Você venceu o round</p>`;
    retirarCarta("usuario");
    lifeMaquina.innerHTML = `Life: ${(derrota -= 10)}`;
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = `<p class='resultado-final'>Você perdeu o round, a carta da máquina é maior</p>`;
    retirarCarta("maquina");
    lifeJogador.innerHTML = `Life: ${(vitoria -= 10)}`;
  } else {
    elementoResultado.innerHTML = `<p class='resultado-final'>Empatou o round</p>`;
  }
  // exibirCartaMaquina();
  exbibirCarta("maquina");

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;

  if (vitoria === 50) {
    lifeJogador.style.color = "orange";
  } else if (vitoria === 30) {
    lifeJogador.style.color = "red";
  }

  if (derrota === 50) {
    lifeMaquina.style.color = "orange";
  } else if (derrota === 30) {
    lifeMaquina.style.color = "red";
  }

  if (vitoria === 0) {
    document.getElementById("fim-do-jogo").play();
    elementoResultadoParitda.innerHTML = `VOCÊ PERDEU A PARTIDA, TREINE MAIS`;

    resetarTudo();
  } else if (derrota === 0) {
    document.getElementById("win").play();
    elementoResultadoParitda.innerHTML = `VOCÊ GANHOU A PARTIDA`;
    resetarTudo();
  }
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>";

  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `
      <input type='radio' name='atributo' checked value='${atributo}'> ${atributo} ${cartaJogador.atributos[atributo]} <br> `;
  }
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = `${moldura}  ${nome} ${tagHTML}  ${opcoesTexto}  </div>`;
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes-maquina' class='carta-status'>";

  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto += `
		<p type='text' id='atributos-maquina' name='atributo' value='${atributo}'> ${atributo} ${cartaMaquina.atributos[atributo]}</p>  `;
  }
  let nome = `<p id='nome-cara-maquina' class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = `${moldura}  ${nome} ${tagHTML}  ${opcoesTexto}  </div>`;
}

function resetMaquina() {
  document.getElementById("nome-cara-maquina").innerHTML = ``;
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url()`;
  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto += `
		<p type='text' id='atributos-maquina' name='atributo' value='${atributo}'>  </p>  `;
  }
  let opcoesMaquina = document.getElementById("opcoes-maquina");
  opcoesMaquina.innerHTML = opcoesTexto;

  let moldura =
    '<img src="https://guloseimasnerds.files.wordpress.com/2017/02/verso-carta-pkm.jpg" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.innerHTML = `${moldura} </div>`;
}

function resetResultado() {
  let elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = ``;
}

function retirarCarta(jogador) {
  let cartaPerdida;

  if (jogador == "maquina") {
    for (let i in cartasMaquina) {
      console.log("entrou aqui1");
      if (cartasMaquina[i].nome == cartaMaquina.nome) {
        cartaPerdida = cartasMaquina.splice(i, 1)[0];
        cartasJogador.push(cartaPerdida);
        console.log(cartaPerdida);
        console.log(cartasJogador);
        console.log(cartasMaquina);
      }
    }
  } else if (jogador == "usuario") {
    for (let i in cartasJogador) {
      console.log("entrou aqui2");
      if (cartasJogador[i].nome == cartaJogador.nome) {
        cartaPerdida = cartasJogador.splice(i, 1)[0];
        cartasMaquina.push(cartaPerdida);
        console.log(cartaPerdida);
        console.log(cartasJogador);
        console.log(cartasMaquina);
      }
    }
  }
}

function resetarTudo() {
  document.getElementById("btnResetar").disabled = false;
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("player").pause();
}

function resetar() {
  document.location.reload(true);
}
