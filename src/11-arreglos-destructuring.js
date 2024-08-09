

const users = ['Pepe', 'Ana', 'María', 'Juan', 'Sebastian', 'Carlos', 'Josefa'];

const [pepe, b, maria, ...rest] = users;

console.log(pepe, b, maria, ...rest);

// Utilizamos el operador Spread ... para obtener los demás
// datos del arreglo, esto es útil por si tenemos una gran
// cantidad de datos en el arreglo, tambien lo usamos en el
// print para obtener los datos de forma desestructurada.