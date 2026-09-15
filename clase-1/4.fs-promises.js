// Esto solo en los modulos nativos
// que no tienen promesas nativas
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const fs = require('node:fs/promises') // a partir de Node 16, se recomienda poner node: antes del módulo nativo

console.log('Leyendo primer archivo....')
fs.readFile('./archivo.txt', 'utf-8')
  .then((data) => {
    console.log('Primer texto:' + data)
  })

console.log('--->Haciendo cosas mientras se lee el archivo....<---')

console.log('Leyendo el segundo archivo....')
fs.readFile('./archivo2.txt', 'utf-8')
  .then((data) => {
    console.log('Segundo texto:' + data)
  })
