DROP TABLE IF EXISTS armor_table CASCADE;
CREATE TABLE armor_table(
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
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Unarmored','unarmored','No Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 + Dex modifier',NULL,'5 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Padded','padded','Light Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','11 + Dex modifier',NULL,'5 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Leather','leather','Light Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','11 + Dex modifier',NULL,'10 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Studded Leather','studded-leather','Light Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','12 + Dex modifier',NULL,'45 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Hide','hide','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','12 + Dex modifier (max 2)',NULL,'10 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Chain Shirt','chain-shirt','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','13 + Dex modifier (max 2)',NULL,'50 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Scale mail','scale-mail','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','14 + Dex modifier (max 2)',NULL,'50 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Breastplate','breastplate','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','14 + Dex modifier (max 2)',NULL,'400 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Half plate','half-plate','Medium Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','15 + Dex modifier (max 2)',NULL,'750 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Ring mail','ring-mail','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','14',NULL,'30 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Chain mail','chain-mail','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','16',13,'75 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Splint','splint','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','17',15,'200 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Plate Mail','plate-mail','Heavy Armor','wotc-srd','Systems Reference Document','http://open5e.com/legal','18',15,'1500 gp',NULL,'true');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Mage Armor','mage-armor','Spell','wotc-srd','Systems Reference Document','http://open5e.com/legal','13 + Dex modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Unarmored Defense (Barbarian)','unarmored-defense-barbarian','Class Feature','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 + Dex modifier + Con modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Unarmored Defense (Monk)','unarmored-defense-monk','Class Feature','wotc-srd','Systems Reference Document','http://open5e.com/legal','10 + Dex modifier + Wis modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Draconic Resilience','draconic-resilience','Class Feature','wotc-srd','Systems Reference Document','http://open5e.com/legal','13 + Dex modifier',NULL,'0 gp',NULL,'false');
INSERT INTO armor_table(name,slug,category,document_slug,document_title,document_license_url,ac_string,strength_requirement,cost,weight,stealth_disadvantage) VALUES ('Shield','shield','Shield','wotc-srd','Systems Reference Document','http://open5e.com/legal','0 +2',NULL,'10 gp',NULL,'false');
