/**
 * Este módulo es como un asistente que ordena los papeles de una oficina 📂.
 * Toma los datos del formulario y los prepara para que sean legibles.
 */

// Función para validar la congruencia de los datos antes de procesarlos.
export const validateData = (data) => {
    const errors = [];

    // Validar nombre (al menos dos palabras, solo letras)
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}(?:\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,})+$/;
    if (!nameRegex.test(data.username.trim())) {
        errors.push('El nombre debe incluir nombre y apellido (solo letras).');
    }

    // Validar email con mayor rigor (evitar pepe@gmail.co si queremos .com, .net, etc)
    // Usamos una regex más estricta para dominios comunes
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|ar|cl|uy)$/i;
    if (!emailRegex.test(data.email)) {
        errors.push('El email no tiene un formato válido o el dominio no es aceptado.');
    }

    // Validar edad (debe ser un número coherente)
    const age = parseInt(data.age);
    if (isNaN(age) || age < 18 || age > 99) {
        errors.push('La edad debe estar entre 18 y 99 años.');
    }

    // Validar términos
    if (data.terms === 'No aceptado ❌') {
        errors.push('Debes aceptar los términos y condiciones.');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
};

// Función para recolectar todo lo que el usuario escribió o seleccionó.
export const getFormData = (formElement) => {
    const data = {};
    
    // Vamos uno por uno rescatando los valores de los inputs.
    data.username = document.getElementById('username').value;
    data.email = document.getElementById('email').value;
    data.age = document.getElementById('age').value;
    data.country = document.getElementById('country').value;
    
    // Para los checkboxes, no nos importa el "value", sino si están marcados.
    data.terms = document.getElementById('terms').checked ? 'Aceptado ✅' : 'No aceptado ❌';
    
    // Con los radio buttons, buscamos cuál es el que tiene el "check" puesto.
    const gender = document.querySelector('input[name="gender"]:checked');
    data.gender = gender ? gender.value : 'No especificado';
    
    return data;
};

// Esta función genera el "ticket" con el resumen de los datos para mostrar en pantalla.
export const createResultHTML = (data) => {
    return `
        <div class="result-item"><span class="result-label">Nombre:</span> ${data.username}</div>
        <div class="result-item"><span class="result-label">Email:</span> ${data.email}</div>
        <div class="result-item"><span class="result-label">Edad:</span> ${data.age}</div>
        <div class="result-item"><span class="result-label">Género:</span> ${data.gender}</div>
        <div class="result-item"><span class="result-label">País:</span> ${data.country}</div>
        <div class="result-item"><span class="result-label">Términos:</span> ${data.terms}</div>
        <div class="alert alert-success mt-3">¡Genial! Registro completado con éxito.</div>
    `;
};
