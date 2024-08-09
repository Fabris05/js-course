// Usaremos async y await para controlar el flujo de la aplicación

// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// Otra forma de hacerlo

const findAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const users = await response.json(); // convertimos los datos a json 

    const ul = document.createElement('ul'); // Creamos la seccion ul de HTML

    users.forEach(user => {
        const li = document.createElement('li');
        
        li.innerText = user.name; //Incrustamos los datos al li
        
        ul.append(li); // acoplamos cada li dentro del ul
        
        console.log(user.name);
    });

    document.getElementById('root').append(ul); // Acoplamos el ul dentro del div root
};

findAllUsers();