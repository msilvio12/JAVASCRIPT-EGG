function verificarCaracter() {
    // Obtener el valor del carácter ingresado por el usuario
    var caracter = document.getElementById("caracter").value;

    // Validar si el carácter es 'S' o 'N'
    if (caracter === 'S' || caracter === 'N') {
        document.getElementById("resultado").textContent = "CORRECTO";
    } else {
        document.getElementById("resultado").textContent = "INCORRECTO";
    }
}
