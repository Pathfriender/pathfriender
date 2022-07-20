const { Router } = require('express');
const MagicItem = require('../models/Magic-Item');

module.exports = Router()
  .get('/magic-item', async (req, res) => { 
    const magicItemData = await MagicItem.getRandomMagicItemById(req.body.id);
    res.json(magicItemData);

  });

