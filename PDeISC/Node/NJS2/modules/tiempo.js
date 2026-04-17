
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MÓDULO DE TIEMPO
 * Carga el componente HTML que contiene el reloj y el script para actualizarlo
 * cada segundo en el navegador del cliente.
 */
export default function getTiempo() {
    const filePath = path.join(__dirname, '..', 'components', 'tiempo.html');
    return fs.readFileSync(filePath, 'utf8');
}
