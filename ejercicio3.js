function verificarEdad() {
    // Obtener el valor de la edad ingresada por el usuario
    var edad = parseInt(document.getElementById("edad").value);

    // Validar si la edad es un número y mayor o igual a 18 (mayor de edad)
    if (!isNaN(edad) && edad >= 18) {
        document.getElementById("resultado").textContent = "Eres mayor de edad.";
    } else {
        document.getElementById("resultado").textContent = "No eres mayor de edad.";
    }
}
