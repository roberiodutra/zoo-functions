const data = require('../data/zoo_data');

function countAnimals(animal) {
  let obj = {};
  data.species.forEach((elem) => {
    Object.assign(obj, { [elem.name]: elem.residents.length });

    if (animal && animal.specie === elem.name) {
      obj = elem.residents.length;
    }
  });
  return obj;
}

module.exports = countAnimals;
