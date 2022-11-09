const {Country, Activity} = require('../db.js');
const axios = require('axios');

async function getInfo() {
  const url = await axios.get('https://restcountries.com/v3/all')
  const apiInfo = await url.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      continent: country.region,
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      population: country.population
    }
  });

  const save = () => {
    apiInfo.map(e => {
      Country.findOrCreate({
        where: {
          name: e.name,
          id: e.id
        },
        defaults: {
          continent: e.continent,
          flag: e.flag,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population
        },
      }).catch((error) => {console.log(error)})
    })
  }
  save();
  return apiInfo;
};

const getDbInfo = async () => {
  await getInfo();
  const aux = await Country.findAll({
    include: {
      model: Activity,
      attributes: ['name', 'difficulty', 'duration', 'season'],
      through: {
        attributes: [],
      }
    }
  })
  return aux;
};

const getActivities = async () => {
  const get = await Activity.findAll();
  return get;
}

module.exports = {
  getDbInfo,
  getActivities
};