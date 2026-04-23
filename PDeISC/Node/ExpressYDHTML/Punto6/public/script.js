
import { getFormData, validateData, createResultHTML } from '/modulos/formHandler/modulo.js';

const form = document.getElementById('registration-form');
const resultContainer = document.getElementById('result-container');


form.addEventListener('submit', (e) => {
   
    e.preventDefault();
    
    // Le pedimos al modulko que reciba la info
    const data = getFormData(form);

    const validation = validateData(data);

    if (!validation.isValid) {
        // Si hay errores, le muestro un popup
        Swal.fire({
            icon: 'error',
            title: 'Datos Incongruentes',
            html: `<ul class="text-start">${validation.errors.map(err => `<li>${err}</li>`).join('')}</ul>`,
            confirmButtonColor: '#4e73df'
        });
        return; 
    }
    

    resultContainer.innerHTML = createResultHTML(data);
  
    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: 'Tus datos han sido procesados dinámicamente.',
        confirmButtonColor: '#1cc88a'
    });
    
    // Si quisiéramos dejar el formulario vacío después de enviar
    // form.reset(); y listo
});
