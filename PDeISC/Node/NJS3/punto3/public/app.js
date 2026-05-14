/**
 * Portal de Noticias Elite - Lógica de Registro de Miembros
 * Desarrollado con los más altos estándares de seguridad y elegancia.
 */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');
    const radioHijosSi = document.getElementById('hijosSi');
    const radioHijosNo = document.getElementById('hijosNo');
    const contenedorCantidadHijos = document.getElementById('contenedorCantidadHijos');
    const inputCantidadHijos = document.getElementById('cantidadHijos');
    const directorioMiembros = document.getElementById('directorioMiembros');
    const alertContainer = document.getElementById('alertContainer');

    // Cargar miembros iniciales desde LocalStorage
    mostrarDirectorio();

    /**
     * Lógica Condicional: Mostrar/Ocultar cantidad de hijos
     */
    radioHijosSi.addEventListener('change', () => {
        if (radioHijosSi.checked) {
            contenedorCantidadHijos.classList.remove('d-none');
            inputCantidadHijos.value = '';
        }
    });

    radioHijosNo.addEventListener('change', () => {
        if (radioHijosNo.checked) {
            contenedorCantidadHijos.classList.add('d-none');
            inputCantidadHijos.value = 0;
        }
    });

    /**
     * Evento principal de envío del formulario
     */
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validarRegistro()) {
            guardarMiembro();
            formulario.reset();
            radioHijosNo.checked = true;
            contenedorCantidadHijos.classList.add('d-none');
            mostrarAlerta('Identidad neural integrada con éxito. Bienvenido al Núcleo Nexus.', 'success');
        } else {
            mostrarAlerta('Fallo en la integridad de datos. Por favor, revise los protocolos marcados en rojo.', 'danger');
            
            // Desplazar al primer campo con error
            const primerError = document.querySelector('.is-invalid-elite');
            if (primerError) {
                primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => primerError.focus(), 500);
            }
        }
    });

    /**
     * Función de Validación Estricta
     * @returns {boolean} - true si es válido, false de lo contrario
     */
    function validarRegistro() {
        let esValido = true;
        
        // Limpiar errores previos
        limpiarErrores();

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const edad = parseInt(document.getElementById('edad').value);
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const sexo = document.getElementById('sexo').value;
        const documento = document.getElementById('documento').value.trim();
        const estadoCivil = document.getElementById('estadoCivil').value;
        const nacionalidad = document.getElementById('nacionalidad').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mail = document.getElementById('mail').value.trim();
        const tieneHijos = document.querySelector('input[name="tieneHijos"]:checked').value;
        const cantidadHijos = parseInt(inputCantidadHijos.value);

        // Regex
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefono = /^\+?[\d\s-]{7,15}$/;
        const regexDocumento = /^[a-zA-Z0-9]{5,15}$/;

        // Validar Nombre
        if (!nombre || !regexNombre.test(nombre)) {
            mostrarError('nombre', 'Identificador inválido (solo caracteres alfabéticos)');
            esValido = false;
        }

        // Validar Apellido
        if (!apellido || !regexNombre.test(apellido)) {
            mostrarError('apellido', 'Linaje inválido (solo caracteres alfabéticos)');
            esValido = false;
        }

        // Validar Edad y Fecha de Nacimiento (Lógica correlacional)
        if (isNaN(edad) || edad <= 0) {
            mostrarError('edad', 'Conteo de bio-ciclos inválido');
            esValido = false;
        }

        if (!fechaNacimiento) {
            mostrarError('fechaNacimiento', 'Marca de tiempo de creación requerida');
            esValido = false;
        } else {
            const fechaNac = new Date(fechaNacimiento);
            const hoy = new Date();
            let edadCalculada = hoy.getFullYear() - fechaNac.getFullYear();
            const mes = hoy.getMonth() - fechaNac.getMonth();
            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
                edadCalculada--;
            }

            if (edadCalculada !== edad) {
                mostrarError('edad', 'El conteo de bio-ciclos no coincide con la marca de tiempo');
                mostrarError('fechaNacimiento', 'La marca de tiempo de creación no coincide con los bio-ciclos');
                esValido = false;
            }
        }

        // Validar Sexo
        if (!sexo) {
            mostrarError('sexo', 'Seleccione variante');
            esValido = false;
        }

        // Validar Documento
        if (!documento || !regexDocumento.test(documento)) {
            mostrarError('documento', 'ID inválido (5-15 caracteres alfanuméricos)');
            esValido = false;
        }

        // Validar Estado Civil
        if (!estadoCivil) {
            mostrarError('estadoCivil', 'Seleccione estado del enlace');
            esValido = false;
        }

        // Validar Nacionalidad
        if (!nacionalidad) {
            mostrarError('nacionalidad', 'Sector requerido');
            esValido = false;
        }

        // Validar Teléfono
        if (!telefono || !regexTelefono.test(telefono)) {
            mostrarError('telefono', 'Frecuencia neural inválida');
            esValido = false;
        }

        // Validar Mail
        if (!mail || !regexEmail.test(mail)) {
            mostrarError('mail', 'Dirección de nodo de datos inválida');
            esValido = false;
        }

        // Validar Hijos (Condicional)
        if (tieneHijos === 'si') {
            if (isNaN(cantidadHijos) || cantidadHijos < 0) {
                mostrarError('cantidadHijos', 'Ingrese conteo de nodos válido');
                esValido = false;
            }
        }

        return esValido;
    }

    /**
     * Función para guardar el miembro en LocalStorage
     */
    function guardarMiembro() {
        const nuevoMiembro = {
            nombre: document.getElementById('nombre').value.trim(),
            apellido: document.getElementById('apellido').value.trim(),
            edad: document.getElementById('edad').value,
            fechaNacimiento: document.getElementById('fechaNacimiento').value,
            sexo: document.getElementById('sexo').value,
            documento: document.getElementById('documento').value.trim(),
            estadoCivil: document.getElementById('estadoCivil').value,
            nacionalidad: document.getElementById('nacionalidad').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            mail: document.getElementById('mail').value.trim(),
            hijos: document.querySelector('input[name="tieneHijos"]:checked').value === 'si' ? document.getElementById('cantidadHijos').value : 0
        };

        let miembros = JSON.parse(localStorage.getItem('miembrosExclusivos')) || [];
        miembros.push(nuevoMiembro);
        localStorage.setItem('miembrosExclusivos', JSON.stringify(miembros));

        // Actualizar UI dinámicamente
        mostrarDirectorio();
    }

    /**
     * Función para renderizar el directorio de miembros
     */
    function mostrarDirectorio() {
        const miembros = JSON.parse(localStorage.getItem('miembrosExclusivos')) || [];
        directorioMiembros.innerHTML = '';

        if (miembros.length === 0) {
            directorioMiembros.innerHTML = '<div class="col-12 text-center text-muted italic">No hay miembros registrados aún.</div>';
            return;
        }

        miembros.forEach(miembro => {
            const card = document.createElement('div');
            card.className = 'col-md-6';
            card.innerHTML = `
                <div class="member-card shadow-sm h-100">
                    <h3 class="border-bottom pb-2 mb-3">${miembro.nombre} ${miembro.apellido}</h3>
                    <div class="row text-start g-2">
                        <div class="col-6">
                            <small class="label-elite-card">Sector de Origen</small>
                            <p class="data-elite-card">${miembro.nacionalidad}</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">ID Neural</small>
                            <p class="data-elite-card">${miembro.documento}</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">Bio-Ciclos</small>
                            <p class="data-elite-card">${miembro.edad} ciclos</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">Creación</small>
                            <p class="data-elite-card">${miembro.fechaNacimiento}</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">Variante</small>
                            <p class="data-elite-card">${miembro.sexo}</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">Estado del Enlace</small>
                            <p class="data-elite-card">${miembro.estadoCivil}</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">Freq Neural</small>
                            <p class="data-elite-card">${miembro.telefono}</p>
                        </div>
                        <div class="col-6">
                            <small class="label-elite-card">Nodo de Datos</small>
                            <p class="data-elite-card">${miembro.mail}</p>
                        </div>
                        <div class="col-12 border-top pt-2">
                            <small class="label-elite-card">Nodos Descendientes</small>
                            <p class="data-elite-card">${miembro.hijos > 0 ? `${miembro.hijos} nodo(s) enlazado(s)` : 'Sin nodos enlazados'}</p>
                        </div>
                    </div>
                </div>
            `;
            directorioMiembros.appendChild(card);
        });
    }

    /**
     * Helpers de UI
     */
    function mostrarError(idInput, mensaje) {
        const input = document.getElementById(idInput);
        const errorDiv = document.getElementById(`error-${idInput}`);
        
        input.classList.add('is-invalid-elite');
        if (errorDiv) {
            errorDiv.textContent = mensaje;
        }
    }

    function limpiarErrores() {
        const inputs = document.querySelectorAll('.form-control-elite, .form-select-elite');
        const errorDivs = document.querySelectorAll('.invalid-feedback-custom');
        
        inputs.forEach(input => input.classList.remove('is-invalid-elite'));
        errorDivs.forEach(div => div.textContent = '');
    }

    function mostrarAlerta(mensaje, tipo) {
        const claseAlerta = tipo === 'success' ? 'alert-premium-success' : 'alert-premium-error';
        alertContainer.innerHTML = `
            <div class="alert alert-premium ${claseAlerta} alert-dismissible fade show" role="alert">
                <div class="d-flex align-items-center">
                    <span class="me-2">${tipo === 'success' ? '◈' : '✕'}</span>
                    <span>${mensaje}</span>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        // Auto-cerrar después de 6 segundos
        setTimeout(() => {
            const alertElement = alertContainer.querySelector('.alert');
            if (alertElement) {
                const alert = bootstrap.Alert.getOrCreateInstance(alertElement);
                if (alert) alert.close();
            }
        }, 6000);
    }
});
