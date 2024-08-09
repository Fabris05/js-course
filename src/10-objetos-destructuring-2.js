// En este apartado vamos a extraer los atributos que posee un objeto
const user = {
    username: 'Andres',
    email: 'andres@gmail.com',
    age: 20,
    ranking: 9
}

const detail = (user) => {
    const {username, email} = user;

    console.log(`El detalle del usuario ${username} con correo ${email}`);
}

detail(user);

// Una forma más limpia es desestructurar el objeto en el
// arguemento de la función

const detail2 = ({username, email}) => {
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}

detail2(user);


// O también ...

const detail3 = (user) => {
    console.log(`El detalle del usuario ${user.username} con correo ${user.email}`);
}

detail3(user);
