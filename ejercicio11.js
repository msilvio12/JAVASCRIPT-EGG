function encontrarPalabraMasLarga() {
    // Obtener el texto ingresado por el usuario
    const inputElement = document.getElementById("inputString");
    const texto = inputElement.value;

    // Dividir el texto en palabras
    const palabras = texto.split(" ");

    // Inicializar la palabra más larga
    let palabraMasLarga = "";

    // Recorrer todas las palabras y encontrar la más larga
    for (let i = 0; i < palabras.length; i++) {
        const palabraActual = palabras[i];
        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }

    // Mostrar la palabra más larga en la página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Palabra más larga: " + palabraMasLarga;
}