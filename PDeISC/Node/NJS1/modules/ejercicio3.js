// modules/ejercicio3.js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b === 0 ? "No se puede dividir por cero" : a / b);

const run = () => {
    return [
        `Resultado suma (4, 5): ${sumar(4, 5)}`,
        `Resultado resta (3, 6): ${restar(3, 6)}`,
        `Resultado multiplicación (2, 7): ${multiplicar(2, 7)}`,
        `Resultado división (20, 4): ${dividir(20, 4)}`
    ];
};

module.exports = { run, sumar, restar, multiplicar, dividir };
