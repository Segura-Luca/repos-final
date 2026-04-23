/**
 * Módulo para generar strings HTML para innerHTML
 */

export const getParagraphHTML = (text) => {
    return `<p class="dynamic-item alert alert-primary">${text}</p>`;
};

export const getImageHTML = (src, alt) => {
    return `<div class="dynamic-item"><img src="${src}" alt="${alt}" class="dynamic-img shadow-sm"></div>`;
};

export const getButtonHTML = (text) => {
    return `<button class="dynamic-item btn btn-sm btn-dark me-2" onclick="Swal.fire({title: '¡Click!', text: 'Botón dinámico capturado', icon: 'success'})">${text}</button>`;
};

export const getListHTML = (items) => {
    const listItems = items.map(item => `<li>${item}</li>`).join('');
    return `
        <div class="dynamic-item card">
            <div class="card-body">
                <ul class="mb-0">
                    ${listItems}
                </ul>
            </div>
        </div>
    `;
};
