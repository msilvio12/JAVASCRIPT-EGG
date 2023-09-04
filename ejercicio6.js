const form = document.getElementById('par-impar-form');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero = parseInt(form.numero.value);

    if (numero === 0) {
        resultadoDiv.textContent = 'El número no es par ni impar.';
    } else if (numero % 2 === 0) {
        resultadoDiv.textContent = 'El número es par.';
    } else {
        resultadoDiv.textContent = 'El número es impar.';
    }
});