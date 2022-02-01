const data = require('../data/zoo_data');

const { employees, species } = data;

const elder = (specieId) => {
  let obj = {};
  let elderAge = 0;
  species.forEach((elem) => {
    if (elem.id === specieId) {
      elem.residents.reduce((_acc, curr) => {
        if (curr.age > elderAge) {
          elderAge = curr.age;
          obj = curr;
        }
        return obj;
      }, 0);
    }
  });
  return Object.values(obj);
};

function getOldestFromFirstSpecies(param) {
  let animalId = '';
  employees.forEach((elem) => {
    if (elem.id === param) {
      animalId = elem.responsibleFor[0];
    }
  });
  return elder(animalId);
}

module.exports = getOldestFromFirstSpecies;
