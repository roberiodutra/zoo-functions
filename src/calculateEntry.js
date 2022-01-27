const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const toArray = (elem) => {
  const number = [];
  elem.map(function(obj) {
    return Object.keys(obj).map(function(key) {
        if (typeof obj[key] === 'number') {
          number.push(obj[key]);
        }
    });
  });
  return number;
}

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  toArray(entrants).forEach((elem) => {
    if (elem < 18) {
      child += 1;
    } else if (elem >= 18 && elem < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { adult, child, senior };
}

function calculateEntry(entrants = 0) {
  // Salva a tabela de preços em um array, baseado na ordem de retorno da função countEntrants
  let total = 0;
  const prices = [data.prices.adult, data.prices.child, data.prices.senior];

  // Sem parametro retorna 0
  if (Object.entries(entrants).length === 0) {
    return 0;
  }

  // Pega os valores da função countEntrants e multiplica pelos valores do array prices que ja foi organizado por faixa etaria.
  Object.values(countEntrants(entrants)).forEach((elem, index) => {
    total += elem * prices[index];
  });
  return total;
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
