// Promises

// permite ejecutar una acción de forma asincrona, es decir que se cargará todo
// el código js y despues se cargará la promesa.

import {invoiceById} from './data/invoices';

// Creamos esta función la cual será ejecutada por la promesa

const findInvoicesById = (id) =>{

    const promise = new Promise((resolve, reject) => {

        setTimeout( () => {
            const result = invoiceById(id);
            if(result){
                resolve(result);
            }else{
                reject('Error no existe la factura por el ID');
            }
        }, 2500)
    });
    return promise;
};

findInvoicesById(1).then( (result) => {
    console.log(result);
    console.log('Realizada con exito la tarea');

}).catch((error) => {
    console.error(error);
});


