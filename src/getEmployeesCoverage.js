const data = require('../data/zoo_data');

const { species, employees } = data;

const empId = (p) => {
  let str = '';
  if (p.id) {
    return p.id;
  }
  employees.forEach((elem) => {
    if (elem.firstName === p.name || elem.lastName === p.name) {
      str = elem.id;
    }
  })
  return str;
};

const empName = (p) => {
  let fullname = '';
  employees.find((elem) => {
    if (elem.id === p) {
      fullname = `${elem.firstName} ${elem.lastName}`;
    }
  })
  return fullname;
};

const empSpecies = (p, p2) => {
  const arrSpecies = [];
  const arrLocations = [];

  let aniIds = [];
  
  employees.forEach((elem) => {
    if (elem.id === p) {
      aniIds = elem.responsibleFor;
    }
  });

  aniIds.forEach((elem) => {
    species.forEach((animals) => {
      if (animals.id === elem) {
        arrSpecies.push(animals.name);
        arrLocations.push(animals.location);
      }
    });
  });

  if (p2) {
    return arrLocations;
  }
  return arrSpecies;
};

function getEmployeesCoverage(param) {
  if (!param) {
    return employees.map((elem) => {
      const empLists = {};
      empLists.id = elem.id;
      empLists.fullName = empName(elem.id);
      empLists.species = empSpecies(elem.id);
      empLists.locations = empSpecies(elem.id, true);
      return empLists;
    });
  }

  if (!empName(empId(param))) {
    throw new Error('Informações inválidas');
  }
  
  const empList = {
    id: empId(param),
    fullName: empName(empId(param)),
    species: empSpecies(empId(param)),
    locations: empSpecies(empId(param), true)
  };
  return empList;
}

module.exports = getEmployeesCoverage;
