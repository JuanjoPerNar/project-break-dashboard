/* //Definir la ruta de las imágenes con la palabra clave "HTML"
const ruta = window.location.pathname.includes("HTML") ? "../assets/img/" : "assets/img/";

//Ruta de las imágenes
const imagenFondo = [
    `${ruta}img1.jpg`,
    `${ruta}img2.jpg`,
    `${ruta}img3.jpg`,
    `${ruta}img4.jpg`,
    `${ruta}img5.jpg`,
    `${ruta}img6.jpg`,
    `${ruta}img7.jpg`,
    `${ruta}img8.jpg`,
    `${ruta}img9.jpg`,
    `${ruta}img10.jpg`,
    `${ruta}img11.jpg`,
    `${ruta}img12.jpg`,
    `${ruta}img13.jpg`,
    `${ruta}img14.jpg`,
];

console.log(imagenFondo);

//Función para cambiar el fondo aleatoriamente
const cambioFondo = () => {
    const imagenAleatoria = Math.floor(Math.random() * imagenFondo.length);
    nuevaImagen = imagenFondo[imagenAleatoria];

    console.log(`Cambia el fondo a ${nuevaImagen}`);

    //Seleccionar imagen y darle estilo al fondo
    document.body.style.backgroundImage = `url('${nuevaImagen}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
} 

//Llamada a la función cambioFondo
cambioFondo();

//Intervalo cambio de fondo
setInterval(cambioFondo, 10000); */

// Ruta base del proyecto en GitHub Pages
const ruta = "https://juanjopernar.github.io/project-break-dashboard/assets/img/";

// Lista de imágenes de fondo con rutas absolutas
const imagenFondo = [
    `${ruta}img1.jpg`,
    `${ruta}img2.jpg`,
    `${ruta}img3.jpg`,
    `${ruta}img4.jpg`,
    `${ruta}img5.jpg`,
    `${ruta}img6.jpg`,
    `${ruta}img7.jpg`,
    `${ruta}img8.jpg`,
    `${ruta}img9.jpg`,
    `${ruta}img10.jpg`,
    `${ruta}img11.jpg`,
    `${ruta}img12.jpg`,
    `${ruta}img13.jpg`,
    `${ruta}img14.jpg`,
];

console.log(imagenFondo);

// Función para cambiar el fondo aleatoriamente
const cambioFondo = () => {
    const imagenAleatoria = Math.floor(Math.random() * imagenFondo.length);
    const nuevaImagen = imagenFondo[imagenAleatoria];

    console.log(`Cambia el fondo a ${nuevaImagen}`);

    // Establecer la imagen seleccionada como fondo
    document.body.style.backgroundImage = `url('${nuevaImagen}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
};

// Llamada a la función de cambio de fondo
cambioFondo();

// Intervalo para cambiar el fondo cada 10 segundos
setInterval(cambioFondo, 10000);
