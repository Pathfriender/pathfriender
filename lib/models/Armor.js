const pool = require('../utils/pool');

module.exports = class Armor {
  id;
  slug;
  name;
  category;
  document_slug;
  document_title;
  document_license_url;
  ac_string;
  strength_requirement;
  cost;
  weight;
  stealth_disadvantage;
  
  constructor(row) {
    this.id = row.id;
    this.slug = row.slug;
    this.name = row.name;
    this.category = row.category;
    this.document_slug = row.document_slug;
    this.document_title = row.document_title;
    this.document_license_url = row.document_license_url;
    this.ac_string = row.ac_string;
    this.strength_requirement = row.strength_requirement;
    this.cost = row.cost;
    this.weight = row.weight;
    this.stealth_disadvantage = row.stealth_disadvantage;
  }

  static async getRandomArmorById(id) {
    const { rows } = await pool.query(
      `
          SELECT name
          FROM armortable
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

