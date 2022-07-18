const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/:id', async (req, res) => { 
    const data = await Character.getCharNameByUserId(req.params.id);
    res.json(data);
  });



