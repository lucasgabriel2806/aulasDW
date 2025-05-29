var form = document.getElementById('formEndereco');

document.getElementsByTagName('h1')[0].addEventListener("mouseover", (event) => {

    // console.log(this);

    // console.log(event.target.style);

    event.target.style.color = 'red';

});

document.getElementsByTagName('h1')[0].addEventListener("mouseout", (event) => {

    event.target.style.color = 'black';

});

document.getElementById('nome').addEventListener('blur', function() {

    if(this.value.trim() == '') {

        this.style.backgroundColor = '#E8C5C7';

        this.style.borderColor = '#8B232B';

    } else if(this.value.trim().length < 3) {

        this.style.backgroundColor = '#E8C5C7';

        this.style.borderColor = '#8B232B'; 

        alert('O campo nome deve conter pelo menos 3 caracteres!');

    } else {

        this.style.backgroundColor = '#fff';

        this.style.borderColor = '#14CB06';

    }
    
    document.getElementById('nome').innerText = 'Nome: ' + this.value

});

form.addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário

    if(document.getElementById('cep').value.trim() === '') {

        alert('O campo CEP é obrigatoriamente');

        document.getElementById('cep').style.backgroundColor = '#E8C5C7';

        document.getElementById('cep').style.borderColor = '#8B232B';

    } else {

        form.submit();

        document.getElementById('cepText').innerHTML
        = `<b>CEP: </b> ${document.getElementById('cep').value}`;
        
    }

}); 