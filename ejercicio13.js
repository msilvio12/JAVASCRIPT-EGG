const persona = {
    nombre: "Juan",
    edad: 30,
    sexo: 'H', // 'H' para hombre, 'M' para mujer, 'O' para otro
    peso: 70,
    altura: 175
};

// Mostrar las propiedades del objeto persona en la página
document.write("<h1>Propiedades de la Persona:</h1>");
document.write("<p>Nombre: " + persona.nombre + "</p>");
document.write("<p>Edad: " + persona.edad + " años</p>");
document.write("<p>Sexo: " + (persona.sexo === 'H' ? 'Hombre' : (persona.sexo === 'M' ? 'Mujer' : 'Otro')) + "</p>");
document.write("<p>Peso: " + persona.peso + " kg</p>");
document.write("<p>Altura: " + persona.altura + " cm</p>");