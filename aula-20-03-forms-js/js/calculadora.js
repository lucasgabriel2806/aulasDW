/** Insere um número no display da calculadora */
function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    console.log(numero);
}

/** Limpa o display */
function clean() {
    document.getElementById('resultado').innerHTML = '';
}

/** Apaga um número */
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length  - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        /** eval() converte texto em código */
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}

/** CALCULADORA MAIS SIMPLES */
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

/** Pegando o valor dos input e colocando numa váriavel valor */
const valor1 = Number(input1.value); 
const valor2 = Number(input2.value);

/** Variável do valor total */
let total;

var resultado2 = document.getElementById('resultado2');

var btnMais = document.getElementById('btnMais');
var btnMenos = document.getElementById('btnMenos');
var btnDiv = document.getElementById('btnDiv');
var btnMult = document.getElementById('btnMult');


/** Botão de Soma */
btnMais.addEventListener('click', function() {

    total = valor1 + valor2;

    resultado2.innerHTML = total;

});

/** Botão de Subtração */
btnMenos.addEventListener('click', function(){

    total = valor1 + valor2;

    resultado2.innerHTML = total;

});

/** Botão de Multiplicação */
btnMenos.addEventListener('click', function(){

    total = valor1 - valor2;

    resultado2.innerHTML = total;

});

/** Botão de Divisão */
btnDiv.addEventListener('click', function(){

    total = valor1 / valor2;

    resultado2.innerHTML = total;

});

/** Botão de Resultado */
btnMult.addEventListener('click', function(){

    total = valor1 * valor2;

    resultado2.innerHTML = total;

});