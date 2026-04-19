// modules/ejercicio5.js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Error");

const run = () => {
    return [
        // Cuentas del Punto 2
        { op: "Suma (4 + 5)", res: 4 + 5 },
        { op: "Resta (3 - 6)", res: 3 - 6 },
        { op: "Multiplicación (2 * 7)", res: 2 * 7 },
        { op: "División (20 / 4)", res: 20 / 4 },
        // Cuentas del Punto 4
        { op: "Suma (5 + 3)", res: sumar(5, 3) },
        { op: "Resta (8 - 6)", res: restar(8, 6) },
        { op: "Multiplicación (3 * 11)", res: multiplicar(3, 11) },
        { op: "División (30 / 5)", res: dividir(30, 5) }
    ];
};

module.exports = { run, sumar, restar, multiplicar, dividir };
