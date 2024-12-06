// querySelector
const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
// enlaces[0].href = 'http://google.com';

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos

console.log(1);

window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
})

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
})

console.log(5);