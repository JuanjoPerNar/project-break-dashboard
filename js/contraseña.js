const input = document.getElementById('longitud-password');
const botonGenerar = document.getElementById('boton-generar');
const resultadoPassword = document.getElementById('resultado-password');

const generarContraseña = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let contraseña = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];        
    }
    return contraseña
};

botonGenerar.addEventListener('click', () => {
    const longitud = parseInt(input.value);

    if (longitud < 12 || longitud > 50 || isNaN(longitud)) {
        resultadoPassword.textContent = 'Introduce un número entre 12 y 50';
        return;
    }

    const contraseña = generarContraseña(longitud);
    resultadoPassword.textContent = `Tu constraseña es: ${contraseña}`;    
});


