const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes del módulo nativo

console.log('Leyendo primer archivo....')
const text = fs.readFileSync('./archivo.txt', 'utf-8') // devuelve el contenido del archivo
console.log('Primer texto:' + text)

console.log('Leyendo el segundo archivo....')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8') // devuelve el contenido del archivo
console.log('Segundo texto:' + secondText)
