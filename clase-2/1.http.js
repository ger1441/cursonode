const http = require('node:http')
const desiredPort = 3000
const fs = require('node:fs')

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.statusCode = 200

  if (req.url === '/') {
    res.end('Bienvenido a mi página de inicio!!')
  } else if (req.url === '/zoro') {
    fs.readFile('./zoro.JPG', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Error al cargar la imagen</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<hr>Contacto</hr>')
  } else {
    res.statusCode = 404
    res.end('<h1>404 - Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
