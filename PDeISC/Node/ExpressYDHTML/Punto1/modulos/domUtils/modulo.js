/**
 * Este es nuestro pequeño taller de herramientas 🛠️
 * Aquí guardamos funciones que fabrican cosas para que el código principal sea más limpio.
 */

// Esta función fabrica un título H1 de la nada
export const createH1 = (text) => {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    h1.id = 'main-title'; // Le ponemos un ID para encontrarlo fácil después
    return h1;
};

// Esta función fabrica una imagen con estilo de Bootstrap
export const createImage = (src, alt, width = '200px') => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.id = 'main-image';
    img.style.width = width;
    img.className = 'img-fluid rounded shadow'; // Le damos un toque fachero con Bootstrap
    return img;
};

// Generador de colores aleatorios (el clásico de toda la vida)
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
