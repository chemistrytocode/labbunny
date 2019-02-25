CREATE TABLE users (
    id SERIAL,
    username VARCHAR(256),
    email VARCHAR(256),
    password VARCHAR(128),
    PRIMARY KEY (id));


CREATE TABLE orders (
    id SERIAL,
    name VARCHAR(256),
    room VARCHAR(128),
    dateReq DATE,
    period int,
    description VARCHAR(1024),
    fileupload bytea,
    chemical VARCHAR(1024),
    quantity VARCHAR(128),
    allocation VARCHAR(128),
    hazards VARCHAR(1024),
    doc VARCHAR(128),
    sets int,
    apparatus VARCHAR(1024),
    addNotes VARCHAR(1024),
    userId int,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE);
