const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes del módulo nativo

console.log('Leyendo primer archivo....')
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log('Primer texto:' + data)
})

console.log('--->Haciendo cosas mientras se lee el archivo....<---')

console.log('Leyendo el segundo archivo....')
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log('Segundo texto:' + data)
})
