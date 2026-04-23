
import { createH1, createImage, getRandomColor } from '/modulos/domUtils/modulo.js';

const containerH1 = document.getElementById('container-h1');
const containerImg = document.getElementById('container-img');

const btnAddH1 = document.getElementById('btn-add-h1');
const btnChangeText = document.getElementById('btn-change-text');
const btnChangeColor = document.getElementById('btn-change-color');
const btnAddImg = document.getElementById('btn-add-img');
const btnChangeImg = document.getElementById('btn-change-img');
const btnResizeImg = document.getElementById('btn-resize-img');

// Usamos estas variables para saber qué está pasando en la pantalla 
let h1Added = false;
let imgAdded = false;
let imgLarge = false;




btnAddH1.addEventListener('click', () => {
    if (!h1Added) {
        const h1 = createH1('Hola DOM');
        containerH1.appendChild(h1);
        h1Added = true;
    } else {
        Swal.fire({
            icon: 'info',
            title: '¡Ups!',
            text: 'Tranqui, ¡el título ya está ahí!',
            confirmButtonColor: '#4e73df'
        });
    }
});

// cambio de frase
btnChangeText.addEventListener('click', () => {
    const h1 = document.getElementById('main-title');
    if (h1) {
        // if que alterna frase
        h1.textContent = h1.textContent === 'Hola DOM' ? 'Chau DOM' : 'Hola DOM';
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Primero dale al botón de "Agregar H1" para que tenga sentido.',
            confirmButtonColor: '#4e73df'
        });
    }
});


btnChangeColor.addEventListener('click', () => {
    const h1 = document.getElementById('main-title');
    if (h1) {
        // color aleatorio
        h1.style.color = getRandomColor();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Sin título',
            text: 'Sin título no hay nada que colorear 😅',
            confirmButtonColor: '#4e73df'
        });
    }
});


btnAddImg.addEventListener('click', () => {
    if (!imgAdded) {
        const img = createImage('https://picsum.photos/400/300', 'Imagen aleatoria');
        containerImg.appendChild(img);
        imgAdded = true;
    } else {
        Swal.fire({
            icon: 'info',
            text: 'Ya hay una foto ahí. ¡No la tapes!',
            confirmButtonColor: '#4e73df'
        });
    }
});

// cambio de foto
btnChangeImg.addEventListener('click', () => {
    const img = document.getElementById('main-image');
    if (img) {
        
        // imagen nueva, así la descarga otra vez.
        img.src = `https://picsum.photos/400/300?t=${new Date().getTime()}`;
    } else {
        Swal.fire({
            icon: 'question',
            text: '¿Qué imagen quieres cambiar si no has puesto ninguna?',
            confirmButtonColor: '#4e73df'
        });
    }
});

// agrandar y achicar foto
btnResizeImg.addEventListener('click', () => {
    const img = document.getElementById('main-image');
    if (img) {
        if (!imgLarge) {
            img.style.width = '400px';
            imgLarge = true;
        } else {
            img.style.width = '200px';
            imgLarge = false;
        }
    } else {
        Swal.fire({
            icon: 'info',
            text: 'Primero agrega la imagen, ¡luego jugamos con el tamaño!',
            confirmButtonColor: '#4e73df'
        });
    }
});
