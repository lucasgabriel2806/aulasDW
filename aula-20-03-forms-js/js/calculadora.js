const btnMais = document.getElementById('btnMais');
const btnMenos = document.getElementById('btnMenos');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');
const btnResult = document.getElementById('btnResult');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('resultado');

const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');

let sinal;

/** Pegando o valor dos input e colocando numa váriavel valor */
const valor1 = Number(input1.value); 
const valor2 = Number(input2.value);

/** Variável do valor total */
let total;

num1.addEventListener('click', function() {

    result.innerHTML += '1';1

})


/** Botão de Soma */
btnMais.addEventListener('click', function() {

    sinal = "+";

});

/** Botão de Subtração */
btnMenos.addEventListener('click', function(){

    sinal = "-";

});

/** Botão de Multiplicação */
btnMult.addEventListener('click', function() {

    sinal = "*";

});

/** Botão de Divisão */
btnDiv.addEventListener('click', function() {

    sinal = "/";

});

/** Botão de Resultado */
btnResult.addEventListener('click', function() {

    if (sinal == "+") {
        total = valor1 + valor2;
    } else if (sinal == "-") {
        total = valor1 - valor2;
    } else if (sinal == "*") {
        total = valor1 * valor2;
    } else if (sinal == "/") {
        total = valor1 / valor2;
    }

    result.innerHTML = total;

})