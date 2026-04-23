// ¡Hola! Aquí configuramos nuestro servidor Express. 
// Usamos imports modernos porque somos desarrolladores actuales.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Como estamos usando ES Modules, necesitamos este truquito para saber dónde estamos parados
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Le decimos a Express que todo lo que esté en 'public' se entregue tal cual (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ojo aquí: exponemos la carpeta 'modulos' para que el navegador pueda importar el JS
// Si no hacemos esto, el navegador se quejará de que no encuentra los archivos.
app.use('/modulos', express.static(path.join(__dirname, 'modulos')));

// ¡Y listo! Ponemos a escuchar el servidor en el puerto 3001
app.listen(PORT, () => {
    console.log(`🚀 Servidor del Punto 1 listo en: http://localhost:${PORT}`);
});
