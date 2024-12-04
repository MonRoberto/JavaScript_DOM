// querySelector
const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');
// enlaces[0].href = 'http://google.com';

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);