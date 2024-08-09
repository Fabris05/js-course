// En este apartado vamos a extraer los atributos que posee un objeto
const user = {
    username: 'Andres',
    email: 'andres@gmail.com',
    age: 20,
    ranking: 9
}

const {username, ranking, age} = user; // extraemos los atributos del objeto,

// Otra forma de hacerlo similar al metodo get

// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;


console.log(username);
console.log(ranking);
console.log(age);

console.log(`El usuario ${username} con edad ${age} ranking ${ranking}`);