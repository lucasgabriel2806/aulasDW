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
var limpar1 = document.getElementById('limpar1');
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
var tem_ponto1 = false;
var tem_ponto2 = false;


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

    //console.log('calculo: ' + calculo.innerText.split(''));
});



/** ---------------- */
/** Operadores */
/** ---------------- */
soma.addEventListener('click', function() {
    /** Verificando se existe o 1º número para colocar as operações */
    if(numero1 !== '') {
        operacao = soma.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

subtracao.addEventListener('click', function() {
    if(numero1 !== '') {
        operacao = subtracao.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    } 
});

multiplicacao.addEventListener('click', function() {
    if(numero1 !== '') {
        operacao = multiplicacao.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
});

divisao.addEventListener('click', function() {
    if(numero1 !== '') {
        operacao = divisao.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
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
    } else if (numero1 == '') {
        resultado.innerText = 0;
    } else {
        resultado.innerText = numero1;
    }
});

ponto.addEventListener('click', function() {
    
    if (operacao == '') {

        /** Impedindo de colocar (.) em 0 */
        if(numero1 == '' || numero1 == 0) {

            alert('Não é possível por ponto em 0.');
            console.log('Não é possível por ponto em 0.');
        
        } else {
            /** Adicionando (.) para o primeiro número */
            if (tem_ponto1 == false) {

                numero1 = numero1 + '.';
                calculo.innerText = numero1;
                tem_pont1 = true;

            } else if (tem_ponto1 == true) {

                alert('Já tem ponto');

            }
        }

    } else {

        /** Impedindo de colocar (.) em 0 */
        if(numero2 == '' || numero2 == 0) {

            alert('Não é possível por ponto em 0.');
            console.log('Não é possível por ponto em 0.');

        } else {
            /** Adicionando (.) para o segundo número */
            if (tem_ponto2 == false) {

                numero2 = numero2 + '.';
                calculo.innerText = numero1 + " " + operacao + " " + numero2;
                tem_ponto2 = true;

            } else if (tem_ponto2 == true) {

                alert('Já tem ponto');

            }
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
    tem_ponto1 = false;
    tem_ponto2 = false;
});

limpar1.addEventListener('click', function() {
    // const listaCalculo = calculo.innerText.split('');
});


/** AFAZERES */
/** Botão para apagar um número só */


