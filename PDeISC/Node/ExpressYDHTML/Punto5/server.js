import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3005;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/modulos', express.static(path.join(__dirname, 'modulos')));

app.listen(PORT, () => {
    console.log(`Servidor Punto 5 corriendo en http://localhost:${PORT}`);
});
