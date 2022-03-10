let listaFilmes = [
  {
    descricao: {
      Nome: "Yesterday",
      Nota: "82% gostaram desse filme",
      Sobre:
        "Após sofrer um acidente, um cantor e compositor acorda em uma estranha realidade em que ele é a única pessoa que lembra dos Beatles. Com as músicas de seus ídolos, ele se transforma em um grande sucesso, mas a fama tem seu preço.",
      Data: "2019",
    },
    linkimagem:
      "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
    linkvideo:
      "https://www.youtube.com/embed/Y-cLCyrXhlI?html5=1&enablejsapi=1",
  },
  {
    descricao: {
      Nome: "Escola de Rock",
      Nota: "92% gostaram desse filme",
      Sobre:
        "Depois que o guitarrista Dewey é expulso de sua banda, ele se faz passar por professor de música em uma escola particular. Quando ouve seus alunos tocarem, ele se dá conta de que podem formar uma banda e participar da Batalha das Bandas, na qual ele finalmente terá a chance de se tornar o astro de rock que sempre soube que estava destinado a ser.",
      Data: "13 de fevereiro de 2004",
    },
    linkimagem:
      "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg",
    linkvideo:
      "https://www.youtube.com/embed/TExoc0MG4I4?html5=1&enablejsapi=1",
  },

  {
    descricao: {
      Nome: "A chegada",
      Nota: "88% gostaram desse filme",
      Sobre:
        "Naves alienígenas chegaram às principais cidades do mundo. Com a intenção de se comunicar com os visitantes, uma linguista e um militar são chamados para decifrar as estranhas mensagens dos visitantes.",
      Data: "24 de novembro de 2016 (Brasil)",
    },
    linkimagem:
      "https://s2.glbimg.com/fCNS_fXPhGRwlpnAaQLzvGYC1y0=/362x536/https://s2.glbimg.com/UPI9xlM9R9O41YRqSO7R3hTNk_s=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/q/V/Avo9ISQQO3grnARi3JCA/2020-914-a-chegada-poster.jpg",
    linkvideo:
      "https://www.youtube.com/embed/rNciXGzYZms?html5=1&enablejsapi=1",
  },
];

listaFilmes.map((item) => {
  document.write(`
  
  <div class='div-filmes' id="div-filmes">

    <div class='div-imagem-filme'>
      <button
      onclick="toggleVideo('hide')"
      role="button"
      class="botao btn iframebotton"
      id="iframebotton"
    >
      <i class="fa-solid fa-xmark"></i>
      FECHAR O TRAILER
    </button>
      <button onclick="toggleVideo()" role="button" class="botao btn">Ver o trailer</button>
      <img class='filmes-imgs' src=${item.linkimagem}>
    </div>

    <div class='descricao-filme-container'>

      <div class='descricao-filme'> 
        <p><span>Nome do filme:</span> ${item.descricao.Nome}</p>
        <p><span>Nota: </span> ${item.descricao.Nota}</p>
        <p><span>Sobre: </span>${item.descricao.Sobre}</p>
        <p><span>Data de lançamento: </span>${item.descricao.Data}</p>
      </div>

    </div>
    <div id="iframe" class="iframe-div">

 
      <iframe
      class="frame-youtube"
      src="${item.linkvideo}"
      frameborder="0"
      allowfullscreen
      >
      </iframe>


    </div>
  </div>
  `);
});

// Trailer fo filme
function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  let div = document.getElementById("iframe");
  let iframebotton = document.getElementById("iframebotton");
  let iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  div.style.display = state == "hide" ? "none" : "block";
  iframebotton.style.display = state == "hide" ? "none" : "block";
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}

// Adiciona mais um filme para lista de filmes
function adicionarFilme() {
  let dados = document.getElementById("descricao");
  let urlimg = document.getElementById("linkimagem");

  dados.value = "";
  urlimg.value = "";
}

function verficarDados() {
  // verificar pra não deixcar pasasr caracter estranho
  // Verificar o tipo do arquivo
}
verficarDados();

function removerFilme() {}

// let listaFilmes = ['Yesterday', 'A chegada', 'Escola de Rock']
//                   // Elemento: 1 2 3
//                   // Indice:   0 1 2

// // Adicionar novos elementos - indice 3
// listaFilmes.push('Harry')
// // Elemento: 4
// // Indice:   3

// // length -> tamanho e não o indice
// for(let i = 0; i < listaFilmes.length; i++){
//   document.write("<p>"+ listaFilmes[i] + "</p>")
// }
