const pool = require('../utils/pool');

module.exports = class Feat {
  id;
  feat_name;
  feat_description;

  constructor(row) {
    this.id = row.id;
    this.feat_name = row.feat_name;
    this.feat_description = row.feat_description;
  }

  static async getFeat(characterId) {
    const { rows } = await pool.query(
      `
      SELECT f.feat_name
      FROM character_feats cf
      LEFT JOIN feats f
      ON f.feat_id = cf.feat_id
      WHERE character_id = $1`,
      [characterId]
    );
    return rows;
  }
};
