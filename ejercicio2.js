function calcular() {
    // Obtener el valor del radio ingresado por el usuario
    var radio = parseFloat(document.getElementById("radio").value);

    // Validar si el valor del radio es válido (mayor que cero)
    if (isNaN(radio) || radio <= 0) {
        alert("Ingresa un valor válido para el radio.");
        return;
    }

    // Calcular el área y el perímetro de la circunferencia
    var pi = Math.PI;
    var area = pi * Math.pow(radio, 2);
    var perimetro = 2 * pi * radio;

    // Mostrar los resultados en la página HTML
    document.getElementById("areaResultado").textContent = area.toFixed(2); // Redondear el área a 2 decimales
    document.getElementById("perimetroResultado").textContent = perimetro.toFixed(2); // Redondear el perímetro a 2 decimales
}
