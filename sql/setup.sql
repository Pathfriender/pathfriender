-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS character_skills;
DROP TABLE IF EXISTS characters CASCADE;

CREATE TABLE skills (
  skills_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  skill_name TEXT,
  skill_stat TEXT
);

CREATE TABLE character_skills (
  character_skills_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  character_id INTEGER,
  skill_id INTEGER,
  bonus INTEGER  
);

CREATE TABLE characters(
    character_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT,
    character_name TEXT,
    experience BIGINT,
    class TEXT,
    race TEXT,
    dexterity INT,
    strength INT,
    intelligence INT,
    constitution INT,
    wisdom INT,
    charisma INT
);

INSERT INTO characters(
    user_id,
    character_name,
    experience,
    class,
    race,
    dexterity,
    strength,
    intelligence,
    constitution,
    wisdom,
    charisma)
VALUES (168878383856353281, 'K''rrok Sshvashiek', 48000, 'Monk', 'Kobold', 20, 8, 13, 16, 18, 10);

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
