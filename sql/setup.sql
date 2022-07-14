-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS character_skills;
DROP TABLE IF EXISTS characters CASCADE;

CREATE TABLE skills (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  skill_name TEXT,
  skill_stat TEXT
);

CREATE TABLE character_skills (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  character_id INTEGER,
  skill_id INTEGER,
  bonus INTEGER  
);

CREATE TABLE characters(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    character_id INTEGER,
    character_name TEXT,
    experience INTEGER,
    race TEXT,
    dexterity INT,
    strength INT,
    intelligence INT,
    constitution INT,
    wisdow INT,
    charisma INT
);

INSERT INTO skills
(skill_name, skill_stat)

VALUES
('acrobatics','dexterity'),
('animal handling','wisdom'),
('arcana','intelligence'),
('athletics','strength'),
('deception','charisma'),
('history','intelligence'),
('insight','wisdom'),
('intimidation','charisma'),
('investigation','intelligence'),
('medicine','wisdom'),
('nature','intelligence'),
('perception','wisdom'),
('performance','charisma'),
('persuasion','charisma'),
('religion','intelligence'),
('sleight of hand','dexterity'),
('stealth','dexterity'),
('survival','wisdom');

