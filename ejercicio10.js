function revertirPalabra() {
    // Obtener la palabra ingresada por el usuario
    const inputElement = document.getElementById("inputPalabra");
    const palabra = inputElement.value;

    // Revertir la palabra
    const palabraRevertida = palabra.split('').reverse().join('');

    // Mostrar la palabra revertida en la página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Palabra revertida: " + palabraRevertida;
}