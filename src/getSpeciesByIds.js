const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Um spread no parametro recebido, mapeia os valores e busca(find) nos dados(zoo_data) o animal que é compativel com o ID recebido pelo map.
  const animals = ids.map((elem) => data.species.find((specie) => elem === specie.id));
  return animals;
}

module.exports = getSpeciesByIds;
