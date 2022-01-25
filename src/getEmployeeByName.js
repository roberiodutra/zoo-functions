const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Busca pelo employee e armazema na variavel.
  const find = data.employees.find((elem) => elem.firstName === employeeName || elem.lastName === employeeName);
  
  return employeeName ? find : {};
}

module.exports = getEmployeeByName;
