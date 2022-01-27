const data = require('../data/zoo_data');

function getAnimalMap(options) {
  const area = ['NE', 'NW', 'SE', 'SW'];
  const local = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((elem) => {
    for(let i = 0; i < area.length; i += 1) {
      if (elem.location === area[i]) {
        local[area[i]].push(elem.name);
      }
    }
  });
  return local;
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
