CREATE TABLE users (
    id SERIAL,
    username VARCHAR(256),
    email VARCHAR(256),
    password VARCHAR(128),
    PRIMARY KEY (id));


CREATE TABLE orders (
    id SERIAL,
    teacher VARCHAR(256),
    room VARCHAR(128),
    dateReq DATE,
    period VARCHAR(128),
    description VARCHAR(1024),
    fileupload bytea,
    chemical VARCHAR(1024),
    quantity VARCHAR(128),
    allocation VARCHAR(128),
    hazards VARCHAR(1024),
    sets VARCHAR(128),
    apparatus VARCHAR(1024),
    addNotes VARCHAR(1024),
    userId int,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE);

INSERT INTO orders (teacher, room, period, description, chemical, quantity, allocation, hazards, sets, apparatus, addnotes) VALUES ('Paul', 'OC1', 1, 'Test Submission', 'Hydrochloric Acid', '2dm3', 'bulk', 'Corrosive', 16, 'Glassware', 'Noting to add');
