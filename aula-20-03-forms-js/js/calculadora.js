const btnMais = document.getElementById('btnMais');
const btnMenos = document.getElementById('btnMenos');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');
const btnResult = document.getElementById('btnResult');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('resultado');

let sinal;

/** Pegando o valor dos input e colocando numa váriavel valor */
const valor1 = Number(input1.value); 
const valor2 = Number(input2.value);

/** Variável do valor total */
let total;




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