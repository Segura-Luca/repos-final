// modules/calculos.js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

module.exports = { sumar, restar, multiplicar, dividir };
