
import { createListItem, updateLink } from '/modulos/generator/modulo.js';

// creo nodos
const btnGenerate = document.getElementById('btn-generate-nodes');
const nodesContainer = document.getElementById('nodes-container');

btnGenerate.addEventListener('click', () => {
    // borro lo anterior
    nodesContainer.innerHTML = '';
    
   

    const labels = ['Alfa', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
    labels.forEach((label, index) => {
        
        const node = createListItem(label, index);
      
        nodesContainer.appendChild(node);
    });
});

// 
const btnChangeAttr = document.getElementById('btn-change-attr');
const dynamicLink = document.getElementById('dynamic-link');
const attrBefore = document.getElementById('attr-before');
const attrAfter = document.getElementById('attr-after');

btnChangeAttr.addEventListener('click', () => {
    const newUrl = 'https://www.openai.com';
    const newText = 'Ir a OpenAI';
    
    // Antes de cambiar guardo lo que había para mostrarlo en la pantalla.
    const before = dynamicLink.getAttribute('href');
    attrBefore.textContent = before;
   
    updateLink(dynamicLink, newUrl, newText);
    
   
    Swal.fire({
        icon: 'success',
        title: 'URL Actualizada',
        text: `Se cambió de ${before} a ${newUrl}`,
        confirmButtonColor: '#4e73df'
    });
    
    //  cómo quedó el nuevo atributo.
    const after = dynamicLink.getAttribute('href');
    attrAfter.textContent = after;
});
