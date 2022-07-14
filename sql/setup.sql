-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS Characters CASCADE;
-- DROP TABLE IF EXISTS Skills;
-- DROP TABLE IF EXISTS CharacterSkills;

CREATE TABLE Characters (
    character_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    value INT NOT NULL
);

INSERT INTO Characters (value) (
    VALUES (15), (21)
);