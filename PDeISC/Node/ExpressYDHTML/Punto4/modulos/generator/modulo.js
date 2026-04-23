/**
 * Módulo para generación de nodos
 */

export const createListItem = (text, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        Nodo Dinámico #${index + 1}
        <span class="badge bg-primary rounded-pill">${text}</span>
    `;
    return li;
};

export const updateLink = (linkElement, newUrl, newText) => {
    const oldUrl = linkElement.getAttribute('href');
    linkElement.setAttribute('href', newUrl);
    linkElement.textContent = newText;
    return oldUrl;
};
