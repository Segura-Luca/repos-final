// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const utils = require('./modules/utils');
const ejerciciosMaster = require('./modules/ejerciciosMaster');

const PORT = 3000;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
    // API para obtener los resultados de los ejercicios
    if (req.url === '/api/ejercicios') {
        const results = ejerciciosMaster.getAllResults();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
        return;
    }

    // Si se pide la raíz, servimos el index.html
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al cargar el archivo index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else {
        // Para cualquier otra ruta, devolvemos 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - No encontrado');
    }
});

server.listen(PORT, HOST, () => {
    // Ejecutamos la impresión de los puntos 1 al 4 en la consola
    ejerciciosMaster.logResultsToConsole();

    console.log(`\n========================================`);
    console.log(`${utils.getAppTitle()}`);
    console.log(`========================================`);
    console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
    console.log(`${utils.getWelcomeMessage()}`);
    console.log(`========================================\n`);
});
