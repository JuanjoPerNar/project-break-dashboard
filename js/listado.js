// Seleccionar elementos del DOM
const nombreLink = document.getElementById('nombre-link');
const urlLink = document.getElementById('url-link');
const botonAgregar = document.getElementById('boton-agregar');
const listaLinks = document.getElementById('lista-links');

// Función para agregar un enlace
const agregarLink = () => {
    const nombre = nombreLink.value.trim();
    const url = urlLink.value.trim();

    // Validación de campos
    if (!nombre || !url) {
        alert('Por favor, completa ambos campos.');
        return;
    }

    // Crear elemento de la lista
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="${url}" target="_blank">${nombre}</a>
        <img class="icono-eliminar" src="../assets/img/papelera-blanco.png" alt="Icono eliminar" width="20">
    `;

    // Añadir evento para eliminar el enlace
    li.querySelector('.icono-eliminar').addEventListener('click', () => {
        li.remove();
    });

    // Agregar a la lista
    listaLinks.appendChild(li);

    // Limpiar los campos
    nombreLink.value = '';
    urlLink.value = '';
};

// Evento de clic en el botón de agregar
botonAgregar.addEventListener('click', agregarLink);
