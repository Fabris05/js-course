// El método map() permite devolver un nuevo arreglo de datos, sin tocar o alterar el arreglo original

const invoices = [
    {
        id: 1,
        name: 'Compras de Oficina',
        client: {
            name: 'John',
            lastName: 'Doe',
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
        ]
    },
    {
        id: 2,
        name: 'Compras de Computación',
        client: {
            name: 'John',
            lastName: 'Doe',
        },
        items: [
            {
                product: 'Keyboard',
                price: 399,
                quantity: 2
            },
            {
                producto: 'screen 17',
                price: 500,
                quantity: 1
            },
            {
                product: 'CPU',
                price: 1000,
                quantity: 10
            }
        ]
    },
    {
        id: 3,
        name: 'Compras de Papelería',
        client: {
            name: 'John',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'pencil',
                price: 50,
                quantity: 1
            },
            {
                product: 'Papel',
                price: 100,
                quantity: 10
            }
        ]
    }
];

console.log(invoices);


// Creamos una variable que nos devolverá un arreglo con los nombres de las boletas

const invoicesName = invoices.map(invoice => {
    return invoice.name;
});

console.log(invoicesName);

// Creamos una variable que nos devolverá un arreglo con los nombres de los clientes
const invoicesClient = invoices.map(invoice => {
    return invoice.client.name;
});

console.log(invoicesClient);

