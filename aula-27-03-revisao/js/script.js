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


/** ---------------- */
/** Números */
/** ---------------- */
n0.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n0.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n0.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n1.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n1.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n1.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n2.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n2.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n2.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n3.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n3.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n3.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n4.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n4.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n4.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n5.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n5.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n5.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n6.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n6.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n6.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n7.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n7.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n7.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n8.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n8.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n8.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

n9.addEventListener('click', function() {
    if(operacao == '') {
        numero1 = numero1 + n9.textContent;
        calculo.innerText = numero1;
    } else {
        numero2 = numero2 + n9.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
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

limpar.addEventListener('click', function() {
    calculo.innerText = "";
    resultado.innerText = "";
    numero1 = 0;
    numero2 = 0;
    operacao = '';
});


/** Colocar números com ponto */
/** Colocar demais funções dos botões */


