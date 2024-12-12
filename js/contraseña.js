const input = document.getElementById('longitud-password');
const botonGenerar = document.getElementById('boton-generar');
const resultadoPassword = document.getElementById('resultado-password');

//Función para generar la contraseña aleatoria
const generarContraseña = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let contraseña = '';

    //Bucle que genera la contraseña con la longitud que se pide
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];        
    }
    return contraseña;
};

//Evento para el botón 
botonGenerar.addEventListener('click', () => {
    const longitud = parseInt(input.value); //Convertir entrada introducida en número entero
    console.log(`Longitud: ${longitud}`);

    if (longitud < 12 || longitud > 50 || isNaN(longitud)) {
        console.log('Error. Longitud no válida');
        
        resultadoPassword.textContent = 'Introduce un número entre 12 y 50'; //Mensaje si no se introduce la longitud correcta
        return;
    }

    const contraseña = generarContraseña(longitud); //Generar la contraseña con la longitud correcta
    resultadoPassword.textContent = `Tu constraseña es: ${contraseña}`; //Para mostrar la contraseña en resultados   
});


