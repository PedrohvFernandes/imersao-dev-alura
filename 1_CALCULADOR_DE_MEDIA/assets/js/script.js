// Variaveis, Stings, console.log, função toFixed, operações metematicas, interpolação(concatenação), debug com console.log

// Não deixa passar numeros e caracteres estranhos

function validaCampos() {
  document.getElementById("seunome").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
  };
  document.getElementById("nota1").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
  };
  document.getElementById("nota2").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
  };
  document.getElementById("nota3").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
  };
  document.getElementById("nota4").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
  };

  document.getElementById("graus").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("-1234567890".indexOf(chr) < 0) return false;
  };

  document.getElementById("fireraid").onkeypress = function (e) {
    let chr = String.fromCharCode(e.which);
    if ("-1234567890".indexOf(chr) < 0) return false;
  };
}

validaCampos();

// Calcular media
function calcularMedia() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
  let nota4 = document.getElementById("nota4").value;

  let nome = document.getElementById("seunome").value;

  let resultado = document.getElementById("resultado");

  if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "" || nome == "") {
    resultado.innerHTML = "Preencha todos os campos!!!";
    resultado.style.color = "red";
  } else {
    let resultadoFinal =
      (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
    if (resultadoFinal >= 10) {
      resultado.innerHTML = `Parabens ${nome} você conseguiu passar com a media de ${resultadoFinal.toFixed(
        2
      )} :D'`;
      resultado.style.color = "green";
    } else {
      resultado.innerHTML = `${nome} infelizmente você não conseguiu passar com a media de ${resultadoFinal.toFixed(
        2
      )} D:'`;
      resultado.style.color = "red";
    }
  }
}

// Conversores: fahrenheit para graus celsius e moedas

function conversorGrau() {
  let campoCelsius = document.getElementById("graus").value;

  let campoFireraid = document.getElementById("fireraid").value;

  let calculoFahrenheit = (9 * parseFloat(campoCelsius)) / 5 + 32;

  let resultadoFireraid = document.getElementById("resultadoFireraid");
  resultadoFireraid.innerHTML = `Graus: ${campoCelsius} para fahrenheit é: ${calculoFahrenheit}`;

  let calculoCelsius = (5 * parseFloat(campoFireraid) - 32) / 9;

  let resultadoGraus = document.getElementById("resultadoGraus");
  resultadoGraus.innerHTML = `fahrenheit: ${campoFireraid} para Graus é: ${calculoCelsius}`;

  if (campoCelsius === "" && campoFireraid === "") {
    let resultadoGeral = document.getElementById("resultadoGeral");
    resultadoGeral.innerHTML = `TODOS OS CAMPOS ESTÃO VAZIOS!!!`;
    resultadoGeral.style.display = "block";
    resultadoGeral.style.color = "red";
  } else {
    resultadoGeral.style.display = "none";
  }
}

// var nome = "Gui"
// var nota1 = 9
// var nota2 = 7
// var nota3 = 4
// var nota4 = 2

// var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

// // toFixed() Fixando a quantidade de casas decimais com a função toFixed();
// var notaFixada = notaFinal.toFixed(1);

// console.log("Bem vindo" + nome);
// console.log(notaFixada)
