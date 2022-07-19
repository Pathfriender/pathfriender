const { Router } = require('express');
const MagicItem = require('../models/Magic-item');

module.exports = Router()
  .get('/magic-item', async (req, res) => { 
    const magicItemData = await MagicItem.getRandomMagicItemsbyId(req.body.id);
    res.json(magicItemData);

  });

