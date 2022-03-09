function converterAnoLuz() {
	let km = parseFloat(document.getElementById("km").value);
	const ANOS_LUZ = 9461000000000;

	let  tempoConvertido = (km / ANOS_LUZ);

	document.getElementById("anos-luz").innerHTML = `Anos luz:  ${tempoConvertido}`;
}