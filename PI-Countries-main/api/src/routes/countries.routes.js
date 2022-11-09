const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db.js');
const { getDbInfo } = require('../controllers/api.controller');

router.get('/', async (req, res) => {
  const { name } = req.query
  let totalCountries = await getDbInfo();

  if (name) {
    let countryName = await totalCountries.filter( el =>
      el.name.toLowerCase().includes(name.toLowerCase()))
      countryName.length ? res.status(200).send(countryName) : res.status(400).send('País no encontrado');
  } else {
    res.status(200).send(totalCountries);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params
  let totalCountries = await getDbInfo();
  
  if (id) {
    let countryId = await totalCountries.filter(el => el.id == id.toUpperCase());
    countryId.length ? res.status(200).send(countryId) : res.status(400).send('País no encontrado')
  };
});