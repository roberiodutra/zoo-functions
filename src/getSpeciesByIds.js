const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = ids.map((elem) => data.species.find((specie) => elem === specie.id));
  return animals;
}

module.exports = getSpeciesByIds;
