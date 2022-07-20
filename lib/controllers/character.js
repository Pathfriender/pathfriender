const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/:id', async (req, res) => { 
    const data = await Character.getCharNameByUserId(req.params.id);
    res.json(data);

  })
  .delete('/:id', async(req, res, next) => {
    try {
      const data = await Character.deleteCharacter(req.character_name);
      res.json(data);
    } catch (e) {
      next (e);
    }
  })
  .post('/', async (req, res, next) => {
    try{
      const data = await Character.makeCharacter(req.body.user_id, req.body.character_name,);
      res.json(data);
    } catch (e){
      next(e);
    }
  });

