/**
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
 *
 * - [X] Un nuevo Set con los nombres de tu familia
 * - [X]Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
 * - [X]Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
 */

let nombres = new Set(['Jesús','Isabel','Leire','Ricardo','Lorena']);
console.log(nombres);
nombres.add('Jesús');
console.log(nombres);
nombres.add('Javascript');
console.log(nombres);

