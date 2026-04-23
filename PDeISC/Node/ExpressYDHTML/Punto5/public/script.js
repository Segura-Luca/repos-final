
import { getParagraphHTML, getImageHTML, getButtonHTML, getListHTML } from '/modulos/htmlGenerator/modulo.js';

const contentArea = document.getElementById('dynamic-content');


const clearInitial = () => {
    if (contentArea.querySelector('.text-muted')) {
        contentArea.innerHTML = '';
    }
};


// usa += para ir sumando contenido sin borrar lo anterior
document.getElementById('btn-add-p').addEventListener('click', () => {
    clearInitial();
    contentArea.innerHTML += getParagraphHTML('Este es un párrafo generado dinámicamente con innerHTML.');
});

// 2. Meto una imagen.
document.getElementById('btn-add-img').addEventListener('click', () => {
    clearInitial();
    contentArea.innerHTML += getImageHTML('https://picsum.photos/200/150', 'Imagen dinámica');
});


document.getElementById('btn-add-btn').addEventListener('click', () => {
    clearInitial();
    contentArea.innerHTML += getButtonHTML('Botón Dinámico');
});

// 4. Una lista entera fabricada desde un array.
document.getElementById('btn-add-list').addEventListener('click', () => {
    clearInitial();
    const items = ['Elemento A', 'Elemento B', 'Elemento C'];
    contentArea.innerHTML += getListHTML(items);
});

//borra todo y vuelve al inicio.
document.getElementById('btn-clear').addEventListener('click', () => {
    contentArea.innerHTML = '<p class="text-muted text-center">El contenido dinámico aparecerá aquí...</p>';
});
