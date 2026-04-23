/**
 * Módulo de utilidades DOM para Punto 2 y 3
 */

export const getChildCount = (elementId) => {
    const element = document.getElementById(elementId);
    return element ? element.children.length : 0;
};

export const showSection = (sections, targetId) => {
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.remove('d-none');
        } else {
            section.classList.add('d-none');
        }
    });
};
