// Usaremos la importación y exportación de archivos JS
import exportClientsName ,{invoices, papper, invoicesByClientName} from './data/invoices';



const invoicesName = invoices.map(invoice => invoice.name);
console.log(invoicesName);

const invoiceById = invoices.find(invoice => invoice.id === 3);
console.log(invoiceById);

const invoiceByName = invoices.find(invoice => invoice.name === 'Compras de Oficina');
console.log(invoiceByName);


// Buscamos a un cliente mediante una función exportada asignandole un parámetro
console.log('Buscar a cliente');
console.log(invoicesByClientName('Pepe')); // Le asignamos el parámetro
console.log(exportClientsName('John'));

const invoiceFilter = invoices.filter(invoice => invoice.id > 1);
console.log(invoiceFilter);

const invoiceDeleted = invoices.filter(invoice => invoice.id != 2);
console.log(invoiceDeleted);

const invoiceByProduct = invoices.filter(invoice => invoice.items.includes(papper));
console.log(invoiceByProduct);

const result = invoices.some(invoice => invoice.client.name === 'John');
console.log(result);