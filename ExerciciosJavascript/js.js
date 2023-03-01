/* Ex 01 */
const calculadora = () => {
  let input1 = document.querySelector("#num1");
  let input2 = document.querySelector("#num2");
  let input3 = document.querySelector("input[name=operador]:checked");
  let resultado = input1.value + input3.value + input2.value;

  let resposta1 = document.querySelector("#resposta");
  resposta1.innerHTML = resultado;
};
