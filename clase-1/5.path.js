const path = require('node:path')

// Barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nombre de archivo (con extension)
const base = path.basename(filePath)
console.log(base)

// nombre de archivo (sin extension)
const name = path.basename(filePath, '.txt')
console.log(name)

// extension de archivo
const ext = path.extname(filePath)
console.log(ext)
