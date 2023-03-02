/* Ex 01 ####################################################################*/
const calculadora = () => {
  let n1 = document.querySelector("#num1").value;
  let n2 = document.querySelector("#num2").value;
  let input3 = document.querySelector("input[name=operador]:checked").value;
  let resposta = 0;

  if (input3 == "*") {
    resposta = n1 * n2;
  } else if (input3 == "+") {
    resposta = n1 + n2;
  } else if (input3 == "-") {
    resposta = n1 - n2;
  } else if (input3 == "/") {
    resposta = n1 / n2;
  }

  let resposta1 = document.querySelector("#resposta");
  resposta1.innerHTML = resposta;
};

/* Ex 02 ####################################################################*/

const tabuada = () => {
  let numero = document.querySelector("#num1ex02").value;
  let resposta2 = "";

  for (let i = 1; i < 11; i++) {
    let resultado = numero * i;
    resposta2 += `${i} * ${numero} = ${resultado}.<br>`;
  }

  let ex2 = document.querySelector("#respostaex2");
  ex2.innerHTML = resposta2;
};

/* Ex 03 ####################################################################*/

const NumAleatorio = () => {
  let ex3 = document.querySelector("#respostaex3");
  numAleatorio = Math.random();
  ex3.innerHTML = Math.round(numAleatorio * 100);
};

/* Ex 04 ####################################################################*/

const AbrirUrl = () => {
  let url = document.querySelector("#url").value;
  window.open(url);
};

/* Ex 05 ####################################################################*/

const AlteraTitulo = () => {
  let alterar = document.querySelector("#alterartitulo").value;
  let titulo = document.querySelector("#titulo5");
  titulo.innerHTML = alterar;
};

/* Ex 06 ####################################################################*/

const MudaCor = () => {
  let corescolhida = document.querySelector("#sel6");
  // let nomecor = document.querySelector("#nomecor");
  // nomecor.innerHTML = corescolhida.value;

  if (corescolhida.value == "vermelho") {
    divalterarcor.classList.add("vermelho");
    divalterarcor.classList.remove("azul");
    divalterarcor.classList.remove("verde");
    divalterarcor.classList.add("vermelho");
  } else if (corescolhida.value == "azul") {
    divalterarcor.classList.add("azul");
    divalterarcor.classList.remove("vermelho");
    divalterarcor.classList.remove("verde");
  } else if (corescolhida.value == "verde") {
    divalterarcor.classList.add("verde");
    divalterarcor.classList.remove("azul");
    divalterarcor.classList.remove("vermelho");
  } else if (corescolhida.value == "escolhaacor") {
    divalterarcor.classList.add("div6");
    divalterarcor.classList.remove("azul");
    divalterarcor.classList.remove("vermelho");
    divalterarcor.classList.remove("verde");
  }
};

/* Ex 07 ####################################################################*/

const EscondeDiv = () => {
  let botao7 = document.querySelector("#botao7");
  let divesconder = document.querySelector("#divesconder");

  if (divesconder.classList == "aparecendo") {
    botao7.innerHTML = "Aparecer";
  } else {
    botao7.innerHTML = "Esconder";
  }
  divesconder.classList.toggle("escondendo");
};

/* Ex 08 ####################################################################*/

const trocarVogal = () => {
  let texto = document.getElementById("texto").value;

  let lista = [];
  for (let index = 0; index < texto.length; index++) {
    lista.push(texto[index]);
  }
  let resposta = "";

  for (let index = 0; index < lista.length; index++) {
    resposta += lista[index].replace(/a|e|i|o|u/, " ");
  }

  let tex = document.getElementById("texto");
  tex.value = resposta;
};

/* Ex 09 ####################################################################*/
let largura = window.screen.availHeight;
let altura = window.screen.availWidth;
let dimensao = `O tamanho da página ao iniciar foi de:<br>
 ${largura}px de largura<br>
${altura}px de altura`;

window.onload = () => {
  let tamanhotela = document.querySelector("#tamanhotela");
  tamanhotela.innerHTML = dimensao;
};
