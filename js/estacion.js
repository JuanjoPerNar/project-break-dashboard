/* const estado = document.getElementById('estado');
const icono = document.getElementById('icono');
const temperatura = document.getElementById('temperatura');
const precipitacion = document.getElementById('precipitacion');
const humedad = document.getElementById('humedad');
const viento = document.getElementById('viento');
const prevision = document.getElementById('contenedor-prevision');

const apiKey = '1f58985c45654665877180536240212';
const ciudad = 'Sevilla';
const pais = 'España'

const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&aqi=no`;

const obtenerClima = async () => {
    try {
        console.log('Iniciando la solicitud de clima...')
        const response = await fetch(url);
        console.log('respuesta recibida', response);
        if (!response.ok) {
            throw new Error(`Ha surgido un error: ${response.status}`);            
        }

        const data = await response.json();
        console.log('Datos del clima obtenidos:', data);

        const estadoApi = data.current.condition.text;
        const iconoApi = data.current.condition.icon;
        const temperaturaApi = data.current.temp_c;
        const precipitacionApi = data.current.precip_mm;
        const humedadApi = data.current.humidity;
        const vientoApi = data.current.wind_kph;

        console.log(`Estado: ${estadoApi}`);
        console.log(`Temperatura: ${temperaturaApi}°C`);
        console.log(`Icono: ${iconoApi}`);
        console.log(`Precipitaciones: ${precipitacionApi} mm`);
        console.log(`Humedad: ${humedadApi}%`);
        console.log(`Viento: ${vientoApi} km/h`);
        
        estado.textContent = estadoApi;            
        icono.src = `https:${iconoApi}`;
        const ruta = window.location.pathname.includes("HTML/") ? "../" : "";
        temperatura.innerHTML = `${temperaturaApi}<img src="${ruta}assets/img/celsius-blanco.png" alt="icono temperatura" width="30">`;
        precipitacion.textContent = `Precipitación: ${precipitacionApi}mm.`;
        humedad.textContent = `Humedad: ${humedadApi}%`;
        viento.textContent = `Viento: ${vientoApi}km/h.`;

        const previsionApi = data.forecast.forecastday[0].hour;
        prevision.innerHTML = '';

        previsionApi.forEach((hora) => {
            const previsionHora = new Date(hora.time).getHours();
            const iconoHora = hora.condition.icon;
            const temperaturaHora = hora.temp_c;

            console.log(`Hora: ${previsionHora}:00, Icono: ${iconoHora}, Temperatura: ${temperaturaHora}°C`);

            const contenedorHoras = document.createElement('div');
            contenedorHoras.className = 'contenedor-horas';

            contenedorHoras.innerHTML = `
                <p class="hora">${previsionHora}:00</p>
                <img src="https:${iconoHora}" alt="Icono del clima" class="icono-prevision">
                <p class="temperatura">${temperaturaHora}°C</p>
            `;
            prevision.appendChild(contenedorHoras);
        });
        
    } catch (error) {
        console.error('Error al obtener los datos', error);        
    }
};

obtenerClima(); */

const estado = document.getElementById('estado');
const icono = document.getElementById('icono');
const temperatura = document.getElementById('temperatura');
const precipitacion = document.getElementById('precipitacion');
const humedad = document.getElementById('humedad');
const viento = document.getElementById('viento');
const prevision = document.getElementById('contenedor-prevision');

const apiKey = '1f58985c45654665877180536240212';
const ciudad = 'Sevilla';
const pais = 'España';
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&aqi=no`;

// Función para realizar la solicitud a la API
const fetchClima = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ha surgido un error: ${response.status}`);
    }
    return await response.json();
};

// Función para procesar los datos obtenidos de la API
const procesarDatosClima = (data) => {
    return {
        estado: data.current.condition.text,
        icono: data.current.condition.icon,
        temperatura: data.current.temp_c,
        precipitacion: data.current.precip_mm,
        humedad: data.current.humidity,
        viento: data.current.wind_kph,
        prevision: data.forecast.forecastday[0].hour
    };
};

// Función para actualizar los datos actuales del clima en el DOM
const actualizarClimaActual = ({ estado: estadoClima, icono: iconoClima, temperatura: temp, precipitacion: precip, humedad: hum, viento: velViento }) => {
    estado.textContent = estadoClima;
    icono.src = `https:${iconoClima}`;
    const ruta = window.location.pathname.includes("HTML/") ? "../" : "";
    temperatura.innerHTML = `${temp}<img src="${ruta}assets/img/celsius-blanco.png" alt="icono temperatura" width="30">`;
    precipitacion.textContent = `Precipitación: ${precip}mm.`;
    humedad.textContent = `Humedad: ${hum}%`;
    viento.textContent = `Viento: ${velViento}km/h.`;
};

// Renderiza la previsión horaria en el DOM
const actualizarPrevision = (previsionData) => {
    prevision.innerHTML = '';
    previsionData.forEach((hora) => {
        const previsionHora = new Date(hora.time).getHours();
        const iconoHora = hora.condition.icon;
        const temperaturaHora = hora.temp_c;

        // Crea un elemento para cada hora de la previsión
        const contenedorHoras = document.createElement('div');
        contenedorHoras.className = 'contenedor-horas';

        // Define los elementos HTML en cada contenedor hora
        contenedorHoras.innerHTML = `
            <p class="hora">${previsionHora}:00</p>
            <img src="https:${iconoHora}" alt="Icono del clima" class="icono-prevision">
            <p class="temperatura">${temperaturaHora}°C</p>
        `;
        prevision.appendChild(contenedorHoras);
    });
};

// Función principal para obtener los datos del clima y actualizar la página
const obtenerClima = async () => {
    try {
        const data = await fetchClima(); // Obtiene los datos desde la API
        console.log('Datos del clima obtenidos:', data);

        const datosClima = procesarDatosClima(data); //Procesar los datos obtenido
        actualizarClimaActual(datosClima); //Actualizar la sección con el clima actual
        actualizarPrevision(datosClima.prevision); // Actualiza la previsiión horaria

    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
};

// Llamada a la función
obtenerClima();
