const products = ['mesa' , 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv'); // Permite agregar elementos al arreglo

console.log(products);

// Iteramos con el forEach
products.forEach( product => {
    console.log(product);
});

// Otra forma de hacerlo con for
for(const prod of products){
    console.log(prod);
}

// Forma clásica de hacerlo
for(let i = 0; i < products.length; i++){
    let elements = products[i];
    console.log(elements);
}

// Prueba con map
products.map(product => {
    console.log(product);
});

