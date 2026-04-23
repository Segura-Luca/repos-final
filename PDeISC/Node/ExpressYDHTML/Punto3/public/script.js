import { getChildCount } from '/modulos/dom/modulo.js';

const btnCount = document.getElementById('btn-count-children');
const resultArea = document.getElementById('result-area');

btnCount.addEventListener('click', () => {
    const count = getChildCount('parent-element');
    

    Swal.fire({
        title: '¡Análisis Completado!',
        text: `El elemento contenedor tiene ${count} hijos directos.`,
        icon: 'info',
        confirmButtonColor: '#4e73df'
    });

    resultArea.innerHTML = `
        <div class="alert alert-info shadow-sm">
            <strong>Resultado:</strong> Se detectaron ${count} nodos hijos.
        </div>
    `;
});
