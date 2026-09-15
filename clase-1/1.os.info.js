const os = require('node:os')

console.log('Información del sistema operativo')
console.log('--------------------------------')

console.log('Nombre del SO: ', os.platform())
console.log('Versión del SO: ', os.release())
console.log('Arquitectura del SO: ', os.arch())
console.log('CPUs: ', os.cpus()) // <---- vamos a poder esacalar procesos en Node
console.log('Memoria libre: ', os.freemem() / 1024 / 1024 / 1024, 'GB')
console.log('Memoria total: ', os.totalmem() / 1024 / 1024 / 1024, 'GB')
console.log('Uptime: ', os.uptime() / 60 / 60, 'horas encendido')
