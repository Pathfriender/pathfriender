const pool = require('../utils/pool');

module.exports = class MagicItem {
  id;
  slug;
  name;
  type;
  description;
  rarity;
  requires_attunement;
  document_slug;
  document_title;
  
  constructor(row) {
    this.id = row.id;
    this.slug = row.slug;
    this.name = row.name;
    this.type = row.type;
    this.description = row.description;
    this.rarity = row.rarity;
    this.requires_attunement = row.requires_attunement;
    this.document_slug = row.document_slug;
    this.document_title = row.document_title;
  }

  static async getRandomMagicItemById(id) {
    const { rows } = await pool.query(
      `
          SELECT name
          FROM magic_items_table
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

