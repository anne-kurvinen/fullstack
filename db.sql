CREATE TABLE cities (
  id serial PRIMARY KEY,
  name text UNIQUE NOT NULL,
  population INTEGER NOT NULL
);

INSERT INTO cities (name, population)
  VALUES ('Stockholm', 1372565);

INSERT INTO cities (name, population)
  VALUES ('Göteborg', 549839);

INSERT INTO cities (name, population)
  VALUES ('Malmö', 400000);

SELECT * FROM cities;

CREATE TABLE people (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  city INTEGER,
  FOREIGN KEY(city) REFERENCES cities(id)
);

INSERT INTO people (name, city) 
 VALUES ('Jane Doe', 1);

SELECT * FROM people;