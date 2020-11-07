DROP DATABASE IF EXISTS text_to_speech;
CREATE DATABASE text_to_speech;

CREATE TABLE comments (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    comment TEXT,
    path TEXT
)