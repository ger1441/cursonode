const express = require('express')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y que tienen Content-Tpye application/json
  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la info en req.body
    req.body = data
    next()
  })
})

// otra forma más simplicada de hacer lo anterior de linea 11 a 29
// app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
  const dittoJSON = require('./pokemon/dito.json')
  res.send(JSON.stringify(dittoJSON))
})

app.get('/pokemon/psyduck', (req, res) => {
  const psyduckJSON = require('./pokemon/psyduck.json')
  res.json(psyduckJSON)
})

app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bd
  res.status(201).json(req.body)
})

// la última a la que llegará
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on PORT http://localhost:${PORT}`)
})
