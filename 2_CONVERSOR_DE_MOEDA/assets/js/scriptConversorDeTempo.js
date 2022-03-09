{
// input range
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

// input number
let numeroC = document.querySelector("#numeroC");
let numeroF = document.querySelector("#numeroF");
let numeroK = document.querySelector("#numeroK");

// Mostrar o range no momoneto do F e do K, o do celsius pelo fato dele ser o geral de todos aparece no input
let rangeNoMomentoF = document.querySelector('#rangeNoMomentoF')
let rangeNoMomentoK = document.querySelector('#rangeNoMomentoK')

// Pegando os input number e atribuindo a eles o valor que esta no input range que foi definido no HTML no atributo value
numeroC.value = celsius.value;
numeroF.value = fahrenheit.value;
numeroK.value = kelvin.value;

function atualizaCcampoInputRange() {
  numeroC.value = celsius.value;
}
function atualizaCcampoInput() {
  celsius.value = numeroC.value;
}

/* FORMULAS DE CONVERSAO 
celsius_fahrenheit = (celsius * 9/5) + 32
celsius_kelvin = celsius + 273.15

fahrenheit_celsius = (fahrenheit - 32) * 5/9
fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

kelvin_celsius = kelvin - 273.15
kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
*/

function atualizaF() {
  let celsius_fahrenheit = (celsius.value * 9) / 5 + 32;
  numeroF.value = celsius_fahrenheit.toFixed(2);
  fahrenheit.value = celsius_fahrenheit;
  rangeNoMomentoF.innerHTML = `Range no momento: ${numeroF.value = fahrenheit.value}`
}

function atualizaK() {
  let celsius_kelvin = parseFloat(celsius.value) + 273.0;
  numeroK.value = parseFloat(celsius_kelvin).toFixed(2);
  kelvin.value = celsius_kelvin;
  rangeNoMomentoK.innerHTML = `Range no momento: ${numeroK.value = kelvin.value}`
}

function atualizarFK() {
  rangeNoMomentoF.innerHTML = `Range no momento: ${numeroF.value = fahrenheit.value}`
  rangeNoMomentoK.innerHTML = `Range no momento: ${numeroK.value = kelvin.value}`
}

function zerar() {
  celsius.value = 0.0;
  fahrenheit.value = 32;
  kelvin.value = 273;
  numeroC.value = celsius.value;
  numeroF.value = fahrenheit.value;
  numeroK.value = kelvin.value;

  rangeNoMomentoF.innerHTML = `Range no momento: ${numeroF.value = fahrenheit.value}`
  rangeNoMomentoK.innerHTML = `Range no momento: ${numeroK.value = kelvin.value}`
}
}