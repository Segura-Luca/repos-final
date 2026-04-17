import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MÓDULO DE CLIMA
 * Recupera el HTML del componente que consulta la API de clima en el navegador.
 * Este componente es dinámico y usa geolocalización por IP.
 */
export default function getClima() {
    const filePath = path.join(__dirname, '..', 'components', 'clima.html');
    return fs.readFileSync(filePath, 'utf8');
}