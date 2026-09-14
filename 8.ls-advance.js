const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';
console.log('Leyendo el contenido de la carpeta:', folder);

async function ls (folder) {
    let files;
    try {
        files = await fs.readdir(folder);
    } catch (err) {
        console.error("Error al leer el directorio: ", folder);
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath);
        } catch (err) {
            console.error("No se pudo leer el archivo: ", filePath);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const symbol = isDirectory ? '📁' : '📄';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${symbol} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} bytes ${fileModified}`;
    });

    const filesInfo = await Promise.all(filePromises);
    filesInfo.forEach(info => console.log(info));
}   

ls(folder);
