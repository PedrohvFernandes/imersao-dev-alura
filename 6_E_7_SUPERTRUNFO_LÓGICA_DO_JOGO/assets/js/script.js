function exibirMensagem(tipo, msg) {	
	if (tipo == "derrota") {
		resultado.classList.add("formulario__resultado-derrota--ativo");
		resultado.innerHTML = msg;
	}
	else if (tipo == "vitoria") {
		resultado.classList.add("formulario__resultado-vitoria--ativo");
		resultado.innerHTML = msg;
	}
}

function calcularPontos() {
	for (let i = 0; i < jogadores.length; i++) {
		jogadores[i].pontos = (jogadores[i].vitorias * 3) + jogadores[i].empates;
	}
	
	exibirJogadores(jogadores);
}

function adicionarVitoria(jogador) {
	jogadores[jogador].vitorias++;
	
	for (let i = 0; i < jogadores.length; i++) {
		if (jogadores[i].nome != jogadores[jogador].nome) {
			jogadores[i].derrotas++;
		}
	}
	calcularPontos();
}

function adicionarEmpate() {
	for (let i = 0; i < jogadores.length; i++) {
		jogadores[i].empates++;
	}
	calcularPontos();
}

function resetarPontuacao() {
	for (let i = 0; i < jogadores.length; i++) {
		jogadores[i].vitorias = 0;
		jogadores[i].empates = 0;
		jogadores[i].derrotas = 0;
		jogadores[i].pontos = 0;
	}
	
	exibirJogadores(jogadores);
}

function exibirJogadores() {
	const tabelaJogadores = document.getElementById("tabelaJogadores");
	let elemento = "";

	for (let i = 0; i < jogadores.length; i++) {
		elemento += "<tr class='tabela__linha'>";
		elemento += "<td class='tabela__nome-time' style='background-image: url(" + jogadores[i].imagem + ");'>" + jogadores[i].nome + "</td>";
		elemento += "<td>" + jogadores[i].vitorias + "</td>";
		elemento += "<td>" + jogadores[i].empates + "</td>";
		elemento += "<td>" + jogadores[i].derrotas + "</td>";
		elemento += "<td>" + jogadores[i].pontos + "</td>";
		elemento += "</tr>";
	}

	tabelaJogadores.innerHTML = elemento;
}

function alterarJogador() {
	const nome = document.getElementById("nome").value;
	
	jogadores[0].nome = nome;
	
	exibirJogadores();
}

function resetarRobo() {
	const imagem = document.getElementById("carta__robo-imagem");
	const campoNome = document.getElementById("carta__robo-nome");
	const campoAtributos = document.getElementById("carta__robo-atributos");
	let atributos = "";

	campoNome.innerHTML = "";
	imagem["src"] = "";

	for (let i in cartaRobo.atributos) {
		atributos += "<p class='carta__input'>" + i + "</p>";
		atributos += "<p class='carta__atributo'>" + 0 + "</p>"
	}

	campoAtributos.innerHTML = atributos;
}

function sortearCartas() {
	cartaUsuario = baralhoUsuario[parseInt(Math.random() * baralhoUsuario.length)];
	cartaRobo = baralhoRobo[parseInt(Math.random() * baralhoRobo.length)];
	
	const exibicao = document.getElementById("exibicao");
	
	botaoJogar.disabled = false;
	
	exibicao.classList.add("exibicao--ativo");
	resultado.classList.remove("formulario__resultado-derrota--ativo");
	resultado.classList.remove("formulario__resultado-vitoria--ativo");

	while (cartaUsuario == cartaRobo) {
		sortearCarta();
	}
	
	exibirCarta("usuario");
	resetarRobo();
}

function exibirCarta(jogador) {
	if (jogador == "robo") {
		const imagem = document.getElementById("carta__robo-imagem");
		const campoNome = document.getElementById("carta__robo-nome");
		const campoAtributos = document.getElementById("carta__robo-atributos");
		let atributos = "";

		campoNome.innerHTML = cartaRobo.nome;
		imagem["src"] = cartaRobo.imagem;

		for (let i in cartaRobo.atributos) {
			atributos += "<p class='carta__input'>" + i + "</p>";
			atributos += "<p class='carta__atributo'>" + cartaRobo.atributos[i] + "</p>"
		}

		campoAtributos.innerHTML = atributos;
	}
	else if (jogador == "usuario") {
		const imagem = document.getElementById("carta__usuario-imagem");
		const campoNome = document.getElementById("carta__usuario-nome");
		const campoAtributos = document.getElementById("atributos");

		let atributos = "";

		campoNome.innerHTML = cartaUsuario.nome;
		imagem["src"] = cartaUsuario.imagem;

		for (let i in cartaUsuario.atributos) {
			atributos += "<input type='radio' name='atributo' value=" + i + " checked>";
			atributos += "<label class='carta__input'>" + i + "</label>";
			atributos += "<p class='carta__atributo'>" + cartaUsuario.atributos[i] + "</p>"
		}

		campoAtributos.innerHTML = atributos;
	}
}

function retirarCarta(jogador) {
	let cartaPerdida;
	
	if (jogador == "robo") {
		for (let i in baralhoRobo) {
			if (baralhoRobo[i].nome == cartaRobo.nome) {
				cartaPerdida = baralhoRobo.splice(i, 1)[0];
				baralhoUsuario.push(cartaPerdida);
				console.log(cartaPerdida)
				console.log(baralhoUsuario)
				console.log(baralhoRobo)
			}
		}
	}
	else if (jogador == "usuario") {
		for (let i in baralhoUsuario) {
			if (baralhoUsuario[i].nome == cartaUsuario.nome) {
				cartaPerdida = baralhoUsuario.splice(i, 1)[0];
				baralhoRobo.push(cartaPerdida);
				console.log(cartaPerdida)
				console.log(baralhoUsuario)
				console.log(baralhoRobo)
			}
		}
	}
}

function jogar() {
	const atributo = obtemAtributo();
	
	valorUsuario = cartaUsuario.atributos[atributo];
	valorRobo = cartaRobo.atributos[atributo];
	
	botaoJogar.disabled = true;
	
	exibirCarta("robo");
	
	if (valorUsuario > valorRobo) {
		exibirMensagem("vitoria", "Você ganhou!<br>Você ganhou a carta!");
		retirarCarta("robo");
		adicionarVitoria(0);
	}
	else if (valorUsuario < valorRobo) {
		exibirMensagem("derrota", "Você perdeu!<br>Você perdeu sua carta!");
		retirarCarta("usuario");
		adicionarVitoria(1);
	}
	else {
		exibirMensagem("derrota", "Empatou!");
		adicionarEmpate();
	}
}

function obtemAtributo() {
	const radioButton = document.getElementsByName("atributo");
	
	for (let i = 0; i < radioButton.length; i++) {
		if (radioButton[i].checked) {
			return radioButton[i].value;	
		}
	}
}

const baralhoUsuario = [
	{	
		nome: "bulbassauro",
		imagem: "https://professorlotus.com/Sprites/Bulbasaur.gif",
		atributos: { ataque: 5, defesa: 7, poder: 6 }
	},
	{
		nome: "ivyssauro",
		imagem:	"https://professorlotus.com/Sprites/Ivysaur.gif",
		atributos: { ataque: 8, defesa: 10, poder: 9 }
	},
	{
		nome: "venussauro",
		imagem:	"https://professorlotus.com/Sprites/Venusaur.gif",
		atributos: { ataque: 12, defesa: 15, poder: 14 }
	},

	{
		nome: "charmander",
		imagem:	"https://professorlotus.com/Sprites/Charmander.gif",
		atributos: { ataque: 7, defesa: 6, poder: 8 }
	},
	{
		nome: "charmeleon",
		imagem:	"https://professorlotus.com/Sprites/Charmeleon.gif",
		atributos: { ataque: 10, defesa: 8, poder: 11 }
	},
	{
		nome: "charizard",
		imagem:	"https://professorlotus.com/Sprites/Charizard.gif",
		atributos: { ataque: 15, defesa: 13, poder: 16 }
	},

	{
		nome: "squirtle",
		imagem:	"https://professorlotus.com/Sprites/Squirtle.gif",
		atributos: { ataque: 4, defesa: 5, poder: 6 }
	},
	{
		nome: "wartortle",
		imagem:	"https://professorlotus.com/Sprites/Wartortle.gif",
		atributos: { ataque: 7, defesa: 8, poder: 9 }
	},
	{
		nome: "blastoise",
		imagem:	"https://professorlotus.com/Sprites/Blastoise.gif",
		atributos: { ataque: 12, defesa: 13, poder: 14 }
	},

	{
		nome: "pidgey",
		imagem:	"https://professorlotus.com/Sprites/Pidgey.gif",
		atributos: { ataque: 3, defesa: 4, poder: 4 }
	},
	{
		nome: "pidgeotto",
		imagem:	"https://professorlotus.com/Sprites/Pidgeotto.gif",
		atributos: { ataque: 6, defesa: 7, poder: 7 }
	},
	{
		nome: "pidgeot",
		imagem:	"https://professorlotus.com/Sprites/Pidgeot.gif",
		atributos: { ataque: 11, defesa: 12, poder: 12 }
	},

	{
		nome: "abra",
		imagem:	"https://professorlotus.com/Sprites/Abra.gif",
		atributos: { ataque: 6, defesa: 6, poder: 9 }
	},
	{
		nome: "kadabra",
		imagem:	"https://professorlotus.com/Sprites/Kadabra.gif",
		atributos: { ataque: 9, defesa: 9, poder: 12 }
	},
	{
		nome: "alakazam",
		imagem:	"https://professorlotus.com/Sprites/Alakazam.gif",
		atributos: { ataque: 14, defesa: 14, poder: 17 }
	}
];
const baralhoRobo = [
	{	
		nome: "weedle",
		imagem: "https://professorlotus.com/Sprites/Weedle.gif",
		atributos: { ataque: 4, defesa: 3, poder: 5 }
	},
	{
		nome: "kakuna",
		imagem:	"https://professorlotus.com/Sprites/Kakuna.gif",
		atributos: { ataque: 0, defesa: 15, poder: 5 }
	},
	{
		nome: "beedrill",
		imagem:	"https://professorlotus.com/Sprites/Beedrill.gif",
		atributos: { ataque: 15, defesa: 7, poder: 7 }
	},

	{
		nome: "nidoran ♀",
		imagem:	"https://professorlotus.com/Sprites/Nidoran_F.gif",
		atributos: { ataque: 7, defesa: 6, poder: 4 }
	},
	{
		nome: "nidorina",
		imagem:	"https://professorlotus.com/Sprites/Nidorina.gif",
		atributos: { ataque: 10, defesa: 8, poder: 8 }
	},
	{
		nome: "nidoqueen",
		imagem:	"https://professorlotus.com/Sprites/Nidoqueen.gif",
		atributos: { ataque: 15, defesa: 13, poder: 10 }
	},

	{
		nome: "nidoran ♂",
		imagem:	"https://professorlotus.com/Sprites/Nidoran_M.gif",
		atributos: { ataque: 7, defesa: 6, poder: 4 }
	},
	{
		nome: "nidorino",
		imagem:	"https://professorlotus.com/Sprites/Nidorino.gif",
		atributos: { ataque: 10, defesa: 8, poder: 8 }
	},
	{
		nome: "nidoking",
		imagem:	"https://professorlotus.com/Sprites/Nidoking.gif",
		atributos: { ataque: 15, defesa: 13, poder: 10 }
	},

	{
		nome: "poliwag",
		imagem:	"https://professorlotus.com/Sprites/Poliwag.gif",
		atributos: { ataque: 4, defesa: 4, poder: 6 }
	},
	{
		nome: "poliwhirl",
		imagem:	"https://professorlotus.com/Sprites/Poliwhirl.gif",
		atributos: { ataque: 7, defesa: 7, poder: 9 }
	},
	{
		nome: "poliwrath",
		imagem:	"https://professorlotus.com/Sprites/Poliwrath.gif",
		atributos: { ataque: 12, defesa: 12, poder: 14 }
	},

	{
		nome: "machop",
		imagem:	"https://professorlotus.com/Sprites/Machop.gif",
		atributos: { ataque: 9, defesa: 6, poder: 8 }
	},
	{
		nome: "machoke",
		imagem:	"https://professorlotus.com/Sprites/Machoke.gif",
		atributos: { ataque: 12, defesa: 9, poder: 11 }
	},
	{
		nome: "machamp",
		imagem:	"https://professorlotus.com/Sprites/Machamp.gif",
		atributos: { ataque: 17, defesa: 14, poder: 16 }
	}
];
const jogadores = [
	{nome: "jogador",
	 vitorias: 0,
	 empates: 0,
	 derrotas: 0,
	 pontos: 0,
	 imagem: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png"}, 
	{nome: "computador",
	 vitorias: 0,
	 empates: 0,
	 derrotas: 0,
	 pontos: 0,
	 imagem: "https://cdn-icons-png.flaticon.com/512/1720/1720126.png"}
];
const botaoJogar = document.getElementById("btnJogar");
const resultado = document.getElementById("resultado");
let cartaUsuario;
let cartaRobo;

exibirJogadores();