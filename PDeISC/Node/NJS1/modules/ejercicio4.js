// modules/ejercicio4.js
const { sumar, restar, multiplicar, dividir } = require('./calculos');

const run = () => {
    return [
        "--- Resultados usando CommonJS (require) ---",
        `Suma (5 + 3): ${sumar(5, 3)}`,
        `Resta (8 - 6): ${restar(8, 6)}`,
        `Multiplicación (3 * 11): ${multiplicar(3, 11)}`,
        `División (30 / 5): ${dividir(30, 5)}`
    ];
};

module.exports = { run };
