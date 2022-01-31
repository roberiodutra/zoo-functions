const data = require('../data/zoo_data');

const ObjSex = (options) => {
  const localSex = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((elem) => {
    const { location, residents } = elem;
    const resiSex = residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name);

    if (options.sex && options.sorted) {
      return localSex[location].push({ [elem.name]: resiSex.sort() });
    }
    if (options.sex) {
      return localSex[location].push({ [elem.name]: resiSex });
    }
  });
  return localSex;
};

const objNames = (options, sorted) => {
  const localName = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((elem) => {
    const { location, residents } = elem;
    const resiNames = residents.map(({ name }) => name);

    if (sorted) {
      return localName[location].push({ [elem.name]: resiNames.sort() });
    }
    if (options) {
      return localName[location].push({ [elem.name]: resiNames });
    }
    return localName[location].push(elem.name);
  });
  return localName;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return objNames();
  }
  if (options.sex) {
    return ObjSex(options);
  }
  if (options.sorted) {
    return objNames(options, options.sorted);
  }
  return objNames(options);
}

module.exports = getAnimalMap;
