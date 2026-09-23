import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middleware/cors.js'

// esto causó problemas con el assert y with, por cambio de versiones
// import movies from './movies.json' with { type: 'json' }

// esto es una alternativa pero puede ser mas problemático o talachudo
// leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(corsMiddleware())

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// Requiere una petición previa llamada OPTIONS

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
