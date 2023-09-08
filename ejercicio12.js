const obtenerTipoDato = () => {
    // Obtener el valor ingresado por el usuario
    const inputElement = document.getElementById("inputDato");
    const valor = inputElement.value;

    // Obtener el tipo de dato utilizando el operador typeof
    const tipoDato = typeof valor;

    // Mostrar el tipo de dato en la página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Tipo de dato: " + tipoDato;
}