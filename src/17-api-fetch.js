// Usaremos Fetch para realizar peticiones asíncronas HTTP a un servidor externo,
// el cual nos devolverá datos con los que podemos trabajar.

const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

httpClient.then(response => {
  
    response.json().then(data => {
        console.log(data);
    });
});

// Otra forma de realizarlo, pero más resumido

httpClient
    .then(response => response.json())
    .then(data => console.log(data));