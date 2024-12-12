const reloj = document.getElementById('reloj-digital');
const fecha = document.getElementById('fecha-digital');
const mensajeReloj = document.getElementById('mensaje-reloj');

//Función para agregar ceros
const añadirCero = (numero) => {
    if (numero < 10) {
        console.log(`Si el número es menor de 10: ${numero}, se añade un cero delante`);
        return `0${numero}`;      
        
    } else {
        console.log(`Si el número es igual o mayor a 10: ${numero}, no se añade nada`);
        return numero;        
    }
};

//Función para actualizar el reloj
const iniciarReloj = () => {
    const horaActual = new Date();
    console.log('Fecha y hora actuales', horaActual);
    
    const horas = añadirCero(horaActual.getHours());
    const minutos = añadirCero(horaActual.getMinutes());
    const segundos = añadirCero(horaActual.getSeconds());
    const dia = añadirCero(horaActual.getDate());
    const mes = añadirCero(horaActual.getMonth() + 1);
    const año = horaActual.getFullYear();

    console.log("Hora:", horas, minutos, segundos);
    console.log("Fecha:", dia, mes, año);

    //Formatear fecha y hora
    const horaFormateada = `${horas}:${minutos}:${segundos}`;
    const fechaFormateada = `${dia}/${mes}/${año}`;

    console.log("Hora formateada:", horaFormateada);
    console.log("Fecha formateada:", fechaFormateada);

    //Mensaje según la hora
    let mensaje = '';
    if (horas >= 0 && horas < 7) {
        mensaje = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (horas >= 7 && horas < 12) {
        mensaje = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (horas >= 12 && horas < 14) {
        mensaje = 'Echa un rato más pero no olvides comer';
    } else if (horas >= 14 && horas < 16) {
        mensaje = 'Espero que hayas comido';
    } else if (horas >= 16 && horas < 18) {
        mensaje = 'Buenas tardes, el último empujón';
    } else if (horas >= 18 && horas < 22) {
        mensaje = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else {
        mensaje = 'Buenas noches, es hora de pensar en parar y descansar'
    }

    console.log('Mensaje intervalo de horas', mensaje);
    
    //Actualizar DOM
    reloj.textContent = horaFormateada;
    fecha.textContent = fechaFormateada;
    mensajeReloj.textContent = mensaje;

    console.log('DOM actualizado');
    
};

//Intervalo para actualizar el reloj cada segundo
setInterval(iniciarReloj, 1000);

//Llamada a la función iniciarReloj
iniciarReloj();


