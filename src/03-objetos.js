//Objeto básico

/*
Un onjeto en js posee la esctructura de un archivo JSON
y se declara de la siguiente forma:
*/

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'John Doe',
    total: 1000
};

invoice.client = 'Leo';

console.log(invoice.client);

// objeto relacionado con otros objetos y/o métodos

const invoicePlus = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'John',
        lastName: 'Doe',
        age: '35'
    },
    total: 1000,
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
};

console.log(invoicePlus); // Imprime el total del objeto

const greeting = invoicePlus.greeting(); // imprimir el método del objeto
console.log(greeting);


// Arreglos dentro de un objeto

const invoiceItems = {
    id: 10,
    name: 'Compras de Oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'John',
        lastName: 'Doe',
        age: 20
    },
    items: [
        {
            product: 'Keyboard',
            price: 399,
            quantity: 2
        },
        {
            producto: 'mouse',
            price: 200,
            quantity: 1
        },
        {
            product: 'Papel',
            price: 100,
            quantity: 10
        }
    ],
    total: function() {
        let total = 0;

        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        
        return total;
    }
};

console.log(invoiceItems.total());