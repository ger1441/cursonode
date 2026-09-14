// Esto solo en los modulos nativos
// que no tienen promesas nativas
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const fs = require('node:fs/promises');
// Si nos queremos ahorrar el fs.readFile, podemos importar directamente readFile
// import { readFile } from 'node:fs/promises';

// IIFE - Inmediately Invoked Function Expression
/*(
    async () => {
        console.log('Leyendo primer archivo....');
        const text = await fs.readFile('./archivo.txt', 'utf-8');
        console.log("Primer texto:" + text);


        console.log("--->Haciendo cosas mientras se lee el archivo....<---");

        console.log('Leyendo el segundo archivo....');
        const text2 = await fs.readFile('./archivo2.txt', 'utf-8');
        console.log("Segundo texto:" + text2);
    }
)();*/

async function init() {
    console.log('Leyendo primer archivo....');
    const text = await fs.readFile('./archivo.txt', 'utf-8');
    console.log("Primer texto:" + text);


    console.log("--->Haciendo cosas mientras se lee el archivo....<---");

    console.log('Leyendo el segundo archivo....');
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8');
    console.log("Segundo texto:" + text2);
}
init();
