// Operador Optinal Chaining ? 

const invoice = {
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
    },
    greeting: function(){
        return `Hola: ${this.client.name}`;
    }
};

/*
Aquí validamos que si no existe el valor que necesitamos,
la aplicacion no retorna error, sino que retornará un
undefined, se puede colocar varias veces en el return

su simbolo es un ? y se coloca despues del nombre
del objeto 
*/

console.log(invoice.company?.name);
console.log(invoice.client?.address?.street);

// Forma antigua de hacerlo
if(invoice.company != undefined && invoice.company.name){
    console.log('Perfecto');
}else{
    console.log('No viene la empresa');
}