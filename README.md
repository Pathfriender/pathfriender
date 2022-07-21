Pathfriender, a Discord bot that allows you to track and create player characters in association with Discord accounts, roll dice, roll dice with advantage or disadvantage, track initiative, roll on loot tables, and see if there any beavers nearby in your campaign. 


DATABASE: 
character_feats: bridge table between characters and feats;
characters: Where the characters are tracked with an ID tied to the player;
feats: list of character feats;
skills: used to look up skill_stat; 
inventory: ties character_id with weapon_id, armor_id, and item_id;
items: item_name and type;
armor_table: linked to the inventory table and used for the loot function;
weapons_table: linked to the inventory table and used for the loot function;
magic_items_table: linked to the inventory table and used for the loot function;


Contributors: 
Ian Cheifetz
Thomas Harding
Khayman King