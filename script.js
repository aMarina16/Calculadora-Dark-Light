function num_no_display(num) {
    document.querySelector('.display').value += num
}

function Limpar(){
    document.querySelector('.display').value = ''
}

function Calcular() {
    let conta = document.querySelector('.display').value
    let resultado = eval(conta)
    document.querySelector('.display').value = resultado
}

function Dark() {
    document.body.classList.add("dark");
    var elements = document.querySelectorAll('.color');
    elements.forEach(function(element) {
        element.classList.add('color-dark');
    });
}

function Light() {
    document.body.classList.remove("dark");
    var elements = document.querySelectorAll('.color');
    elements.forEach(function(element) {
        element.classList.remove('color-dark');
    });
}