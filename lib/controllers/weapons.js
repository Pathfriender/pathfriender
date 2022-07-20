const { Router } = require('express');
const Weapon = require('../models/Weapon');

module.exports = Router()
  .get('/weapon', async (req, res) => { 
    const weaponData = await Weapon.getRandomWeaponById(req.body.id);
    res.json(weaponData);

  });

