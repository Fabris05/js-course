// Operador Spread

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

//const invoice2 = invoice;

const invoice2 = {...invoice}

const result = invoice == invoice2;

if(result){
    console.log(result)
}else {
    console.log('no son iguales');   
}

invoice2.id = 2;

console.log(result);