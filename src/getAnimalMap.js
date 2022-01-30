const data = require('../data/zoo_data');

const objNames = (options, sorted, unisex) => {
  const local = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((elem) => {
    const { location, name, residents } = elem;
    const resiNames = residents.map(({ name }) => name);
    const resiSex = residents.filter(({ sex }) => sex === unisex).map(({ name }) => name);

    if (unisex && sorted) {
      return local[location].push({ [name]: resiSex.sort() });
    } else if (sorted) {
      return local[location].push({ [name]: resiNames.sort() });
    } else if (unisex) {
      return local[location].push({ [name]: resiSex });
    } else if (options) {
      return local[location].push({ [name]: resiNames });
    };
    return local[location].push(name);
  });
  return local;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames === true) {
    return objNames();
  } else if (options.sex) {
    return objNames(options, options.sorted, options.sex);
  } else if (options.sorted) {
    return objNames(options, options.sorted);
  } else if (options.includeNames) {
    return objNames(options);
  }
}

module.exports = getAnimalMap;

