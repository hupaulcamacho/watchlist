DROP DATABASE IF EXISTS assessment_db;

CREATE DATABASE assessment_db;

\c assessment_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    avatar_url VARCHAR NOT NULL,
    password_digest VARCHAR NOT NULL
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    img_url VARCHAR NOT NULL,
    genre_id INT REFERENCES genres(id)
);

CREATE TABLE user_watchlist (
    id SERIAL PRIMARY KEY,
    show_id INT REFERENCES shows(id),
    user_id INT REFERENCES users(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR,
    user_id INT REFERENCES users(id),
    show_id INT REFERENCES shows(id)
);

-- INSERT GENRES
INSERT INTO genres (genre_name) VALUES ('Adventure'); -- 1
INSERT INTO genres (genre_name) VALUES ('Drama'); -- 2
INSERT INTO genres (genre_name) VALUES ('Comedy'); -- 3
INSERT INTO genres (genre_name) VALUES ('Fantasy'); -- 4
INSERT INTO genres (genre_name) VALUES ('Horror'); -- 5
INSERT INTO genres (genre_name) VALUES ('Sci-Fi'); -- 6
INSERT INTO genres (genre_name) VALUES ('Romance'); -- 7
INSERT INTO genres (genre_name) VALUES ('Anime'); -- 8


-- INSERT SHOWS
INSERT INTO shows (title, img_url, genre_id) -- 1
VALUES ('Game of Thrones', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 1);

INSERT INTO shows (title, img_url, genre_id) -- 2
VALUES ('The Flash', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 1);

INSERT INTO shows (title, img_url, genre_id) -- 3
VALUES ('Dragon Ball Super', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/rs2d7K7yPiieuNvDltxbJpTJgQX.jpg', 8);

INSERT INTO shows (title, img_url, genre_id) -- 4
VALUES ('Naruto Shippūden', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg', 8);

INSERT INTO shows (title, img_url, genre_id) -- 5
VALUES ('Greys Anatomy', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/eqgIOObafPJitt8JNh1LuO2fvqu.jpg', 2);

INSERT INTO shows (title, img_url, genre_id) -- 6
VALUES ('The Simpsons', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/yTZQkSsxUFJZJe67IenRM0AEklc.jpg', 3);

INSERT INTO shows (title, img_url, genre_id) -- 7
VALUES ('Demon Slayer: Kimetsu no Yaiba', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/wrCVHdkBlBWdJUZPvnJWcBRuhSY.jpg', 8);

INSERT INTO shows (title, img_url, genre_id) -- 8
VALUES ('grown-ish', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/qW09EwhLgMdhaIS7w6mnHP2pbK5.jpg', 3);

-- INSERT COMMENTS
-- INSERT INTO comments (comment_body, user_id, show_id)
-- VALUES ('BEST SHOW EVER!!', 1, 1);
-- INSERT INTO comments (comment_body, user_id, show_id)
-- VALUES ('Of course you would think so Jon', 2, 1);