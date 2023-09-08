const libro = {
    ISBN: "",
    titulo: "",
    autor: "",
    numeroPaginas: 0,

    // Método para cargar los datos del libro
    cargarDatos: function() {
        this.ISBN = prompt("Ingresa el ISBN del libro:");
        this.titulo = prompt("Ingresa el título del libro:");
        this.autor = prompt("Ingresa el autor del libro:");
        this.numeroPaginas = parseInt(prompt("Ingresa el número de páginas del libro:"));
    },

    // Método para mostrar la información del libro
    mostrarInformacion: function() {
        document.write("<h1>Información del Libro:</h1>");
        document.write("<p>ISBN: " + this.ISBN + "</p>");
        document.write("<p>Título: " + this.titulo + "</p>");
        document.write("<p>Autor: " + this.autor + "</p>");
        document.write("<p>Número de Páginas: " + this.numeroPaginas + "</p>");
    }
};

// Cargar los datos del libro
libro.cargarDatos();

// Mostrar la información del libro en la página
libro.mostrarInformacion();