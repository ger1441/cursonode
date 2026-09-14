// Esto solo en los modulos nativos
// que no tienen promesas nativas
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises';

console.log('Leyendo primer archivo....');
const text = await readFile('./archivo.txt', 'utf-8');
console.log("Primer texto:" + text);

console.log("--->Haciendo cosas mientras se lee el archivo....<---");

console.log('Leyendo el segundo archivo....');
const text2 = await readFile('./archivo2.txt', 'utf-8');
console.log("Segundo texto:" + text2);
