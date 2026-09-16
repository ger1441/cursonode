const express = require('express')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  const dittoJSON = require('./pokemon/dito.json')
  res.send(JSON.stringify(dittoJSON))
})

app.get('/pokemon/psyduck', (req, res) => {
  const psyduckJSON = require('./pokemon/psyduck.json')
  res.json(psyduckJSON)
})

app.post('/pokemon', (req, res) => {
  let body = ''
  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(200).json(data)
  })
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on PORT http://localhost:${PORT}`)
})
