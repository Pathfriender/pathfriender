-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLES IF EXISTS skills;

CREATE TABLE skills (
  id INTEGER PRIMARY KEY,
  skill_name TEXT,
  skill_stat TEXT
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

