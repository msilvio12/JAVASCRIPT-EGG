const form = document.getElementById('analisis-numeros-form');
const resultadoDiv = document.getElementById('resultado');
const numeros = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nuevoNumero = parseInt(form.numero.value);

    if (nuevoNumero === 0) {
        if (numeros.length === 0) {
            resultadoDiv.textContent = 'No se han ingresado números.';
        } else {
            const maximo = Math.max(...numeros);
            const minimo = Math.min(...numeros);
            const suma = numeros.reduce((a, b) => a + b, 0);
            const promedio = suma / numeros.length;

            resultadoDiv.textContent = `Máximo: ${maximo}, Mínimo: ${minimo}, Promedio: ${promedio}`;
        }
    } else {
        numeros.push(nuevoNumero);
        form.numero.value = '';
    }
});