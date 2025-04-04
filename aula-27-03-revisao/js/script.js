/** Calculadora com INPUTs */
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultado2 = document.getElementById('resultado2');

var btnSomar = document.getElementById('somar');
var btnSub = document.getElementById('sub');
var btnDiv = document.getElementById('div');
var btnMult = document.getElementById('mult');

btnSomar.addEventListener('click', function() {
    resultado2.innerText = 'Resultado: ' + (parseFloat(num1.value) + parseFloat(num2.value));
});

btnSub.addEventListener('click', function() {
    resultado2.innerText = 'Resultado: ' + (parseFloat(num1.value) - parseFloat(num2.value));
});

btnDiv.addEventListener('click', function() {
    resultado2.innerText = 'Resultado: ' + (parseFloat(num1.value) / parseFloat(num2.value));
});

btnMult.addEventListener('click', function() {
    resultado2.innerText = 'Resultado: ' + (parseFloat(num1.value) * parseFloat(num2.value));
});

// ------------------------------------------------------------

var calculo = document.getElementById('calculo');
var resultado = document.getElementById('resultado');
var limpar = document.getElementById('limpar');
var soma = document.getElementById('soma');
var subtracao = document.getElementById('subtracao');
var multiplicacao = document.getElementById('multiplicacao');
var divisao = document.getElementById('divisao');
var ponto = document.getElementById('ponto');
var igual = document.getElementById('igual');
var n9 = document.getElementById('n9');
var n8 = document.getElementById('n8');
var n7 = document.getElementById('n7');
var n6 = document.getElementById('n6');
var n5 = document.getElementById('n5');
var n4 = document.getElementById('n4');
var n3 = document.getElementById('n3');
var n2 = document.getElementById('n2');
var n1 = document.getElementById('n1');
var n0 = document.getElementById('n0');

var numero1 = '';
var numero2 = '';
var operacao = '';
var ponto_valor = '';
var tem_ponto = false;


/** ---------------- */
/** Números */
/** ---------------- */
document.addEventListener('click', function (event) {
    console.log(event.target.classList);
    if (event.target.classList.contains('numeros')) {
        if(operacao == '') {
            numero1 = numero1 + event.target.textContent;
            calculo.innerText = numero1;
        } else {
            numero2 = numero2 + event.target.textContent;
            calculo.innerText = numero1 + " " + operacao + " " + numero2;
        }
    }
});



/** ---------------- */
/** Operadores */
/** ---------------- */
soma.addEventListener('click', function() {
    operacao = soma.textContent;
    calculo.innerText = numero1 + " " + operacao + " " + numero2;
});

subtracao.addEventListener('click', function() {
    operacao = subtracao.textContent;
    calculo.innerText = numero1 + " " + operacao + " " + numero2;
});

multiplicacao.addEventListener('click', function() {
    operacao = multiplicacao.textContent;
    calculo.innerText = numero1 + " " + operacao + " " + numero2;
});

divisao.addEventListener('click', function() {
    operacao = divisao.textContent;
    calculo.innerText = numero1 + " " + operacao + " " + numero2;
});

igual.addEventListener('click', function() {
    if (operacao == "+") {
        resultado.innerText = parseFloat(numero1) + parseFloat(numero2);
    } else if (operacao == "-") {
        resultado.innerText = parseFloat(numero1) - parseFloat(numero2);
    } else if (operacao == "*") {
        resultado.innerText = parseFloat(numero1) * parseFloat(numero2);
    } else if (operacao == "/") {
        resultado.innerText = parseFloat(numero1) / parseFloat(numero2);
    } else {
        resultado.innerText = "** ERRO **";
    }
});

ponto.addEventListener('click', function() {
    
    if (operacao == '') {

        if (tem_ponto == false) {

            numero1 = numero1 + '.';
            calculo.innerText = numero1;
            tem_ponto = true;

        } else if (tem_ponto == true) {

            console.log('Já tem ponto');

        }

    } else {

        

        if (tem_ponto == false) {

            numero1 = numero1 + '.';
            calculo.innerText = numero1;
            tem_ponto = true;

        } else if (tem_ponto == true) {

            console.log('Já tem ponto');

        }

    }

    // if (operacao == '') {
    //     if (ponto_valor.length = 0) {
    //         numero1 = numero1 + ponto_valor;
    //         calculo.innerText = numero1;
    //     } else {
            
    //     }
        
        
    //     ponto = '.';
    // } else {

    // }

});

limpar.addEventListener('click', function() {
    calculo.innerText = 0;
    resultado.innerText = 0;
    numero1 = '';
    numero2 = '';
    operacao = '';
    ponto = '';
});


/** Colocar números com ponto */
/** Colocar demais funções dos botões */


