let listaJogadores = [
  {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrota: 0,
    pontos: 0,
    imagem: "https://pbs.twimg.com/media/E0lK00cXEAQzVbv.jpg",
  },
  {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrota: 0,
    pontos: 0,
    imagem:
      "https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg",
  },
];

function calculaPontos(jogador) {
  // uma vitoria é mais 3 pontos, um empate é mais um ponto e uma derrato não é nada
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresTela(jogadores) {
  let elemento = ``;
  for (let i = 0; i < jogadores.length; i++) {
    elemento += `
      <tr>
        <td class='name-foto'>${jogadores[i].nome} <img src="${jogadores[i].imagem}"></td>  
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrota}</td>
        <td>${jogadores[i].pontos}</td>
        <td>
          <button class='button-vitoria' onClick="adicionarVitoria('${i}')">Vitória</button>
        </td>
        <td>
          <button class='button-empate' onClick="adicionarEmpate()">Empate</button>
        </td>

        <td>
          <button class='button-derrota' onClick=" zerarIndividual('${i}')" >Limpar </button>
        </td>
        <td class='td-delete-jogador'>
          <img onClick="removerJogador('${i}')" src="assets/img/x-10366.svg"/>
        </td>
      </tr>
  `;
  }

  let tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresTela(listaJogadores);

// function adicionarVitoria(i) {
//   let jogador = listaJogadores[i];
//   jogador.vitorias++;
//   jogador.pontos = calculaPontos(jogador);
//   exibeJogadoresTela(listaJogadores);
// }
function adicionarVitoria(i) {
  let jogador = listaJogadores[i];
  jogador.vitorias++;
  for (let i = 0; i < listaJogadores.length; i++) {
    if (!(listaJogadores[i] === jogador)) {
      listaJogadores[i].derrota++;
    }
  }

  atualizarPontos(jogador);
  exibeJogadoresTela(listaJogadores);
}

// function adicionarEmpate(i) {
//   let jogador = listaJogadores[i];
//   jogador.empates++;
//   jogador.pontos = calculaPontos(jogador);
//   exibeJogadoresTela(listaJogadores);
// }

function adicionarEmpate() {
  for (let i = 0; i < listaJogadores.length; i++) {
    listaJogadores[i].empates++;
    atualizarPontos(listaJogadores[i]);
  }
  exibeJogadoresTela(listaJogadores);
}

function atualizarPontos(jogador) {
  jogador.pontos = calculaPontos(jogador);
}

// Não iria precisar do botão de derrota, pois seria o inverso do de virtoria
// no caso se a pessoa perder geral ganhava uma vitoria e os 3 pontos
// function adicionarDerrota(i) {
//   let jogador = listaJogadores[i];
//   jogador.derrota++;
//   jogador.pontos = calculaPontos(jogador);
//   exibeJogadoresTela(listaJogadores);
// }

function limparPontos(i) {
  i.vitorias = 0;
  i.empates = 0;
  i.derrota = 0;
  i.pontos = 0;
  exibeJogadoresTela(listaJogadores);
}

function zerarIndividual(i) {
  limparPontos(listaJogadores[i]);
}

function limpar() {
  for (let i = 0; i < listaJogadores.length; i++) {
    limparPontos(listaJogadores[i]);
  }
}

function addJogador() {
  let divContainer = document.getElementById("container-div");
  divContainer.style.display = "block";
}

function fecharAddJogador() {
  let divContainer = document.getElementById("container-div");
  divContainer.style.display = "none";
}

function limparJogadores() {
  listaJogadores = [];
  exibeJogadoresTela(listaJogadores);
}

function enviarJogador() {
  let nomeJogador = document.getElementById("nome").value;
  let urlImagemJogador = document.getElementById("imagem").value;
  let jaExisteJogador = document.getElementById("ja-existe-jogador");
  let divContainer = document.getElementById("container-div");

  if (urlImagemJogador === "") {
    urlImagemJogador =
      "https://ak.picdn.net/shutterstock/videos/1023635050/thumb/6.jpg";
  }
  if (verificarImagem(urlImagemJogador) && verificaNome(nomeJogador)) {
    if (!jaExiste(nomeJogador)) {
      let jogador = {
        nome: nomeJogador,
        vitorias: 0,
        empates: 0,
        derrota: 0,
        pontos: 0,
        imagem: urlImagemJogador,
      };
      listaJogadores.push(jogador);
      exibeJogadoresTela(listaJogadores);
      resetaCampos();
      divContainer.style.display = "none";
      jaExisteJogador.style.display = "none";
    }
  }
}

function resetaCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
}

function verificarImagem(urlImg) {
  let linkDaImagemErrado = document.getElementById("link-da-imagem-errado");
  if (
    urlImg.endsWith(".jpg") ||
    urlImg.endsWith(".jpeg") ||
    urlImg.endsWith(".png")
  ) {
    linkDaImagemErrado.style.display = "none";
    return true;
  } else {
    linkDaImagemErrado.innerHTML = `Você tem que inserir links que terminam com .PNG, JPG ou JPEG`;
    linkDaImagemErrado.style.display = "block";
    linkDaImagemErrado.style.color = "red";
    return false;
  }
}

function verificaNome(nome) {
  let nomeErrado = document.getElementById("nome-jogador-errado");
  if (nome <= 0 || nome > 20) {
    nomeErrado.innerHTML = `Você tem que inserir uma quantidade de caracteres entre 1 a 20`;
    nomeErrado.style.display = "block";
    nomeErrado.style.color = "red";
    return false;
  } else {
    nomeErrado.style.display = "none";
    return true;
  }
}

function jaExiste(dadosNome) {
  return listaJogadores.some(function (e) {
    if (e.nome === dadosNome) {
      return e.nome === dadosNome;
    } else if (e.nome !== dadosNome) {
      let jaExisteJogador = document.getElementById("ja-existe-jogador");
      jaExisteJogador.innerHTML = `Essa conta já existe`;
      jaExisteJogador.style.display = "block";
      jaExisteJogador.style.color = "red";
      return false;
    }
  });
}

function removerJogador(i) {
  listaJogadores.splice(i, 1);
  exibeJogadoresTela(listaJogadores);
  console.log(listaJogadores);
  console.log(listaJogadores[i]);
}
