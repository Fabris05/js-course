// En los arreglos se definen en plural siempre a diferencia de los objetos

const products = ['mesa' , 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv'); // Permite agregar elementos al arreglo

const fruits = ['Pera', 'Manzana', 'Banana', 'Fresa'];

const mercado = [...fruits, ...products, 'Lechuga', 'Papas', 'Uvas'];

console.log(mercado);


// Operador concat

const products2 = products.concat('Mouse', 'Desk', 'MoousePad');
console.log(products2);


