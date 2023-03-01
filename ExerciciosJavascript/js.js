/* Ex 01 */
const calculadora = () => {
  let n1 = Number(document.querySelector("#num1").value);
  let n2 = Number(document.querySelector("#num2").value);
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
