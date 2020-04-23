-- Drops the wishes_db if it already exists --
DROP DATABASE IF EXISTS burger_list;

-- Create the database wishes_db and specified it for use.
CREATE DATABASE burger_list;

USE burger_list;

-- Create the table wishes.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(45) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

