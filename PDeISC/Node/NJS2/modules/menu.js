
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MÓDULO DE CARGA DEL MENÚ
 * Este módulo se encarga de leer el archivo HTML del menú y devolver su contenido
 * para que el servidor lo inyecte en las páginas.
 */
export default function getMenu() {
    // Definimos la ruta absoluta al componente HTML
    const filePath = path.join(__dirname, '..', 'components', 'menu.html');
    // Leemos y devolvemos el contenido del archivo de forma síncrona
    return fs.readFileSync(filePath, 'utf8');
}
