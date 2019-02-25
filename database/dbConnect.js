const Pool = require("pg").Pool;
const pool = new Pool({
  user: "oyznzsbotwwyai",
  host: "ec2-54-228-224-37.eu-west-1.compute.amazonaws.com",
  database: "d81q34vh3prve",
  password: "bdfda2a5290dd59d7b7d239493f22d63c856cea37300bcda0326894f87b1780c",
  port: 5432,
  ssl: true
});

// Connect to DB:
// heroku pg:psql postgresql-metric-97293 --app labbunny

console.log("Hello to the New World");

const connect = () => {
  return pool
}


const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    // JSON.stringify(thing)

  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserByEmail = (request, response) => {
  const email = request.params.email
  pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSpaces = (request, response) => {
  pool.query('SELECT * FROM spaces', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSpaceById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(`SELECT * FROM spaces WHERE id = ${id}`, (error, results) => {

    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSpace = (request, response) => {
  const { name, description, ppn, location, bedrooms, beds, host } = request.body

  pool.query(`INSERT INTO spaces (name, description, ppn, location, bedrooms, beds, host) VALUES (
    '${name}',
    '${description}',
    '${ppn}',
    '${location}',
    '${bedrooms}',
    '${beds}',
    '${host}')`,
    (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Submission Successful`)
  })
}

const createUser = (request, response) => {
  const { name, email, password } = request.body
  console.log(request.body)
  pool.query(`INSERT INTO users (name, email, password) VALUES (
    '${name}',
    '${email}',
    '${password}')`,
    (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Submission Successful`)
  })
}


module.exports = {
  getUsers,
  getUserById,
  getSpaces,
  getSpaceById,
  createSpace,
  getUserByEmail,
  createUser
}
