function mostrarFraseConEspacios() {
    // Obtener el valor de la frase ingresada por el usuario
    var frase = document.getElementById("fraseInput").value;
    
    // Crear una variable para almacenar la frase con espacios entre letras
    var fraseConEspacios = "";

    // Recorrer la frase original y agregar un espacio entre cada letra
    for (var i = 0; i < frase.length; i++) {
        fraseConEspacios += frase.charAt(i) + " ";
    }

    // Mostrar la frase con espacios en el elemento "resultado"
    document.getElementById("resultado").textContent = fraseConEspacios;
}