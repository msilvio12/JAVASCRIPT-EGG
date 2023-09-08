function calcularAreaYPerimetro() {
    // Obtener el radio ingresado por el usuario
    const radio = parseFloat(document.getElementById("radio").value);

    // Validar que el radio sea un número válido
    if (isNaN(radio) || radio <= 0) {
        alert("Ingresa un radio válido.");
        return;
    }

    // Calcular el área del círculo (A = π * r^2)
    const area = Math.PI * Math.pow(radio, 2);

    // Calcular el perímetro del círculo (P = 2 * π * r)
    const perimetro = 2 * Math.PI * radio;

    // Mostrar los resultados en la página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<p>Área del círculo: ${area.toFixed(2)}
    </p><p>Perímetro del círculo: ${perimetro.toFixed(2)}</p>`;