// fs => FileSystem (Sistema de archivos)
const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes del módulo nativo

// fs.readFileSync() => lee un archivo de manera síncrona
const stats = fs.statSync('./archivo.txt') // devuelve un objeto con información del archivo
console.log(
  stats.isFile(), // es un fichero
  stats.isDirectory(), // es un directorio
  stats.isSymbolicLink(), // es un enlace simbólico
  stats.size // tamaño del archivo en bytes
)
