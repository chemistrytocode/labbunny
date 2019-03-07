import connect from "dbConnect";

// Connect to DB:
// heroku pg:psql postgresql-metric-97293 --app labbunny

var pool = connect()

console.log("Hello to the New World");
