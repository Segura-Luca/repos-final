/**
 * CMS Editorial Elite - Lógica de Gestión de Noticias
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias
    const formulario = document.getElementById('formularioNoticia');
    const muroNoticias = document.getElementById('muroNoticias');
    const notificationContainer = document.getElementById('notificationContainer');

    // Estado Global: Array de Noticias
    let noticiasGlobales = [];

    /**
     * Función Principal: Publicar Noticia
     */
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const datos = capturarDatos();
        
        if (validarNoticia(datos)) {
            try {
                // SPA Behavior: Simulación de envío vía Fetch
                const response = await fetch('/api/noticias', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                const result = await response.json();

                if (result.success) {
                    // JavaScript Mastery: Uso de unshift() para agregar al inicio
                    noticiasGlobales.unshift(result.data);
                    
                    mostrarNotificacion('Flujo de datos transmitido con éxito a la red neural.', 'success');
                    formulario.reset();
                    renderizarMuro();
                }
            } catch (error) {
                console.error('Error al publicar:', error);
                mostrarNotificacion('Fallo en la conexión con el nexo central.', 'error');
            }
        }
    });

    /**
     * Captura de los 8 campos obligatorios
     */
    function capturarDatos() {
        return {
            titular: document.getElementById('titular').value.trim(),
            subtitulo: document.getElementById('subtitulo').value.trim(),
            cuerpo: document.getElementById('cuerpo').value.trim(),
            categoria: document.getElementById('categoria').value,
            autor: document.getElementById('autor').value.trim(),
            imagenUrl: document.getElementById('imagenUrl').value.trim(),
            fecha: document.getElementById('fecha').value,
            prioridad: document.getElementById('prioridad').value,
            timestamp: Date.now() // Para control interno
        };
    }

    /**
     * Validación Estricta
     */
    function validarNoticia(datos) {
        let errores = [];

        if (datos.titular.length < 10) errores.push('El titular debe contener al menos 10 caracteres.');
        if (datos.cuerpo.length < 50) errores.push('El flujo de datos primario debe contener al menos 50 caracteres.');
        if (!datos.categoria) errores.push('Seleccione una clasificación válida.');
        if (!datos.autor) errores.push('El ID del transmisor es obligatorio.');
        if (!datos.imagenUrl) errores.push('URL de datos visuales requerida.');
        if (!datos.fecha) errores.push('Marca de tiempo requerida.');

        if (errores.length > 0) {
            mostrarNotificacion(errores.join('<br>'), 'error');
            return false;
        }

        return true;
    }

    /**
     * Renderización Dinámica del Muro
     * JavaScript Mastery: Uso de map() y filter()
     */
    function renderizarMuro() {
        // filter(): Asegurar que no haya entradas inválidas (ej: sin titular)
        const noticiasValidas = noticiasGlobales.filter(n => n.titular && n.cuerpo);

        if (noticiasValidas.length === 0) {
            muroNoticias.innerHTML = '<div class="empty-feed">Esperando flujo de datos...</div>';
            return;
        }

        // map(): Transformar el array de objetos en HTML dinámico
        const htmlFeed = noticiasValidas.map(noticia => `
            <article class="news-card">
                <div class="news-image" style="background-image: url('${noticia.imagenUrl}')"></div>
                <div class="news-content">
                    <div class="news-meta">
                        <span class="news-category">${noticia.categoria}</span>
                        <span class="news-priority">Prioridad: ${noticia.prioridad}</span>
                    </div>
                    <h3>${noticia.titular}</h3>
                    <p class="subtitulo">${noticia.subtitulo}</p>
                    <p class="cuerpo">${noticia.cuerpo}</p>
                </div>
                <div class="news-footer">
                    <span>Por: <strong>${noticia.autor}</strong></span>
                    <span>${noticia.fecha}</span>
                </div>
            </article>
        `).join('');

        muroNoticias.innerHTML = htmlFeed;
    }

    /**
     * Helpers de UI
     */
    function mostrarNotificacion(mensaje, tipo) {
        const clase = tipo === 'success' ? 'notification-success' : 'notification-error';
        notificationContainer.innerHTML = `<div class="notification ${clase}">${mensaje}</div>`;
        
        // Auto-limpiar notificaciones de éxito
        if (tipo === 'success') {
            setTimeout(() => {
                notificationContainer.innerHTML = '';
            }, 5000);
        }
    }
});
