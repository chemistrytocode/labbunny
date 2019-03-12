CREATE TABLE users (
    useremail VARCHAR(256),
    username VARCHAR(256),
    PRIMARY KEY (useremail));

CREATE TABLE orders (
    id SERIAL,
    teacher VARCHAR(256),
    room VARCHAR(128),
    dateReq DATE,
    period VARCHAR(128),
    description VARCHAR(1024),
    form VARCHAR(128),
    fileupload bytea,
    chemical VARCHAR(1024),
    quantity VARCHAR(128),
    allocation VARCHAR(128),
    hazards VARCHAR(1024),
    sets VARCHAR(128),
    apparatus VARCHAR(1024),
    addNotes VARCHAR(1024),
    userEmail VARCHAR(128),
    PRIMARY KEY (id),
    FOREIGN KEY (useremail) REFERENCES users(useremail) ON UPDATE CASCADE ON DELETE CASCADE);
