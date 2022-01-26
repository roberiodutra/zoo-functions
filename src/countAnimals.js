const data = require('../data/zoo_data');

function countAnimals(animal) {
  let obj = {};

  // Para cada elemento das species, salva dentro do $obj, key e value com nome do elemento e quantidade de residents.
  data.species.forEach((elem) => {
    Object.assign(obj, { [elem.name]: elem.residents.length });

    // Se receber parametro e a specie for igual o elemento name, retorna quantidade de residentes do elemento especifico.
    if (animal && animal.specie === elem.name) {
      obj = elem.residents.length;
    }

    // Se receber parametro e existir a chave sex, retorna a quantidade de species com aquele genero.
    if (animal && animal.sex) {
      obj = data.species.find((elem) => elem.name === animal.specie)
        .residents.filter((gender) => gender.sex === animal.sex).length;
    }
  });
  return obj;
}

module.exports = countAnimals;
