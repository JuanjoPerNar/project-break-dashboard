const ruta = window.location.pathname.includes("HTML") ? "../assets/img/" : "assets/img/";
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


const cambioFondo = () => {
    const imagenAleatoria = Math.floor(Math.random() * imagenFondo.length);
    nuevaImagen = imagenFondo[imagenAleatoria];

    console.log(`Cambiando el fondo a ${nuevaImagen}`);
    document.body.style.backgroundImage = `url('${nuevaImagen}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
} 

cambioFondo();

setInterval(cambioFondo, 10000);