import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo')
console.log('--------------------------------')

console.log('Nombre del SO: ', platform())
console.log('Versión del SO: ', release())
console.log('Arquitectura del SO: ', arch())
console.log('CPUs: ', cpus()) // <---- vamos a poder esacalar procesos en Node
console.log('Memoria libre: ', freemem() / 1024 / 1024 / 1024, 'GB')
console.log('Memoria total: ', totalmem() / 1024 / 1024 / 1024, 'GB')
console.log('Uptime: ', uptime() / 60 / 60, 'horas encendido')
