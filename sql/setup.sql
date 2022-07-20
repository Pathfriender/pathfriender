DROP TABLE IF EXISTS character_feats CASCADE;
DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS feats CASCADE;
DROP TABLE IF EXISTS character_skills;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS weapons_table CASCADE;
DROP TABLE IF EXISTS armortable CASCADE;
DROP TABLE IF EXISTS proficiencies CASCADE
DROP TABLE IF EXISTS weapons_table CASCADE;
DROP TABLE IF EXISTS magic_items_table CASCADE;

CREATE TABLE magic_items_table(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   slug                VARCHAR(46) NOT NULL
  ,name                VARCHAR(46) NOT NULL
  ,type                VARCHAR(23) NOT NULL
  ,description         VARCHAR(8000) NOT NULL
  ,rarity              VARCHAR(22) NOT NULL
  ,requires_attunement VARCHAR(19)
  ,document_slug       VARCHAR(8) NOT NULL
  ,document_title      VARCHAR(26) NOT NULL
);
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('adamantine-armor','Adamantine Armor','Armor (medium or heavy)','This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you''re wearing it, any critical hit against you becomes a normal hit.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('amulet-of-health','Amulet of Health','Wondrous item','Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('amulet-of-proof-against-detection-and-location','Amulet of Proof against Detection and Location','Wondrous item','While wearing this amulet, you are hidden from divination magic. You can''t be targeted by such magic or perceived through magical scrying sensors.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('amulet-of-the-planes','Amulet of the Planes','Wondrous item','While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the _plane shift_ spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1-60, you travel to a random location on the plane you named. On a 61-100, you travel to a randomly determined plane of existence.','very rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('animated-shield','Animated Shield','Armor (shield)','While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.','very rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('apparatus-of-the-crab','Apparatus of the Crab','Wondrous item','This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.

The apparatus of the Crab is a Large object with the following statistics:

**Armor Class:** 20

**Hit Points:** 200

**Speed:** 30 ft., swim 30 ft. (or 0 ft. for both if the legs and tail aren''t extended)

**Damage Immunities:** poison, psychic

To be used as a vehicle, the apparatus requires one pilot. While the apparatus''s hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.

The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure.

A creature in the compartment can use an action to move as many as two of the apparatus''s levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of the Crab Levers table.

**Apparatus of the Crab Levers (table)**

| Lever | Up                                                                                                                               | Down                                                                                                                                        |
|-------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Legs and tail extend, allowing the apparatus to walk and swim.                                                                   | Legs and tail retract, reducing the apparatus''s speed to 0 and making it unable to benefit from bonuses to speed.                           |
| 2     | Forward window shutter opens.                                                                                                    | Forward window shutter closes.                                                                                                              |
| 3     | Side window shutters open (two per side).                                                                                        | Side window shutters close (two per side).                                                                                                  |
| 4     | Two claws extend from the front sides of the apparatus.                                                                          | The claws retract.                                                                                                                          |
| 5     | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: 7 (2d6) bludgeoning damage. | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: The target is grappled (escape DC 15). |
| 6     | The apparatus walks or swims forward.                                                                                            | The apparatus walks or swims backward.                                                                                                      |
| 7     | The apparatus turns 90 degrees left.                                                                                             | The apparatus turns 90 degrees right.                                                                                                       |
| 8     | Eyelike fixtures emit bright light in a 30-foot radius and dim light for an additional 30 feet.                                  | The light turns off.                                                                                                                        |
| 9     | The apparatus sinks as much as 20 feet in liquid.                                                                                | The apparatus rises up to 20 feet in liquid.                                                                                                |
| 10    | The rear hatch unseals and opens.                                                                                                | The rear hatch closes and seals.                                                                                                            |','legendary',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('armor-of-invulnerability','Armor of Invulnerability','Armor (plate)','You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can''t be used again until the next dawn.','legendary','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('armor-of-resistance','Armor of Resistance','Armor (light','You have resistance to one type of damage while you wear this armor. The GM chooses the type or determines it randomly from the options below.

| d10 | Damage Type |
|-----|-------------|
| 1   | Acid        |
| 2   | Cold        |
| 3   | Fire        |
| 4   | Force       |
| 5   | Lightning   |
| 6   | Necrotic    |
| 7   | Poison      |
| 8   | Psychic     |
| 9   | Radiant     |
| 10  | Thunder     |','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('armor-of-vulnerability','Armor of Vulnerability','Armor (plate)','While wearing this armor, you have resistance to one of the following damage types: bludgeoning, piercing, or slashing. The GM chooses the type or determines it randomly.

**_Curse_**. This armor is cursed, a fact that is revealed only when an _identify_ spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the _remove curse_ spell or similar magic; removing the armor fails to end the curse. While cursed, you have vulnerability to two of the three damage types associated with the armor (not the one to which it grants resistance).','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('arrow-catching-shield','Arrow-Catching Shield','Armor (shield)','You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield''s normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('arrow-of-slaying','Arrow of Slaying','Weapon (arrow)','An _arrow of slaying_ is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both _arrows of dragon slaying_ and _arrows of blue dragon slaying_. If a creature belonging to the type, race, or group associated with an _arrow of slaying_ takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.

Once an _arrow of slaying_ deals its extra damage to a creature, it becomes a nonmagical arrow.

Other types of magic ammunition of this kind exist, such as _bolts of slaying_ meant for a crossbow, though arrows are most common.','very rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bag-of-beans','Bag of Beans','Wondrous item','Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains.

If you dump the bag''s contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren''t being worn or carried.

If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. The GM can choose an effect from the following table, determine it randomly, or create an effect.

| d100  | Effect                                                                                                                                                                                                                                                                                                                                                                |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 01    | 5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.                                                                                      |
| 02-10 | A geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (GM''s choice) 30 feet into the air for 1d12 rounds.                                                                                                                                                                                                                                   |
| 11-20 | A treant sprouts. There''s a 50 percent chance that the treant is chaotic evil and attacks.                                                                                                                                                                                                                                                                            |
| 21-30 | An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours. |
| 31-40 | A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).                                                                                                                                                                                                                                                                       |
| 41-50 | 1d6 + 6 shriekers sprout                                                                                                                                                                                                                                                                                                                                              |
| 51-60 | 1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM''s choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke.                                                                                                                                                |
| 61-70 | A hungry bulette burrows up and attacks. 71-80 A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM''s choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.                                                                     |
| 81-90 | A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.                            |
| 91-99 | A pyramid with a 60-foot-square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord''s lair, and its sarcophagus contains treasure of the GM''s choice.                                                                                                                                                       |
| 100   | A giant beanstalk sprouts, growing to a height of the GM''s choice. The top leads where the GM chooses, such as to a great view, a cloud giant''s castle, or a different plane of existence.                                                                                                                                                                            |','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bag-of-devouring','Bag of Devouring','Wondrous item','This bag superficially resembles a _bag of holding_ but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.

The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn''t pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.

Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The GM determines the time and plane.

If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.','very rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bag-of-holding','Bag of Holding','Wondrous item','This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.

If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.

Placing a _bag of holding_ inside an extradimensional space created by a _handy haversack_, _portable hole_, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can''t be reopened.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bag-of-tricks','Bag of Tricks','Wondrous item','This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.

You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag''s color.

The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.

Once three fuzzy objects have been pulled from the bag, the bag can''t be used again until the next dawn.

**Gray Bag of Tricks (table)**

| d8 | Creature     |
|----|--------------|
| 1  | Weasel       |
| 2  | Giant rat    |
| 3  | Badger       |
| 4  | Boar         |
| 5  | Panther      |
| 6  | Giant badger |
| 7  | Dire wolf    |
| 8  | Giant elk    |

**Rust Bag of Tricks (table)**

| d8 | Creature   |
|----|------------|
| 1  | Rat        |
| 2  | Owl        |
| 3  | Mastiff    |
| 4  | Goat       |
| 5  | Giant goat |
| 6  | Giant boar |
| 7  | Lion       |
| 8  | Brown bear |

**Tan Bag of Tricks (table)**

| d8 | Creature     |
|----|--------------|
| 1  | Jackal       |
| 2  | Ape          |
| 3  | Baboon       |
| 4  | Axe beak     |
| 5  | Black bear   |
| 6  | Giant weasel |
| 7  | Giant hyena  |
| 8  | Tiger        |','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bead-of-force','Bead of Force','Wondrous item','This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 _beads of force_ are found together.

You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere''s wall. No attack or other effect can.

An enclosed creature can use its action to push against the sphere''s wall, moving the sphere up to half the creature''s walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('belt-of-dwarvenkind','Belt of Dwarvenkind','Wondrous item','While wearing this belt, you gain the following benefits:

* Your Constitution score increases by 2, to a maximum of 20.
* You have advantage on Charisma (Persuasion) checks made to interact with dwarves.

In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you''re capable of growing one, or a visibly thicker beard if you already have one.

If you aren''t a dwarf, you gain the following additional benefits while wearing the belt:

* You have advantage on saving throws against poison, and you have resistance against poison damage.
* You have darkvision out to a range of 60 feet.
* You can speak, read, and write Dwarvish.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('belt-of-giant-strength','Belt of Giant Strength','Wondrous item','While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt''s score, the item has no effect on you.

Six varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The _belt of stone giant strength_ and the _belt of frost giant strength_ look different, but they have the same effect.

| Type              | Strength | Rarity    |
|-------------------|----------|-----------|
| Hill giant        | 21       | Rare      |
| Stone/frost giant | 23       | Very rare |
| Fire giant        | 25       | Very rare |
| Cloud giant       | 27       | Legendary |
| Storm giant       | 29       | Legendary |','varies','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('berserker-axe','Berserker Axe','Weapon (any axe)','You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.

**_Curse_**. This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.

Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('boots-of-elvenkind','Boots of Elvenkind','Wondrous item','While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('boots-of-levitation','Boots of Levitation','Wondrous item','While you wear these boots, you can use an action to cast the _levitate_ spell on yourself at will.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('boots-of-speed','Boots of Speed','Wondrous item','While you wear these boots, you can use a bonus action and click the boots'' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.

When the boots'' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('boots-of-striding-and-springing','Boots of Striding and Springing','Wondrous item','While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn''t reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can''t jump farther than your remaining movement would allow.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('boots-of-the-winterlands','Boots of the Winterlands','Wondrous item','These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:

* You have resistance to cold damage.
* You ignore difficult terrain created by ice or snow.
* You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bowl-of-commanding-water-elementals','Bowl of Commanding Water Elementals','Wondrous item','While this bowl is filled with water, you can use an action to speak the bowl''s command word and summon a water elemental, as if you had cast the _conjure elemental_ spell. The bowl can''t be used this way again until the next dawn.

The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bracers-of-archery','Bracers of Archery','Wondrous item','While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('bracers-of-defense','Bracers of Defense','Wondrous item','While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('brazier-of-commanding-fire-elementals','Brazier of Commanding Fire Elementals','Wondrous item','While a fire burns in this brass brazier, you can use an action to speak the brazier''s command word and summon a fire elemental, as if you had cast the _conjure elemental_ spell. The brazier can''t be used this way again until the next dawn.

The brazier weighs 5 pounds.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('brooch-of-shielding','Brooch of Shielding','Wondrous item','While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the _magic missile_ spell.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('broom-of-flying','Broom of Flying','Wondrous item','This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.

You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('candle-of-invocation','Candle of Invocation','Wondrous item','This slender taper is dedicated to a deity and shares that deity''s alignment. The candle''s alignment can be detected with the _detect evil and good_ spell. The GM chooses the god and associated alignment or determines the alignment randomly.

| d20   | Alignment       |
|-------|-----------------|
| 1-2   | Chaotic evil    |
| 3-4   | Chaotic neutral |
| 5-7   | Chaotic good    |
| 8-9   | Neutral evil    |
| 10-11 | Neutral         |
| 12-13 | Neutral good    |
| 14-15 | Lawful evil     |
| 16-17 | Lawful neutral  |
| 18-20 | Lawful good     |

The candle''s magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle''s total burn time.

While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle''s can cast 1st* level spells he or she has prepared without expending spell slots, though the spell''s effect is as if cast with a 1st-level slot.

Alternatively, when you light the candle for the first time, you can cast the _gate_ spell with it. Doing so destroys the candle.','very rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cape-of-the-mountebank','Cape of the Mountebank','Wondrous item','This cape smells faintly of brimstone. While wearing it, you can use it to cast the _dimension door_ spell as an action. This property of the cape can''t be used again until the next dawn.

When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('carpet-of-flying','Carpet of Flying','Wondrous item','You can speak the carpet''s command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.

Four sizes of _carpet of flying_ exist. The GM chooses the size of a given carpet or determines it randomly.

| d100   | Size          | Capacity | Flying Speed |
|--------|---------------|----------|--------------|
| 01-20  | 3 ft. × 5 ft. | 200 lb.  | 80 feet      |
| 21-55  | 4 ft. × 6 ft. | 400 lb.  | 60 feet      |
| 56-80  | 5 ft. × 7 ft. | 600 lb.  | 40 feet      |
| 81-100 | 6 ft. × 9 ft. | 800 lb.  | 30 feet      |

A carpet can carry up to twice the weight shown on the table, but it flies at half speed if it carries more than its normal capacity.','very rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('censer-of-controlling-air-elementals','Censer of Controlling Air Elementals','Wondrous item','While incense is burning in this censer, you can use an action to speak the censer''s command word and summon an air elemental, as if you had cast the _conjure elemental_ spell. The censer can''t be used this way again until the next dawn.

This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('chime-of-opening','Chime of Opening','Wondrous item','This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can''t reach the object. If no locks or latches remain, the object itself opens.

The chime can be used ten times. After the tenth time, it cracks and becomes useless.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('circlet-of-blasting','Circlet of Blasting','Wondrous item','While wearing this circlet, you can use an action to cast the _scorching ray_ spell with it. When you make the spell''s attacks, you do so with an attack bonus of +5. The circlet can''t be used this way again until the next dawn.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cloak-of-arachnida','Cloak of Arachnida','Wondrous item','This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits:

* You have resistance to poison damage.
* You have a climbing speed equal to your walking speed.
* You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.
* You can''t be caught in webs of any sort and can move through webs as if they were difficult terrain.
* You can use an action to cast the _web_ spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can''t be used again until the next dawn.','very rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cloak-of-displacement','Cloak of Displacement','Wondrous item','While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cloak-of-elvenkind','Cloak of Elvenkind','Wondrous item','While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak''s color shifts to camouflage you. Pulling the hood up or down requires an action.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cloak-of-protection','Cloak of Protection','Wondrous item','You gain a +1 bonus to AC and saving throws while you wear this cloak.','uncommon','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cloak-of-the-bat','Cloak of the Bat','Wondrous item','While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak''s edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.

While wearing the cloak in an area of dim light or darkness, you can use your action to cast _polymorph_ on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can''t be used this way again until the next dawn.','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cloak-of-the-manta-ray','Cloak of the Manta Ray','Wondrous item','While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('crystal-ball','Crystal Ball','Wondrous item','The typical _crystal ball_, a very rare item, is about 6 inches in diameter. While touching it, you can cast the _scrying_ spell (save DC 17) with it.

The following _crystal ball_ variants are legendary items and have additional properties.

**_Crystal Ball of Mind Reading_**. You can use an action to cast the _detect thoughts_ spell (save DC 17) while you are scrying with the _crystal ball_, targeting creatures you can see within 30 feet of the spell''s sensor. You don''t need to concentrate on this _detect thoughts_ to maintain it during its duration, but it ends if _scrying_ ends.

**_Crystal Ball of Telepathy_**. While scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell''s sensor. You can also use an action to cast the _suggestion_ spell (save DC 17) through the sensor on one of those creatures. You don''t need to concentrate on this _suggestion_ to maintain it during its duration, but it ends if _scrying_ ends. Once used, the _suggestion_ power of the _crystal ball_ can''t be used again until the next dawn.

**_Crystal Ball of True Seeing_**. While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell''s sensor.','very rare or legendary','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cube-of-force','Cube of Force','Wondrous item','This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn.

You can use an action to press one of the cube''s faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube''s sixth face, or the cube runs out of charges. You can change the barrier''s effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration.

If your movement causes the barrier to come into contact with a solid object that can''t pass through the cube, you can''t move any closer to that object as long as the barrier remains.

**Cube of Force Faces (table)**

| Face | Charges | Effect                                                                                                            |
|------|---------|-------------------------------------------------------------------------------------------------------------------|
| 1    | 1       | Gases, wind, and fog can''t pass through the barrier.                                                              |
| 2    | 2       | Nonliving matter can''t pass through the barrier. Walls, floors, and ceilings can pass through at your discretion. |
| 3    | 3       | Living matter can''t pass through the barrier.                                                                     |
| 4    | 4       | Spell effects can''t pass through the barrier.                                                                     |
| 5    | 5       | Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.            |
| 6    | 0       | The barrier deactivates.                                                                                          |

The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.

| Spell or Item    | Charges Lost |
|------------------|--------------|
| Disintegrate     | 1d12         |
| Horn of blasting | 1d10         |
| Passwall         | 1d6          |
| Prismatic spray  | 1d20         |
| Wall of fire     | 1d4          |','rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('cubic-gate','Cubic Gate','Wondrous item','This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the GM.

You can use an action to press one side of the cube to cast the _gate_ spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the _plane shift_ spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.

The cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn.','legendary',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('dagger-of-venom','Dagger of Venom','Weapon (dagger)','You gain a +1 bonus to attack and damage rolls made with this magic weapon.

You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can''t be used this way again until the next dawn.','rare',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('dancing-sword','Dancing Sword','Weapon (any sword)','You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.

While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.

After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.','very rare','requires attunement','wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('decanter-of-endless-water','Decanter of Endless Water','Wondrous item','This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.

You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:

* "Stream" produces 1 gallon of water.
* "Fountain" produces 5 gallons of water.
* "Geyser" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn''t being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('deck-of-illusions','Deck of Illusions','Wondrous item','This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 - 1 cards.

The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.

An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent.

The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can''t be used again.

| Playing Card      | Illusion                         |
|-------------------|----------------------------------|
| Ace of hearts     | Red dragon                       |
| King of hearts    | Knight and four guards           |
| Queen of hearts   | Succubus or incubus              |
| Jack of hearts    | Druid                            |
| Ten of hearts     | Cloud giant                      |
| Nine of hearts    | Ettin                            |
| Eight of hearts   | Bugbear                          |
| Two of hearts     | Goblin                           |
| Ace of diamonds   | Beholder                         |
| King of diamonds  | Archmage and mage apprentice     |
| Queen of diamonds | Night hag                        |
| Jack of diamonds  | Assassin                         |
| Ten of diamonds   | Fire giant                       |
| Nine of diamonds  | Ogre mage                        |
| Eight of diamonds | Gnoll                            |
| Two of diamonds   | Kobold                           |
| Ace of spades     | Lich                             |
| King of spades    | Priest and two acolytes          |
| Queen of spades   | Medusa                           |
| Jack of spades    | Veteran                          |
| Ten of spades     | Frost giant                      |
| Nine of spades    | Troll                            |
| Eight of spades   | Hobgoblin                        |
| Two of spades     | Goblin                           |
| Ace of clubs      | Iron golem                       |
| King of clubs     | Bandit captain and three bandits |
| Queen of clubs    | Erinyes                          |
| Jack of clubs     | Berserker                        |
| Ten of clubs      | Hill giant                       |
| Nine of clubs     | Ogre                             |
| Eight of clubs    | Orc                              |
| Two of clubs      | Kobold                           |
| Jokers (2)        | You (the deck''s owner)           |','uncommon',NULL,'wotc-srd','Systems Reference Document');
INSERT INTO magic_items_table(slug,name,type,description,rarity,requires_attunement,document_slug,document_title) VALUES ('deck-of-many-things','Deck of Many Things','Wondrous item','Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.

Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.

Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.

| Playing Card       | Card        |
|--------------------|-------------|
| Ace of diamonds    | Vizier\*    |
| King of diamonds   | Sun         |
| Queen of diamonds  | Moon        |
| Jack of diamonds   | Star        |
| Two of diamonds    | Comet\*     |
| Ace of hearts      | The Fates\* |
| King of hearts     | Throne      |
| Queen of hearts    | Key         |
| Jack of hearts     | Knight      |
| Two of hearts      | Gem\*       |
| Ace of clubs       | Talons\*    |
| King of clubs      | The Void    |
| Queen of clubs     | Flames      |
| Jack of clubs      | Skull       |
| Two of clubs       | Idiot\*     |
| Ace of spades      | Donjon\*    |
| King of spades     | Ruin        |
| Queen of spades    | Euryale     |
| Jack of spades     | Rogue       |
| Two of spades      | Balance\*   |
| Joker (with TM)    | Fool\*      |
| Joker (without TM) | Jester      |

\*Found only in a deck with twenty-two cards

**_Balance_**. Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.

**_Comet_**. If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.

**_Donjon_**. You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can''t be located by any divination magic, but a _wish_ spell can reveal the location of your prison. You draw no more cards.

**_Euryale_**. The card''s medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.

**_The Fates_**. Reality''s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card''s magic as soon as you draw the card or at any other time before you die.

**_Flames_**. A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.

**_Fool_**. You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.

**_Gem_**. Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.

**_Idiot_**. Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.

**_Jester_**. You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.

**_Key_**. A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon.

**_Knight_**. You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.

**_Moon_**. You are granted the ability to cast the _wish_ spell 1d3 times.

**_Rogue_**. A nonplayer character of the GM''s choice becomes hostile toward you. The identity of your new enemy isn''t known until the NPC or someone else reveals it. Nothing less than a _wish_ spell or divine intervention can end the NPC''s hostility toward you.

**_Ruin_**. All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.

**_Skull_**. You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM''s choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can''t be restored to life.

#','legendary',NULL,'wotc-srd','Systems Reference Document');


CREATE TABLE weapons_table(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name                  VARCHAR(15) NOT NULL
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
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   name                  VARCHAR(29) NOT NULL
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
  FOREIGN KEY (character_id) REFERENCES characters(character_id) ON DELETE CASCADE,
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
    feats, 
    background,
    dexterity, 
    strength, 
    intelligence, 
    constitution, 
    wisdom,
    charisma)
    
    VALUES(
    '1', 
    'test', 
    '1',
    'barbarian',
    'gnome',
    '2',
    'urchin',
    '10', '10', '10', '10', '10', '10');

    INSERT INTO character_feats(
        character_id,
        feat_id
    )
    VALUES(
        '1',
        '2'
    );

-- CREATE TABLE proficiencies(
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY  ,
--     skill_id INT,
--     character_id INT,
--     FOREIGN KEY (character_id) REFERENCES characters(character_id),
--     FOREIGN KEY (skill_id) REFERENCES skills(skill_id),)
