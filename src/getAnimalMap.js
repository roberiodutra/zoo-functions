const data = require('../data/zoo_data');

const ObjSex = (options) => {
  const localSex = { NE: [], NW: [], SE: [], SW: [], };
  data.species.forEach((elem) => {
    const { location, name, residents } = elem;
    const resiSex = residents.filter(({ sex }) => sex === options.sex).map(({ name }) => name);

    if (options.sex && options.sorted) {
      return localSex[location].push({ [name]: resiSex.sort() });
    } else if (options.sex) {
      return localSex[location].push({ [name]: resiSex });
    }
  });
  return localSex;
}

const objNames = (options, sorted) => {
  const localName = { NE: [], NW: [], SE: [], SW: [], };
  data.species.forEach((elem) => {
    const { location, name, residents } = elem;
    const resiNames = residents.map(({ name }) => name);

    if (sorted) {
      return localName[location].push({ [name]: resiNames.sort() });
    } else if (options) {
      return localName[location].push({ [name]: resiNames });
    }
    return localName[location].push(name);
  });
  return localName;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames === true) {
    return objNames();
  } else if (options.sex) {
    return ObjSex(options);
  } else if (options.sorted) {
    return objNames(options, options.sorted);
  }
  return objNames(options);
}

module.exports = getAnimalMap;
