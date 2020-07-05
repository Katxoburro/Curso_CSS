// ACTIVA O DESACTIVA EL BOTÓN ENVIAR, SI UN CHECK ESTÁ ACTIVADO.

function comprobar(obj) {
	if (obj.checked)
		document.getElementById('enviar').disabled = false;
	else
		document.getElementById('enviar').disabled = true;
}

// COMPRUEBA SI EL FORMATO DE CORREO ES CORRECTO.

function pruebaemail(valor) {
	re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if (!re.exec(valor)) {
		alert('Formato de correo electónico erróneo, revíselo.');
	} else return;
}

/*esta función se autoinvoca al importar un archivo*/
function fileDetected(ev) {
	/*recupero la ruta del archivo*/
	var name = ev.srcElement.value;
	/*dividir la ruta en tramos '\'
	doble barra: 1 escapa. 2 divide */
	name = name.split('\\');
	/*recupera el nombre del archivo que está en la última posición*/
	name = name[name.length - 1];
	/*pintamos en su box correspondiente 
	al usar un selector por class hay que indicar la posición, en este caso la 0 por ser la primera y la única */
	document.getElementsByClassName("form-control")[0].value = name;
}

/* LISTA DINÁMICA */

var lista = document.getElementById('lista'),
	usuarioInput = document.getElementById('usuarioInput'),
	tareaInput = document.getElementById('tareaInput'),
	btnNuevaTarea = document.getElementById('btnAgregar');

function newDate(date) {
/* 	var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
	var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
 */
	var d = new Date(date);
/*  	horas = d.getHours(),
		minutos = d.getMinutes(),
		segundos = d.getSeconds(),
		diaSemana = d.getDay(),
		dia = d.getDate(),
		mes = d.getMonth(),
		year = d.getFullYear();
 */
	//var fecha = semana[diaSemana] + ', ' + dia + ' de ' + meses[mes] + ' de ' + year + ' ' + ('0' + horas).slice(-2) + ':' + ('0' + minutos).slice(-2) + ':' + ('0' + segundos).slice(-2);
	// return fecha;
	//return d.toLocaleString('es-ES');
	return moment(date).locale('es').format('LLLL');
}
var datosIniciales = [{
	id: 1,
	nombre: 'Perico de los Palotes',
	comentario: 'Inmediatamente después de la ejecución de las operaciones, el intermediario preparará los datos necesarios para la liquidación de la operación. La liquidación es el proceso de intercambio de valores y efectivo que sigue a toda operación de mercado.',
	fecha: newDate('2020/03/14')
}, {
	id: 2,
	nombre: 'Óscar Nicero',
	comentario: 'Hasta ahora siempre he tocado formando parte de una banda, y eso relaja un poco la presión, pero esta vez soy yo principalmente el que doy la cara, y eso es gratificante a la vez que provoca cierta tensión.',
	fecha: newDate('2019/11/17')
}, {
	id: 3,
	nombre: 'Aitor Tilla',
	comentario: 'Para la utilización del DNI electrónico es necesario contar con un lector de tarjetas inteligentes, que permita el acceso al chip del DNIe y, por tanto, la utilización de los certificados contenidos en él.La instalación de un software que tiene disponible en el Área de descargas del portal www.dnielectronico.es de la Dirección general de la Policía (D.G.P.).',
	fecha: newDate('2019/01/23')
}]

function launch() {
	for (const item of datosIniciales) {
		var c = `<li id="elemento${item.id}">
					<div class="wrapFecha">
						<div class="usuario">
							${item.nombre} dice:
						</div>
						<div class="fecha">${item.fecha}</div>
						</div>
						<div class="content">
						${item.comentario}
					</div>
					<div class="deleteBox">
						<div class="delete" onclick="borrar(${item.id})">Eliminar X</div>
					</div>
				</li>`;

		lista.insertAdjacentHTML('beforeend', c);
	}
}
launch();

// FUNCIONES
var agregarTarea = function name() {
	var usuario = usuarioInput.value;
	var tarea = tareaInput.value;
	var fecha = newDate(new Date());
	var id = datosIniciales.length ? (datosIniciales[datosIniciales.length - 1].id + 1) : 1;

	var elemento = {
		id: id,
		nombre: usuario,
		comentario: tarea,
		fecha: new Date()
	};
	datosIniciales.push(elemento);

	if (usuario === '' || tarea === '') {
		if (usuario === '') {
			usuarioInput.setAttribute('placeholder', 'Que no tienes nombre ¿o qué?...');
			usuarioInput.className = 'error';
		}

		if (tarea === '') {
			tareaInput.setAttribute('placeholder', 'Escribe algo, alma de cántaro...');
			tareaInput.className = 'error';
		}

		return false;
	}

	// Agregamos el enlace «a» a la nueva tarea «li»
	var nuevaTarea = `<li id="elemento${id}">
						<div class="wrapFecha">
							<div class="usuario">
								${usuario} dice:
							</div>
							<div class="fecha">${fecha}</div>
							</div>
							<div class="content">
							${tarea}
						</div>
						<div class="deleteBox">
							<div class="delete" onclick="borrar(${id})">Eliminar X</div>
						</div>
					</li>`;

	// Agregamos la nueva tarea a la lista
	console.log(':::', lista);
	//lista.appendChild(document.createTextNode(nuevaTarea));
	lista.insertAdjacentHTML('afterBegin', nuevaTarea);
	// Limpia el campo después de la ejecución
	usuarioInput.value = '';
	tareaInput.value = '';
}

var comprobarInputUsuario = function name() {
	usuarioInput.className = '';
	usuarioInput.setAttribute('placeholder', 'Ingresa tu nombre, «nickname» o mote del pueblo...');
}

var comprobarInput = function name() {
	tareaInput.className = '';
	tareaInput.setAttribute('placeholder', 'Agrega tu comentario...');
}

// EVENTOS
// Agregar tarea
btnNuevaTarea.addEventListener('click', agregarTarea);

//Comprobar «input»
usuarioInput.addEventListener('click', comprobarInputUsuario);
tareaInput.addEventListener('click', comprobarInput);

/* // Borrando elementos de la lista
for (var i = 0; i < lista.children.length - 1; i++) {
	lista.children[i].addEventListener('click', eliminarTarea);
} */

function borrar(id) {
	console.log(id);

	document.getElementById('elemento' + id).remove();
}