const data = require('../data/zoo_data');
const { employees, species } = data;

const elder = (specieId) => {
  let obj = {};
  species.forEach((elem) => {
    if (elem.id === specieId) {
      elem.residents.reduce((acc, curr) => {
        if (curr.age > acc) {
          acc = curr.age
          obj = curr;
        }
        return acc;
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
