const nombreLink = document.getElementById('nombre-link');
const urlLink = document.getElementById('url-link');
const botonAgregar = document.getElementById('boton-agregar');
const listaLinks = document.getElementById('lista-links');

// Función para obtener los enlaces desde el Local Storage
const obtenerEnlaces = () => {
    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    return enlaces;
};

// Función para guardar enlaces en el Local Storage
const guardarEnlaces = (enlaces) => {
    localStorage.setItem('enlaces', JSON.stringify(enlaces));
};

// Función para eliminar un enlace del Local Storage
const eliminarEnlace = (nombre, url) => {
    const enlaces = obtenerEnlaces();
    const enlacesActualizados = enlaces.filter(enlace => enlace.nombre !== nombre || enlace.url !== url);
    guardarEnlaces(enlacesActualizados);
};

// Función para crear y agregar un enlace a la lista visual
const agregarEnlace = (nombre, url) => {    
    const li = document.createElement('li'); // Para crear elemento de lista
    li.innerHTML = `
        <a href="${url}" target="_blank">${nombre}</a>
        <img class="icono-eliminar" src="../assets/img/papelera-blanco.png" alt="Icono eliminar" width="20">
    `;

    // Para añadir evento para eliminar el enlace
    li.querySelector('.icono-eliminar').addEventListener('click', () => {
        li.remove(); // Para eliminar enlaces de la página
        eliminarEnlace(nombre, url); // Para eliminar enlaces del almacenamiento
    });

    // Para agregar a la lista
    listaLinks.appendChild(li);
};

// Función para cargar y mostrar los enlaces guardados al inicio
const cargarEnlaces = () => {
    const enlaces = obtenerEnlaces();
    enlaces.forEach(({ nombre, url }) => agregarEnlace(nombre, url));
};

// Evento del botón de agregar
botonAgregar.addEventListener('click', () => {
    const nombre = nombreLink.value.trim();
    const url = urlLink.value.trim();

    // Validar datos introducidos
    if (!nombre || !url) {
        alert('Error. Introduce nombre y URL');
        return;
    }

    // Agregar enlace visualmente y en Local Storage
    agregarEnlace(nombre, url);
    const enlaces = obtenerEnlaces();
    enlaces.push({ nombre, url });
    guardarEnlaces(enlaces);

    // Limpiar los campos
    nombreLink.value = '';
    urlLink.value = '';
});

// Llamada a la función
cargarEnlaces();
