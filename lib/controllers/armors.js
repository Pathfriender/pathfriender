const { Router } = require('express');
const Armor = require('../models/Armor');

module.exports = Router()
  .get('/armor', async (req, res) => { 
    const armorData = await Armor.getRandomArmorById(req.body.id);
    res.json(armorData);

  });

