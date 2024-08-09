// Promises

// permite ejecutar una acción de forma asincrona, es decir que se cargará todo
// el código js y despues se cargará la promesa.

import {invoiceById} from './data/invoices';

const promise = new Promise((resolve, reject) => {

    setTimeout( () => {
        const result = invoiceById(4);
        // console.log(result);
        if(result){
            resolve(result);
        }else{
            reject('Error no existe la factura por el ID');
        }
    }, 2500)
});

promise.then( (result) => {
    console.log(result);
    console.log('Realizada con exito la tarea');

}).catch( (error) => {
    console.error(error);
});


