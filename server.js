const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const db = require("./database/dbConnect")

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const app = express();
const dev = app.get("env") !== "production";

// if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

 app.use(express.static(path.resolve(__dirname, "build")));

  app.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
 // }

 // app.get('/auth/google',
 //   passport.authenticate('google', { scope: ['profile'] }));
 //
 // app.get('/auth/google/callback',
 //   passport.authenticate('google', { failureRedirect: '/login' }),
 //   function(req, res) {
 //     // Successful authentication, redirect home.
 //     res.redirect('/order');
 //   });


const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/reqs', db.getReqs)
app.post('/reqs', db.addReq)

app.get('/reqs/:id', db.getReqsById)
app.get('/reqs/:date', db.getReqsByDate)

app.get('/user', db.getUsers)
app.get('/user/:email', db.getUserByEmail)
app.post('/user', db.addUser)

// app.get('/users/:id', db.getUserById)
// app.get('/spaces', db.getSpaces)
// app.get('/spaces/:id', db.getSpaceById)
// app.get('/users/login/:email', db.getUserByEmail)
// app.post('/spaces/new', db.createSpace)
// app.post('/users/new', db.createUser)

//
// app.get("*", (req, res) => {
//   res.json(db.getUsers(req,res))
//   console.log("here");
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// })

const server = createServer(app);
server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server Started!");
});
