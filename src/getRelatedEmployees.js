const data = require('../data/zoo_data');

function isManager(id) {
  // Busca se o ID está contido como manager de algum employee
  const bool = data.employees.find((elem) =>
    elem.managers.includes(id));
  return !!bool;
}

function getRelatedEmployees(managerId) {
  const arr = [];
  // Filtra todos os objetos que incluam como manager o ID fornecido
  const filter = data.employees.filter((elem) =>
    elem.managers.includes(managerId));
  // Mapeia e armazena em array os nomes dos employees salvos em $filter
  filter.map((elem) =>
    arr.push(`${elem.firstName} ${elem.lastName}`));

  // Checa se a função de fora retorna falso com o ID fornecido e gera um erro se falsa
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return arr;
}

module.exports = { isManager, getRelatedEmployees };
