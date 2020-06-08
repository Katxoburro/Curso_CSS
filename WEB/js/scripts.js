function comprobar(obj) {
	if (obj.checked)
		document.getElementById('enviar').disabled = false;
	else
		document.getElementById('enviar').disabled = true;
}

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
	tareaInput = document.getElementById('tareaInput'),
	btnNuevaTarea = document.getElementById('btnAgregar');

// FUNCIONES

var agregarTarea = function name() {
	var tarea = tareaInput.value,
		nuevaTarea = document.createElement('li'),
		enlace = document.createElement('a'),
		contenido = document.createTextNode(tarea);

	if (tarea === '') {
		tareaInput.setAttribute('placeholder', 'Escribe algo, alma de cántaro...');
		tareaInput.className = 'error';
		return false;
	}

	// Agregamos el contenido al enlace
	enlace.appendChild(contenido);
	// Establecemos un atributo href
	enlace.setAttribute('href', '#');
	// Agregamos el enlace «a» a la nueva tarea «li»
	nuevaTarea.appendChild(enlace);
	// Agregamos la nueva tarea a la lista
	lista.appendChild(nuevaTarea);
	// Limpia el campo después de la ejecución
	tareaInput.value = '';

	for (var i = 0; i <= lista.children.length - 1; i++) {
		lista.children[i].addEventListener('click', function () {
			this.parentNode.removeChild(this);
		});
	}
}

var comprobarInput = function name(params) {
	tareaInput.className = '';
	tareaInput.setAttribute('placeholder', 'Agrega tu comentario...')
}

var eliminarTarea = function name(params) {

}

// EVENTOS
// Agregar tarea
btnNuevaTarea.addEventListener('click', agregarTarea);

//Comprobar «input»
tareaInput.addEventListener('click', comprobarInput);

// Borrando elementos de la lista
for (var i = 0; i < lista.children.length - 1; i++) {
	lista.children[i].addEventListener('click', eliminarTarea);

}