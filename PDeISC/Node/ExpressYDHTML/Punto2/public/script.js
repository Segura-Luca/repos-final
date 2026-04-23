
import { showSection } from '/modulos/dom/modulo.js';

// --- Lógica de Navegación ---
const navButtons = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.component-section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        showSection(sections, targetId);
    });
});

// --- Punto 2: Desfile de Eventos ---

// 1. El clásico Click
document.getElementById('target-click').addEventListener('click', () => {
    Swal.fire({
        title: 'Evento Click',
        text: '¡Has interactuado con un evento de click!',
        icon: 'success',
        confirmButtonColor: '#4e73df'
    });
    document.getElementById('result-click').textContent = '¡Ouch! Me diste un click. 😜';
});

// 2. Mouseover
const targetMouseover = document.getElementById('target-mouseover');
targetMouseover.addEventListener('mouseover', () => {
    targetMouseover.classList.add('hovered');
    document.getElementById('result-mouseover').textContent = '¡Te veo! Estás pasando el mouse por encima.';
});
targetMouseover.addEventListener('mouseout', () => {
    targetMouseover.classList.remove('hovered');
    document.getElementById('result-mouseover').textContent = 'Se fue... volvió la paz.';
});

// 3. Keypress
document.getElementById('target-keypress').addEventListener('keypress', (e) => {
    document.getElementById('result-keypress').textContent = `Acabas de presionar la tecla: "${e.key}". ¡Buena elección!`;
});

// 4. Change
document.getElementById('target-change').addEventListener('change', (e) => {
    if (e.target.value) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'info',
            title: `Cambiaste a: ${e.target.value}`,
            showConfirmButton: false,
            timer: 2000
        });
        document.getElementById('result-change').textContent = `Cambiaste de opinión a: "${e.target.value}"`;
    }
});

// 5. Dblclick
document.getElementById('target-dblclick').addEventListener('dblclick', () => {
    Swal.fire({
        title: '¡Doble Impacto!',
        text: 'El evento double click ha sido capturado con éxito.',
        icon: 'info',
        confirmButtonColor: '#e74a3b'
    });
    document.getElementById('result-dblclick').textContent = '¡Doble impacto! Cambiamos a color verde por el éxito.';
    document.getElementById('target-dblclick').style.backgroundColor = '#28a745';
});
