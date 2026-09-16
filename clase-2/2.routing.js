const http = require('node:http')
const dittoJSON = require('./pokemon/dito.json')
const psyduckJSON = require('./pokemon/psyduck.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
          return res.end('<h1>Bienvenido a mi página de inicio!!</h1>')
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        case '/pokemon/psyduck':
          res.setHeader('Contente-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(psyduckJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404 - Página no encontrada</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404 - Página no encontrada</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000')
})
