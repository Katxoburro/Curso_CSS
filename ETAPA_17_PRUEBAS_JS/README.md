var variable = 'texto';
var objeto = {
    clave: 'valor'
};
var array = ['a', 1, {}];

variable < objeto < array

//DEFINICIÓN DE VARIABLES:

var	nombre = 'Esteban';
var	apellidos = 'Soriano López';
var telefono = '666 999 888';
var	dni = '032225557J';

//DEFINICIÓN DE OBJETO (CONTENEDOR DE VARIABLES):

var datosPersonales = {
  nombre: 'Esteban',
  apellidos: 'Soriano López',
  telefono: '666 999 888',
  dni: '032225557J'
};

//DEFINICIÓN DE ARRAY (CONTENEDOR DE VARIABLES U OBJETOS):

var listadoDePersonal = [
	datosPersonales,
];



-------------------------

if (condición) {}
if (condición) {} else {}
if (condición) {} else if (condición) {}
if (condición) {} else if (condición) {} else {}
if (condición) {} else if (condición) {} else if (condición) {} ...
if (condición) {} else if (condición) {} else if (condición) {} ... «última condición» else {} 

if (condición === 'valor') {} «para definir condición»

-----------------------

SIEMPRE SE GENERA UNA NUEVA VARIABLE PARA EL FOR
for (var elemento of array) {
    console.log('este es cada valor dentro del array', elemento);
}

---------------------

function nombreFuncion() {}
function nombreFuncion(valor) {}
function nombreFuncion(valor1, valor2, ... valorN) {}

--------------------

COMBINACIÓN:

function semaforo(color) {
    if (color === 'verde') {
        return 'Puede iniciar la marcha';
    }
    else if (color === 'amarillo') {
        return 'Aminore la velocidad';
    }
    else if (color === 'rojo') {
        return 'Obligado a hacer un STOP';
    }
    else {
        return 'Color no válido':
    }
}




join -----> PARA SEPARAR ELEMENTOS EN ARRAY
pop ------> PARA BORRAR ELEMENTOS EN ARRAY