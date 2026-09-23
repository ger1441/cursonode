import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3308,
  password: 'node_secret',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    const [movies] = await connection.query(
      'SELECT BIN_TO_UUID(movie.id) id, title, year, director, duration, poster, rate, name FROM moviesdb.movie ' +
      'INNER JOIN movie_genres as mg ON movie.id = mg.movie_id ' +
      'INNER JOIN genre ON genre.id = mg.genre_id;'
    )
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()
      return movies.filter(movie => movie.name.toLowerCase() === lowerCaseGenre)
    }
    return movies
  }

  static async getById ({ id }) {
    const [movies] = await connection.query(
      `SELECT BIN_TO_UUID(movie.id) id, title, year, director, duration, poster, rate 
      FROM movie WHERE id = UUID_TO_BIN(?);`, [id]
    )
    if (movies.length === 0) return null
    return movies[0]
  }

  static async create ({ input }) {

  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
