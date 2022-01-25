const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Busca a specie utilizando o find.
  const findSpecie = data.species.find((elem) => elem.name === animal);
  // Mapeia a idade de todos os animais da specie encontrada acima e coloca em um array.
  const mapAge = findSpecie.residents.map((elem) => elem.age);
  // Compara se cada elemento do array acima, é maior ou igual ao parametro age.
  const isAge = mapAge.every((elem) => elem >= age);
  return isAge;
}

module.exports = getAnimalsOlderThan;
