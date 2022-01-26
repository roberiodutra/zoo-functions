const data = require('../data/zoo_data');

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

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
