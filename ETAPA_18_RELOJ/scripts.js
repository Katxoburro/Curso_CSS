var tipoHorario = 12;
var cambioIdiomaDefault = 'ES';

var actualizarHora12 = function () {
    // RECOGE LA FECHA Y HORA ACTUALES DEL SISTEMA Y NOS PERMITE TRABAJA CON ELLO.
    var fecha = new Date(),
        // EXTRAE EN VARIABLES CADA UNO DE LOS DISTINTOS CAMPOS
        horas = fecha.getHours(),
        amPm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    var pHoras = document.getElementById('horas'),
        pAMPM = document.getElementById('amPm'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year');

    // ESCRIBE EN PANTALLA EL CONTENIDO DE TESTO SEGÚN SU POSICIÓN.
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // ESCRIBE EN PANTALLA EL CONTENIDO DE TESTO SEGÚN SU POSICIÓN.
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // CAMBIA EL FORMATO DE FECHA
    if (cambioIdiomaDefault === 'ES') {
        // Martes, 19 de mayo de 2020
        document.getElementById('diaMesAno').textContent = semana[diaSemana] + ', ' + dia + ' de ' + meses[mes] + ' de ' + year;

        // BOTÓN QUE CAMBIA DE IDIOMA EN / ES
        document.getElementById('esen').textContent = 'EN';
    } else {
        
        // COMPRUEBA LOS NÚMEROS Y LES APLICA ORDINALES
       
        if (dia === 1 || dia === 21 || dia === 31) {
            dia = dia + 'st';
        } else if (dia === 2 || dia === 22) {
            dia = dia + 'nd';
        } else if (dia === 3 || dia === 23) {
            dia = dia + 'rd';
        } else {
            dia = dia + 'th';
        }

        // Tuesday, May 19, 2020
        document.getElementById('diaMesAno').textContent = week[diaSemana] + ', ' + months[mes] + ' ' + dia + ', ' + year;

        // BOTÓN QUE CAMBIA DE IDIOMA EN / ES
        document.getElementById('esen').textContent = 'ES';
    }

    // COMPRUEBA EL TIPO HORARIO DE 12 O 24 HORAS
    // COGEMOS LA VARIABLE pSegundos Y AÑADIMOS O QUITAMOS LA CLASE segundos24
    // BOTÓN QUE TRANSFORMA EL TIPO HORARIO: FUNCIÓN cambioTipoHorario()
    if (tipoHorario === 12) {
        // AL ELIMINAR LA CLASE LO DEJA EN SU ESTADO ORIGINAL.
        pSegundos.classList.remove("segundos24");
        // RECOGE LAS IMÁGENES ASOCIADAS AL BOTÓN Y MUESTRA EL 24 Y OCULTA EL 12
        document.getElementById('24horas').style.display = 'block';
        document.getElementById('12horas').style.display = 'none';

        // COMPRUEBA QUE LA HORA SEA MENOR A 12
        if (horas >= 12) {
            // CONVIERTE LA HORA A FORMATO 12 HORAS
            horas = horas - 12;
            // POR LA TARDE
            amPm = 'PM';
        } else {
            // POR LA MAÑANA
            amPm = 'AM';
        }
    } else if (tipoHorario === 24) {
        // CONVIERTE A 24 HORAS
        // LA CLASE AUMENTA DE TAMAÑO Y NO MUESTRA AM-PM
        pSegundos.classList.add("segundos24");
        // RECOGE LAS IMÁGENES ASOCIADAS AL BOTÓN Y MUESTRA EL 12 Y OCULTA EL 24
        document.getElementById('24horas').style.display = 'none';
        document.getElementById('12horas').style.display = 'block';
    }

    // PREGUNTA SI LAS HORAS, MINUTOS Y SEGUNDOS SON MENOS QUE 10 Y AÑADE UN 0 DELANTE.

    if (horas === 0) {
        horas = 12;
    }

    if (horas < 10) {
        horas = '0' + horas
    };

    pHoras.textContent = horas;
    pAMPM.textContent = amPm;

    if (minutos < 10) {
        minutos = '0' + minutos
    };

    if (segundos < 10) {
        segundos = '0' + segundos
    };

    // ESCRIBE EL CONTENIDO DE TEXTO DE MINUTOS Y SEGUNDOS.

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
};

actualizarHora12();

// VARIABLE QUE GENERA UN INTERVALO DE 1 SEGUNDO A LA EJECUCIÓN DE LA FUNCIÓN actualizarHora12.
// ESTO SIRVE BÁSICAMENTE PARA DINAMIZAR LOS SEGUNDOS.
var intervalo = setInterval(actualizarHora12, 1000);

// FUNCIÓN QUE COMPRUEBA SI EL TIPO HORARIO ES DE 12 O 24 HORAS.
function cambioTipoHorario() {
    if (tipoHorario === 12) {
        tipoHorario = 24;
    } else {
        tipoHorario = 12;
    }

    actualizarHora12();
};

// FUNCIÓN QUE ALTERNA IDIOMA ES / EN PARA CAMBIAR EL FORMATO DE FECHA
function cambioIdioma() {
    if (cambioIdiomaDefault === 'ES') {
        cambioIdiomaDefault = 'EN';
    } else {
        cambioIdiomaDefault = 'ES';
    }

    actualizarHora12();
};




function enviarDatos(form) {
    var data = JSON.stringify( $(form).serializeArray() );
    console.log( JSON.parse(data) );

    return false; //don't submit
}