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
  return pool;
};

const getReqs = (request, response) => {
  pool.query("SELECT * FROM orders", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows)
    response.status(200).json(results.rows);
  });
};

const getReqsById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query(`SELECT * FROM orders WHERE (id) = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    // JSON.stringify(thing)
  })
}

const getReqsByDate = (request, response) => {
  const date = request.params.date
  pool.query(`SELECT * FROM orders WHERE (dateReq) = ${date}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    // JSON.stringify(thing)
  })
}


const addReq = (request, response) => {
  console.log("AddReq");
  const {
    teacher,
    room,
    dateReq,
    period,
    description,
    fileUpload,
    chemical,
    quantity,
    allocation,
    sets,
    hazards,
    apparatus,
    addNotes } = request.body;

  pool.query(
    `INSERT INTO orders (teacher, room, dateReq, period, description, fileUpload, chemical, quantity, allocation, sets, hazards, apparatus, addNotes) VALUES ('${teacher}', '${room}', '${dateReq}', '${period}', '${description}', '${fileUpload}', '${chemical}', '${quantity}', '${allocation}', '${sets}', '${hazards}', '${apparatus}', '${addNotes}')`,
    (error, results) => {
      if (error) {
        console.log("error thrown at add query");
        console.log(error);
        throw error;
      }
      response.status(201).send(`Submission Successful`);
    }
  );
};

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
  addReq,
  getReqsById,
  getReqsByDate
};
