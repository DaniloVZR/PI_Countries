const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db.js');
const { getDbInfo } = require('../controllers/api.controller.js');

router.get('/', async(req, res) => {
  const {name} = req.query
  let totalCountries = await getDbInfo();

  if (name) {
    let countryName = await totalCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
    if (countryName.length) {
      res.status(200).send(countryName);
    } else {
      res.status(400).send('Country not found');
    }
  } else {
    res.status(200).send(totalCountries);
  }
});

router.get('/:id', async(req, res) => {
  const {id} = req.params
  let totalCountries = await getDbInfo();
  if (id) {
    let countryId = await totalCountries.filter(el => el.id == id.toUpperCase());
    if (countryId.length ) {
      res.status(200).send(countryId)
    } else {
      res.status(400).send('Country not found');
    }
  }
});

module.exports = router;