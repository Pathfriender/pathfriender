const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/:id', async (req, res) => { 
    const data = await Character.getCharNameByUserId(req.params.id);
    res.json(data);

  })
  .post('/', async (req, res, next) => {
    try{
      const data = await Character.insert(req.body);
      res.json(data);
    } catch (e){
      next(e);
    }
  });

