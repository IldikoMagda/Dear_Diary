DROP TABLE IF EXISTS users, entries;
CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY, 
    username VARCHAR(70) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);
CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    title VARCHAR(100), 
    category VARCHAR(100),
    content VARCHAR(1500),
    time_of_entry TIMESTAMP,
    PRIMARY KEY (entry_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users(username, password)
VALUES ('Bee', 'secureandsafe'), ('Ildiko', 'passwordyouneverguess');
INSERT INTO entries( user_id, title, category, content, time_of_entry)
VALUES (1, 'Bee s adventures to the Matrix', 'Sci-Fi', 'A long long time ago in a galaxy far away....', NOW()),
     (2, 'Ildiko had a dream about some strange sorcerers', 'Action', 'I find your lack of faith disturbing', NOW())
