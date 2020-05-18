(function () {

    var actualizarHora = function () {
        var fecha = new Date(),
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

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (horas >= 12) {
            horas = horas - 12;
            amPm = 'PM';
        } else {
            amPm = 'AM';
        }

        if (horas === 00) {
            horas = 12;
        }

        if ( horas < 10 ){ horas = '0' + horas };

        pHoras.textContent = horas;
        pAMPM.textContent = amPm;

        if ( minutos < 10 ){ minutos = '0' + minutos };

        if ( segundos < 10 ){ segundos = '0' + segundos };

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000);

}())