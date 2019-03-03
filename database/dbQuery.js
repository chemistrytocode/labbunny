import connect from "dbConnect";

// Connect to DB:
// heroku pg:psql postgresql-metric-97293 --app labbunny

var pool = connect()

console.log("Hello to the New World");

const getReqs = (request, response) => {
  pool.query('SELECT * FROM requisitions', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    // JSON.stringify(thing)
  })
}

const addReq = (request, response) => {
  const { teacher, room, description, fileUpload, chemical, quantity, allocation, hazards, sets, apparatus, addNotes } = request.body

  pool.query(`INSERT INTO spaces (name, room, description, fileUpload, chemical, quantity, allocation, hazards, sets, apparatus, addNotes) VALUES (
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
