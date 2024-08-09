// Operador ternario

const average = 5.9;

const status = (average >= 5.5) ? 'Aprobado' : 'Desaprobado';

console.log(`Estudiante: ${status}`);

// un ejemplo más elaborado

let max = 0;

const a = 5;
const b = 8;
const c = 13;

max = (a > b) ? a : b;

max = (max > c) ? max : c;

console.log(`El número mayor es: ${max}`);