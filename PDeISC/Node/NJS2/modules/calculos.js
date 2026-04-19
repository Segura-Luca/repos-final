
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MÓDULO DE CALCULADORA
 * Proporciona el HTML de la calculadora de interés compuesto.
 * Separa la interfaz de la lógica de negocio para una mejor organización.
 */
export default function getCalculadora() {
    const filePath = path.join(__dirname, '..', 'components', 'calculadora.html');
    return fs.readFileSync(filePath, 'utf8');
}
