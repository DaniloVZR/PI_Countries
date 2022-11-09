const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db.js');
const { getActivities } = require('../controllers/api.controller.js');

router.post('/', async(req, res) => {
  const{name, difficulty, duration, season, countryId} = req.body;
  const createActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    countryId
  });

  const countries = await Country.findAll({
    where: {id: countryId}
  })
  
  createActivity.addCountries(countries)
  return res.status(200).send(createActivity)
});

router.get('/', async(req, res) => {
  const activities = await getActivities();
  return res.status(200).send(activities)
});

module.exports = router;