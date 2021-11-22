const paragrafo = document.getElementsByTagName("p")[0];
  paragrafo.innerText = "Daqui dois anos me vejo atuando como desenvolvedor web, cursando uma faculdade de analise e desenvolvimento de softwares em outra cidade.";

const quadroAm = document.getElementsByClassName("main-content")[0];
	quadroAm.style.backgroundColor = "rgb(76,164,109)";

const quadroVr = document.getElementsByClassName("center-content")[0];
	quadroVr.style.backgroundColor = "white";

const titulo = document.getElementsByClassName("title")[0];
	titulo.innerText = "Exercício 5.1 - JavaScript";

paragrafo.style.textTransform = "uppercase";

console.log(document.getElementsByTagName("p"));