import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import { fileURLToPath } from 'url';
import { upperCase } from "upper-case";

/**
 * CONFIGURACIÓN DE MÓDULOS Y SERVIDOR
 * Aquí importamos las dependencias necesarias y los módulos personalizados que cargan el HTML.
 */
import getMenu from './modules/menu.js';
import getTiempo from './modules/tiempo.js';
import getCalculadora from './modules/calculos.js';
import getClima from './modules/clima.js';

// Configuración para usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Función para registrar información de la URL en la consola.
 * Esto ayuda a ver qué ruta está solicitando el usuario.
 */
function logUrlInfo(requestUrl) {
    const parsedUrl = new url.URL(requestUrl, `http://localhost:3000`);
    console.log('--- URL Info ---');
    console.log(`Host: ${parsedUrl.host}`);
    console.log(`Pathname: ${parsedUrl.pathname}`);
    console.log(`Search: ${parsedUrl.search}`);
    console.log('----------------');
}

/**
 * CREACIÓN DEL SERVIDOR HTTP
 * Este es el corazón de la aplicación que recibe las peticiones y envía las respuestas.
 */
const server = http.createServer((req, res) => {
    // Loggear info de la URL solicitada
    logUrlInfo(req.url);

    let filePath = '';
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    /**
     * SISTEMA DE ENRUTAMIENTO
     * Dependiendo de la URL escrita por el usuario, seleccionamos qué archivo HTML cargar.
     */
    switch (pathname) {
        case '/':
        case '/index':
            filePath = path.join(__dirname, 'pages', 'index.html');
            break;
        case '/cripto':
            filePath = path.join(__dirname, 'pages', 'cripto.html');
            break;
        case '/bolsa':
            filePath = path.join(__dirname, 'pages', 'bolsa.html');
            break;
        case '/real-state':
            filePath = path.join(__dirname, 'pages', 'real-state.html');
            break;
        case '/CIC':
            filePath = path.join(__dirname, 'pages', 'CIC.html');
            break;
        default:
            // Si la ruta no existe, enviamos un error 404
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found');
            return;
    }

    /**
     * PROCESAMIENTO DEL ARCHIVO HTML
     * Leemos el archivo base y reemplazamos los placeholders por el contenido de los componentes.
     */
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Error interno del servidor');
            return;
        }

        // Variable para almacenar el contenido final que se enviará al navegador
        let renderedContent = content;
        
        /**
         * MAPEO DE COMPONENTES DINÁMICOS
         * Vinculamos los placeholders ({{...}}) con sus respectivas funciones de carga.
         */
        const components = {
            '{{MENU}}': getMenu,       // Carga el menú de navegación superior
            '{{TIEMPO}}': getTiempo,   // Carga el reloj que se actualiza en vivo
            '{{CALCULO}}': getCalculadora, // Carga la calculadora de interés compuesto
            '{{CLIMA}}': getClima      // Carga el módulo de clima actual por ciudad
        };

        /**
         * INYECCIÓN DE COMPONENTES
         * Recorremos el mapa y reemplazamos cada etiqueta encontrada en el HTML base.
         */
        for (const [placeholder, getComponent] of Object.entries(components)) {
            if (renderedContent.includes(placeholder)) {
                renderedContent = renderedContent.replaceAll(placeholder, getComponent());
            }
        }

        /**
         * TRANSFORMACIÓN DE TEXTO CON LIBRERÍA EXTERNA
         * Usamos 'upper-case' para convertir el título principal a mayúsculas.
         */
        renderedContent = renderedContent.replace('Domina tus Inversiones', upperCase('Domina tus Inversiones'));

        // Enviamos el HTML final procesado al navegador
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(renderedContent);
    });
});

// Iniciamos el servidor en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
