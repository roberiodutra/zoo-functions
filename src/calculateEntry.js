const data = require('../data/zoo_data');

// Criei uma função que pega apenas os numeros(age) vindos do parametro(obj) e retorna um array
const toArray = (elem) => {
  const number = [];
  elem.map((obj) => {
    Object.keys(obj).map((key) => {
      if (typeof obj[key] === 'number') {
        number.push(obj[key]);
      }
      return number;
    });
  });
  return number;
};

// Aqui eu pego a função acima que retorna um array de numeros e faço a comparação de idades, armazenando os resultados e retorno um objeto com key e value como foi requisitado
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

module.exports = { calculateEntry, countEntrants };
