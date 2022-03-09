let numeroSecreto = parseInt(Math.random() * 11);
let quantidadeDeRodadas = 5;

let resultado = document.querySelector("#resultado");
let aviso = document.querySelector("#aviso");

function Chutar() {
  let chute = document.getElementById("valor").value;

  validaNumero(chute);
}

function validaNumero(chute) {
  let chuteNumber = parseInt(chute);

  if (chuteNumber <= 10 && chuteNumber >= 0) {
    sorteiaNumero(chuteNumber);
  } else if (chuteNumber > 10) {
    resultado.innerHTML = `So pode ser número entre 0 e 10, o número que você digitou foi ${chuteNumber}`;
    resultado.style.color = "red";
  }
}

function sorteiaNumero(chute) {
  if (quantidadeDeRodadas === 0) {
    resultado.innerHTML = `Suas chances de rodadas acabou e o número sorteado era ${numeroSecreto}
    Pode tentar novamente se quiser :D`;
    resultado.style.color = "red";
    quantidadeDeChances();
  } else {
    if (chute === numeroSecreto) {
      resultado.innerHTML = `Você acertou PARABENS!!! :D`;
      resultado.style.color = "green";
      validaMenorMaior(chute, numeroSecreto);
      fimDoJogo();
    } else if (chute !== numeroSecreto) {
      resultado.innerHTML = `Você errou TENTE NOVAMENTE D:`;
      resultado.style.color = "red";
      quantidadeDeRodadas--;
      validaMenorMaior(chute, numeroSecreto);
      quantidadeDeChances();
    }
  }
}

function quantidadeDeChances() {
  let quantidadeDeChances = document.querySelector("#quantidadeDeChances");

  if (quantidadeDeRodadas === 5) {
    quantidadeDeChances.innerHTML = `Quantidade de chances: ${quantidadeDeRodadas}`;
    quantidadeDeChances.style.color = "green";
  }

  if (quantidadeDeRodadas <= 4) {
    quantidadeDeChances.innerHTML = `Você tem somente ${quantidadeDeRodadas} rodadas`;
    quantidadeDeChances.style.color = "yellow";
  }

  if (quantidadeDeRodadas === 2) {
    quantidadeDeChances.innerHTML = `Você tem somente ${quantidadeDeRodadas} rodadas`;
    quantidadeDeChances.style.color = "orange";
  }

  if (quantidadeDeRodadas === 1) {
    quantidadeDeChances.innerHTML = `Você tem somente ${quantidadeDeRodadas} rodada`;
    quantidadeDeChances.style.color = "orange";
  }

  if (quantidadeDeRodadas === 0) {
    quantidadeDeChances.innerHTML = `Suas rodadas acabaram, quantidade de rodadas: ${quantidadeDeRodadas} e o numero sorteado era ${numeroSecreto}`;
    quantidadeDeChances.style.color = "red";
    fimDoJogo();
  }
}

function validaMenorMaior(chute, numeroSorteado) {
  
  if (chute < numeroSorteado) {
    aviso.innerHTML = `Seu chute é menor que o numero sorteado`;
  } else if (chute > numeroSorteado) {
    aviso.innerHTML = `Seu chute é maior que o numero sorteado`;
  } else if (chute === numeroSorteado) {
    aviso.innerHTML = ``;
  }
}

function Desistir() {
  resultado.innerHTML = `Você desistiu D: mas pode tentar novamente se quiser :D`;
  resultado.style.color = "red";
  quantidadeDeRodadas = 0;
  quantidadeDeChances();
}

function fimDoJogo() {
  let button = document.querySelector("#button");
  button.disabled = true;
  button.classList.add("button-desabilitado");

  let button_disitir = document.querySelector("#button-desistir");
  button_disitir.disabled = true;
  button_disitir.classList.add("button-desabilitado");

  // Criar um botão de reiniciar a aplicação:  .button-reiniciar

  // cria um novo elemento div
  // e dá à ele conteúdo
  let botton_reiniciar = document.createElement("button");
  // Adiciona a classe button
  botton_reiniciar.classList.add("button");

  // Colocando o id nele
  botton_reiniciar.setAttribute("id", "button-reiniciar")

  var conteudoNovo = document.createTextNode("Reiniciar");
  botton_reiniciar.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  let divAtual = document.getElementById("div-buttons");
  divAtual.appendChild(botton_reiniciar);

  // Coloca o evento de click no botão
  botton_reiniciar.addEventListener("click", reset);
}

function reset() {
  numeroSecreto = parseInt(Math.random() * 11);
  quantidadeDeRodadas = 5;

  let button = document.querySelector("#button");
  button.disabled = false;
  button.classList.remove("button-desabilitado");

  let button_disitir = document.querySelector("#button-desistir");
  button_disitir.disabled = false;
  button_disitir.classList.remove("button-desabilitado");

  var button_reiniciar = document.getElementById("button-reiniciar");
  button_reiniciar.parentNode.removeChild(button_reiniciar);

  resultado.innerHTML = ``;
  aviso.innerHTML = ``;
  
  quantidadeDeChances();

}
