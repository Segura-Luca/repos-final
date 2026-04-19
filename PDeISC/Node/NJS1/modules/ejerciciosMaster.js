// modules/ejerciciosMaster.js
const ej1 = require('./ejercicio1');
const ej2 = require('./ejercicio2');
const ej3 = require('./ejercicio3');
const ej4 = require('./ejercicio4');
const ej5 = require('./ejercicio5');

const getAllResults = () => {
    return {
        punto1: ej1.run(),
        punto2: ej2.run(),
        punto3: ej3.run(),
        punto4: ej4.run(),
        punto5: ej5.run()
    };
};

const logResultsToConsole = () => {
    const results = getAllResults();
    console.log("\n========================================");
    console.log("=== EJECUCIÓN DE PUNTOS 1 AL 4 ===");
    console.log("========================================\n");

    console.log("Punto 1: Hola Mundo");
    results.punto1.forEach(line => console.log(` - ${line}`));
    console.log("\n----------------------------------------\n");

    console.log("Punto 2: Operaciones Básicas");
    results.punto2.forEach(line => console.log(` - ${line}`));
    console.log("\n----------------------------------------\n");

    console.log("Punto 3: Funciones de Cálculo Internas");
    results.punto3.forEach(line => console.log(` - ${line}`));
    console.log("\n----------------------------------------\n");

    console.log("Punto 4: Módulos Externos (calculos.js)");
    results.punto4.forEach(line => console.log(` - ${line}`));
    console.log("\n========================================\n");
};

module.exports = { getAllResults, logResultsToConsole };
