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

const connect = () => {
  return pool
}

const getReqs = (request, response) => {
  pool.query('SELECT * FROM orders', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addReq = (request, response) => {
  console.log("AddReq")
  const { teacher, room, description, fileUpload, chemical, quantity, allocation, hazards, sets, apparatus, addNotes } = request.body

  pool.query(`INSERT INTO orders (name, room, description, fileUpload, chemical, quantity, allocation, hazards, sets, apparatus, addNotes) VALUES (
    '${name}',
    '${room}',
    '${description}',
    '${fileUpload}',
    '${chemical}',
    '${quantity}',
    '${allocation}'),
    '${hazards}'),
    '${sets}'),
    '${apparatus}'),
    '${addNotes}')`,
    (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Submission Successful`)
  })
}

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)
//   pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const getUserByEmail = (request, response) => {
//   const email = request.params.email
//   pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const getSpaces = (request, response) => {
//   pool.query('SELECT * FROM spaces', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const getSpaceById = (request, response) => {
//   const id = parseInt(request.params.id)
//   pool.query(`SELECT * FROM spaces WHERE id = ${id}`, (error, results) => {
//
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
//
// const createUser = (request, response) => {
//   const { name, email, password } = request.body
//   console.log(request.body)
//   pool.query(`INSERT INTO users (name, email, password) VALUES (
//     '${name}',
//     '${email}',
//     '${password}')`,
//     (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`Submission Successful`)
//   })
// }



module.exports = {
  getReqs,
  addReq
}
