// Usaremos los métodos Find, filter y otros

const papper = {
    product: 'Papel',
    price: 100,
    quantity: 10
};

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
            papper
        ]
    },
    {
        id: 2,
        name: 'Compras de Computación',
        client: {
            name: 'Juan',
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
            name: 'Pepe',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'pencil',
                price: 50,
                quantity: 1
            },
            papper
        ]
    }
];

// Usamos el método find() para encontrar un objeto que contenga un
// atributo que  coincida con el parametro asignado

// Buscamos por Id de boleta
const invoiceById = invoices.find(invoice => invoice.id === 3);
console.log(invoiceById);

// Buscamos por nombre de boleta
const invoiceByName = invoices.find(invoice => invoice.name === 'Compras de Oficina');
console.log(invoiceByName);

// Buscamos por el nombre del cliente
const invoiceByClient = invoices.find(invoice => invoice.client.name === 'Juan');
console.log(invoiceByClient);


// Usamos el método filter() para crear un nuevo objeto con elementos que
// cumplan una cierta condicion predefinida

// Filtramos los Ids mayores que 1
const invoiceFilter = invoices.filter(invoice => invoice.id > 1);
console.log(invoiceFilter);

// Excluimos un Id de la busqueda usando el método filter
const invoiceDeleted = invoices.filter(invoice => invoice.id != 2);
console.log(invoiceDeleted);

// Filtramos las facturas que contengan el atributo paper
const invoiceByProduct = invoices.filter(invoice => invoice.items.includes(papper));
console.log(invoiceByProduct);


// El método some() nos permite devolver un true o false, dependiendo si en el arreglo existe un
// objeto que cumpla con el parámetro establecido

const result = invoices.some(invoice => invoice.client.name === 'John');
console.log(result);

// se puede usar en un if o en un operador ternario para validar ciertos atributos