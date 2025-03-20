const btnSomar = document.getElementById('btnSomar');
const btnMenos = document.getElementById('btnMenos');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

btnSomar.addEventListener('click', function(event) {

    /** 
     * Armazenando o valor do 
     * input na variável 
     * */
    const valor1 = input1.value; 
    const valor2 = input2.value;

    window.alert(valor1);

});