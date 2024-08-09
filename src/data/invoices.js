
// Utilizamos la palabra 'export' para exportar datos que deseemos a otro archivo

export const papper = {
    product: 'Papel',
    price: 100,
    quantity: 10
};

export const invoices = [
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

// Esta función recibe un parámetro y así lo busca
export const invoicesByClientName = (clientname) => {
    return invoices.find(invoice => invoice.client.name === clientname);
};

export const invoiceById = (id) => {
    return invoices.find(invoice => invoice.id === id);
};

// Exportación por defecto
export default (clientName) => {
    return invoices.find(invoice => invoice.client.name === clientName);
}

// Tambien se puede exportar de la siguiente forma:
/*
export {
    papper,
    invoices as default,
    invoicesByClientName
    invoiceById
}
*/