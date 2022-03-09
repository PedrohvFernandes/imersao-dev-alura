// Avisos na tela
let valorConvertido = document.getElementById("valorConvertido");
let aviso = document.querySelector("#aviso");

// para armazenar o valor do name do radio para passar pro switch
let moedaEstrangeira = "";

function Converter() {
  // Valor digitado no campo do input
  let valorElement = document.getElementById("valor").value;

  if (valorElement == 0 || valorElement === null || valorElement === "") {
    aviso.innerHTML = `O CAMPO ESTA VAZIO!!!`;
    aviso.style.color = "red";
    aviso.style.display = "block";
  } else {
    verificaMoeda();

    // Usa o switch dessa função passando o valor do element pro valor em real
    calculoConversaoMoeda(valorElement);
  }
}

function verificaMoeda() {
  // selecionar os elementos radios (criar um array deles)
  let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

  // VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
  // vincular a verificacao a um evento, click no botao Converter
  for (let i = 0; i < moedaSelecionada.length; i++) {
    if (moedaSelecionada[i].checked) {
      moedaEstrangeira = moedaSelecionada[i].value;
    }
  }
}

function calculoConversaoMoeda(valorElement) {
  // COTACOES DO DIA 08/03/2022
  let valorDoDolar = 5.06;
  let valorDoEuro = 5.51;
  let valorDaLibra = 6.63;
  let valorDoBitcoin = 196107.55;

  // Valor do real em float que foi passado no campo input
  let valorEmReal = parseFloat(valorElement);

  // Resultado da moeda real * moeda estrangeira por exemplo: valorEmReal * valorDoDolar
  let moedaConvertida;

  // CONVERSAO DE MOEDAS
  // Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
  switch (moedaEstrangeira) {
    case "Dólar":
      moedaConvertida = valorEmReal * valorDoDolar;
      mensagemFormatada(
        moedaConvertida.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        valorEmReal
      );
      break;

    case "Euro":
      moedaConvertida = valorEmReal * valorDoEuro;
      mensagemFormatada(
        moedaConvertida.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        }),
        valorEmReal
      );
      break;

    case "Libra":
      moedaConvertida = valorEmReal * valorDaLibra;
      mensagemFormatada(
        moedaConvertida.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        }),
        valorEmReal
      );
      break;

    case "Bitcoins":
      moedaConvertida = valorEmReal * valorDoBitcoin;
      mensagemFormatada(parseFloat(moedaConvertida).toFixed(5), valorEmReal);
      break;

    default:
      aviso.textContent = "Escolha uma moeda estrangeira";
      aviso.style.color = "red";
      aviso.style.display = "block";
  }
}

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida, valorEmReal) {
  valorConvertido.innerHTML =
    "O valor " +
    valorEmReal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }) +
    " convertido em " +
    moedaEstrangeira +
    " é " +
    moedaConvertida;
  valorConvertido.style.color = "green";
  valorConvertido.style.display = "block";
  aviso.style.display = "none";
}

function Limpar() {
  let valorElementForm = document.getElementById("form");
  valorElementForm.reset();
  valorConvertido.style.display = "none";
  aviso.style.display = "none";
  moedaEstrangeira = "";
}