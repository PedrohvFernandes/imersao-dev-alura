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
    linkvideo: "Y-cLCyrXhlI",
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
    linkvideo: "TExoc0MG4I4",
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
    linkvideo: "rNciXGzYZms",
  },
];

// Adiciona mais um filme para lista de filmes

function adicionarFilme() {
  let dadosNome = document.getElementById("nomedofilme").value;
  let dadosNota = document.getElementById("notafilme").value;
  let dadosSobre = document.getElementById("sobrefilme").value;
  let dadosData = document.getElementById("datalancamento").value;
  let urlImg = document.getElementById("linkimagem").value;
  let urlTrailer = document.getElementById("linktrailer").value;
  if(urlTrailer === ''){
    urlTrailer = 'RqJVa0fl01w'
  }
  let erro = document.getElementById("erro");
  let sucesso = document.getElementById("sucesso");

  // 1ºVerifica se esta vazio o campo
  // 2º Verificar se inseriu o link da imagem corretamente
  // 3º Verificar se existe o filme
  // 4º Muda o link do youtube
  if (
    verificaCampos(
      dadosNome,
      dadosNota,
      dadosSobre,
      dadosData,
      urlImg,
      urlTrailer
    )
  ) {
    if (!jaExiste(dadosNome, urlImg)) {
      listaFilmes.push({
        descricao: {
          Nome: dadosNome,
          Nota: dadosNota,
          Sobre: dadosSobre,
          Data: dadosData,
        },
        linkimagem: urlImg,
        linkvideo: mudarLinkYoutube(urlTrailer),
      });

      exibir();
      limpaCampos();
      sucesso.innerHTML =
        "Ebaaaa mais um filme pra lista :D veja o trailer caso você tenha colocado";
      sucesso.style.color = "green";
      erro.style.display = "none";
      sucesso.style.display = "block";
    } else {
      erro.innerHTML =
        "Todos os campos foram peenchidos corretamente, mas esse filme ja esta cadastrado, capa ou nome ja esta cadastrado";
      erro.style.color = "red";
      erro.style.display = "block";
      sucesso.style.display = "none";
    }
  } else {
    erro.innerHTML =
      "Todos os campos tem que ser preenchidos corretamente. Já o trailer ele é opcional, mas lembre-se tem que ser do youtube";
    erro.style.color = "red";
    erro.style.display = "block";
    sucesso.style.display = "none";
  }
}

// Exibe o filme que ja estão no codigo na tela que foi adicionado na lista
function exibir() {
  let divConteudo = document.getElementById("div-filmes");
  divConteudo.innerHTML = "";
  listaFilmes.map((item) => {
    divConteudo.innerHTML += `
    
  <div class='div-imagem-filme'>

    <div class='div-button-img'>
      <div class='div-button'>
        <button
        onclick="toggleVideo('hide', event)"
        role="button"
        class="botao btn iframebotton"
        id="iframebotton"
      >
        <i class="fa-solid fa-xmark"></i>
        FECHAR O TRAILER
        </button>
        <button onclick="toggleVideo('',event)" role="button" class="botao btn">Ver o trailer</button>
        <button onclick="removerFilme(event)" role="button" class="botao btn">Remover filme</button>
      </div>
      <img class='filmes-imgs' src=${item.linkimagem}>
    </div>

 
  <div class='descricao-filme-container'>
    <div class='descricao-filme'>
      <p><span>Nome do filme:</span>${item.descricao.Nome}</p>
      <p><span>Nota: </span>${item.descricao.Nota} gostaram desse filme</p>
      <p><span>Sobre: </span>${item.descricao.Sobre}</p>
      <p><span>Data de lançamento: </span>${item.descricao.Data}</p>
    </div>

  </div>

  <div id="iframe" class="iframe-div">


    <iframe
    class="frame-youtube"
    src="https://www.youtube.com/embed/${item.linkvideo}?html5=1&enablejsapi=1"
    frameborder="0"
    allowfullscreen
    name="${item.descricao.Nome}"
    >
    </iframe>


  </div>

  </div>
    
    `;
  });
}
exibir();

function limpaCampos() {
  document.getElementById("nomedofilme").value = "";
  document.getElementById("notafilme").value = "";
  document.getElementById("sobrefilme").value = "";
  document.getElementById("datalancamento").value = "";
  document.getElementById("linkimagem").value = "";
  document.getElementById("linktrailer").value = "";
  document.getElementById("erro").innerHTML = ``;
  document.getElementById("sucesso").innerHTML = ``;
  document.getElementById("link-da-imagem-errado").innerHTML = ``;
}

// verificar pra não deixcar pasasr caracter estranho em certos inputs
function validaCampos() {
  document.getElementById("nomedofilme").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if (
      "1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(
        chr
      ) < 0
    )
      return false;
  };

  document.getElementById("notafilme").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("%1234567890".indexOf(chr) < 0) return false;
  };

  document.getElementById("sobrefilme").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if (
      "1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(
        chr
      ) < 0
    )
      return false;
  };

  document.getElementById("datalancamento").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if (
      "/1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(
        chr
      ) < 0
    )
      return false;
  };
}
validaCampos();

// Verificar o tipo do arquivo da imagem e se os campos estão vazios
function verificaCampos(
  dadosNome,
  dadosNota,
  dadosSobre,
  dadosData,
  urlImg,
  urlTrailer
) {
  if (
    (dadosNome.trim() &&
      dadosNota.trim() &&
      dadosSobre.trim() &&
      dadosData.trim() &&
      urlImg.trim()) ||
    urlTrailer.trim()
  ) {
    if (verificarDados(urlImg)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Verifica se é a imagem jpg, jpeg, png
function verificarDados(urlImg) {
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

// Verifica se o filme ja existe: nome e link da imagem
// https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/
// https://ricardo-reis.medium.com/m%C3%A9todo-some-do-array-javascript-3cde974d121d

// Todos eles são: hof -> High order function, igual o find Uma função que recebe uma callback como parametro e é um metodo exclusivo de array

// Some ->O método some() testa se pelo menos algum dos elementos de um array passa no teste implementado por uma função atribuída. O proprio some ja retorna true independentemente do === ou !==

// find ->O método find() retorna o valor do primeiro elemento de um array que retornar true para uma função de teste fornecida. Se não houver alguma, retorna undefined.

// every -> O método every() testa se todos os elementos do array passam por um teste implementado por uma função fornecida.

// map -> o map retorna um novo array

// forEach -> não retorna nada
function jaExiste(dadosNome, img) {
  return listaFilmes.some(function (e) {
    return e.descricao.Nome === dadosNome || e.linkimagem === img;
  });
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
// https://www.devmedia.com.br/javascript-substring-selecionando-parte-de-uma-string/39232
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function mudarLinkYoutube(link) {
  // link.substr(32) -> pode usar esse aqui tambem
  return link.substring(link.indexOf("=") + 1);
}

// Remove o filme da lista
function removerFilme(event) {
  let divFilmes = document.querySelector(".descricao-filme");

  // https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039 https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction http://www.w3big.com/pt/htmldom/htmldom-properties.html
  // http://devfuria.com.br/javascript/dom/ https://tableless.com.br/entendendo-o-dom-document-object-model/
  // Pegando o filho do divFilmes que é o P depois o texto da posição 1 no caso o nome do filme pois o split pega o que esta vindo apos o :, e o [1], pega o conteudo da posição 1
  let name = divFilmes.children[0].innerText.split(":")[1];
  console.log(name);
  for (let i = 0; i < listaFilmes.length; i++) {
    // Obs tive que retirar o espaço entre Nome do filme:Yesterday pois o name pega o texto no html e no objeto o nome do filme não tem espaço, logo os dois tem que ficar sem espaço para serem iguais
    if (listaFilmes[i].descricao.Nome === name) {
      // Splica recorta(deleta) o filme de acordo com indice diferente do delete que deleta mas deixa um espaço vazio
      // Splice
      // Opera com 1 ou mais (indefinidos parâmetros). O primeiro parâmetro é o index de onde deve iniciar a remoção, o segundo a quantidade de valores removidos(se não informado, removerá todos os valores do index início até o final da array), e do terceiro em diante serão valores novos que entrarão no lugar dos valores removidos. https://pt.stackoverflow.com/questions/344404/diferen%C3%A7a-entre-splice-e-slice https://pt.stackoverflow.com/questions/77622/como-buscar-um-determinado-objeto-dentro-de-um-array
      listaFilmes.splice(i, 1);
    }
  }
  console.log(listaFilmes);
  console.log(event.target.parentNode.parentNode.parentNode);
  // Removemos os parentes nó arvore -> removendo a div que é o container de tudo
  event.target.parentNode.parentNode.parentNode.remove();
}

// Trailer fo filme
function toggleVideo(state, event) {
  // if state == 'hide', hide. Else: show video

  // contenteWindow -> A propriedade contentWindow retorna o objeto Window de um HTMLIFrameElement. Você pode usar este objeto Window para acessar o documento do
  // iframe e seu DOM interno. Este atributo é somente leitura, mas suas propriedades podem ser manipuladas como o objeto global Window.
  // (property) HTMLIFrameElement.contentWindow: Window
  //  https://stackoverflow.com/questions/17197084/difference-between-contentdocument-and-contentwindow-javascript-iframe-frame-acc
  //  https://developer.mozilla.org/en-US/docs/Web/API/Window/frames

  // console.log(event.target.parentNode.parentNode.parentNode)
  // let iframe = divImagemFilme.getElementsByTagName("iframe")[0].contentWindow;

  // let iframe = document.getElementsByTagName("iframe")[0].contentWindow;

  let iframe = event.target.parentNode.parentNode.parentNode.children[2].children[0].contentWindow
  // Button de tirar o video
  console.log(event.target.parentNode.children[0]);
  // Div do iframe
  console.log(
    event.target.parentNode.parentNode.parentNode.children[2]
  );
  // iframe
  console.log(event.target.parentNode.parentNode.parentNode.children[2].children[0])

  let button = event.target.parentNode.children[0];
  let divIframe = event.target.parentNode.parentNode.parentNode.children[2];

  button.style.display = state == "hide" ? "none" : "block";
  divIframe.style.display = state == "hide" ? "none" : "block";

  let func = state == "hide" ? "pauseVideo" : "playVideo";
  // O postMessage é um argumento do objeto iframe
  iframe.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}

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
