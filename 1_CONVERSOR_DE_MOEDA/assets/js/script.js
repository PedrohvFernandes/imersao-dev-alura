// COTACOES DO DIA 08/03/2022
let valorDoDolar = 5.06;
let valorDoEuro = 5.51;
let valorDaLibra = 6.63;
let valorDoBitcoin = 196107.55;

// Avisos na tela
let valorConvertido = document.getElementById("valorConvertido");
let aviso = document.querySelector("#aviso");

// para armazenar o valor do name do radio para passar pro switch
let moedaEstrangeira = "";

function Converter() {
  // Valor digitado no campo do input
  let valorElement = document.getElementById("valor").value;

  // selecionar os elementos radios (criar um array deles)
  let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

  if (valorElement <= 0 || valorElement === null || valorElement === "") {
    aviso.innerHTML = `O CAMPO ESTA VAZIO!!!`;
    aviso.style.color = "red";
    aviso.style.display = "block";
  } else {
    // VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
    // vincular a verificacao a um evento, click no botao Converter
    for (let i = 0; i < moedaSelecionada.length; i++) {
      if (moedaSelecionada[i].checked) {
        moedaEstrangeira = moedaSelecionada[i].value;
      }
    }

    // Usa o switch dessa função passando o valor do element pro valor em real
    moedaaSelecionada(valorElement);
  }

  // MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
  function mensagemFormatada(moedaConvertida, valorEmReal) {
    isNaN(valorEmReal) ? (valorEmReal = 0) : "";
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

  function moedaaSelecionada(valorElement) {
    // Valor do real em float que foi passado no campo input
    let valorEmReal = parseFloat(valorElement);

    // Resultado da moeda real * moeda estrangeira por exemplo: valorEmReal * valorDoDolar
    let moedaConvertida = 0.0;

    // CONVERSAO DE MOEDAS
    // Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch (moedaEstrangeira) {
      case "Dólar":
        moedaConvertida = valorEmReal * valorDoDolar;
        mensagemFormatada(moedaConvertida, valorEmReal);
        break;

      case "Euro":
        moedaConvertida = valorEmReal * valorDoEuro;
        mensagemFormatada(moedaConvertida, valorEmReal);
        break;

      case "Libra":
        moedaConvertida = valorEmReal * valorDaLibra;
        mensagemFormatada(moedaConvertida, valorEmReal);
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
    isNaN(moedaConvertida) ? (moedaConvertida = 0) : "";
  }
}

function Limpar() {
  let valorElementForm = document.getElementById("form");
  valorElementForm.reset();
  valorConvertido.style.display = "none";
  aviso.style.display = "none";
}
