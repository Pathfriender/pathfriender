-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS character_skills;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS weapons CASCADE;
DROP TABLE IF EXISTS armor CASCADE;
DROP TABLE IF EXISTS proficiencies CASCADE;

CREATE TABLE skills (
  skills_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  skill_name TEXT,
  skill_stat TEXT
);

CREATE TABLE characters(
    character_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT,
    character_name TEXT,
    experience BIGINT,
    class TEXT,
    race TEXT,
    -- subrace int column?
    feats TEXT,
    background TEXT,
    dexterity INT,
    strength INT,
    intelligence INT,
    constitution INT,
    wisdom INT,
    charisma INT
);
/
CREATE TABLE character_skills (
  character_skills_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  character_id INTEGER,
  skill_id INTEGER,
  bonus INTEGER, 
  FOREIGN KEY (character_id) REFERENCES characters(character_id),
  FOREIGN KEY (skill_id) REFERENCES skills(skills_id)
);

CREATE TABLE armor (
    armor_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    armor_name TEXT,
    armor_type TEXT,
    armor_ac INT,
    armor_weight INT,
    armor_value INT,
    armor_description TEXT
);
CREATE TABLE weapons (
    weapon_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    weapon_name TEXT,
    weapon_type TEXT,
    weapon_damage TEXT,
    weapon_weight INT,
    weapon_value INT,
    weapon_description TEXT
);
CREATE TABLE items (
    item_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_name TEXT,
    item_type TEXT,
    item_description TEXT
);
CREATE TABLE inventory (
    inventory_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    character_id INT,
    weapon_id BIGINT,
    armor_id BIGINT,
    item_id BIGINT,
    FOREIGN KEY (character_id) REFERENCES characters(character_id),
    FOREIGN KEY (weapon_id) REFERENCES weapons(weapon_id),
    FOREIGN KEY (armor_id) REFERENCES armor(armor_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
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

CREATE TABLE proficiencies(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY  ,
    skill_id INT,
    character_id INT,
    FOREIGN KEY (character_id) REFERENCES characters(character_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id),)