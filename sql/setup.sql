-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS feats CASCADE;
DROP TABLE IF EXISTS character_feats;
DROP TABLE IF EXISTS character_skills;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS weapons_table CASCADE;
DROP TABLE IF EXISTS armortable CASCADE;
DROP TABLE IF EXISTS proficiencies CASCADE;
DROP TABLE IF EXISTS armortable CASCADE;
DROP TABLE IF EXISTS armortable CASCADE;

CREATE TABLE weapons_table(
   name                  VARCHAR(15) NOT NULL PRIMARY KEY
  ,slug                  VARCHAR(14) NOT NULL
  ,category              VARCHAR(22) NOT NULL
  ,document_slug         VARCHAR(8) NOT NULL
  ,document_title        VARCHAR(26) NOT NULL
  ,document_license_url  VARCHAR(23) NOT NULL
  ,cost                  VARCHAR(5) NOT NULL
  ,damage_dice           VARCHAR(4) NOT NULL
  ,damage_type           VARCHAR(11)
  ,weight                VARCHAR(7) NOT NULL
  ,properties0           VARCHAR(26)
  ,properties1           VARCHAR(20)
  ,properties2           VARCHAR(20)
  ,properties            VARCHAR(30)
  ,properties3           VARCHAR(10)
);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Club','club','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','1 sp','1d4','bludgeoning','2 lb.','light',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Dagger','dagger','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','2 gp','1d4','piercing','1 lb.','finesse','light','thrown (range 20/60)',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Greatclub','greatclub','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','2 sp','1d8','bludgeoning','10 lb.','two-handed',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Handaxe','handaxe','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 gp','1d6','slashing','2 lb.','light','thrown (range 20/60)',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Javelin','javelin','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 sp','1d6','piercing','2 lb.','thrown (range 30/120)',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Light hammer','light-hammer','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','2 gp','1d4','bludgeoning','2 lb.','light','thrown (range 20/60)',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Mace','mace','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 gp','1d6','bludgeoning','4 lb.',NULL,NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Quarterstaff','quarterstaff','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','2 sp','1d6','bludgeoning','4 lb.','versatile (1d8)',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Sickle','sickle','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','1 gp','1d4','slashing','2 lb.','light',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Spear','spear','Simple Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','1 gp','1d6','piercing','3 lb.','thrown (range 20/60)','versatile (1d8)',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Crossbow, light','crossbow-light','Simple Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','25 gp','1d8','piercing','5 lb.','ammunition (range 80/320)','loading','two-handed',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Dart','dart','Simple Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 cp','1d4','piercing','1/4 lb.','finesse','thrown (range 20/60)',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Shortbow','shortbow','Simple Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','25 gp','1d6','piercing','2 lb.','ammunition (range 80/320)','two-handed',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Sling','sling','Simple Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','1 sp','1d4','bludgeoning','0 lb.','ammunition (range 30/120)',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Battleaxe','battleaxe','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 gp','1d8','slashing','4 lb.','versatile (1d10)',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Flail','flail','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 gp','1d8','bludgeoning','2 lb.',NULL,NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Glaive','glaive','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','20 gp','1d10','slashing','6 lb.','heavy','reach','two-handed',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Greataxe','greataxe','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','30 gp','1d12','slashing','7 lb.','heavy','two-handed',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Greatsword','greatsword','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','50 gp','2d6','slashing','6 lb.','heavy','two-handed',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Halberd','halberd','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','20 gp','1d10','slashing','6 lb.','heavy','reach','two-handed',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Lance','lance','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 gp','1d12','piercing','6 lb.','reach','special',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Longsword','longsword','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','15 gp','1d8','slashing','3 lb.','versatile (1d10)',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Maul','maul','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 gp','2d6','bludgeoning','10 lb.','heavy','two-handed',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Morningstar','morningstar','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','15 gp','1d8','piercing','4 lb.',NULL,NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Pike','pike','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 gp','1d10','piercing','18 lb.','heavy','reach','two-handed',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Rapier','rapier','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','25 gp','1d8','piercing','2 lb.','finesse',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Scimitar','scimitar','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','25 gp','1d6','slashing','3 lb.','finesse','light',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Shortsword','shortsword','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 gp','1d6','piercing','2 lb.','finesse','light',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Trident','trident','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 gp','1d6','piercing','4 lb.','thrown (range 20/60)','versatile (1d8)',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('War pick','war-pick','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','5 gp','1d8','piercing','2 lb.',NULL,NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Warhammer','warhammer','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','15 gp','1d8','bludgeoning','2 lb.','versatile (1d10)',NULL,NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Whip','whip','Martial Melee Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','2 gp','1d4','slashing','3 lb.','finesse','reach',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Blowgun','blowgun','Martial Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 gp','1','piercing','1 lb.','ammunition (range 25/100)','loading',NULL,NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Crossbow, hand','crossbow-hand','Martial Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','75 gp','1d6','piercing','3 lb.','ammunition (range 30/120)','light','loading',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Crossbow, heavy','crossbow-heavy','Martial Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','50 gp','1d10','piercing','18 lb.','ammunition (range 100/400)','heavy','loading',NULL,'two-handed');
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Longbow','longbow','Martial Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','50 gp','1d8','piercing','2 lb.','ammunition (range 150/600)','heavy','two-handed',NULL,NULL);
INSERT INTO weapons_table(name,slug,category,document_slug,document_title,document_license_url,cost,damage_dice,damage_type,weight,properties0,properties1,properties2,properties,properties3) VALUES ('Net','net','Martial Ranged Weapons','wotc-srd','Systems Reference Document','http://open5e.com/legal','1 gp','0',NULL,'3 lb.','special','thrown (range 5/15)',NULL,NULL,NULL);


CREATE TABLE armortable(
   name                  VARCHAR(29) NOT NULL PRIMARY KEY
  ,slug                  VARCHAR(27) NOT NULL
  ,category              VARCHAR(13) NOT NULL
  ,document_slug         VARCHAR(8) NOT NULL
  ,document_title        VARCHAR(26) NOT NULL
  ,document_license_url  VARCHAR(23) NOT NULL
  ,ac_string             VARCHAR(32) NOT NULL
  ,strength_requirement  INTEGER 
  ,cost                  VARCHAR(7) NOT NULL
  ,weight                VARCHAR(30)
  ,stealth_disadvantage  VARCHAR(5) NOT NULL
);
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Unarmored','unarmored','No Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 + Dex modifier',NULL,'5 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Padded','padded','Light Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','11 + Dex modifier',NULL,'5 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Leather','leather','Light Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','11 + Dex modifier',NULL,'10 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Studded Leather','studded-leather','Light Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','12 + Dex modifier',NULL,'45 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Hide','hide','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','12 + Dex modifier (max 2)',NULL,'10 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Chain Shirt','chain-shirt','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','13 + Dex modifier (max 2)',NULL,'50 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Scale mail','scale-mail','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','14 + Dex modifier (max 2)',NULL,'50 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Breastplate','breastplate','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','14 + Dex modifier (max 2)',NULL,'400 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Half plate','half-plate','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','15 + Dex modifier (max 2)',NULL,'750 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Ring mail','ring-mail','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','14',NULL,'30 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Chain mail','chain-mail','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','16',13,'75 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Splint','splint','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','17',15,'200 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Plate Mail','plate-mail','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','18',15,'1500 gp',NULL,'true');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Mage Armor','mage-armor','Spell','wotc-srd','Systems Reference Document','http://open5e.com/legal','13 + Dex modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Unarmored Defense (Barbarian)','unarmored-defense-barbarian','Class Feature','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 + Dex modifier + Con modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Unarmored Defense (Monk)','unarmored-defense-monk','Class Feature','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 + Dex modifier + Wis modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Draconic Resilience','draconic-resilience','Class Feature','wotc-srd','Systems Reference Document','http://open5e.com/legal','13 + Dex modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armortable(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Shield','shield','Shield','wotc-srd','Systems Reference Document','http://open5e.com/legal','0 +2',NULL,'10 gp',NULL,'false');


CREATE TABLE skills (
  skill_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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
    feats TEXT,
    -- subrace int column?
    background TEXT,
    dexterity INT,
    strength INT,
    intelligence INT,
    constitution INT,
    wisdom INT,
    charisma INT
);

CREATE TABLE feats(
    feat_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    feat_name TEXT,
    feat_desc TEXT
);

INSERT INTO feats(feat_name, feat_desc)
VALUES
   ('Fey Ancestry', 'Advantage on saving throws against being charmed, and magic can''t put you to sleep.'),
   ('Sunlight Sensitivity', 'You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you,
   the target of the attack, or whatever you are trying to perceive is in direct sunlight.'),
   ('Unending Breath', 'You can hold your breath indefinitely while you''re not incapacitated.'),
   ('Earth Walk', 'You can move across difficult terrain made of earth or stone without expending extra movement.'),
   ('Fire Resistance', 'You have resistance to fire damage.'),
   ('Acid Resistance', 'You have resistance to acid damage.'),
   ('Amphibious', 'You can breathe air and water.'),
   ('Celestial Resistance', 'You have resisistance to necrotic and radiant damage'),
   ('Healing Hands', 'As an action, you can touch a creature and cause it to regain a number of hit points equal to your level.
   Once you use this trait, you can''t use it again until you finish a long rest.'),
   ('Stonecunning', 'Whenever you make an Intelligence (History) check related to the origin of stonework,
   you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'),
   ('Dwarven Resilience', 'You have advantage on saving throws against poison, and you have resistance against poison damage.'),
   ('Breath Weapon', 'You can use your action to exhale destructive energy.
   It deals damage in an area according to your ancestry.  When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry.
   The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one.
   The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level.
   After using your breath weapon, you cannot use it again until you complete a short or long rest.'),
   ('Draconic Ancestry', 'You are distantly related to a specific type of dragon.
   Whichever of the following you are related to, you have resistance to that damage type and your breath weapon deals that type of damage.
   Black = Acid
   Blue = Lightning
   Brass = Fire
   Bronze = Lightning
   Copper = Acid
   Gold = Fire
   Green = Poison
   Red = Fire
   Silver = Cold
   White = Cold'),
   ('Gnome Cunning', 'You have advantage on all Intelligence, Wisdom, and Charisma saves against magic.'),
   ('Relentless Endurance', 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can''t use this feature again until you finish a long rest.'),
   ('Savage Attacks', 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon''s damage dice one additional time and add it to the extra damage of the critical hit.'),
   ('Lucky', 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1.'),
   ('Brave', 'You have advantage on saving throws against being frightened.'),
   ('Nimble', 'You can move through the space of any creature that is of a size larger than yours.'),
   ('Feline Agility', 'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn.
   Once you use this trait, you can''t use it again until you move 0 feet on one of your turns.'),
   ('Cat''s Claws', 'Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes.
    If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.'),
   ('Flight', 'You have a flying speed of 50 feet. To use this speed, you can''t be wearing medium or heavy armor.'),
   ('Grovel, Cower, and Beg', 'As an action on your turn, you can cower pathetically to distract nearby foes.
   Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you.
   Once you use this trait, you can''t use it again until you finish a short or long rest.'),
   ('Pack Tactics', 'You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn''t incapacitated.');

CREATE TABLE character_feats (
  character_feats_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  character_id INTEGER,
  feat_id INTEGER,
  FOREIGN KEY (character_id) REFERENCES characters(character_id),
  FOREIGN KEY (feat_id) REFERENCES feats(feat_id)
); 

CREATE TABLE character_skills (
  character_skills_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  character_id INTEGER,
  skill_id INTEGER,
  bonus INTEGER, 
  FOREIGN KEY (character_id) REFERENCES characters(character_id),
  FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
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

INSERT INTO characters(
    user_id, 
    character_name, 
    experience, 
    class, 
    race, 
    background, 
    dexterity, 
    strength, 
    intelligence, 
    constitution, 
    wisdom,
    charisma)
    
    VALUES(
    '1', 
    'testclass', 
    'testrace', 
    'testbackground', 
    '10', '10', '10', '10', '10', '10');

-- CREATE TABLE proficiencies(
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY  ,
--     skill_id INT,
--     character_id INT,
--     FOREIGN KEY (character_id) REFERENCES characters(character_id),
--     FOREIGN KEY (skill_id) REFERENCES skills(skill_id),)
