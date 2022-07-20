const pool = require('../utils/pool');

module.exports = class Weapon {
  id;
  name;
  slug;
  category;
  document_slug;
  document_title;
  document_license_url;
  cost;
  damage_dice;
  damage_type;
  weight;
  properties0;
  properties1;
  properties2;
  properties;
  properties3;
  
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.slug = row.slug;
    this.category = row.category;
    this.document_slug = row.document_slug;
    this.document_title = row.document_title;
    this.document_license_url = row.document_license_url;
    this.cost = row.cost;
    this.damage_dice = row.damage_dice;
    this.damage_type = row.damage_type;
    this.weight = row.weight;
    this.properties0 = row.properties0;
    this.properties1 = row.properties1;
    this.properties2 = row.properties2;
    this.properties = row.properties;
    this.properties3 = row.properties3;
  }

  static async getRandomWeaponById(id) {
    const { rows } = await pool.query(
      `
          SELECT name
          FROM weapons_table
          WHERE id IN ($1)
          ORDER BY RANDOM()
      `,
      [id]
    );
    if (rows && rows.length > 0) {
      return rows[0].name;
    }
    return null;
  }
};

