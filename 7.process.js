// argumentos de entrada
// console.log(process.argv)


// controlar el proceso y su salida
// process.exit(1);

// podemos controlar eventos del proceso
//process.on('exit', (code) => {
    // limpiar recursos
//});

// current working directory
// desde donde estamos ejecutando el proceso
console.log("Directorio de trabajo actual:", process.cwd());

// plataforma
console.log(process.env.PEPITO);
// SE EJECUTA CON
// $env:PEPITO="hola"; node .\7.process.js
// PARA QUE TOME EL VALOR DE PEPITO