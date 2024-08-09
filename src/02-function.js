
// función normal con parametros

function sayHello(name = 'Pepe', age = 10){
    
    const greeting = `Hola mundo function ${name} edad ${age}`;
    return greeting;
}

const result = sayHello();

console.log(result);


// función anomima

const saludo = function (name = 'Pepe', age = 10){
    
    const greeting = `Hola mundo function ${name} edad ${age}`;
    return greeting;
}

console.log(saludo());


// función flecha

const arrowFunction = (name = 'Pedro', age = 35) =>{
    
    const greeting = `Hola mundo function ${name} edad ${age}`;
    return greeting;
}

console.log(arrowFunction());